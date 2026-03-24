'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { PROPERTIES, NCR_CITIES } from '@/lib/data'
import { PropertyCard } from '@/components/Home/FeaturedProperties'

const TYPES = ['All', 'Villa', 'Flat', 'Plot', 'Commercial']
const BUDGETS = [
  { label: 'Any Budget', value: '' },
  { label: 'Under ₹50L', value: 'under-50L' },
  { label: '₹50L – ₹1Cr', value: '50L-1Cr' },
  { label: '₹1Cr – ₹3Cr', value: '1Cr-3Cr' },
  { label: 'Above ₹3Cr', value: 'above-3Cr' },
]

export default function PropertiesClient() {
  const searchParams = useSearchParams()

  const [locFilter, setLocFilter] = useState(searchParams.get('location') || 'All')
  const [typeFilter, setTypeFilter] = useState(searchParams.get('type') || 'All')
  const [budgetFilter, setBudgetFilter] = useState(searchParams.get('budget') || '')
  const [search, setSearch] = useState('')

  const filtered = PROPERTIES.filter((p) => {
    const locMatch = locFilter === 'All' || p.location === locFilter
    const typeMatch = typeFilter === 'All' || p.type === typeFilter
    const budgetMatch = !budgetFilter || p.budget === budgetFilter
    const searchMatch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase())
    return locMatch && typeMatch && budgetMatch && searchMatch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-8 flex flex-col gap-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="🔍  Search by title or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Location */}
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">City</label>
            <select
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option value="All">All NCR Cities</option>
              {NCR_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Type */}
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              {TYPES.map((t) => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
            </select>
          </div>

          {/* Budget */}
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Budget</label>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              {BUDGETS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
            </select>
          </div>

          {/* Reset */}
          <div className="flex items-end">
            <button
              onClick={() => { setLocFilter('All'); setTypeFilter('All'); setBudgetFilter(''); setSearch('') }}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-5">
        Showing <span className="font-semibold text-gray-800">{filtered.length}</span> of {PROPERTIES.length} properties
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-3">🏚️</div>
          <p className="font-semibold text-gray-600">No properties found</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  )
}
