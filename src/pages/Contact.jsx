import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { buildWhatsAppLink } from '../data/site.js'
import '../styles/properties.css'
import '../styles/contact.css'

export default function Contact() {
  usePageTitle(
    'Contact Us',
    'Contact AKWAABA ESTATES (demonstration site) to ask about homes, rentals, land and commercial property in Ghana.'
  )

  const whatsappLink = buildWhatsAppLink(
    'Hello AKWAABA ESTATES, I would like to ask about your properties. (Demonstration site)'
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--light">Contact Us</p>
          <h1>Let&rsquo;s talk property</h1>
          <p>
            Tell us what you are looking for and we will help you find the right place. This is a
            demonstration website, so the details below are placeholders.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Contact details and enquiry form">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2 className="section__title">Get in touch</h2>
            <p className="contact-info__intro">
              Ask about viewings, availability, pricing or investment opportunities. A real business
              would reply here within one working day.
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true"><MapPin size={20} /></span>
                <span>
                  <span className="contact-item__label">Office</span>
                  <span className="contact-item__value">Demonstration address, Accra, Ghana</span>
                </span>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true"><Phone size={20} /></span>
                <span>
                  <span className="contact-item__label">Phone</span>
                  <span className="contact-item__value">+233 00 000 0000</span>
                  <span className="contact-item__hint">Placeholder number</span>
                </span>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true"><Mail size={20} /></span>
                <span>
                  <span className="contact-item__label">Email</span>
                  <span className="contact-item__value">hello@akwaabaestates.example</span>
                  <span className="contact-item__hint">Placeholder address</span>
                </span>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true"><Clock size={20} /></span>
                <span>
                  <span className="contact-item__label">Opening hours</span>
                  <span className="contact-item__value">Mon to Fri, 8:30am to 5:30pm</span>
                  <span className="contact-item__hint">Saturday viewings by appointment</span>
                </span>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true"><MessageCircle size={20} /></span>
                <span>
                  <span className="contact-item__label">WhatsApp</span>
                  <span className="contact-item__value">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Start a WhatsApp chat
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </span>
                </span>
              </li>
            </ul>

            <p className="contact-note">
              <strong>Demonstration website:</strong> AKWAABA ESTATES is fictional. The phone number,
              email and address above are placeholders and do not belong to a real business.
            </p>
          </div>

          <EnquiryForm
            heading="Send us an enquiry"
            note="Demonstration site: submitting does not send a message. Your details stay in your browser only."
          />
        </div>
      </section>
    </>
  )
}
