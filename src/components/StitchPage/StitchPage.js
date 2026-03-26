import React from 'react'
import './StitchPage.css'

const sampleCards = [
  { title: 'Bai hoc moi', meta: 'Cap nhat hom nay', icon: 'auto_stories' },
  { title: 'Tien do', meta: 'Dang dat 70%', icon: 'monitoring' },
  { title: 'Muc tieu', meta: '3 buoi / tuan', icon: 'target' },
]

export default function StitchPage({ title, subtitle }) {
  return (
    <div className="stitch-page">
      <header className="stitch-page-hero">
        <div>
          <p className="stitch-page-kicker">LINGUIST PRO</p>
          <h2>{title}</h2>
          <p className="stitch-page-subtitle">{subtitle}</p>
        </div>
        <span className="material-symbols-outlined">diamond</span>
      </header>

      <section className="stitch-page-grid">
        {sampleCards.map((card) => (
          <article className="stitch-page-card" key={card.title}>
            <span className="material-symbols-outlined">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.meta}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
