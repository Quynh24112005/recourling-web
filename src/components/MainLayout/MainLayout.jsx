import React from 'react';
import './MainLayout.css';

export default function MainLayout({ title, children }) {
  return (
    <div className="main-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo">Linguist Pro</h1>
          <p className="tagline">Học tập không giới hạn</p>
        </div>

        <nav className="sidebar-nav">
          <a href="/" className="nav-item active">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Bảng điều khiển</span>
          </a>
          <a href="/statistics" className="nav-item">
            <span className="material-symbols-outlined">leaderboard</span>
            <span>Thống kê</span>
          </a>
          <a href="/discover" className="nav-item">
            <span className="material-symbols-outlined">school</span>
            <span>Bài học</span>
          </a>
          <a href="/vocabulary" className="nav-item">
            <span className="material-symbols-outlined">menu_book</span>
            <span>Từ vựng</span>
          </a>
          <a href="/community" className="nav-item">
            <span className="material-symbols-outlined">group</span>
            <span>Cộng đồng</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="/settings" className="nav-item">
            <span className="material-symbols-outlined">settings</span>
            <span>Cài đặt</span>
          </a>
          <a href="/help" className="nav-item">
            <span className="material-symbols-outlined">help</span>
            <span>Trợ giúp</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="search-container">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Tìm kiếm bài học..." />
          </div>

          <div className="header-actions">
            <button className="learn-btn">
              <span className="material-symbols-outlined">translate</span>
              <span>Học ngay</span>
            </button>
            <span className="material-symbols-outlined">notifications</span>
            <div className="avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAplUCjBm4ZpfrXbXXeTyIIuRjT-y3ml4RKjdl4zlb0QAWs4YDKZHAFSzE9Iqi0CxsuoogvYeS8lAtfpYk9kppMmAf83UzF84LMA9REmdsQ3NRGLfJzmfLSHT4s1iIap5q3AMyoFWvd8OjjU39YC1YCfJm4r-bMZr2pad5EklXCgCeCtSmOg3aG9-q0myWpsLHjp5tHcCUMh9sYo8xzuCbR288V9Knon2_z18dA89wsKvoi2ZZvnmdohyzAvA4K7tq97xst5v84ENo"
                alt="Avatar"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {title && <h1 className="page-title">{title}</h1>}
          {children}
        </div>
      </main>

      {/* FAB */}
      <button className="fab">
        <span className="material-symbols-outlined filled">mic</span>
      </button>
    </div>
  );
}
