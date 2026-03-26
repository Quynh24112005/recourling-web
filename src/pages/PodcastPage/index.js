import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const transcript = [
  { time: '00:00', text: 'Tieng leng keng cua tau dien tung la nhip tho cua Ha Noi suot hon chin thap ky.' },
  { time: '02:15', text: 'Hay tuong tuong nhung buoi sang suong mu, khi anh den vang mo ao cua con tau hien ra tu xa.' },
  { time: '12:45', text: 'Ngay nay, du duong ray da khong con, nhung trong tam tri cua nhung nguoi con Ha Noi, am thanh ay van vang vong nhu mot ban nhac cua qua khu.', active: true },
];

export default function PodcastPage() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="exercise-page">
      <div className="podcast-back-row">
        <Link to="/topic-selection" className="podcast-back-link">
          <span className="material-symbols-outlined podcast-back-icon">arrow_back</span> Back to Podcasts
        </Link>
      </div>

      <div className="podcast-layout">
        <div className="podcast-player">
          <div className="podcast-cover">
            <span className="material-symbols-outlined podcast-cover-icon">podcasts</span>
          </div>
          <div className="podcast-progress">
            <span>12:45</span>
            <div className="podcast-progress-bar"><div className="podcast-progress-fill"></div></div>
            <span>24:00</span>
          </div>
          <div className="podcast-controls">
            <button className="podcast-ctrl-btn"><span className="material-symbols-outlined">shuffle</span></button>
            <button className="podcast-ctrl-btn"><span className="material-symbols-outlined">replay_5</span></button>
            <button className="podcast-play-btn" onClick={() => setPlaying(!playing)}>
              <span className="material-symbols-outlined podcast-play-icon">{playing ? 'pause' : 'play_arrow'}</span>
            </button>
            <button className="podcast-ctrl-btn"><span className="material-symbols-outlined">forward_10</span></button>
            <button className="podcast-ctrl-btn"><span className="material-symbols-outlined">repeat</span></button>
          </div>
          <div className="podcast-meta-row">
            <span>1.2x</span>
            <span><span className="material-symbols-outlined podcast-meta-icon">devices</span> Devices</span>
          </div>
        </div>

        <div className="transcript-section">
          <div className="podcast-source-row">
            <span className="podcast-source-badge">TED</span>
            <span className="podcast-source-label">TED Talks Daily</span>
          </div>
          <h2>Ky uc ve tieng tau dien</h2>
          <p className="podcast-description">Kham pha am thanh di san cua Ha Noi xua qua nhung chuyen tau dien lich su.</p>

          <div className="podcast-action-btns">
            <button className="btn-skip btn-skip--sm"><span className="material-symbols-outlined btn-icon-xs">add</span> Save to Library</button>
            <button className="btn-skip btn-skip--sm"><span className="material-symbols-outlined btn-icon-xs">download</span> Download</button>
            <button className="btn-skip btn-skip--sm"><span className="material-symbols-outlined btn-icon-xs">share</span> Share</button>
          </div>

          <h3>Transcript</h3>
          {transcript.map((t, i) => (
            <div key={i} className={`transcript-entry${t.active ? ' active' : ''}`}>
              <div className="transcript-time">{t.time}</div>
              <p className="transcript-text">{t.text}</p>
            </div>
          ))}

          <div className="up-next">
            <h3>Up Next</h3>
            <div className="up-next-items">
              <div className="up-next-item">
                <div className="up-next-thumb"></div>
                <div><h4>Ca phe sua da & Van hoa</h4><small>18 mins remaining</small></div>
              </div>
              <div className="up-next-item">
                <div className="up-next-thumb"></div>
                <div><h4>Nhip song Cho dem</h4><small>Next: 24 mins</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}