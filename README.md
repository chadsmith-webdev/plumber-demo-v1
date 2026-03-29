# Razorback Plumbing Co. — Demo Site

A bold, modern plumber website demo built with **HTML5, CSS3, and vanilla JavaScript**. Uses Donald Miller's **StoryBrand framework** to position the homeowner as the hero and the plumber as the guide. Designed as a demo for **Local Search Ally** targeting the plumber niche in Northwest Arkansas.

## Live Demo

Deploy to Netlify (drag-and-drop the folder, or connect the repo) and visit the live site.

## Pages

| Page     | File            | Description                                                                                             |
| -------- | --------------- | ------------------------------------------------------------------------------------------------------- |
| Home     | `index.html`    | StoryBrand hero, problem, guide, plan, services overview, stakes, testimonials, service areas, FAQ, CTA |
| Services | `services.html` | 6 detailed plumbing services with alternating layouts                                                   |
| About    | `about.html`    | Company story, values, team placeholders, credentials                                                   |
| Contact  | `contact.html`  | Display-only contact form, business info, hours, map placeholder                                        |

## Tech Stack

- **HTML5** semantic markup
- **CSS3** custom properties, grid, flexbox, clamp(), scroll animations
- **Vanilla JS** — mobile nav, FAQ accordion, IntersectionObserver scroll reveals, sticky header
- **Google Fonts** — Outfit (headings) + DM Sans (body)
- **No frameworks or dependencies**

## SEO & Schema

- Complete `LocalBusiness` (Plumber) schema on homepage
- `FAQPage` schema with 6 questions
- `BreadcrumbList` on every inner page
- `Service` + `OfferCatalog` on services page
- `AboutPage` and `ContactPage` schemas
- Geo meta tags, Open Graph, Twitter Cards, canonical URLs
- `robots.txt` and `sitemap.xml` included

## Colors

| Token      | Hex       | Usage                                 |
| ---------- | --------- | ------------------------------------- |
| Navy       | `#0f2b46` | Primary brand, headers, dark sections |
| Orange     | `#f26522` | CTAs, accents, urgency                |
| Blue Light | `#7bafd4` | Secondary accent                      |
| BG Light   | `#f5f7fa` | Alternating section backgrounds       |

## File Structure

```
├── index.html
├── services.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── netlify.toml
├── robots.txt
├── sitemap.xml
└── README.md
```

## Customization

1. **Business Info** — Search and replace `Razorback Plumbing Co.`, phone `(479) 555-0142`, address, email across all HTML files
2. **Images** — Replace the `<div class="img-placeholder">` elements with actual `<img>` tags. Each placeholder describes the recommended photo
3. **Colors** — Edit the CSS custom properties in `:root` at the top of `css/styles.css`
4. **Contact Form** — The form is display-only. Add a Netlify Forms `netlify` attribute, or connect Formspree/custom backend
5. **Service Areas** — Update city lists in `index.html` and `contact.html`
6. **Schema** — Update the JSON-LD blocks in each page's `<head>` with real business data
7. **Domain** — Replace `razorbackplumbingco.com` in canonical URLs, sitemap, and schema

## Deployment (Netlify)

1. Push this folder to a Git repo, or drag-and-drop into Netlify
2. The included `netlify.toml` handles security headers, caching, and redirects
3. Update `sitemap.xml` canonical URLs to the live domain
4. Add a custom domain in Netlify settings

## Credits

Built by [Local Search Ally](https://localsearchally.com)
