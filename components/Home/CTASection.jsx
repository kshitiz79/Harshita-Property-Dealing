import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed">
          Submit your requirement and our experts will find the perfect property for you — completely free of charge.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors shadow-lg hover:shadow-blue-200"
        >
          Submit Your Requirement →
        </Link>
        <p className="text-gray-400 text-xs mt-4">No spam. We'll reach out within 24 hours.</p>
      </div>
    </section>
  )
}
