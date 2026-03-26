import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { stitchPages } from '../../utils/pageRegistry'
import './GenericPage.css'

function GenericPage() {
  const { pathname } = useLocation()

  const page = useMemo(() => stitchPages.find((item) => item.path === pathname), [pathname])

  if (!page) {
    return (
      <section className="page-card generic">
        <h1 className="page-title">Trang khong ton tai</h1>
      </section>
    )
  }

  return (
    <section className="page-card generic">
      <div className="generic-head">
        <div>
          <h1 className="page-title">{page.title}</h1>
          <p className="page-subtitle">Duoc chuyen doi tu thu muc {page.source} trong stitch_combine_words.</p>
        </div>
        <span className="generic-badge">stitch page</span>
      </div>

      <div className="generic-grid">
        <article className="generic-item">
          <h3>Route hien tai</h3>
          <p>{page.path}</p>
        </article>
        <article className="generic-item">
          <h3>Ket noi du lieu</h3>
          <p>Su dung services/api.js va cac class theo Database Schema de call backend.</p>
        </article>
        <article className="generic-item">
          <h3>Tai su dung</h3>
          <p>Layout, Navbar, Button va CSS global giup dong bo giao dien toan bo app.</p>
        </article>
      </div>

      <div style={{ marginTop: '16px' }}>
        <Button variant="ghost">Bat dau bai tap</Button>
      </div>
    </section>
  )
}

export default GenericPage
