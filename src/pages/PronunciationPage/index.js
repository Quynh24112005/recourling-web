import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PronunciationPage() {
  const [recording, setRecording] = useState(false);
  const syllables = [
    { text: 'Toi', status: 'correct' },
    { text: 'muon', status: 'correct' },
    { text: 'an', status: 'wrong' },
    { text: 'com', status: 'pending' },
  ];

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">LUYEN PHAT AM</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '50%' }}></div></div>

      <h1 className="exercise-title">Luyen phat am theo am tiet</h1>
      <p className="exercise-desc">Phat am chinh xac tung am tiet trong cau</p>

      <div className="exercise-content">
        <div className="syllable-dots">
          {syllables.map((s, i) => (
            <div key={i} className="syllable-item">
              <div className={`syllable-dot ${s.status}`}></div>
              <span className={`syllable-text${s.status === 'pending' ? ' dimmed' : ''}`}>{s.text}</span>
            </div>
          ))}
        </div>

        <div className="exercise-center-block exercise-center-block--spaced">
          <button className={`mic-record-btn${recording ? ' recording' : ''}`} onClick={() => setRecording(!recording)}>
            <span className="material-symbols-outlined mic-icon">{recording ? 'stop' : 'mic'}</span>
          </button>
          <p className="mic-hint">{recording ? 'Dang nghe...' : 'Bam de bat dau phat am'}</p>
        </div>

        <div className="analysis-cards">
          <div className="analysis-card">
            <h5>Cao do</h5>
            <svg viewBox="0 0 60 30" width="60" height="30"><path d="M0 25 Q15 5 30 15 Q45 25 60 10" fill="none" stroke="var(--primary)" strokeWidth="2"/></svg>
            <p className="result">Kha tot</p>
          </div>
          <div className="analysis-card">
            <h5>Nhip dieu</h5>
            <svg viewBox="0 0 60 30" width="60" height="30"><rect x="2" y="10" width="8" height="20" fill="var(--primary)" rx="2"/><rect x="14" y="5" width="8" height="25" fill="var(--primary)" rx="2"/><rect x="26" y="15" width="8" height="15" fill="var(--primary)" rx="2"/><rect x="38" y="8" width="8" height="22" fill="var(--primary)" rx="2"/><rect x="50" y="12" width="8" height="18" fill="var(--primary)" rx="2"/></svg>
            <p className="result">On dinh</p>
          </div>
          <div className="analysis-card">
            <h5>Do ro</h5>
            <div className="analysis-donut-wrap">
              <svg viewBox="0 0 50 50" width="50" height="50"><circle cx="25" cy="25" r="20" fill="none" stroke="var(--surface-container)" strokeWidth="5"/><circle cx="25" cy="25" r="20" fill="none" stroke="var(--tertiary)" strokeWidth="5" strokeDasharray="125.6" strokeDashoffset="37.7" strokeLinecap="round" transform="rotate(-90 25 25)"/></svg>
              <span className="analysis-donut-label">70%</span>
            </div>
            <p className="result">70%</p>
          </div>
        </div>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">Bo qua</button>
        <Link to="/topic-selection" className="btn-next">Tiep tuc</Link>
      </div>
    </div>
  );
}