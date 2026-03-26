import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import './MainLayout.css'

const authPaths = ['/login', '/login-v1', '/register', '/forgot-password']
const publicPaths = ['/landing']

const publicNavLinks = [
  { path: '/', label: 'Trang chủ' },
  { path: '/discover-vi', label: 'Khóa học' },
  { path: '/community', label: 'Lộ trình' },
]

function MainLayout() {
  const location = useLocation()
  const isAuth = authPaths.includes(location.pathname)
  const isPublic = publicPaths.includes(location.pathname)
  const isDashboard = !isAuth && !isPublic

  return (
    <div className="app-layout">
      {isAuth && (
        <>
          <Navbar links={[]} showCta={false} />
          <main className="auth-main">
            <Outlet />
          </main>
          <footer className="layout-footer">
            © 2024 Linguist Pro. Bản quyền được bảo lưu.
          </footer>
        </>
      )}
      {isPublic && (
        <>
          <Navbar links={publicNavLinks} showCta={true} />
          <main className="public-main">
            <Outlet />
          </main>
          <footer className="layout-footer">
            <div className="footer-inner">
              <div className="footer-brand">
                <strong>Linguist Pro</strong>
                <span>© 2024 LucidEducator. Bản quyền được bảo lưu.</span>
              </div>
              <div className="footer-links">
                <a href="#terms">Điều khoản</a>
                <a href="#privacy">Bảo mật</a>
                <a href="#help">Hỗ trợ</a>
              </div>
            </div>
          </footer>
        </>
      )}
      {isDashboard && (
        <div className="dashboard-layout">
          <Sidebar showUpgrade={false} />
          <div className="dashboard-content">
            <Navbar showSearch={true} showBrand={false} />
            <main className="dashboard-main">
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainLayout
