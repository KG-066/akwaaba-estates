import { Building2, Landmark, Trees, Briefcase, Eye, Handshake, MapPinned, Scale } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import CallToAction from '../components/CallToAction.jsx'
import '../styles/home.css'
import '../styles/properties.css'
import '../styles/about.css'

const offerings = [
  { icon: Building2, title: 'Residential sales', text: 'Apartments, townhouses, houses and villas.' },
  { icon: Landmark, title: 'Rentals', text: 'Furnished and unfurnished homes, monthly or annual.' },
  { icon: Trees, title: 'Land', text: 'Residential plots for building or investment.' },
  { icon: Briefcase, title: 'Commercial space', text: 'Offices and premises for growing businesses.' },
]

const values = [
  {
    icon: Eye,
    title: 'Clarity first',
    text: 'Plain-language descriptions, upfront prices and no surprises along the way.',
  },
  {
    icon: Handshake,
    title: 'Respect for your time',
    text: 'We shortlist carefully so you view fewer, better-matched properties.',
  },
  {
    icon: MapPinned,
    title: 'Rooted in Ghana',
    text: 'A practical understanding of Accra, Tema and the areas that shape daily life.',
  },
  {
    icon: Scale,
    title: 'Integrity',
    text: 'Honest advice, including when a property is not the right fit for you.',
  },
]

const steps = [
  {
    title: 'Listen',
    text: 'We start with your goals, budget, preferred areas and timeline, so every suggestion has a reason.',
  },
  {
    title: 'Shortlist',
    text: 'We match you with properties worth your time and explain the trade-offs between them.',
  },
  {
    title: 'Guide',
    text: 'From viewings to the final decision, you get clear next steps and a single point of contact.',
  },
]

export default function About() {
  usePageTitle(
    'About Us',
    'Learn about AKWAABA ESTATES, a demonstration real estate brand showing how premium property services for Ghana can look online.'
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--light">About Us</p>
          <h1>Find Your Place in Ghana.</h1>
          <p>
            A property brand built around clarity, local knowledge and calm, personal service.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="container about-story">
          <div className="about-story__text">
            <p className="eyebrow">Our story</p>
            <h2 id="story-title" className="section__title">Property with a human touch</h2>
            <p>
              AKWAABA ESTATES takes its name from the Akan word for &ldquo;welcome&rdquo;. It reflects
              the way we believe property should feel: warm, open and unhurried, whether you are buying a
              family home, renting your first apartment or investing for the long term.
            </p>
            <p>
              We combine careful research with honest conversation. Our aim is to help clients across
              Accra, Tema and beyond make confident decisions, with clear information and a team that
              treats every enquiry as personal.
            </p>
          </div>

          <aside className="about-panel" aria-label="What we offer">
            <h3 className="about-panel__title">What we offer</h3>
            <ul className="about-panel__list">
              {offerings.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="values-title">
        <div className="container">
          <div className="section__head section__head--center">
            <div>
              <p className="eyebrow">Our values</p>
              <h2 id="values-title" className="section__title">What guides our work</h2>
            </div>
          </div>

          <ul className="why-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="why-card">
                <span className="why-card__icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
                <h3 className="why-card__title">{title}</h3>
                <p className="why-card__text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section__head section__head--center">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 id="process-title" className="section__title">A simple, three-step approach</h2>
              <p className="section__intro">
                No pressure and no jargon, just a clear path from first conversation to the right property.
              </p>
            </div>
          </div>

          <ol className="steps">
            {steps.map(({ title, text }) => (
              <li key={title} className="step">
                <h3 className="step__title">{title}</h3>
                <p className="step__text">{text}</p>
              </li>
            ))}
          </ol>

          <p className="demo-notice">
            <strong>Demonstration website:</strong> AKWAABA ESTATES is a fictional brand created to show
            how a premium property website can look and work. The company, its services and all listings
            are not real.
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
