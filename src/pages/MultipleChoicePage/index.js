import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MultipleChoicePage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">TRAC NGHIEM</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '65%' }}></div></div>

      <h1 className="exercise-title">Lua chon dap an dung</h1>
      <p className="exercise-desc">Dua vao hinh anh de tra loi cau hoi sau.</p>

      <div className="exercise-content">
        <div className="flashcard-image">
          <span className="material-symbols-outlined placeholder-icon-lg">image</span>
        </div>
        <div className="question-quote">
          <p className="question-text">"Can phong co piano dung ko?"</p>
        </div>
        <div className="option-cards">
          <div className={`option-card${selected === 0 ? ' selected' : ''}`} onClick={() => setSelected(0)}>
            <span className="material-symbols-outlined option-icon-correct">check_circle</span>
            <strong>DUNG</strong>
          </div>
          <div className={`option-card${selected === 1 ? ' selected' : ''}`} onClick={() => setSelected(1)}>
            <span className="material-symbols-outlined option-icon-wrong">cancel</span>
            <strong>SAI</strong>
          </div>
        </div>
      </div>

      <div className="exercise-actions">
        <button className="btn-skip">BO QUA</button>
        <Link to="/topic-selection" className="btn-next">TIEP TUC</Link>
      </div>
    </div>
  );
}