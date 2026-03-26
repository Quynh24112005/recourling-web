import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FlashcardPage() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">FLASHCARD DA GIAC QUAN</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '30%' }}></div></div>

      <h1 className="exercise-title">Flashcard da giac quan</h1>
      <p className="exercise-desc">Hoc tu moi qua hinh anh, am thanh va ngu canh</p>

      <div className="exercise-content">
        <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
          <div className="flashcard-image">
            <span className="material-symbols-outlined placeholder-icon-xl">image</span>
          </div>
          <span className="flashcard-label">TU VUNG</span>
          <p className="flashcard-word">{flipped ? 'Orange' : 'Cam'}</p>
          <div className="flashcard-audio-row">
            <button className="mic-record-btn mic-sm" title="Nghe phat am">
              <span className="material-symbols-outlined mic-icon-sm">volume_up</span>
            </button>
            <button className="mic-record-btn mic-sm mic-alt" title="Noi theo">
              <span className="material-symbols-outlined mic-icon-sm">mic</span>
            </button>
          </div>
          <div className="flashcard-example">
            <p>"Toi an mot <strong>qua cam</strong> moi sang."</p>
            <p className="flashcard-translation">= I eat an orange every morning.</p>
          </div>
        </div>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">Bo qua</button>
        <Link to="/topic-selection" className="btn-next">Tiep tuc <span className="material-symbols-outlined btn-icon-sm">arrow_forward</span></Link>
      </div>
    </div>
  );
}