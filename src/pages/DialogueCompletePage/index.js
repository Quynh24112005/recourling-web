import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DialogueCompletePage() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">HOAN THANH CHO TRONG</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '60%' }}></div></div>

      <h1 className="exercise-title">Hoan thanh cho trong</h1>
      <p className="exercise-desc">Nghe doan hoi thoai va dien tu con thieu vao cho trong.</p>

      <div className="exercise-content">
        <div className="exercise-center-block">
          <button className="mic-record-btn mic-listen">
            <span className="material-symbols-outlined mic-icon-sm">volume_up</span>
          </button>
        </div>
        <div className="dialogue-block">
          <p className="dialogue-text">
            A: Xin chao, ban co khoe khong?<br/>
            B: Toi <span className="dialogue-blank">{answer || '______'}</span> , cam on ban. Con ban?<br/>
            A: Toi cung rat <span className="dialogue-blank">{answer ? 'khoe' : '______'}</span> .
          </p>
        </div>
        <div className="word-chips">
          {['rat khoe', 'khong tot', 'binh thuong', 'tuyet voi'].map((w) => (
            <span key={w} className={`word-chip${answer === w ? ' selected' : ''}`} onClick={() => setAnswer(w)}>{w}</span>
          ))}
        </div>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">Bo qua</button>
        <Link to="/topic-selection" className="btn-next">Tiep tuc</Link>
      </div>
    </div>
  );
}