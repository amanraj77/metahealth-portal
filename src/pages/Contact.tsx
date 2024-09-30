import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
      <p className="text-lg">Have questions or feedback? We'd love to hear from you!</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-secondary rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-secondary rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 block w-full border border-secondary rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="bg-primary text-background px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}