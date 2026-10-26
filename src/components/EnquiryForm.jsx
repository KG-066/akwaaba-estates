import { useId, useState } from 'react'
import { Send, AlertCircle, Info } from 'lucide-react'
import '../styles/forms.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?\d{9,15}$/

function validate(values) {
  const errors = {}

  const name = values.name.trim()
  if (!name) errors.name = 'Please enter your full name.'
  else if (name.length < 2) errors.name = 'Your name must be at least 2 characters.'

  const email = values.email.trim()
  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, for example name@example.com.'

  const phone = values.phone.replace(/[\s\-()]/g, '')
  if (phone && !PHONE_RE.test(phone)) {
    errors.phone = 'Enter a valid phone number using digits only (a leading + is allowed).'
  }

  const message = values.message.trim()
  if (!message) errors.message = 'Please write a short message.'
  else if (message.length < 10) errors.message = 'Your message should be at least 10 characters.'

  return errors
}

export default function EnquiryForm({ propertyName, heading = 'Make an enquiry', note = "Demonstration site: submitting does not send a message. Use the WhatsApp button above to start a real chat." }) {
  const uid = useId()
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyName
      ? `Hello, I am interested in ${propertyName}. Please send me more details.`
      : '',
  })
  const [touched, setTouched] = useState({})
  const [attempted, setAttempted] = useState(false)
  const [reviewed, setReviewed] = useState(false)

  const errors = validate(values)
  const fieldError = (key) => (attempted || touched[key] ? errors[key] : undefined)
  const idOf = (key) => `${uid}-${key}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAttempted(true)
    const firstInvalid = Object.keys(errors)[0]
    if (firstInvalid) {
      document.getElementById(idOf(firstInvalid))?.focus()
      return
    }
    setReviewed(true)
  }

  if (reviewed) {
    return (
      <section className="enquiry" aria-labelledby={`${uid}-title`}>
        <h2 id={`${uid}-title`} className="enquiry__title">{heading}</h2>
        <div className="enquiry-review" role="status">
          <p className="enquiry-review__head">
            <Info size={20} aria-hidden="true" /> Checked, but not sent
          </p>
          <p>
            Your details look valid, but this is a demonstration website with no backend, so your
            message has <strong>not</strong> been sent to anyone.
          </p>
          <dl className="enquiry-review__list">
            <div><dt>Name</dt><dd>{values.name.trim()}</dd></div>
            <div><dt>Email</dt><dd>{values.email.trim()}</dd></div>
            {values.phone.trim() && <div><dt>Phone</dt><dd>{values.phone.trim()}</dd></div>}
            <div><dt>Message</dt><dd>{values.message.trim()}</dd></div>
          </dl>
          <button type="button" className="btn btn--outline btn--sm" onClick={() => setReviewed(false)}>
            Edit enquiry
          </button>
        </div>
      </section>
    )
  }

  const field = (key, label, input, optional = false) => {
    const error = fieldError(key)
    return (
      <div className={`form-field${error ? ' form-field--error' : ''}`}>
        <label htmlFor={idOf(key)}>
          {label} {optional && <span className="form-field__optional">(optional)</span>}
        </label>
        {input(error)}
        {error && (
          <p id={`${idOf(key)}-error`} className="form-field__error">
            <AlertCircle size={16} aria-hidden="true" /> {error}
          </p>
        )}
      </div>
    )
  }

  const common = (key, error) => ({
    id: idOf(key),
    name: key,
    value: values[key],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? `${idOf(key)}-error` : undefined,
  })

  return (
    <section className="enquiry" aria-labelledby={`${uid}-title`}>
      <h2 id={`${uid}-title`} className="enquiry__title">{heading}</h2>
      <p className="enquiry__intro">
        Ask about viewings, availability or pricing. Fields marked required must be completed.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {field('name', 'Full name', (error) => (
          <input type="text" autoComplete="name" required {...common('name', error)} />
        ))}
        {field('email', 'Email address', (error) => (
          <input type="email" autoComplete="email" required {...common('email', error)} />
        ))}
        {field(
          'phone',
          'Phone number',
          (error) => (
            <input type="tel" autoComplete="tel" inputMode="tel" {...common('phone', error)} />
          ),
          true
        )}
        {field('message', 'Message', (error) => (
          <textarea rows="5" maxLength="1000" required {...common('message', error)} />
        ))}

        <button type="submit" className="btn btn--gold enquiry__submit">
          <Send size={18} aria-hidden="true" /> Check my enquiry
        </button>
        <p className="enquiry__note">
          {note}</p>
      </form>
    </section>
  )
}

