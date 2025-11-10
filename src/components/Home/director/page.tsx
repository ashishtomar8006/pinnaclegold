"use client";

import { ArrowRight, Quote, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function DirectorSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24">
      <div className="absolute inset-0 pointer-events-none">
        {/* subtle background pattern */}
        <div className="h-full w-full opacity-40 bg-[radial-gradient(circle_at_top,_#e5f0ff_0,_transparent_50%),radial-gradient(circle_at_bottom,_#fef3c7_0,_transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Copy */}
          <div className="space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-sage-700 shadow-sm">
              <ArrowRight className="w-4 h-4" />
              <span>From the Director&apos;s Desk</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                The Pinnacle:{" "}
                <span className="text-sage-700">
                  Built for Power &amp; Prestige.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                STJ Group is inspired by the idea of “Shop to Joy” — the simple
                yet powerful emotion every customer feels when they invest in
                something meaningful. We began with a vision to create spaces
                that offer real value while celebrating individuality and taste.
              </p>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                We made our mark in the market with our first jewellery brand,
                <span className="font-semibold"> Saraf – The Jewellers</span>,
                where STJ quickly became a trusted name. As we grew, we
                recognised that people don&apos;t just look for products — they
                look for lasting investments. That insight naturally led us to
                the world of real estate development.
              </p>

              <p>
                During one of our journeys along the Airport Road corridor, a
                thought struck us: this road is not just a route, it&apos;s the
                future spine of the city. Its strategic location and direct
                connectivity to the airport made it a high-potential investment
                zone. We realised this stretch could become a major catalyst for
                Tricity&apos;s growth and development.
              </p>
            </div>

          </div>

          {/* RIGHT: Director + image */}
          <div className="relative">
            {/* Image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900/5">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="/images/hero/banner3.jpg"
                  alt="The Pinnacle by STJ Group"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Director Card */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Mr. Anil Goyal
                  </h3>
                  <p className="text-sm font-medium text-sage-700">
                    Founder &amp; CMD, STJ Group
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center rounded-full bg-sage-50 border border-sage-100 p-3">
                  <Quote className="w-5 h-5 text-sage-600" />
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                “We envision STJ as a future-ready group that continuously
                brings innovative, customer-oriented projects to life. Our goal
                is to build a brand that people can effortlessly trust — a name
                that stands for integrity, quality, and long-term value.”
              </p>

              {/* Contact / CTA row (optional, but very real-estate-ish) */}
              {/* <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Talk to our team
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+911234567890"
                    className="inline-flex items-center gap-2 rounded-full bg-sage-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sage-700 transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call Sales
                  </a>
                  <a
                    href="mailto:info@stjgroup.com"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-sage-500 hover:text-sage-700 transition"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="space-y-5 pt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          <p>
            That spark gave birth to{" "}
            <span className="font-semibold">Mohali Citi Centre–I</span>, our
            first commercial project. The overwhelming response we received
            strengthened our belief and encouraged us to expand with multiple
            projects in the same category. Today, STJ stands as one of the most
            preferred names in commercial real estate.
          </p>

          <p>
            Building on this success, we are now stepping into influential
            residential and industrial developments. With every upcoming
            residential project, our aim is to redefine luxury — not as an
            overused word, but as a carefully crafted experience that feels
            unique, elevated, and truly personal.
          </p>

          <p>
            At the heart of STJ is a{" "}
            <span className="font-semibold">customer-centric philosophy</span>.
            We promise only what we can deliver — and we deliver it with
            integrity. Our commitment is simple: to be a name that people can
            rely on, to honour their trust, and to always give our best, no
            matter the circumstances.
          </p>

          <div className="border-l-4 border-sage-500 pl-4 text-sm sm:text-base text-slate-700 italic">
            “For us, real estate is not just about buildings — it&apos;s about
            building confidence, legacy, and long-term value.”
          </div>
        </div>
      </div>
    </section>
  );
}
