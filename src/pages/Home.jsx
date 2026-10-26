import usePageTitle from '../hooks/usePageTitle.js'
import Hero from '../components/Hero.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import Categories from '../components/Categories.jsx'
import PopularLocations from '../components/PopularLocations.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import CallToAction from '../components/CallToAction.jsx'
import '../styles/home.css'

export default function Home() {
  usePageTitle(
    null,
    'Discover exceptional homes and investment properties across Ghana with AKWAABA ESTATES (demonstration site).'
  )

  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Categories />
      <PopularLocations />
      <WhyChooseUs />
      <CallToAction />
    </>
  )
}
