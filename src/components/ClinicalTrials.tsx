import React, { useState, useEffect } from 'react'
import { getContract } from '../services/web3'

interface Trial {
  id: number;
  name: string;
  description: string;
}

export default function ClinicalTrials() {
  const [trials, setTrials] = useState<Trial[]>([])

  useEffect(() => {
    fetchTrials()
  }, [])

  const fetchTrials = async () => {
    try {
      const contract = getContract()
      const clinicalTrialsAddress = await contract.clinicalTrials()
      // Implement logic to fetch trials from the clinicalTrials contract
      // This is a placeholder, you'll need to implement the actual data fetching
      setTrials([
        { id: 1, name: "Trial 1", description: "Description for Trial 1" },
        { id: 2, name: "Trial 2", description: "Description for Trial 2" },
      ])
    } catch (error) {
      console.error("Error fetching trials:", error)
    }
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Decentralized Clinical Trials</h1>
      <p className="text-lg">Participate in groundbreaking research while maintaining your privacy.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trials.map((trial) => (
          <div key={trial.id} className="border border-primary rounded p-4">
            <h2 className="text-xl font-semibold text-primary">{trial.name}</h2>
            <p>{trial.description}</p>
            <button className="mt-4 bg-secondary text-background px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
              Participate
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  // ... (rest of the component remains the same)
}