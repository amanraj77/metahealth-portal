import React, { useState, useEffect } from 'react'
import { getContract } from '../services/web3'

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function Marketplace() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    // ... (keep existing code)
    try {
        const contract = getContract()
        const marketplaceAddress = await contract.marketplace()
        // Implement logic to fetch services from the marketplace contract
        // This is a placeholder, you'll need to implement the actual data fetching
        setServices([
          { id: 1, name: "Service 1", description: "Description for Service 1", price: 10 },
          { id: 2, name: "Service 2", description: "Description for Service 2", price: 20 },
        ])
      } catch (error) {
        console.error("Error fetching services:", error)
      }
  }

  const purchaseService = async (serviceId: number) => {
    try {
        const contract = getContract()
        const marketplaceAddress = await contract.marketplace()
        // Implement logic to purchase service using the marketplace contract
        // This is a placeholder, you'll need to implement the actual purchase logic
        console.log(`Purchasing service ${serviceId}`)
      } catch (error) {
        console.error("Error purchasing service:", error)
      }
    }
  
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Healthcare Marketplace</h1>
        <p className="text-lg">Discover and purchase healthcare services using HealthTokens.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="border border-primary rounded p-4">
              <h2 className="text-xl font-semibold text-primary">{service.name}</h2>
              <p>{service.description}</p>
              <p className="mt-2 font-bold">Price: {service.price} HLT</p>
              <button 
                onClick={() => purchaseService(service.id)}
                className="mt-4 bg-primary text-background px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }