import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InputTestStep5Page() {
  const [recording, setRecording] = useState(false);
  const sentence = 'Me di sieu thi mua rau va thit';

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">KIEM TRA DAU VAO - BUOC 5/5 (MOTOR)</span>
        <span className="exercise-header-label">100%</span>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '100%' }}></div></div>

      <h1 className="exercise-title">Do ro loi noi</h1>
      <p className="exercise-desc">Hay doc to cau sau day mot cach ro rang nhat co the.</p>

      <div className="exercise-content exercise-content--center">
        <p className="exercise-sentence-lg">{sentence}</p>
        <button className={`mic-record-btn${recording ? ' recording' : ''}`} onClick={() => setRecording(!recording)}>
          <span className="material-symbols-outlined mic-icon">{recording ? 'stop' : 'mic'}</span>
        </button>
        <p className="mic-hint">{recording ? 'Dang ghi am...' : 'Bam de bat dau ghi am'}</p>
      </div>

      <div className="exercise-actions">
        <Link to="/input-test/step-4" className="btn-skip">Quay lai</Link>
        <Link to="/home-vi" className="btn-next">Hoan thanh</Link>
      </div>
    </div>
  );
}