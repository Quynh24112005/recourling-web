import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RhythmBoardPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const syllables = ['Toi', 'muon', 'an', 'com', 'chien'];

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">BANG NHIP DIEU (PACING BOARD)</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '40%' }}></div></div>

      <h1 className="exercise-title">Bang nhip dieu</h1>
      <p className="exercise-desc">Cham vao tung o de luyen noi theo nhip. Moi o tuong ung voi mot am tiet.</p>

      <div className="exercise-content exercise-content--center">
        <p className="exercise-sentence-lg">Toi muon an com chien</p>
        <div className="rhythm-buttons">
          {syllables.map((s, i) => (
            <button
              key={i}
              className={`rhythm-btn${i < activeIndex ? ' done' : ''}${i === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="rhythm-dots">
          {syllables.map((_, i) => (
            <div key={i} className={`rhythm-dot${i <= activeIndex ? ' filled' : ''}`}></div>
          ))}
        </div>
        <button className="mic-record-btn">
          <span className="material-symbols-outlined mic-icon">mic</span>
        </button>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">Bo qua</button>
        <Link to="/topic-selection" className="btn-next">Tiep tuc</Link>
      </div>
    </div>
  );
}