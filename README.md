# Yadav Sanitation — Corporate Website

Premium, responsive corporate website for **Yadav Sanitation** (fire protection & security
systems, heavy engineering, MEP and commercial project execution).

## Stack

- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Site structure

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/services` | Services (both divisions) |
| `/services/fire-protection` | Division 01 — Fire Protection & Security Systems |
| `/services/heavy-engineering` | Division 02 — Heavy Engineering |
| `/projects` | Project portfolio with filters |
| `/industries` | Industries we serve |
| `/contact` | Enquiry form & contact details |

## Where to update content

Almost all editable content lives in two files:

- **`src/lib/content.js`** — services, divisions, industries, projects, process steps,
  why-choose cards, tender capabilities, navigation, **contact details** and the
  **project-category list** used by the contact form.
- **`src/lib/images.js`** — every image URL on the site (hero, services, industries,
  projects). Replace the URLs with the client's own photos, or drop files into
  `public/images/` and reference them as `"/images/your-photo.jpg"`.

### Swapping in the real brand assets

| What | Where |
| --- | --- |
| Logo | Drop `logo.png` (or `logo.svg`) into `public/images/` — it is picked up automatically. Optional `logo-light.png` for the dark footer. See `public/images/README.txt` |
| Logo component | `src/components/Logo.jsx` (`LogoMark` + wordmark) |
| Favicon | `public/favicon.svg` |
| Contact phone / email / WhatsApp / address | `src/lib/content.js` → `contactInfo` |
| Google Maps | `src/pages/Contact.jsx` → replace the map placeholder block with the embed `<iframe>` |
| Projects | `src/lib/content.js` → `projects` (placeholder entries until verified data is supplied) |
| Social links | `src/components/Footer.jsx` → `socials` |
| Page titles / meta | `src/components/Seo.jsx` (per-page props) + `index.html` |

Placeholder content is intentionally used wherever real client information was not
supplied — no client names, certifications, statistics, awards or locations have been
invented. Replace placeholders only with verified information.

## Design system

Defined in `tailwind.config.js` and `src/index.css`:

| Token | Value |
| --- | --- |
| Primary accent | `#1687D9` |
| Deep blue | `#075A96` |
| Typography | `#111827` |
| Secondary text | `#64748B` |
| Surfaces | `#FFFFFF`, `#F5FAFD`, `#E4F4FF`, `#C8E8FA` |
| Border | `#D9E7F0` |
| Footer navy | `#08192B` |

## SEO

- Per-page `<title>`, meta description, canonical and Open Graph tags via `Seo`
- Semantic landmarks (`header`, `main`, `section`, `nav`, `footer`), one `h1` per page
- Descriptive `alt` text on all imagery
- Local-business `Organization` JSON-LD in `index.html`

## Notes

- Images load from Unsplash / Pexels CDNs as placeholders and degrade to an on-brand
  SVG placeholder if a URL ever fails, so nothing renders broken.
- The contact form validates and shows a success state on the client only — connect the
  submit handler in `src/pages/Contact.jsx` to an email/CRM endpoint when available.
