import Link from 'next/link'

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
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted partner for premium real estate in Delhi, Noida, Ghaziabad, and Gurgaon.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/#properties" className="hover:text-blue-400 transition-colors">Properties</Link></li>
            <li><Link href="/#categories" className="hover:text-blue-400 transition-colors">Categories</Link></li>
            <li><Link href="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white font-semibold mb-3">Locations</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Delhi</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Noida</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Ghaziabad</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Gurgaon</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@delhincrhomes.com</li>
            <li>📍 Sector 18, Noida, UP 201301</li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {['f', 'in', 'tw', 'yt'].map((s) => (
              <a key={s} href="#" aria-label={s}
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs hover:bg-blue-600 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DelhiNCR Homes. All rights reserved.
      </div>
    </footer>
  )
}
