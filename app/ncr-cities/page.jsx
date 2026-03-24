import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { NCR_CITIES, PROPERTIES } from '@/lib/data'

export const metadata = {
  title: 'NCR Cities – DelhiNCR Homes',
  description: 'Explore real estate across all NCR cities.',
}

const CITY_INFO = {
  'Delhi':         { emoji: '🏛️', desc: 'Capital city with South Delhi, Dwarka, Rohini — premium and affordable options.' },
  'Noida':         { emoji: '🏙️', desc: 'IT hub with Sector 150, Expressway, and excellent metro connectivity.' },
  'Gurugram':      { emoji: '🌆', desc: 'Corporate capital — DLF, Cyber City, Golf Course Road, luxury high-rises.' },
  'Ghaziabad':     { emoji: '🏘️', desc: 'Fast-growing — Indirapuram, Vaishali, Raj Nagar Extension, NH-58 corridor.' },
  'Faridabad':     { emoji: '🏗️', desc: 'Industrial city with affordable housing and strong metro connectivity.' },
  'Rohtak':        { emoji: '🌾', desc: 'Educational hub of Haryana with HSVP plots and growing real estate market.' },
  'Panipat':       { emoji: '🏭', desc: 'Historic city with HSIIDC industrial zones and affordable residential options.' },
  'Alwar':         { emoji: '🏰', desc: 'Gateway to Rajasthan with RIICO zones, scenic farmhouses, and affordable plots.' },
  'Meerut':        { emoji: '🌳', desc: 'Rapidly developing with affordable housing and strong road connectivity to Delhi.' },
  'Sonipat':       { emoji: '🌻', desc: 'Emerging market with proximity to Delhi and upcoming infrastructure projects.' },
  'Bahadurgarh':   { emoji: '🏠', desc: 'Affordable housing hub near Delhi with metro connectivity and industrial growth.' },
  'Bhiwadi':       { emoji: '⚙️', desc: 'Industrial township in Rajasthan with RIICO plots and affordable residential options.' },
  'Greater Noida': { emoji: '🏢', desc: 'Planned city with wide roads, expressway access, and premium residential projects.' },
  'Bulandshahr':   { emoji: '🌿', desc: 'Developing city with affordable plots and proximity to Noida Expressway.' },
  'Hapur':         { emoji: '🏡', desc: 'Growing town with affordable real estate and Delhi-Meerut Expressway connectivity.' },
}

export default function NCRCitiesPage() {
  const countByCity = NCR_CITIES.reduce((acc, city) => {
    acc[city] = PROPERTIES.filter((p) => p.location === city).length
    return acc
  }, {})

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-blue-700 to-teal-600 py-12 px-4 text-center text-white">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Explore NCR</p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">All NCR Cities</h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Browse properties across {NCR_CITIES.length} cities in the National Capital Region.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NCR_CITIES.map((city) => {
              const info = CITY_INFO[city] || { emoji: '🏙️', desc: 'Explore properties in ' + city }
              const count = countByCity[city] || 0
              return (
                <Link
                  key={city}
                  href={`/properties?location=${encodeURIComponent(city)}`}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-blue-600 transition-colors">
                    {info.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h2 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{city}</h2>
                      {count > 0 && (
                        <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded-full shrink-0">
                          {count} listing{count !== 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{info.desc}</p>
                    <span className="inline-block mt-2 text-xs text-blue-600 font-semibold group-hover:underline">
                      View Properties →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 bg-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-xl font-bold mb-2">Can't find your city?</h2>
            <p className="text-blue-200 text-sm mb-5">
              We cover all NCR districts. Contact us and we'll find the right property for you.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
