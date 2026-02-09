"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1EB] border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center h-16 md:h-20">
            {/* Left nav items */}
            <div className="hidden md:flex items-center gap-6 justify-start">
              <a
                href="#mission"
                className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
              >
                Mission
              </a>
              <a
                href="#founder"
                className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
              >
                Founder
              </a>
            </div>

            {/* Mobile: empty left space */}
            <div className="md:hidden" />

            {/* Center logo */}
            <div className="flex justify-center">
              <a href="#">
                <Image
                  src="/swlogo.png"
                  alt="Same Waves"
                  width={80}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center justify-end">
              <a
                href="#connect"
                className="hidden md:block bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background image - blurred, organic blob shape (hidden on mobile) */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none mt-12">
          <div 
            className="w-[55%] lg:w-[45%] aspect-[16/10] blur-md opacity-30"
            style={{
              backgroundImage: "url('/hero-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70% 30% 60% 40% / 40% 70% 30% 60%",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[1.15] tracking-tight">
            Same Waves turns
            <br />
            neurodivergent youth into
            <br />
            <span className="italic">connected communities</span>
            <sup className="text-base md:text-lg align-super ml-1 text-[#999]">[1]</sup>
          </h1>

          {/* Tagline */}
          <p className="mt-10 font-serif text-xl md:text-2xl text-[#666] italic">
            Different minds. Same wave.
          </p>

          {/* Footnote */}
          <div className="mt-16 max-w-md mx-auto text-left">
            <p className="text-sm text-[#666] leading-relaxed font-serif italic">
              [1] &quot;A connected community is one where you&apos;re understood
              without explanation — where your mind isn&apos;t something to fix,
              but something to find company in.&quot;
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500"
          style={{ opacity: scrollY > 100 ? 0 : 1 }}
        >
          <svg
            className="w-6 h-6 text-[#999] animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* Mission Section */}
      <section id="mission" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#999] mb-8 font-sans">
            The Mission
          </p>

          <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
            Same Waves is a community for neurodivergent young people to feel
            understood — to know that it&apos;s okay to be different, and that
            different is something to embrace.
          </p>

          <p className="font-serif text-xl md:text-2xl text-[#666] leading-relaxed mt-8">
            It&apos;s about learning to be comfortable in your own skin. Finding
            people who get it without explanation. And realizing you were never
            alone in the first place.
          </p>

          <blockquote className="mt-12 pl-6 border-l-2 border-[#1a1a1a]">
            <p className="font-serif text-lg md:text-xl text-[#666] italic leading-relaxed">
              &quot;Know all the theories, master all the techniques, but as you
              touch a human soul be just another human soul.&quot;
            </p>
            <cite className="block mt-4 text-sm text-[#999] not-italic">
              — C.G. Jung
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#999] mb-8 font-sans">
            The Founder
          </p>

          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Rory Green
          </h2>

          <p className="font-serif text-lg md:text-xl text-[#666] leading-relaxed">
            I&apos;m the founder of{" "}
            <a
              href="https://aquaedge.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] underline hover:no-underline"
            >
              AquaEdge
            </a>
            , the AI teaching platform where students have voice-to-voice
            conversations with Phil — our AI teacher who remembers how they
            learn and helps them go from struggling to understanding.
          </p>

          <p className="font-serif text-lg md:text-xl text-[#666] leading-relaxed mt-4">
            I&apos;m also a student at Bishop England. I&apos;m working on these projects
            to change learning and work forever — and to help kids like me feel
            understood.
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://rorygreen.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#666] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              rorygreen.co
            </a>

            <a
              href="mailto:greenl.rory@gmail.com"
              className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#666] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="connect" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif italic text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            It&apos;s never too early to reach out.
          </p>

          <p className="font-serif text-lg md:text-xl text-[#666] mb-12 max-w-md mx-auto">
            Neurodivergent youth. There&apos;s
            a place for you.
          </p>

          <a
            href="mailto:greenl.rory@gmail.com"
            className="inline-block bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#333] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#e5e0d8]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/swlogo.png"
            alt="Same Waves"
            width={60}
            height={30}
            className="h-6 w-auto"
          />
          <p className="text-sm text-[#999]">samewaves.org</p>
          <p className="text-sm text-[#999]">
            © {new Date().getFullYear()} Same Waves
          </p>
        </div>
      </footer>
    </div>
  )
}
