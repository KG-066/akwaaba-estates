import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PropertyGallery({ images, name, location }) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const go = (next) => setIndex((next + total) % total)
  const altFor = (i) => `${name} in ${location}, photo ${i + 1} of ${total}`

  return (
    <div className="gallery" aria-label={`Photo gallery for ${name}`}>
      <div className="gallery__main">
        <img
          key={images[index]}
          src={images[index]}
          alt={altFor(index)}
          width="1200"
          height="800"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              className="gallery__nav gallery__nav--prev"
              onClick={() => go(index - 1)}
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery__nav gallery__nav--next"
              onClick={() => go(index + 1)}
              aria-label="Next photo"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </>
        )}

        <p className="gallery__count" role="status" aria-live="polite">
          Photo {index + 1} of {total}
        </p>
      </div>

      {total > 1 && (
        <ul className="gallery__thumbs">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                className={`gallery__thumb${i === index ? ' gallery__thumb--active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1} of ${total}`}
                aria-current={i === index ? 'true' : undefined}
              >
                <img src={src} alt="" width="400" height="267" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
