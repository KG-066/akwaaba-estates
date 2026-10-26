import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'akwaaba-favourites'
const listeners = new Set()
let cache = null

function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function getSnapshot() {
  if (cache === null) cache = read()
  return cache
}

function write(next) {
  cache = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Storage unavailable (private mode or full): favourites still work until the page closes.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener) {
  listeners.add(listener)
  const onStorage = (event) => {
    if (event.key === STORAGE_KEY) {
      cache = read()
      listener()
    }
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export default function useFavourites() {
  const favourites = useSyncExternalStore(subscribe, getSnapshot)

  const toggle = useCallback((slug) => {
    const current = getSnapshot()
    write(current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug])
  }, [])

  const isFavourite = useCallback((slug) => favourites.includes(slug), [favourites])

  return { favourites, isFavourite, toggle }
}
