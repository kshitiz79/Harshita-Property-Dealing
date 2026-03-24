const FEATURES = [
  {
    icon: '✅',
    title: 'Trusted Listings',
    desc: '500+ verified properties with complete legal documentation and transparent pricing.',
  },
  {
    icon: '🔒',
    title: 'Verified Properties',
    desc: 'Every listing is physically verified by our team before being published.',
  },
  {
    icon: '💰',
    title: 'Best Prices',
    desc: 'We negotiate directly with builders and owners to get you the best deal.',
  },
  {
    icon: '📅',
    title: 'Easy Booking',
    desc: 'Simple, hassle-free booking process with dedicated relationship managers.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-gradient-to-br from-blue-50 to-teal-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Promise</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="text-gray-500 mt-2 text-sm">Delhi NCR's most trusted real estate partner</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 bg-blue-700 rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '500+', label: 'Properties Listed' },
            { num: '10K+', label: 'Happy Buyers' },
            { num: '4', label: 'Cities Covered' },
            { num: '8+', label: 'Years Experience' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-bold">{s.num}</div>
              <div className="text-blue-200 text-xs sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
