import React from 'react';
import { Link } from 'react-router-dom';

export default function InputTestStep1Page() {
  return (
    <div className="exercise-page">
      <div className="test-intro">
        <span className="material-symbols-outlined test-intro-icon">quiz</span>
        <h1>Chao mung ban den voi <em className="text-primary-italic">Linguist Pro!</em></h1>
        <p>De toi uu trai nghiem hoc tap, hay hoan thanh bai kiem tra nho sau nhe. Chung toi se thiet ke lo trinh ca nhan hoa dua tren trinh do thuc te cua ban.</p>
        <div className="test-intro-actions">
          <Link to="/input-test/step-2" className="btn-next">Bat dau ngay <span className="material-symbols-outlined btn-icon-sm">arrow_forward</span></Link>
          <button className="btn-skip">Xem chi tiet lo trinh</button>
        </div>
        <div className="test-features">
          <div className="test-feature"><span className="material-symbols-outlined test-feature-icon">timer</span> ~15 phut</div>
          <div className="test-feature"><span className="material-symbols-outlined test-feature-icon">verified</span> Danh gia chuan CEFR</div>
          <div className="test-feature"><span className="material-symbols-outlined test-feature-icon">psychology</span> AI Phan tich diem yeu</div>
        </div>
      </div>
    </div>
  );
}