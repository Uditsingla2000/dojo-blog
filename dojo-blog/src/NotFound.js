import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function NotFound() {
  return (
    <div className="not-found">
        <h2>The page     is not found</h2>
        <Link to="/">Home</Link>

    </div>
)
}
