import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-secondary text-background">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">MetaHealth Portal</Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/clinical-trials" className="hover:text-primary transition-colors">Clinical Trials</Link></li>
            <li><Link to="/health-token" className="hover:text-primary transition-colors">HealthToken</Link></li>
            <li><Link to="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link></li>
            <li><Link to="/medical-records" className="hover:text-primary transition-colors">Medical Records</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}