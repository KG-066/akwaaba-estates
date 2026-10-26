# AKWAABA ESTATES

A premium real estate website for a **fictional** Ghanaian brand, built as a demonstration.
All properties, prices, contact details and company information are fictional and not real offers.

**Tagline:** Find Your Place in Ghana.

## Tech stack

- React (JavaScript) with Vite
- React Router
- Lucide React icons
- Standard responsive CSS (no CSS framework)
- No backend or database: listings live in `src/data/properties.js`

## Features

- Homepage with hero search, featured listings, categories, locations and enquiry call to action
- 12 demonstration listings with working filters, sorting and URL-based search
- Property detail pages with gallery, specifications, amenities, enquiry form, WhatsApp button and similar properties
- Favourites saved in the browser with `localStorage`
- Validated enquiry forms (they do not send anything, because there is no backend)
- About, Contact and custom 404 pages
- Per-page titles and SEO metadata; site marked `noindex` while content is fictional

## Getting started

```bash
npm install
npm run dev
```

Build and preview a production version:

```bash
npm run build
npm run preview
```

## Configuration

Edit `src/data/site.js`:

- `WHATSAPP_NUMBER`: international format, digits only (for example `233244123456`)
- `ALLOW_INDEXING`: set to `true` only when building a real site for a real client

## Replacing the placeholder images

Add real photos to `public/images/properties/` using the same filenames, then set `IMAGE_EXT`
in `src/data/properties.js` to match (for example `'jpg'`).
