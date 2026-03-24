'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PROPERTIES, NCR_CITIES } from '@/lib/data'

// Show only first 8 on homepage
const HOME_PROPERTIES = PROPERTIES.slice(0, 8)
const TYPES = ['All', 'Villa', 'Flat', 'Plot', 'Commercial']
const LOCATIONS = ['All', 'Delhi', 'Noida', 'Gurugram', 'Ghaziabad', 'Faridabad']

export default function FeaturedProperties() {
  const [locFilter, setLocFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')

  const filtered = HOME_PROPERTIES.filter((p) => {
    const locMatch = locFilter === 'All' || p.location === locFilter
    const typeMatch = typeFilter === 'All' || p.type === typeFilter
    return locMatch && typeMatch
  })

  return (
    <section id="properties" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Listings</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Properties</h2>
          <p className="text-gray-500 mt-2 text-sm">Handpicked premium properties across Delhi NCR</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 items-center mb-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {LOCATIONS.map((l) => (
              <button key={l} onClick={() => setLocFilter(l)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${locFilter === l ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'}`}>
                {l}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {TYPES.map((t) => (
              <button key={t} onClick={() => setTypeFilter(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${typeFilter === t ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-600 border-gray-200 hover:border-teal-400'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">No properties found for selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/properties"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm shadow">
            View All Properties →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
      <div className={`relative h-44 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
        <span className="text-5xl">{p.emoji}</span>
        <span className="absolute top-3 left-3 bg-white text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full shadow">{p.badge}</span>
        <span className="absolute top-3 right-3 bg-black/30 text-white text-xs px-2 py-0.5 rounded-full">{p.type}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors">{p.title}</h3>
        <p className="text-xs text-gray-500 mb-2">📍 {p.location}</p>
        <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{p.desc}</p>
        <div className="flex gap-3 text-xs text-gray-500 mb-3">
          {p.beds && <span>🛏 {p.beds} Beds</span>}
          {p.baths && <span>🚿 {p.baths} Baths</span>}
          <span>📐 {p.area}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-blue-700 font-bold text-base">{p.price}</span>
          <div className="flex gap-1.5">
            <a href="tel:+919876543210"
              className="text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-colors flex items-center gap-1">
              📞 Call
            </a>
            <Link href="/contact-us"
              className="text-xs bg-blue-50 text-blue-600 font-semibold px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
