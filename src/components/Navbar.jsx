import React from 'react'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
            <path fill="#6D7993" d="M11 23a2 2 0 0 1-2-2v-2h6v2a2 2 0 0 1-2 2zm1-22c.71 0 1.39.09 2.05.26C15.22 2.83 16 5.71 16 9c0 2.28-.38 4.37-1 7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2c-.62-2.63-1-4.72-1-7c0-3.29.78-6.17 1.95-7.74C10.61 1.09 11.29 1 12 1m8 7c0 3.18-1.85 7.92-4.54 9.21C16.41 15.39 17 11.83 17 9s-.59-5.39-1.54-7.21C18.15 3.08 20 4.82 20 8M4 8c0-3.18 1.85-4.92 4.54-6.21C7.59 3.61 7 6.17 7 9s.59 6.39 1.54 8.21C5.85 15.92 4 11.18 4 8"/>
          </svg>
        <span>First Launch Labs</span>
      </div>

      <nav className="links">
        <a href="#">Get Started</a>
        <a href="#">Create strategy</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Solution</a>
        <a href="#">E-Commerce</a>
      </nav>

      <div className="actions">
        <button className="icon-btn" aria-label="Account">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </button>
        <button className="icon-btn" aria-label="Theme">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 109 9 7.5 7.5 0 01-9-9z" />
          </svg>
        </button>
      </div>
    </header>
  )
}
