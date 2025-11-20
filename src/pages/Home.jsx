/**
 * Home.jsx
 * Landing page for PrimeFuture with hero, company brief, leadership, metrics, services, testimonials and CTA
 * Key features: hero video, animated sections, services grid, testimonials carousel, contact CTA
 * Used on: / (Home route)
 */

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FiCheckCircle,
  FiCompass,
  FiGlobe,
  FiUser,
  FiShield,
  FiTarget,
  FiHome,
  FiAirplay,
  FiAward,
  FiMic,
  FiBookOpen,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Helmet } from "react-helmet";
import { useReveal } from "../hooks/useReveal";

const services = [
  {
    title: "Personalised Guidance",
    icon: <FiUser className="h-10 w-10" aria-hidden="true" />,
    description: "Based on student profile and career goals",
  },
  {
    title: "University Shortlisting",
    icon: <FiBookOpen className="h-10 w-10" aria-hidden="true" />,
    description: "Find the perfect institution for your aspirations",
  },
  {
    title: "Interview Preparation",
    icon: <FiMic className="h-10 w-10" aria-hidden="true" />,
    description: "Professional training for admission interviews",
  },
  {
    title: "Scholarship Support",
    icon: <FiAward className="h-10 w-10" aria-hidden="true" />,
    description: "Application assistance for financial aid",
  },
  {
    title: "Visa Processing",
    icon: <FiShield className="h-10 w-10" aria-hidden="true" />,
    description: "Complete documentation and visa support",
  },
  {
    title: "Forex Guidance",
    icon: <FiCompass className="h-10 w-10" aria-hidden="true" />,
    description: "Currency exchange assistance",
  },
  {
    title: "Accommodation",
    icon: <FiHome className="h-10 w-10" aria-hidden="true" />,
    description: "Private student housing support",
  },
  {
    title: "Flight Booking",
    icon: <FiAirplay className="h-10 w-10" aria-hidden="true" />,
    description: "Affordable ticket arrangements",
  },
];

const testimonials = [
  {
    name: "Ananya Patel",
    quote: "PrimeFuture made my dream of studying in the UK a reality!",
  },
  {
    name: "Rahul Verma",
    quote: "Excellent guidance throughout the entire process.",
  },
  {
    name: "Shruti Menon",
    quote: "Professional, reliable, and genuinely caring team.",
  },
  {
    name: "Jonathan Lee",
    quote: "Their mentorship and support were invaluable from day one.",
  },
];

const leaderImages = {
  "Sathesh Kumar": "/image/sathesh-kumar.jpg",
  "Bharath Raj J": "/image/bharath-raj.jpg",
};

/**
 * Home
 * Main landing page component
 * Features: hero video, company brief, leadership, success metrics, services grid, testimonials carousel, final CTA
 */
const Home = () => {
  // Router helpers used to navigate or read location state
  const location = useLocation();
  const navigate = useNavigate();

  // Section reveal controls (custom hook) to trigger animations when sections enter viewport
  // [companyRef] - ref for company brief section
  const [companyRef, companyControls] = useReveal();
  // [leadershipRef] - ref for leadership section
  const [leadershipRef, leadershipControls] = useReveal();
  // [servicesRef] - ref for services grid
  const [servicesRef, servicesControls] = useReveal();
  // [testimonialsRef] - ref for testimonials carousel
  const [testimonialsRef, testimonialsControls] = useReveal();
  // [finalCtaRef] - ref for the final call-to-action section
  const [finalCtaRef, finalCtaControls] = useReveal();

  // Metrics section visibility (for CountUp) - only animate once when in view
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Scroll position and parallax transform for hero content
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 400], [0, 80]);

  // If navigation included a `scrollTo` target in state, scroll there on mount
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, "", location.pathname);
      }
    }
  }, [location]);

  // When user clicks 'Start Your Journey', scroll to contact CTA if present, otherwise navigate to Contact page
  const handleJourneyClick = () => {
    const target = document.getElementById("contact-cta");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      <Helmet>
        <title>PrimeFuture Education | Shape Your Future Globally</title>
        <meta
          name="description"
          content="Leading study abroad consultancy offering end-to-end support, leadership guidance, success metrics, services, and testimonials."
        />
      </Helmet>
      <div>
        {/* ===== SECTION 1: Loading Screen ===== */}
        {/* Note: Loading handled globally in App; Home begins with hero. */}

        {/* ===== SECTION 2: Hero Carousel ===== */}
        <section id="hero" className="relative flex min-h-screen -mt-16 pt-16 items-center justify-center overflow-hidden bg-primary text-white">
          {/* Hero image sources */}
          <Motion.div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              effect="fade"
              speed={800}
              className="h-full"
            >
              {[
                "/image/hero-1.jpg",
                "/image/hero-2.jpg",
                "/image/hero-3.jpg",
                "/image/hero-4.jpg",
                "/image/hero-5.jpg",
              ].map((src, idx) => (
                <SwiperSlide key={src}>
                  <div className="relative h-screen w-full">
                    <img src={src} alt={`Hero ${idx + 1}`} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" aria-hidden="true" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Motion.div>

          {/* Overlayed text content (z-10) retained from original hero */}
          <Motion.div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center" style={{ y: heroParallax }}>
            <Motion.p className="text-sm font-semibold tracking-[0.5em]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Shape Your Future Globally
            </Motion.p>
            {/* Responsive heading - mobile: text-4xl, tablet: text-5xl, desktop: text-6xl */}
            <Motion.h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Leading Study Abroad Consultancy
            </Motion.h1>
            <Motion.p className="mt-6 text-lg text-white/80" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              We guide students to success abroad with end-to-end support.
            </Motion.p>
            <Motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <button type="button" onClick={handleJourneyClick} className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition hover:scale-105">
                Start Your Journey
              </button>
              <Link to="/about" className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10">
                Learn More
              </Link>
            </Motion.div>
          </Motion.div>

          {/* Pagination bullet styling tweaks */}
          <style>{`
            .swiper-pagination-bullet { background-color: #211E61 !important; opacity: 0.6; width: 10px; height: 10px; }
            .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.4); }
          `}</style>
        </section>

        {/* ===== SECTION 3: Company Brief ===== */}

        <Motion.section
          ref={companyRef}
          initial={{ opacity: 0, y: 40 }}
          animate={companyControls}
          className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row"
        >
          <div className="flex-1 rounded-3xl bg-primary/5 p-4 text-center text-primary">
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border-4 border-primary/20 bg-white/70">
              <img
                src="/image/logo.jpg"
                alt="PrimeFuture office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
              Why Choose PrimeFuture?
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">
              We guide students to success abroad with end-to-end support for
              their studies in top global destinations.
            </h2>
            <p className="mt-6 text-primary/80">
              Our premium consultancy delivers transparent processes, expert
              mentors, and unwavering commitment to every student journey.
            </p>
            <button
              type="button"
              className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              onClick={() => navigate("/about")}
            >
              Learn More About Us
            </button>
          </div>
        </Motion.section>

        {/* ===== SECTION 4: Leadership Team ===== */}

        <Motion.section
          ref={leadershipRef}
          initial={{ opacity: 0, y: 40 }}
          animate={leadershipControls}
          className="bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Leadership
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-primary">
                Meet Our Leadership
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Sathesh Kumar",
                  title: "Founder",
                  description:
                    "Visionary leader with 10+ years in international education.",
                },
                {
                  name: "Bharath Raj J",
                  title: "Chief Executive Officer",
                  description:
                    "Driving excellence in student guidance and success.",
                },
              ].map((leader) => (
                <Motion.article
                  key={leader.name}
                  className="rounded-3xl bg-white p-8 text-center text-primary shadow-elevation transition hover:-translate-y-2"
                >
                  <img
                    src={
                      leader.name === "Sathesh Kumar"
                        ? "/image/sathesh-kumar.jpg"
                        : "/image/bharath-raj.jpg"
                    }
                    alt={`${leader.name} portrait`}
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="mt-6 text-2xl font-semibold">{leader.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-primary/60">
                    {leader.title}
                  </p>
                  <p className="mt-4 text-primary/80">{leader.description}</p>
                </Motion.article>
              ))}
            </div>
          </div>
        </Motion.section>

        {/* ===== SECTION 5: Success Metrics ===== */}

        <section className="bg-primary text-white" ref={metricsRef}>
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 text-center sm:grid-cols-3">
            {[
              {
                label: "Students Sent Abroad",
                value: 500,
                suffix: "+",
                icon: <FiUser className="mx-auto h-10 w-10" />,
              },
              {
                label: "Success Rate",
                value: 98,
                suffix: "%",
                icon: <FiCheckCircle className="mx-auto h-10 w-10" />,
              },
              {
                label: "Partner Universities",
                value: 100,
                suffix: "+",
                icon: <FiTarget className="mx-auto h-10 w-10" />,
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center gap-4"
              >
                {metric.icon}
                <div className="text-5xl font-semibold">
                  {metricsInView ? (
                    <CountUp
                      end={metric.value}
                      duration={2}
                      suffix={metric.suffix}
                    />
                  ) : (
                    `0${metric.suffix}`
                  )}
                </div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/80">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 6: Services Grid ===== */}

        <Motion.section
          ref={servicesRef}
          initial={{ opacity: 0, y: 40 }}
          animate={servicesControls}
          className="bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-primary">
                Our Comprehensive Services
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/*
                Service cards animation:
                - Entrance: each card animates in with a small upward motion (staggered by index).
                - Hover: subtle scale + lift to provide tactile feedback using Framer Motion's `whileHover`.
                - Tap: slight shrink on click with `whileTap` for responsive feel.
                - Accessibility: these remain native `button` elements so keyboard users can focus and activate them.
              */}
              {services.map((service, index) => (
                <Motion.button
                  type="button"
                  key={service.title}
                  onClick={() => navigate("/services")}
                  className="group rounded-3xl bg-white p-8 text-left text-primary shadow-elevation focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -6, boxShadow: "0 12px 30px rgba(33,30,97,0.12)", transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-primary">{service.icon}</div>
                  <h3 className="mt-6 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm text-primary/80">
                    {service.description}
                  </p>
                </Motion.button>
              ))}
            </div>
          </div>
        </Motion.section>

        {/* ===== SECTION 7: Reviews Carousel ===== */}

        <Motion.section
          ref={testimonialsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={testimonialsControls}
          className="bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Testimonials
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-primary">
                What Our Students Say
              </h2>
            </div>
            <div className="mt-12">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.name}>
                    <article className="h-full rounded-3xl bg-primary/5 p-8 text-primary shadow-elevation">
                      <div className="text-4xl text-primary">★★★★★</div>
                      <p className="mt-6 text-primary/80">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-8 text-lg font-semibold">
                        {testimonial.name}
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </Motion.section>

        {/* ===== SECTION 8: Final CTA ===== */}

        <Motion.section
          id="contact-cta"
          ref={finalCtaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={finalCtaControls}
          className="bg-primary text-white"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center">
            <Motion.p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
              Ready to Begin?
            </Motion.p>
            <h2 className="text-4xl font-semibold">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="max-w-3xl text-white/80">
              Let's discuss your goals and create a personalized plan tailored
              to your ambitions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary transition hover:scale-105"
              >
                Contact Us Today
              </button>
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>
          </div>
        </Motion.section>
      </div>
    </>
  );
};

export default Home;
