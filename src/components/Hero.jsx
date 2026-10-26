import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin, Home, BedDouble, Tag } from 'lucide-react'
import { LOCATIONS, PROPERTY_TYPES } from '../data/properties.js'

export default function Hero() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ location: '', type: '', status: '', beds: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(form).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const query = params.toString()
    navigate(query ? `/properties?${query}` : '/properties')
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">AKWAABA ESTATES</p>
          <h1 id="hero-title" className="hero__title">Find Your Place in Ghana.</h1>
          <p className="hero__text">
            Discover exceptional homes and investment properties across Accra, Tema and beyond, from
            elegant family villas to modern city apartments.
          </p>
        </div>

        <form className="search-card" onSubmit={handleSubmit} aria-label="Property search">
          <div className="search-card__field">
            <label htmlFor="hero-location">
              <MapPin size={16} aria-hidden="true" /> Location
            </label>
            <select id="hero-location" name="location" value={form.location} onChange={handleChange}>
              <option value="">All locations</option>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="search-card__field">
            <label htmlFor="hero-type">
              <Home size={16} aria-hidden="true" /> Property type
            </label>
            <select id="hero-type" name="type" value={form.type} onChange={handleChange}>
              <option value="">All types</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="search-card__field">
            <label htmlFor="hero-status">
              <Tag size={16} aria-hidden="true" /> Buy or rent
            </label>
            <select id="hero-status" name="status" value={form.status} onChange={handleChange}>
              <option value="">Buy or rent</option>
              <option value="sale">For sale</option>
              <option value="rent">For rent</option>
            </select>
          </div>

          <div className="search-card__field">
            <label htmlFor="hero-beds">
              <BedDouble size={16} aria-hidden="true" /> Bedrooms
            </label>
            <select id="hero-beds" name="beds" value={form.beds} onChange={handleChange}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <button type="submit" className="btn btn--gold search-card__submit">
            <Search size={18} aria-hidden="true" /> Search
          </button>
        </form>

        <p className="hero__note">
          Demonstration website: all listings shown are fictional and not real offers.
        </p>
      </div>
    </section>
  )
}
