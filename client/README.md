# LogiaSpace - React Version

This is the React conversion of the LogiaSpace website (originally a Bootstrap 5 HTML/CSS/JS site).

## Tech Stack
- **React 19** with TypeScript
- **Vite** (build tool & dev server)
- **React Router DOM** (client-side navigation)
- **Bootstrap 5** (styling & layout, preserved from original)
- **EmailJS** (contact/quote/newsletter forms)
- **Font Awesome** + **Bootstrap Icons**

## Project Structure
```
client/
├── index.html          # Entry HTML with meta tags & structured data
├── vite.config.ts      # Vite configuration
├── src/
│   ├── main.tsx        # React entry point
│   ├── index.css       # Custom styles (migrated from css/style.css)
│   ├── types.ts        # TypeScript interfaces
│   ├── App.tsx         # Router & shell layout
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Spinner.tsx
│   │   ├── BackToTop.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── QuoteForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   ├── pages/          # Application pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Service.tsx
│   │   ├── Contact.tsx
│   │   ├── Quote.tsx
│   │   ├── Pricing.tsx
│   │   ├── Features.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Blog.tsx
│   │   └── Detail.tsx
│   └── data/           # JSON data (migrated from /data)
│       ├── services.json
│       ├── team.json
│       ├── testimonials.json
│       └── pricing.json
└── public/
    └── img/            # Image assets
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
cd client
npm install
```

### Development
```bash
npm run dev
```
Then visit `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output goes to `dist/`.

### Preview Production Build
```bash
npm run preview
```

## Routes
| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/contact` | Contact |
| `/quote` | Free Quote |
| `/pricing` | Pricing Plans |
| `/features` | Features |
| `/team` | Team Members |
| `/testimonial` | Testimonials |
| `/blog` | Blog Grid |
| `/detail` | Blog Detail |

## Notes
- The original HTML/CSS/JS site is preserved in the parent `LogiaSpace/` directory.
- Images from the original `img/` folder should be copied to `client/public/img/`.
- EmailJS credentials are configured in `src/components/QuoteForm.tsx`, `ContactForm.tsx`, and `Footer.tsx` via the `handleSubmit` functions (currently simulated). Replace with actual `emailjs.sendForm` calls as needed.
- Bootstrap is loaded via CDN in `index.html`.
