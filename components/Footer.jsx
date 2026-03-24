import Link from 'next/link'
import { NCR_CITIES } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DN</span>
            </div>
            <span className="text-white font-bold text-lg">DelhiNCR Homes</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Your trusted partner for premium real estate across all NCR cities — Delhi, Gurugram, Noida, Ghaziabad, Faridabad, Rohtak, Panipat, Alwar and more.
          </p>
          <div className="flex gap-3">
            {[
              { label: 'Facebook', icon: 'f' },
              { label: 'Instagram', icon: 'in' },
              { label: 'Twitter', icon: 'tw' },
              { label: 'YouTube', icon: 'yt' },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label}
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-blue-600 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/properties" className="hover:text-blue-400 transition-colors">All Properties</Link></li>
            <li><Link href="/ncr-cities" className="hover:text-blue-400 transition-colors">NCR Cities</Link></li>
            <li><Link href="/#categories" className="hover:text-blue-400 transition-colors">Categories</Link></li>
            <li><Link href="/#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</Link></li>
            <li><Link href="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* NCR Cities */}
        <div>
          <h3 className="text-white font-semibold mb-3">NCR Cities</h3>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-sm">
            {NCR_CITIES.map((city) => (
              <li key={city}>
                <Link
                  href={`/properties?location=${encodeURIComponent(city)}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                📞 +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:info@delhincrhomes.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                ✉️ info@delhincrhomes.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>Plot No. 12, Sector 18,<br />Noida, UP – 201301</span>
            </li>
            <li>🕐 Mon–Sat: 9 AM – 7 PM</li>
          </ul>
          <a
            href="tel:+919876543210"
            className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DelhiNCR Homes. All rights reserved. · Serving all NCR districts.
      </div>
    </footer>
  )
}
