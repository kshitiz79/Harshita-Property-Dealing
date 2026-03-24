'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DN</span>
          </div>
          <span className="text-xl font-bold text-blue-700">DelhiNCR Homes</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/properties" className="hover:text-blue-600 transition-colors">Properties</Link>
          <Link href="/ncr-cities" className="hover:text-blue-600 transition-colors">NCR Cities</Link>
          <Link href="/#categories" className="hover:text-blue-600 transition-colors">Categories</Link>
          <Link href="/#why-us" className="hover:text-blue-600 transition-colors">Why Us</Link>
          <a href="tel:+919876543210"
            className="flex items-center gap-1.5 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            📞 Call Us
          </a>
          <Link href="/contact-us" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <a href="tel:+919876543210"
            className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-green-700 transition-colors">
            📞 Call
          </a>
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link href="/properties" onClick={() => setOpen(false)} className="hover:text-blue-600">Properties</Link>
          <Link href="/ncr-cities" onClick={() => setOpen(false)} className="hover:text-blue-600">NCR Cities</Link>
          <Link href="/#categories" onClick={() => setOpen(false)} className="hover:text-blue-600">Categories</Link>
          <Link href="/#why-us" onClick={() => setOpen(false)} className="hover:text-blue-600">Why Us</Link>
          <Link href="/contact-us" onClick={() => setOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
