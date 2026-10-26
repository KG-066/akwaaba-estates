import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="AKWAABA ESTATES home">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="12" fill="currentColor" className="logo__tile" />
        <path
          d="M32 14 12 32h6v18h28V32h6L32 14Z"
          fill="none"
          stroke="#C5A46D"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M26 50V38h12v12" fill="none" stroke="#C5A46D" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">AKWAABA</span>
        <span className="logo__sub">ESTATES</span>
      </span>
    </Link>
  )
}
