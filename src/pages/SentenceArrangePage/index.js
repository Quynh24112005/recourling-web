import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const words = ['dep', 'hom', 'Troi', 'rat', 'nay'];

export default function SentenceArrangePage() {
  const [placed, setPlaced] = useState([]);
  const available = words.filter((w) => !placed.includes(w));

  const addWord = (w) => setPlaced([...placed, w]);
  const removeWord = (w) => setPlaced(placed.filter((p) => p !== w));

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">SAP XEP CAU</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '55%' }}></div></div>

      <h1 className="exercise-title">Sap xep cau</h1>
      <p className="exercise-desc">Hay sap xep cac tu theo dung thu tu de tao thanh cau co nghia.</p>

      <div className="exercise-content">
        <div className="exercise-center-block">
          <button className="mic-record-btn mic-listen" title="Nghe">
            <span className="material-symbols-outlined mic-icon-sm">volume_up</span>
          </button>
        </div>
        <div className="drop-zone">
          {placed.length === 0 ? (
            <span className="drop-zone-hint">Cham de sap xep tu...</span>
          ) : (
            placed.map((w) => (
              <span key={w} className="word-chip selected" onClick={() => removeWord(w)}>{w}</span>
            ))
          )}
        </div>
        <div className="word-chips">
          {available.map((w) => (
            <span key={w} className="word-chip" onClick={() => addWord(w)}>{w}</span>
          ))}
        </div>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">Bo qua</button>
        <Link to="/topic-selection" className="btn-next">Kiem tra</Link>
      </div>
    </div>
  );
}