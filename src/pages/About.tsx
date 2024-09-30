import React from 'react'

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">About MetaHealth Portal</h1>
      <p className="text-lg">
        MetaHealth Portal is a revolutionary decentralized healthcare platform leveraging blockchain technology to improve security, transparency, and accessibility in healthcare.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8">Our Mission</h2>
      <p className="text-lg">
        Our mission is to create a patient-centric, decentralized ecosystem that enhances data security, transparency, and user control in the healthcare industry.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8">Key Features</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Secure and immutable medical records management</li>
        <li>Decentralized clinical trials with anonymous data sharing</li>
        <li>Healthcare marketplace with cryptocurrency payments</li>
        <li>HealthToken system to incentivize healthy behaviors</li>
      </ul>
    </div>
  )
}