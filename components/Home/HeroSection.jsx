'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NCR_CITIES } from '@/lib/data'

export default function HeroSection() {
  const router = useRouter()
  const [filters, setFilters] = useState({ location: '', type: '', budget: '' })

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (filters.location) params.set('location', filters.location)
    if (filters.type) params.set('type', filters.type)
    if (filters.budget) params.set('budget', filters.budget)
    const qs = params.toString()
    router.push(`/properties${qs ? '?' + qs : ''}`)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center py-24">
        <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Premium Real Estate</p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Find Your Dream Property<br className="hidden sm:block" /> in Delhi NCR
        </h1>
        <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Explore verified luxury villas, apartments, and plots across all NCR cities.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-end"
        >
          <div className="flex-1 flex flex-col gap-1 text-left">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option value="">All NCR Cities</option>
              {NCR_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex-1 flex flex-col gap-1 text-left">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Property Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option value="">All Types</option>
              <option value="Villa">Villa</option>
              <option value="Flat">Flat</option>
              <option value="Plot">Plot</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="flex-1 flex flex-col gap-1 text-left">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Budget</label>
            <select
              value={filters.budget}
              onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option value="">Any Budget</option>
              <option value="under-50L">Under ₹50 Lakh</option>
              <option value="50L-1Cr">₹50L – ₹1 Cr</option>
              <option value="1Cr-3Cr">₹1 Cr – ₹3 Cr</option>
              <option value="above-3Cr">Above ₹3 Cr</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            🔍 Search
          </button>
        </form>

        <p className="text-blue-200 text-xs mt-4">500+ verified properties · Trusted by 10,000+ buyers</p>
      </div>
    </section>
  )
}
