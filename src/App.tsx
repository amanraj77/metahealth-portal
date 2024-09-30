import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ClinicalTrials from './components/ClinicalTrials'
import HealthToken from './components/HealthToken'
import Marketplace from './components/Marketplace'
import MedicalRecords from './components/MedicalRecords'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-secondary">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clinical-trials" element={<ClinicalTrials />} />
            <Route path="/health-token" element={<HealthToken />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}