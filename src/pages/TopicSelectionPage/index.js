import React from 'react'
import { Link } from 'react-router-dom'
import './TopicSelectionPage.css'

const topics = [
  { id: 1, label: 'Do an & do uong', icon: 'restaurant', color: '#f97316' },
  { id: 2, label: 'Gia dinh', icon: 'family_restroom', color: '#22c55e' },
  { id: 3, label: 'Cong viec', icon: 'work', color: '#3b82f6' },
  { id: 4, label: 'Du lich', icon: 'travel', color: '#8b5cf6' },
  { id: 5, label: 'Mua sam', icon: 'shopping_bag', color: '#ef4444' },
  { id: 6, label: 'Suc khoe', icon: 'health_and_safety', color: '#14b8a6' },
]

const exercises = [
  { to: '/exercise/multiple-choice', title: 'Lua chon dap an dung', icon: 'rule' },
  { to: '/exercise/connect-image-word', title: 'Noi anh voi tu', icon: 'image_search' },
  { to: '/exercise/combine-words', title: 'Ghep tu thanh cau', icon: 'text_fields' },
  { to: '/exercise/flashcard', title: 'Flashcard da giac quan', icon: 'style' },
  { to: '/exercise/podcast', title: 'Luyen nghe podcast', icon: 'podcasts' },
  { to: '/exercise/ai-conversation', title: 'Hoi thoai voi AI', icon: 'smart_toy' },
]

export default function TopicSelectionPage() {
  return (
    <div className="topic-page">
      <div className="topic-head">
        <h1>Lua chon chu de</h1>
        <p>Chon mot chu de ben duoi de bat dau lo trinh luyen tap phu hop.</p>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <button key={topic.id} type="button" className="topic-chip" style={{ '--topic-color': topic.color }}>
            <span className="material-symbols-outlined">{topic.icon}</span>
            <span>{topic.label}</span>
          </button>
        ))}
      </div>

      <div className="exercise-section">
        <h2>Bai tap de xuat</h2>
        <div className="exercise-list">
          {exercises.map((exercise) => (
            <Link key={exercise.to} to={exercise.to} className="exercise-link-card">
              <span className="material-symbols-outlined">{exercise.icon}</span>
              <span>{exercise.title}</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}