/**
 * Sitemap.jsx
 * Simple sitemap page linking to main site sections
 * Used on: /sitemap
 */

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const sitemapLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
]
const Sitemap = () => (
  <div className="bg-white px-6 py-20 text-primary">
    <Helmet>
      <title>Sitemap | PrimeFuture Education</title>
    </Helmet>
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-semibold">Sitemap</h1>
      <p className="text-primary/80">Quickly navigate through all key areas of our website.</p>
      <ul className="space-y-4 text-lg">
        {sitemapLinks.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="underline decoration-2 decoration-primary/30 hover:decoration-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Sitemap

