import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InputTestStep2Page() {
  const [selected, setSelected] = useState(null);
  const options = ['Broca', 'Wernicke', 'Dysarthria', 'Chua ro / Khong ro'];

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">KIEM TRA DAU VAO - BUOC 2/5</span>
        <span className="exercise-header-label">40%</span>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '40%' }}></div></div>

      <h1 className="exercise-title">Chan doan tu bac si</h1>
      <p className="exercise-desc">Ban da duoc bac si chan doan mac dang roi loan ngon ngu nao chua?</p>

      <div className="option-cards">
        {options.map((opt, i) => (
          <div key={i} className={`option-card${selected === i ? ' selected' : ''}`} onClick={() => setSelected(i)}>
            <span className="material-symbols-outlined option-card-icon-primary">neurology</span>
            <strong>{opt}</strong>
          </div>
        ))}
      </div>

      <div className="exercise-actions">
        <Link to="/input-test/step-1" className="btn-skip">Quay lai</Link>
        <Link to="/input-test/step-3" className="btn-next">Tiep tuc</Link>
      </div>
    </div>
  );
}