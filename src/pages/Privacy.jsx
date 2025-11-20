/**
 * Privacy.jsx
 * Privacy policy content for PrimeFuture Education
 * Used on: /privacy
 */

import { Helmet } from "react-helmet"

/**
 * Privacy
 * Static page describing how user data is handled
 */
const Privacy = () => (
  <div className="bg-white px-6 py-20 text-primary">
    <Helmet>
      <title>Privacy Policy | PrimeFuture Education</title>
    </Helmet>
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="text-primary/80">
        We value your privacy and protect any personal information you share with us. This policy explains how we collect, use, and
        safeguard your details throughout the counseling journey.
      </p>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p className="text-primary/80">
          Contact details, academic records, and application documents shared voluntarily for the purpose of admissions guidance.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How We Use Your Data</h2>
        <p className="text-primary/80">
          To deliver personalized counseling, manage applications, coordinate interviews, and share relevant updates with partner
          institutions.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p className="text-primary/80">
          You may request access, corrections, or deletion of your data at any time by emailing primefutureeducation@gmail.com.
        </p>
      </section>
    </div>
  </div>
)

export default Privacy

