import React from 'react'
import { Link } from 'react-router-dom'
import './DiscoverViPage.css'

const courses = [
  { id: 1, title: 'Tieng Anh giao tiep', desc: 'Lam chu cac tinh huong trong cong viec va du lich.', tag: 'Thanh thao', rating: '4.9' },
  { id: 2, title: 'Tieng Han co ban', desc: 'Hoc bang chu cai Hangeul va cach chao hoi can ban.', tag: 'Nguoi moi', rating: '4.8' },
]

const posts = [
  { id: 1, name: 'Minh Anh', time: '2 phut truoc', text: 'Hom nay minh da hoan thanh thu thach 30 ngay hoc tieng Anh!', like: 24, comment: 5 },
  { id: 2, name: 'Quoc Bao', time: '15 phut truoc', text: 'Can tim ban cung luyen noi TOPIK 2A. Ai can inbox nhe!', like: 12, comment: 8 },
]

const leaders = [
  { id: 1, name: 'Lan Huong', pts: '2,450' },
  { id: 2, name: 'Tung Duong', pts: '2,100' },
  { id: 3, name: 'Mai Hoa', pts: '1,980' },
]

export default function DiscoverViPage() {
  return (
    <div className="discover-vi-page">
      <section className="discover-hero">
        <div className="discover-hero-content">
          <span className="discover-pill">MOI NHAT</span>
          <h1>Hanh trinh hoc tap moi cua ban</h1>
          <p>Kham pha phuong phap hoc ngon ngu theo phong cach bien tap chuyen nghiep. Hieu qua va day cam hung.</p>
          <button className="discover-primary-btn" type="button">
            Tiep tuc hanh trinh
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="discover-hero-image">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvkteSx2WVCBuHugYzhLG1cw-Re7z_zuSEBJ5tkae5LSFCI2JP6lIlddWXuj5-XyWPSZLXgGx_R5OFxBn1_EZ6Z7w_crbucqSdspHAu0fY3KYvvaA1XHkSka6AIYcsBEHxqW6Tp3J7-zR4prfWoyk8W-57N6dPReFuEnpMeNBOFjEeYRzg_rcwdonERffoNTBAgHaRDf64XE3tcHlwEI6QmH56GP6rK7FhR0faSdEWgYv9dzOffYRyLzylgWiXuT5HBW93GJ2SC5k"
            alt="hero"
          />
        </div>
      </section>

      <section className="discover-grid">
        <div className="discover-main-column">
          <div className="section-head">
            <h2>Khoa hoc danh cho ban</h2>
            <Link to="/topic-selection">Xem tat ca</Link>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article key={course.id} className="course-card">
                <div className="course-cover">
                  <span className="course-badge">{course.tag}</span>
                </div>
                <div className="course-body">
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <div className="course-meta">
                    <span className="material-symbols-outlined">group</span>
                    <strong>{course.rating}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="group-card">
            <div className="group-thumb">Community</div>
            <div className="group-body">
              <span className="group-kicker">
                <span className="material-symbols-outlined">groups</span>
                HOC NHOM
              </span>
              <h3>Cau lac bo luyen noi moi toi</h3>
              <p>Tham gia cung hang nghin hoc vien de thuc hanh phan xa tu nhien theo tinh huong.</p>
              <button type="button">Tham gia ngay</button>
            </div>
          </article>
        </div>

        <aside className="discover-side-column">
          <section className="side-card">
            <div className="section-head section-head-tight">
              <h3>Cong dong</h3>
              <span>Moi nhat</span>
            </div>
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                <div className="post-avatar">{post.name.slice(0, 1)}</div>
                <div className="post-content">
                  <div className="post-top">
                    <strong>{post.name}</strong>
                    <small>{post.time}</small>
                  </div>
                  <p>{post.text}</p>
                  <div className="post-stats">
                    <span>{post.like}</span>
                    <span>{post.comment}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="side-card leaderboard-card">
            <h3>Bang xep hang tuan</h3>
            {leaders.map((item) => (
              <div key={item.id} className="leader-row">
                <span>{item.id}.</span>
                <strong>{item.name}</strong>
                <span>{item.pts} pts</span>
              </div>
            ))}
          </section>
        </aside>
      </section>

      <button className="discover-chat-fab" type="button" aria-label="chat">
        <span className="material-symbols-outlined">chat</span>
      </button>
    </div>
  )
}