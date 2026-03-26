import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const messages = [
  { type: 'ai', text: 'Moi nguoi dang lam gi?', time: 'LUCID AI - 10:24' },
  { type: 'user', text: 'Moi nguoi dang dang an my', time: 'BAN - 10:25' },
];

export default function AiConversationPage() {
  const [recording, setRecording] = useState(false);

  return (
    <div className="exercise-page">
      <div className="exercise-header">
        <span className="exercise-header-label">HOI THOAI AI</span>
        <div className="exercise-lives">
          <span className="material-symbols-outlined lives-icon">favorite</span> 5
        </div>
      </div>
      <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '65%' }}></div></div>

      <div className="ai-conv-layout">
        <div className="ai-conv-context">
          <div className="ai-context-image">
            <span className="ai-context-tag">NGU CANH HIEN TAI</span>
            <h3 className="ai-context-title">Bua com gia dinh</h3>
          </div>
          <div className="ai-objective">
            <span className="material-symbols-outlined ai-objective-icon">check_circle</span>
            <div>
              <span className="ai-objective-label">MUC TIEU</span>
              <p className="ai-objective-text">Mo ta hanh dong cua moi nguoi trong anh</p>
            </div>
          </div>
        </div>

        <div className="ai-conv-chat">
          <div className="exercise-content ai-chat-content">
            <div className="chat-container">
              {messages.map((m, i) => (
                <div key={i}>
                  <div className={`chat-bubble ${m.type}`}>{m.text}</div>
                  <div className={`chat-time chat-time--${m.type}`}>{m.time}</div>
                </div>
              ))}
              <div className="correction-card">
                <h4>GOI Y SUA LOI</h4>
                <p className="correction-italic">Phai la 'com' nha!</p>
                <p className="correction-explain">Trong van hoa Viet Nam, bua com gia dinh thuong an com. Trong anh cung la cac bat com trang.</p>
              </div>
            </div>

            <div className="ai-progress-block">
              <div className="ai-progress-header">
                <span className="ai-progress-label">TIEN TRINH BAI HOC</span>
                <span className="ai-progress-value">65%</span>
              </div>
              <div className="exercise-progress"><div className="exercise-progress-fill" style={{ width: '65%' }}></div></div>
              <button className={`mic-record-btn${recording ? ' recording' : ''}`} onClick={() => setRecording(!recording)}>
                <span className="material-symbols-outlined mic-icon">{recording ? 'stop' : 'mic'}</span>
              </button>
              <p className="mic-hint">{recording ? 'Dang lang nghe...' : 'Bam de noi'}</p>
            </div>
          </div>
          <div className="ai-conv-actions">
            <button className="btn-skip">Go cau tra loi</button>
            <Link to="/topic-selection" className="btn-next">Tiep tuc bai hoc</Link>
          </div>
        </div>
      </div>
    </div>
  );
}