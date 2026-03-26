import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const words = ['Toi', 'muon', 'an', 'com', 'chien', 'voi', 'trung'];

export default function CombineWordsPage() {
  const [placed, setPlaced] = useState([]);
  const available = words.filter((w) => !placed.includes(w));

  const addWord = (w) => setPlaced([...placed, w]);
  const removeWord = (w) => setPlaced(placed.filter((p) => p !== w));

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">GHEP TU THANH CAU</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '45%' }}></div></div>

      <h1 className="exercise-title">Ghep tu thanh cau</h1>
      <p className="exercise-desc">Hay sap xep cac tu o duoi de tao thanh cau hoan chinh.</p>

      <div className="exercise-content">
        <div className="drop-zone">
          {placed.length === 0 ? (
            <span className="drop-zone-hint">Keo tu vao day...</span>
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
        <Link to="/topic-selection" className="btn-next">Kiem tra <span className="material-symbols-outlined btn-icon-sm">arrow_forward</span></Link>
      </div>
    </div>
  );
}