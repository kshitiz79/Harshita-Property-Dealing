'use client'

import { useState } from 'react'

const INITIAL = { name: '', phone: '', email: '', location: '', budget: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.location) e.location = 'Please select a location'
    if (!form.message.trim()) e.message = 'Please enter your message'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Submitted!</h3>
        <p className="text-green-700 text-sm">
          Thank you, <strong>{form.name}</strong>. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => { setForm(INITIAL); setSubmitted(false) }}
          className="mt-5 text-sm text-green-700 underline hover:text-green-900"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Full Name *</label>
        <input
          id="name" name="name" type="text" value={form.name} onChange={handleChange}
          placeholder="Your full name"
          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">Phone Number *</label>
        <input
          id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
          placeholder="10-digit mobile number"
          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email Address *</label>
        <input
          id="email" name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="you@example.com"
          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Location + Budget row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="location">Preferred Location *</label>
          <select
            id="location" name="location" value={form.location} onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.location ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
          >
            <option value="">Select location</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Gurgaon">Gurgaon</option>
          </select>
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="budget">Budget (Optional)</label>
          <select
            id="budget" name="budget" value={form.budget} onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select budget</option>
            <option value="under-50L">Under ₹50 Lakh</option>
            <option value="50L-1Cr">₹50L – ₹1 Cr</option>
            <option value="1Cr-3Cr">₹1 Cr – ₹3 Cr</option>
            <option value="above-3Cr">Above ₹3 Cr</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">Message *</label>
        <textarea
          id="message" name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Tell us about your requirements..."
          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-md"
      >
        Send Enquiry →
      </button>
    </form>
  )
}
