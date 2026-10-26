import { ShieldCheck, Compass, Users, KeyRound } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Transparent and trustworthy',
    text: 'Clear pricing, honest descriptions and straightforward guidance at every step of your search.',
  },
  {
    icon: Compass,
    title: 'Local market knowledge',
    text: 'Deep familiarity with Accra, Tema and the neighbourhoods that matter, from East Legon to Spintex.',
  },
  {
    icon: Users,
    title: 'Personal, attentive service',
    text: 'A dedicated advisor who listens to your needs, budget and timeline before suggesting a single property.',
  },
  {
    icon: KeyRound,
    title: 'Homes and investments',
    text: 'Residences, rentals, land and commercial space, whether you are settling in or building a portfolio.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section section--alt" aria-labelledby="why-title">
      <div className="container">
        <div className="section__head section__head--center">
          <div>
            <p className="eyebrow">Why AKWAABA ESTATES</p>
            <h2 id="why-title" className="section__title">A calmer, clearer way to find property</h2>
            <p className="section__intro">
              Buying or renting should feel considered, not stressful. Here is what we aim for with every
              client.
            </p>
          </div>
        </div>

        <ul className="why-grid">
          {reasons.map(({ icon: Icon, title, text }) => (
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
  )
}
