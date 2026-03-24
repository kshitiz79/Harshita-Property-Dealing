import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertiesClient from '@/components/PropertiesClient'

export const metadata = {
  title: 'All Properties – DelhiNCR Homes',
  description: 'Browse 38+ verified properties across all NCR cities — Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Rohtak, Panipat, Alwar and more.',
}

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-blue-700 to-teal-600 py-10 px-4 text-center text-white">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">All Listings</p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Properties in Delhi NCR</h1>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            38+ verified listings across all NCR cities. Filter by location, type, and budget.
          </p>
        </div>
        <PropertiesClient />
      </main>
      <Footer />
    </>
  )
}
