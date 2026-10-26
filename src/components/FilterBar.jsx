import { SlidersHorizontal, X } from 'lucide-react'
import { LOCATIONS, PROPERTY_TYPES } from '../data/properties.js'
import { SORT_OPTIONS } from '../utils/filterProperties.js'
import '../styles/properties.css'

export default function FilterBar({ filters, onChange, onClear, activeCount, resultCount }) {
  const handle = (e) => {
    const { name, value } = e.target
    onChange({ [name]: value })
  }

  const showPriceHint = filters.status === '' && (filters.minPrice !== '' || filters.maxPrice !== '')

  return (
    <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Filter properties">
      <div className="filter-bar__head">
        <h2 className="filter-bar__title">
          <SlidersHorizontal size={18} aria-hidden="true" /> Filters
          {activeCount > 0 && <span className="filter-bar__count">{activeCount}</span>}
        </h2>
        <button
          type="button"
          className="filter-bar__clear"
          onClick={onClear}
          disabled={activeCount === 0}
        >
          <X size={16} aria-hidden="true" /> Clear filters
        </button>
      </div>

      <div className="filter-bar__grid">
        <div className="field">
          <label htmlFor="f-location">Location</label>
          <select id="f-location" name="location" value={filters.location} onChange={handle}>
            <option value="">All locations</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-type">Property type</label>
          <select id="f-type" name="type" value={filters.type} onChange={handle}>
            <option value="">All types</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-status">Buy or rent</label>
          <select id="f-status" name="status" value={filters.status} onChange={handle}>
            <option value="">Buy or rent</option>
            <option value="sale">For sale</option>
            <option value="rent">For rent</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-beds">Bedrooms</label>
          <select id="f-beds" name="beds" value={filters.beds} onChange={handle}>
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-min">Min price (GH&#8373;)</label>
          <input
            id="f-min"
            name="minPrice"
            type="number"
            inputMode="numeric"
            min="0"
            step="1000"
            placeholder="No minimum"
            value={filters.minPrice}
            onChange={handle}
          />
        </div>

        <div className="field">
          <label htmlFor="f-max">Max price (GH&#8373;)</label>
          <input
            id="f-max"
            name="maxPrice"
            type="number"
            inputMode="numeric"
            min="0"
            step="1000"
            placeholder="No maximum"
            value={filters.maxPrice}
            onChange={handle}
          />
        </div>

        <div className="field">
          <label htmlFor="f-sort">Sort by</label>
          <select id="f-sort" name="sort" value={filters.sort} onChange={handle}>
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {showPriceHint && (
        <p className="filter-bar__hint">
          Tip: sale prices and rents are very different amounts. Choose &ldquo;For sale&rdquo; or
          &ldquo;For rent&rdquo; for a more useful price range.
        </p>
      )}

      <p className="filter-bar__results" role="status" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'property' : 'properties'} found
      </p>
    </form>
  )
}
