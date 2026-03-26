import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InputTestStep4Page() {
  const [recording, setRecording] = useState(false);

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">KIEM TRA DAU VAO - BUOC 4/5 (PRODUCTION)</span>
        <span className="exercise-header-label">80%</span>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '80%' }}></div></div>

      <h1 className="exercise-title">Tao cau</h1>
      <p className="exercise-desc">Hay nhin vao hinh anh va mo ta nhung gi ban thay bang cach noi thanh tieng.</p>

      <div className="exercise-content">
        <div className="flashcard-image">
          <span className="material-symbols-outlined placeholder-icon-lg">image</span>
        </div>
        <p className="exercise-center-hint">Bam nut microphone va mo ta hinh anh</p>
        <button className={`mic-record-btn${recording ? ' recording' : ''}`} onClick={() => setRecording(!recording)}>
          <span className="material-symbols-outlined mic-icon">{recording ? 'stop' : 'mic'}</span>
        </button>
      </div>

      <div className="exercise-actions">
        <Link to="/input-test/step-3" className="btn-skip">Quay lai</Link>
        <Link to="/input-test/step-5" className="btn-next">Tiep tuc</Link>
      </div>
    </div>
  );
}