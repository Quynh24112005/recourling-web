import React from 'react'
import { Link } from 'react-router-dom'
import './DiscoverPage.css'

export default function DiscoverPage() {
  return (
    <div className="discover-page">
      <section className="discover-page-hero">
        <div>
          <span>EDITOR PICK</span>
          <h1>Discover Your Learning Path</h1>
          <p>Explore curated lessons, community activities, and weekly goals in one dashboard.</p>
          <Link to="/topic-selection">Continue Journey</Link>
        </div>
      </section>

      <section className="discover-page-cards">
        <article>
          <h3>Course Spotlight</h3>
          <p>Practical communication lessons for daily life.</p>
        </article>
        <article>
          <h3>Community Feed</h3>
          <p>See what peers completed this week.</p>
        </article>
        <article>
          <h3>Weekly Ranking</h3>
          <p>Track your progress and compete with friends.</p>
        </article>
      </section>
    </div>
  )
}