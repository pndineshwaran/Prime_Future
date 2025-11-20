/**
 * Terms.jsx
 * Terms of use page for PrimeFuture Education
 * Used on: /terms
 */

import { Helmet } from "react-helmet"

/**
 * Terms
 * Static content describing terms and disclaimers
 */
const Terms = () => (
  <div className="bg-white px-6 py-20 text-primary">
    <Helmet>
      <title>Terms of Use | PrimeFuture Education</title>
    </Helmet>
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-semibold">Terms of Use</h1>
      <p className="text-primary/80">
        By accessing PrimeFuture Education’s website and services, you agree to the following terms and conditions.
      </p>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Advisory Scope</h2>
        <p className="text-primary/80">
          Our guidance is based on professional expertise and the information you provide. Final admissions decisions rest with the respective institutions.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Intellectual Property</h2>
        <p className="text-primary/80">
          All content, branding, and materials on this site are owned by PrimeFuture Education and cannot be reused without written consent.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p className="text-primary/80">
          While we strive for accuracy, PrimeFuture is not liable for external delays, policy changes, or third-party decisions affecting admissions.
        </p>
      </section>
    </div>
  </div>
)

export default Terms

