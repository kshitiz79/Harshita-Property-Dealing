import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/Contactus/ContactForm'

export const metadata = {
  title: 'Contact Us – DelhiNCR Homes',
  description:
    'Get in touch with DelhiNCR Homes. Submit your property requirement and our experts will help you find the perfect home in Delhi, Noida, Ghaziabad, or Gurgaon.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-700 to-teal-600 py-12 px-4 text-center text-white">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Submit your requirement and our property experts will reach out within 24 hours.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Send an Enquiry</h2>
            <p className="text-gray-500 text-sm mb-6">Fill in the details below and we'll get back to you.</p>
            <ContactForm />
          </div>

          {/* Contact Details + Map */}
          <div className="flex flex-col gap-6">
            {/* Details Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Contact Details</h2>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@delhincrhomes.com" className="text-blue-600 hover:underline">
                      info@delhincrhomes.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Office Address</p>
                    <p className="text-gray-500 leading-relaxed">
                      Plot No. 12, Sector 18,<br />
                      Noida, Uttar Pradesh – 201301
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Working Hours</p>
                    <p className="text-gray-500">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <iframe
                title="DelhiNCR Homes Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3261!3d28.5706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
