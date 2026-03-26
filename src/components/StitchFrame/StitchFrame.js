import './StitchFrame.css'
import { useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { stitchPages, stitchSourceToRoute } from '../../utils/pageRegistry'

function StitchFrame({ html, title }) {
  const location = useLocation()
  const navigate = useNavigate()
  const frameRef = useRef(null)

  const currentIndex = useMemo(
    () => stitchPages.findIndex((page) => page.path === location.pathname),
    [location.pathname],
  )

  const currentPage = currentIndex >= 0 ? stitchPages[currentIndex] : null
  const prevPage = currentIndex > 0 ? stitchPages[currentIndex - 1] : null
  const nextPage = currentIndex >= 0 && currentIndex < stitchPages.length - 1 ? stitchPages[currentIndex + 1] : null

  function normalizeText(text) {
    return (text || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
  }

  function guessRouteFromLabel(label) {
    const normalized = normalizeText(label)
    const labelMap = {
      'dang nhap': '/login',
      'dang ky': '/register',
      'kham pha': '/discover-vi',
      'thong ke': '/statistics',
      'cong dong': '/community',
      'ho so': '/profile',
      'cap nhat ho so': '/profile',
      'quen mat khau': '/forgot-password',
      'bai hoc': '/topic-selection',
      'bang dieu khien': '/home-vi',
      'trang chu': '/home-vi',
    }

    return Object.entries(labelMap).find(([key]) => normalized.includes(key))?.[1] || null
  }

  function routeFromHref(href) {
    if (!href) return null
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return null

    const folderMatch = href.match(/stitch\/([^/]+)\/code\.html|([^/]+)\/code\.html/)
    if (folderMatch) {
      const folderName = folderMatch[1] || folderMatch[2]
      return stitchSourceToRoute[folderName] || null
    }

    return null
  }

  function wireIframeLinks() {
    const iframe = frameRef.current
    if (!iframe) return

    let doc
    try {
      doc = iframe.contentDocument || iframe.contentWindow?.document
    } catch {
      return
    }

    if (!doc) return

    const anchors = doc.querySelectorAll('a[href]')
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href') || ''
      const labelRoute = href === '#' ? guessRouteFromLabel(anchor.textContent || '') : null
      const hrefRoute = routeFromHref(href)
      const targetRoute = labelRoute || hrefRoute

      if (!targetRoute) return

      anchor.setAttribute('href', targetRoute)
      anchor.addEventListener('click', (event) => {
        event.preventDefault()
        navigate(targetRoute)
      })
    })
  }

  return (
    <section className="stitch-frame-wrap">
      <div className="stitch-nav">
        <button
          className="stitch-nav-btn"
          disabled={!prevPage}
          onClick={() => prevPage && navigate(prevPage.path)}
          type="button"
        >
          Previous
        </button>
        <select
          className="stitch-nav-select"
          onChange={(event) => navigate(event.target.value)}
          value={currentPage?.path || ''}
        >
          {stitchPages.map((page) => (
            <option key={page.path} value={page.path}>
              {page.title}
            </option>
          ))}
        </select>
        <button
          className="stitch-nav-btn"
          disabled={!nextPage}
          onClick={() => nextPage && navigate(nextPage.path)}
          type="button"
        >
          Next
        </button>
      </div>
      <iframe className="stitch-frame" onLoad={wireIframeLinks} ref={frameRef} srcDoc={html} title={title} />
    </section>
  )
}

export default StitchFrame
