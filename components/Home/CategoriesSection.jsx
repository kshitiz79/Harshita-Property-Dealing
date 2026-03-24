import Link from 'next/link'

const CATEGORIES = [
  {
    title: 'Villas',
    emoji: '🏡',
    desc: 'Luxury independent villas with private gardens and premium amenities.',
    color: 'from-blue-500 to-blue-700',
    type: 'Villa',
  },
  {
    title: 'Apartments',
    emoji: '🏢',
    desc: 'Modern flats in gated societies with world-class facilities.',
    color: 'from-teal-500 to-teal-700',
    type: 'Flat',
  },
  {
    title: 'Commercial',
    emoji: '🏗️',
    desc: 'Grade-A office spaces and retail shops in prime business hubs.',
    color: 'from-slate-500 to-slate-700',
    type: 'Commercial',
  },
  {
    title: 'Plots',
    emoji: '🌿',
    desc: 'Residential and commercial plots with clear titles and legal approvals.',
    color: 'from-green-500 to-green-700',
    type: 'Plot',
  },
]

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Browse By</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Property Categories</h2>
          <p className="text-gray-500 mt-2 text-sm">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={`/#properties`}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${cat.color} p-6 sm:p-8 flex flex-col items-center text-center text-white`}>
                <span className="text-4xl sm:text-5xl mb-3">{cat.emoji}</span>
                <h3 className="font-bold text-lg sm:text-xl mb-2">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed hidden sm:block">{cat.desc}</p>
                <span className="mt-4 text-xs font-semibold bg-white/20 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-blue-700 transition-colors">
                  View All →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
