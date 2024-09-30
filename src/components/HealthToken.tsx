import React, { useState, useEffect } from 'react'
import { getContract } from '../services/web3'

export default function HealthToken() {
  const [balance, setBalance] = useState(0)
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    fetchBalance()
  }, [])

  const fetchBalance = async () => {
    // ... (keep existing code)
    try {
        const contract = getContract()
        const healthTokenAddress = await contract.healthToken()
        // Implement logic to fetch balance from the healthToken contract
        // This is a placeholder, you'll need to implement the actual balance fetching
        setBalance(100)
      } catch (error) {
        console.error("Error fetching balance:", error)
      }
  }

  const transferTokens = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
        const contract = getContract()
        const healthTokenAddress = await contract.healthToken()
        // Implement logic to transfer tokens using the healthToken contract
        // This is a placeholder, you'll need to implement the actual token transfer
        console.log(`Transferring ${amount} tokens to ${recipient}`)
        // Reset form after transfer
        setRecipient('')
        setAmount('')
        // Refresh balance
        fetchBalance()
      } catch (error) {
        console.error("Error transferring tokens:", error)
      }
    }
  
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">HealthToken</h1>
        <p className="text-lg">Your current balance: {balance} HLT</p>
        <form onSubmit={transferTokens} className="space-y-4">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-secondary">Recipient Address</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="mt-1 block w-full border border-secondary rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-secondary">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full border border-secondary rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <button 
            type="submit"
            className="bg-primary text-background px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            Transfer Tokens
          </button>
        </form>
      </div>
    )
  }