/**
 * Services.jsx
 * Services page listing detailed service offerings and countries served
 * Key features: expandable service panels, countries list, contact CTA
 * Used on: /services
 */

import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  FiUserCheck,
  FiBookOpen,
  FiMic,
  FiAward,
  FiFileText,
  FiDollarSign,
  FiHome,
  FiAirplay,
} from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

const servicesDetailed = [
  {
    title: 'Personalised Guidance',
    icon: <FiUserCheck className="h-8 w-8" />,
    description:
      'One-on-one counseling sessions to understand your academic background, career aspirations, and personal preferences. We craft a customized roadmap tailored to your profile.',
  },
  {
    title: 'University and Course Shortlisting',
    icon: <FiBookOpen className="h-8 w-8" />,
    description:
      'Access to 100+ partner universities worldwide. We evaluate curriculum, fees, location, and outcomes to shortlist the right-fit institutions for you.',
  },
  {
    title: 'Interview Preparation and Training',
    icon: <FiMic className="h-8 w-8" />,
    description:
      'Mock interviews, communication coaching, and personalized feedback sessions that build confidence for university admissions panels.',
  },
  {
    title: 'Scholarship Support and Application Assistance',
    icon: <FiAward className="h-8 w-8" />,
    description:
      'Identify scholarships, refine essays, and maximize your chances of securing financial aid through strategic guidance.',
  },
  {
    title: 'Visa Documentation and Processing Support',
    icon: <FiFileText className="h-8 w-8" />,
    description:
      'Comprehensive support for documentation, forms, interview prep, and submission with up-to-date visa regulation expertise.',
  },
  {
    title: 'Forex Guidance and Currency Exchange',
    icon: <FiDollarSign className="h-8 w-8" />,
    description:
      'Expert advice on forex planning, remittances, and exchange partners so you can manage finances confidently.',
  },
  {
    title: 'Private Student Accommodation Support',
    icon: <FiHome className="h-8 w-8" />,
    description:
      'Secure safe, comfortable housing near your university. We evaluate amenities, budgets, and proximity for peace of mind.',
  },
  {
    title: 'Flight Ticket Booking at Affordable Rates',
    icon: <FiAirplay className="h-8 w-8" />,
    description:
      'Curated travel plans with partnered agencies offering competitive fares, flexible schedules, and pre-departure guidance.',
  },
]

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', blurb: 'World-class universities, rich history' },
  { name: 'United States', flag: '🇺🇸', blurb: 'Top-ranked institutions, diverse opportunities' },
  { name: 'Europe', flag: '🇪🇺', blurb: 'Affordable education, cultural diversity' },
  { name: 'New Zealand', flag: '🇳🇿', blurb: 'High quality of life, innovative programs' },
  { name: 'Australia', flag: '🇦🇺', blurb: 'Excellent education system, welcoming culture' },
  { name: 'UAE', flag: '🇦🇪', blurb: 'Emerging education hub, strategic location' },
]

/**
 * Services
 * Shows full breakdown of services and supported countries
 */
const Services = () => {
  // Index of the currently expanded service panel (-1 = none)
  const [activeIndex, setActiveIndex] = useState(0)
  // Section reveal refs for animated entrance
  const [heroRef, heroControls] = useReveal()
  const [servicesRef, servicesControls] = useReveal()
  const [countriesRef, countriesControls] = useReveal()
  const [ctaRef, ctaControls] = useReveal()

  return (
    <div className="bg-white text-primary">
      <Helmet>
        <title>Services | PrimeFuture Education</title>
        <meta
          name="description"
          content="Explore premium study abroad services from PrimeFuture Education, covering counseling, admissions, accommodation, visa, and travel."
        />
      </Helmet>

      <Motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroControls}
        className="px-6 pb-16 pt-32 text-center"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Home &gt; Services</p>
        <h1 className="mt-6 text-4xl font-semibold">Our Services</h1>
        <p className="mt-4 text-primary/80">Comprehensive Support for Your Study Abroad Journey</p>
      </Motion.section>

      <Motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={servicesControls}
        className="px-6 pb-16"
      >
        {/* ===== SECTION: Services Breakdown ===== */}
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-primary/5 p-8">
            {servicesDetailed.map((service, index) => {
              const panelId = `service-panel-${index}`
              const controlId = `service-control-${index}`
              return (
                <div key={service.title} className="border-b border-primary/10 py-6 last:border-none">
                  <button
                    type="button"
                    id={controlId}
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={panelId}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-primary">{service.icon}</span>
                      <span className="text-lg font-semibold">{service.title}</span>
                    </div>
                    <span className="text-2xl font-semibold">{activeIndex === index ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <Motion.p
                        id={panelId}
                        key="content"
                        role="region"
                        aria-labelledby={controlId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 text-primary/80"
                      >
                        {service.description}
                      </Motion.p>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </Motion.section>

      <Motion.section
        ref={countriesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={countriesControls}
        className="bg-primary text-white"
      >
        {/* ===== SECTION: Countries We Serve ===== */}
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Global Reach</p>
          <h2 className="mt-4 text-3xl font-semibold">Global Destinations We Cover</h2>
          <p className="mt-2 text-white/70">We specialize in placements across six major study destinations</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <article key={country.name} className="rounded-3xl border border-white/20 p-8 transition hover:-translate-y-2">
                <div className="text-4xl">{country.flag}</div>
                <h3 className="mt-4 text-2xl font-semibold">{country.name}</h3>
                <p className="mt-2 text-white/80">{country.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaControls}
        className="px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-semibold">Interested in any of these services?</h2>
        <p className="mt-4 text-primary/80">Let’s tailor a solution that matches your ambitions.</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white"
        >
          Get in Touch
        </Link>
      </Motion.section>
    </div>
  )
}

export default Services

