import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const defaultLinks = [
  { path: '/', label: 'Bảng điều khiển', icon: 'dashboard' },
  { path: '/statistics', label: 'Thống kê', icon: 'bar_chart' },
  { path: '/topic-selection', label: 'Bài học', icon: 'school' },
  { path: '/discover-vi', label: 'Từ vựng', icon: 'menu_book' },
  { path: '/community', label: 'Cộng đồng', icon: 'group' },
]

const bottomLinks = [
  { path: '/profile', label: 'Cài đặt', icon: 'settings' },
  { path: '/forgot-password', label: 'Trợ giúp', icon: 'help' },
]

export default function Sidebar({ links = defaultLinks, bottom = bottomLinks, showUpgrade = false }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>Linguist Pro</h2>
        <p>Học tập không giới hạn</p>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      {showUpgrade && (
        <div className="sidebar-upgrade">
          <span className="label">PRO PLAN</span>
          <p>Nâng cấp để trải nghiệm đầy đủ</p>
          <button>Nâng cấp Premium</button>
        </div>
      )}

      <div className="sidebar-bottom">
        {bottom.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}
