import { Link } from 'react-router-dom'
import { stitchPages } from '../../utils/pageRegistry'
import './Home.css'

function Home() {
  return (
    <section className="page-card home">
      <h1 className="page-title">Linguist Pro React App</h1>
      <p className="page-subtitle">Du an da duoc to chuc lai theo cau truc my-react-app voi ReactJS + CSS.</p>

      <div className="home-grid">
        {stitchPages.slice(0, 10).map((page) => (
          <Link key={page.path} to={page.path} className="home-card">
            <h3>{page.title}</h3>
            <p>Nguon tu: {page.source}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
