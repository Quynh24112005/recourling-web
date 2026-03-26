import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const animals = [
  { name: 'Con ga', img: 'rooster' },
  { name: 'Con ca', img: 'phishing' },
  { name: 'Con bo', img: 'pets' },
];
const options = ['Con ca', 'Con bo', 'Con ga', 'Con meo'];

export default function ConnectImageWordPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">NOI TU VOI TRANH</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '70%' }}></div></div>

      <h1 className="exercise-title">Noi tu voi tranh</h1>
      <p className="exercise-desc">Hay noi tu voi tranh phu hop de hoan thanh bai tap.</p>

      <div className="exercise-content">
        <div className="matching-layout">
          <div className="matching-images">
            {animals.map((a, i) => (
              <div key={i} className="matching-img">
                <span className="material-symbols-outlined matching-img-icon">{a.img}</span>
              </div>
            ))}
          </div>
          <div className="matching-options">
            {options.map((opt, i) => (
              <div key={i} className={`matching-option${selected === i ? ' selected' : ''}`} onClick={() => setSelected(i)}>
                <span>{opt}</span>
                {selected === i && <span className="material-symbols-outlined matching-check">check_circle</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">Bo qua</button>
        <Link to="/topic-selection" className="btn-next">Tiep theo <span className="material-symbols-outlined btn-icon-sm">arrow_forward</span></Link>
      </div>
    </div>
  );
}