import { Link } from 'react-router-dom'
import { MessageSquare, ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div className="cta__content">
          <p className="eyebrow eyebrow--light">Let&rsquo;s talk</p>
          <h2 id="cta-title" className="cta__title">Ready to find your place?</h2>
          <p className="cta__text">
            Tell us what you are looking for and we will help you shortlist the right properties. This is
            a demonstration site, so no real enquiries are handled.
          </p>
        </div>

        <div className="cta__actions">
          <Link to="/contact" className="btn btn--gold">
            <MessageSquare size={18} aria-hidden="true" /> Make an enquiry
          </Link>
          <Link to="/properties" className="btn btn--ghost">
            Browse properties <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
