import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Home/HeroSection'
import FeaturedProperties from '@/components/Home/FeaturedProperties'
import CategoriesSection from '@/components/Home/CategoriesSection'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import CTASection from '@/components/Home/CTASection'

export const metadata = {
  title: 'DelhiNCR Homes – Find Your Dream Property in Delhi NCR',
  description:
    'Explore verified luxury villas, apartments, and plots in Delhi, Noida, Ghaziabad, and Gurgaon. Trusted real estate partner in Delhi NCR.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <FeaturedProperties />
        <CategoriesSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
