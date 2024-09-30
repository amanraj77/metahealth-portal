import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary">Welcome to MetaHealth Portal</h1>
      <p className="text-xl">Revolutionizing healthcare with blockchain technology.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/clinical-trials" className="block p-6 bg-secondary text-background rounded-lg hover:bg-opacity-90 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Clinical Trials</h2>
          <p>Participate in groundbreaking research while maintaining your privacy.</p>
        </Link>
        <Link to="/health-token" className="block p-6 bg-primary text-background rounded-lg hover:bg-opacity-90 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">HealthToken</h2>
          <p>Manage and transfer your HealthTokens securely.</p>
        </Link>
        <Link to="/marketplace" className="block p-6 bg-primary text-background rounded-lg hover:bg-opacity-90 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Marketplace</h2>
          <p>Discover and purchase healthcare services using HealthTokens.</p>
        </Link>
        <Link to="/medical-records" className="block p-6 bg-secondary text-background rounded-lg hover:bg-opacity-90 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Medical Records</h2>
          <p>Securely manage and share your medical records.</p>
        </Link>
      </div>
    </div>
  )
}