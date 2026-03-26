import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InputTestStep3Page() {
  const [selected, setSelected] = useState(null);
  const options = ['Con cho dang chay ngoai vuon', 'Con meo dang ngu tren ghe', 'Con ca dang boi trong ho', 'Con chim dang hat tren canh cay'];

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">KIEM TRA DAU VAO - BUOC 3/5 (COMPREHENSION)</span>
        <span className="exercise-header-label">60%</span>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '60%' }}></div></div>

      <h1 className="exercise-title">Kiem tra kha nang hieu</h1>
      <p className="exercise-desc">Hay nghe cau hoi va chon cau tra loi dung.</p>

      <div className="exercise-content">
        <div className="exercise-center-block">
          <button className="mic-record-btn mic-listen" title="Nghe cau hoi">
            <span className="material-symbols-outlined mic-icon">volume_up</span>
          </button>
          <p className="mic-hint">Bam de nghe cau hoi</p>
        </div>
        <div className="option-cards">
          {options.map((opt, i) => (
            <div key={i} className={`option-card${selected === i ? ' selected' : ''}`} onClick={() => setSelected(i)}>
              {opt}
            </div>
          ))}
        </div>
      </div>

      <div className="exercise-actions">
        <Link to="/input-test/step-2" className="btn-skip">Quay lai</Link>
        <Link to="/input-test/step-4" className="btn-next">Tiep tuc</Link>
      </div>
    </div>
  );
}