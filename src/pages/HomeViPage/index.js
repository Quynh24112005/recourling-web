import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeViPage.css'

const units = [
  { id: 1, title: 'Do an & do uong', icon: 'restaurant', progress: 70, color: 'orange' },
  { id: 2, title: 'Quan ao', icon: 'checkroom', progress: 50, color: 'blue' },
  { id: 3, title: 'Do gia dung', icon: 'home_filled', progress: 30, color: 'purple' },
  { id: 4, title: 'Hoat dong hang ngay', icon: 'fitness_center', progress: 20, color: 'green' },
  { id: 5, title: 'Do an & do uong', icon: 'local_bar', progress: 10, color: 'red' },
  { id: 6, title: 'Do an & do uong', icon: 'bakery_dining', progress: 70, color: 'indigo' },
]

export default function HomeViPage() {
  const [activeMode, setActiveMode] = useState('dysathria')

  return (
    <div className="stitch-home">
      <section className="stitch-hero-grid">
        <article className="stitch-welcome-card">
          <div className="stitch-welcome-content">
            <p className="stitch-welcome-label">CHAO MUNG TRO LAI!</p>
            <h2>Hom nay toi co the giup gi cho ban?</h2>
            <button className="stitch-start-btn" type="button">Bat dau hoc</button>
          </div>
          <div className="stitch-welcome-icon">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
        </article>

        <article className="stitch-progress-card">
          <div className="stitch-progress-circle">
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <circle cx="64" cy="64" r="56" fill="none" stroke="rgba(255, 238, 248, 0.18)" strokeWidth="8" />
              <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="351.8" strokeDashoffset="105.5" />
            </svg>
            <span>70%</span>
          </div>
          <h3>Tien do hang ngay</h3>
          <p>Ban dang lam rat tot! Chi con 30% nua de dat muc tieu.</p>
        </article>
      </section>

      <section className="stitch-mode">
        <div className="stitch-mode-head">
          <h3>Che do luyen tap</h3>
          <span>Tuy chinh theo nhu cau cua ban</span>
        </div>
        <div className="stitch-mode-buttons">
          <button type="button" className={activeMode === 'dysathria' ? 'active' : ''} onClick={() => setActiveMode('dysathria')}>Dysathria</button>
          <button type="button" className={activeMode === 'broca' ? 'active' : ''} onClick={() => setActiveMode('broca')}>Broca</button>
          <button type="button" className={activeMode === 'wernicke' ? 'active' : ''} onClick={() => setActiveMode('wernicke')}>Wernicke</button>
        </div>
      </section>

      <section className="stitch-units">
        <div className="stitch-units-head">
          <h3>Cac bai hoc gan day</h3>
          <Link to="/discover-vi" className="stitch-view-all">
            Xem tat ca
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="stitch-units-grid">
          {units.map((unit) => (
            <article key={unit.id} className="stitch-unit-card">
              <div className="stitch-unit-top">
                <div className={`stitch-unit-icon icon-${unit.color}`}>
                  <span className="material-symbols-outlined">{unit.icon}</span>
                </div>
                <span className="stitch-unit-code">UNIT {String(unit.id).padStart(2, '0')}</span>
              </div>
              <h4>{unit.title}</h4>
              <div className="stitch-unit-meta">
                <span>Tien do</span>
                <span>{unit.progress}%</span>
              </div>
              <div className="stitch-bar-bg">
                <div className={`stitch-bar-fill bar-${unit.color}`} style={{ width: `${unit.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <button className="stitch-fab" type="button" aria-label="Mic">
        <span className="material-symbols-outlined">mic</span>
      </button>
    </div>
  )
}
