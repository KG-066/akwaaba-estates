export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'beds-desc', label: 'Most bedrooms' },
]

export const DEFAULT_FILTERS = {
  location: '',
  type: '',
  status: '',
  minPrice: '',
  maxPrice: '',
  beds: '',
  sort: 'newest',
}

const FILTER_KEYS = Object.keys(DEFAULT_FILTERS)

// Read filters from the URL query string, ignoring anything unexpected.
export function filtersFromParams(searchParams) {
  const filters = { ...DEFAULT_FILTERS }
  FILTER_KEYS.forEach((key) => {
    const value = searchParams.get(key)
    if (value) filters[key] = value
  })
  if (!SORT_OPTIONS.some((o) => o.value === filters.sort)) filters.sort = 'newest'
  if (filters.status !== 'sale' && filters.status !== 'rent') filters.status = ''
  return filters
}

// Only keep non-default values so the URL stays short and tidy.
export function paramsFromFilters(filters) {
  const params = new URLSearchParams()
  FILTER_KEYS.forEach((key) => {
    const value = filters[key]
    if (value && value !== DEFAULT_FILTERS[key]) params.set(key, value)
  })
  return params
}

export function countActiveFilters(filters) {
  return FILTER_KEYS.filter((key) => key !== 'sort' && filters[key] !== '').length
}

function toNumber(value) {
  if (value === '' || value === null || value === undefined) return null
  const n = Number(value)
  return Number.isFinite(n) && n >= 0 ? n : null
}

export function filterProperties(list, filters) {
  const min = toNumber(filters.minPrice)
  const max = toNumber(filters.maxPrice)
  const beds = toNumber(filters.beds)

  const result = list.filter((p) => {
    if (filters.location && p.location !== filters.location) return false
    if (filters.type && p.type !== filters.type) return false
    if (filters.status && p.status !== filters.status) return false
    if (min !== null && p.price < min) return false
    if (max !== null && p.price > max) return false
    if (beds !== null && p.bedrooms < beds) return false
    return true
  })

  const sorted = [...result]
  switch (filters.sort) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'beds-desc':
      sorted.sort((a, b) => b.bedrooms - a.bedrooms || b.price - a.price)
      break
    default:
      sorted.sort((a, b) => b.id - a.id)
  }
  return sorted
}
