import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroImg from "@/assets/hero.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import livingImg from "@/assets/living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import exteriorImg from "@/assets/exterior.jpg";

import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bentley Apartments — Luxury Homestay in Prishtina" },
      {
        name: "description",
        content:
          "Bentley Apartments in Prishtina — a 4.7-star boutique homestay with spacious suites, whirlpool baths, and warm local hospitality moments from Mother Teresa Boulevard.",
      },
      { property: "og:title", content: "Bentley Apartments — Luxury Homestay in Prishtina" },
      {
        property: "og:description",
        content:
          "A 4.7-star homestay in the heart of Prishtina. Spacious apartments, city views, and hospitality that feels like home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reviews = [
  {
    rating: 5,
    when: "a month ago",
    source: "Google",
    text: "Feeling like you are in Monaco, but with a view of Pristina! Living at Bentley Apartments is an experience in itself. The architecture and design make you feel like you have bought a piece of the French Riviera.",
  },
  {
    rating: 5,
    when: "a month ago",
    source: "Google",
    text: "A perfect blend of classic elegance and modern functionality. Bentley in Pristina is not just an apartment complex, but a style statement. Large windows flood the spaces with natural light.",
  },
  {
    rating: 5,
    when: "a year ago",
    source: "Google",
    text: "My girls and I can't wait to come back. The apartment was very clean and exactly as shown. Lots of options to shop, hairdresser and nail studio within a 2 minute walk.",
  },
  {
    rating: 5,
    when: "a year ago",
    source: "Tripadvisor",
    text: "Location is good — 10 minutes walk to Mother Teresa Boulevard. My apartment was spacious 120 square meters with good views. Balcony was pleasant. Living room was comfortable.",
  },
  {
    rating: 5,
    when: "3 years ago",
    source: "Google",
    text: "Bentley Apartments are the best you can get in Pristina. Well equipped with washing machine, dishwasher, whirlpool — no wish remains unsatisfied. The landlord is always there to help.",
  },
  {
    rating: 5,
    when: "4 years ago",
    source: "Google",
    text: "The staff go above and beyond. Osi as the owner is always there in seconds if one needs anything. Highly recommended to anyone who wants to have a good time in Prishtina.",
  },
  {
    rating: 5,
    when: "9 months ago",
    source: "Google",
    text: "Very clean and met our expectations. The host was very friendly and always available. Parking was available and secure.",
  },
  {
    rating: 5,
    when: "7 years ago",
    source: "Tripadvisor",
    text: "Spacious 135 square meters and super modern with a great design. They lack nothing and are spotlessly clean.",
  },
];

const nearby = [
  { name: "Urban Boutique Hotel Prishtina", price: 34, rating: 4.6, count: 38, dist: "0.1 mi" },
  { name: "Hotel Begolli", price: 61, rating: 4.1, count: 175, dist: "0.3 mi" },
  { name: "Vetus Hotel", price: 71, rating: 4.8, count: 130, dist: "0.3 mi" },
  { name: "Etnomania Boutique Hotel", price: 74, rating: 4.9, count: 141, dist: "0.4 mi" },
  { name: "Hotel Prima", price: 59, rating: 4.6, count: 203, dist: "0.5 mi" },
  { name: "Garden Downtown Prishtina", price: 73, rating: 4.5, count: 163, dist: "0.4 mi" },
];

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1z" />
    </svg>
  );
}

function Index() {
  const root = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [reviewIdx, setReviewIdx] = useState(0);

  useGSAP(
    () => {
      if (heroTitleRef.current) {
        const words = heroTitleRef.current.querySelectorAll("[data-w]");
        gsap.from(words, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.2,
        });
      }

      gsap.from("[data-hero-meta]", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1,
        ease: "power3.out",
      });

      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 20,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: heroImgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        const children = el.querySelectorAll("[data-item]");
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      const pinSection = document.querySelector<HTMLElement>("[data-pin-gallery]");
      const pinTrack = document.querySelector<HTMLElement>("[data-pin-track]");
      if (pinSection && pinTrack) {
        const scrollAmount = pinTrack.scrollWidth - window.innerWidth;
        gsap.to(pinTrack, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: pinSection,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      if (marqueeRef.current) {
        const inner = marqueeRef.current.querySelector<HTMLElement>("[data-marquee-inner]");
        if (inner) {
          gsap.to(inner, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
        }
      }

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals);
          },
        });
      });
    },
    { scope: root },
  );

  const nextReview = () => setReviewIdx((i) => (i + 1) % reviews.length);
  const prevReview = () => setReviewIdx((i) => (i - 1 + reviews.length) % reviews.length);

  const titleWords = ["Bentley", "Apartments"];

  return (
    <>
      <ReactLenis root />
      <div ref={root} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/40 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="font-display text-3xl italic text-gold leading-none">B</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bentley · Prishtina</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <a href="#about" className="hover:text-gold transition-colors">The Residence</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Suites</a>
          <a href="#reviews" className="hover:text-gold transition-colors">Guests</a>
          <a href="#book" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a
          href="#book"
          className="text-[10px] uppercase tracking-[0.3em] border border-gold/50 text-gold px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
        >
          Reserve
        </a>
      </nav>

      <section className="relative h-screen w-full overflow-hidden grain">
        <img
          ref={heroImgRef}
          src={heroImg}
          alt="Bentley Apartments interior at golden hour"
          width={1920}
          height={1200}
          className="absolute inset-0 h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24">
          <div data-hero-meta className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            <span className="h-px w-10 bg-gold" />
            <span>Est. Homestay · Prishtina, Kosovo</span>
          </div>
          <h1
            ref={heroTitleRef}
            className="font-display text-[18vw] md:text-[11vw] leading-[0.9] text-cream"
          >
            {titleWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.15em] pb-2">
                <span data-w className="inline-block italic font-light">{w}</span>
              </span>
            ))}
          </h1>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <p data-hero-meta className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
              A quiet address moments from Mother Teresa Boulevard. Spacious residences, whirlpool baths, and hospitality that makes a stay feel personal.
            </p>
            <div data-hero-meta className="flex items-center gap-6">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-gold">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  4.7 · 43 reviews
                </div>
              </div>
              <a
                href="#book"
                className="group relative flex items-center gap-3 border border-gold px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-gold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative group-hover:text-ink transition-colors">Check Availability</span>
                <span className="relative group-hover:text-ink transition-colors">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div ref={marqueeRef} className="border-y border-border py-6 overflow-hidden bg-background">
        <div data-marquee-inner className="flex whitespace-nowrap font-display italic text-4xl md:text-6xl text-gold-soft/70">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center">
              {["Homestay", "Whirlpool Suites", "City Views", "Free Cancellation", "120m² Residences", "Warm Hospitality"].map((t) => (
                <span key={t} className="mx-10 flex items-center gap-10">
                  {t}
                  <span className="text-gold text-2xl not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="px-6 md:px-16 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter I</p>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream">
              A quiet<br /><em className="text-gold">luxury</em><br />in the city.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <p data-reveal className="text-lg text-muted-foreground leading-relaxed">
              Tucked up a small side road next to A-Zhushi restaurant, Bentley Apartments is a hidden address for travellers who want more room to breathe. Suites open onto private balconies with unobstructed views of Prishtina, and the owner Osi is always a message away.
            </p>
            <p data-reveal className="text-lg text-muted-foreground leading-relaxed">
              Ten minutes on foot to Mother Teresa Boulevard, moments from supermarkets, cafés, and the pulse of the city — but far enough from it to sleep well.
            </p>

            <div data-stagger className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div data-item>
                <div className="font-display text-5xl text-gold">
                  <span data-count="4.7" data-decimals="1">0.0</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Guest rating</div>
              </div>
              <div data-item>
                <div className="font-display text-5xl text-gold">
                  <span data-count="43">0</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Reviews</div>
              </div>
              <div data-item>
                <div className="font-display text-5xl text-gold">
                  <span data-count="120">0</span>
                  <span className="text-xl ml-1">m²</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Suite size</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-pin-gallery id="gallery" className="relative h-screen overflow-hidden">
        <div data-pin-track className="flex h-full items-center gap-8 pl-6 md:pl-16 pr-[50vw]">
          <div className="shrink-0 w-[80vw] md:w-[40vw]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">— The Suites</p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-cream">
              Rooms<br /><em className="text-gold">from</em><br />visitors.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-sm">
              Scroll horizontally through the residence. Each space is fully equipped: washing machine, dishwasher, whirlpool, and views that pay for themselves.
            </p>
          </div>

          {[
            { img: livingImg, title: "The Living Room", meta: "Balcony · City View" },
            { img: bedroomImg, title: "Master Bedroom", meta: "Sleeps 2 · Blackout" },
            { img: bathroomImg, title: "Whirlpool Bath", meta: "Marble · Rain shower" },
            { img: kitchenImg, title: "Full Kitchen", meta: "Dishwasher · Espresso" },
            { img: exteriorImg, title: "The Facade", meta: "Quiet street · Parking" },
          ].map((s, i) => (
            <figure key={s.title} className="shrink-0 w-[75vw] md:w-[35vw] h-[70vh] relative overflow-hidden grain">
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">0{i + 1}</div>
                  <div className="font-display text-3xl text-cream mt-1">{s.title}</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right">{s.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 md:py-48 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter II</p>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream">
              Ten minutes<br />from the <em className="text-gold">boulevard.</em>
            </h2>
            <div data-stagger className="mt-12 space-y-6">
              {[
                { k: "Check-in", v: "2:00 PM" },
                { k: "Check-out", v: "11:00 AM" },
                { k: "From Agoda", v: "$82 / night" },
                { k: "Cancellation", v: "Free until Sep 3" },
              ].map((row) => (
                <div key={row.k} data-item className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{row.k}</span>
                  <span className="font-display text-2xl text-cream">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="relative aspect-[4/5] overflow-hidden grain">
            <img src={exteriorImg} alt="Bentley Apartments building at dusk" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream">
              <span className="h-px w-8 bg-gold" />
              Prishtina · Kosovo
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="px-6 md:px-16 py-32 md:py-48 border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter III</p>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream max-w-xl">
              What guests <em className="text-gold">say.</em>
            </h2>
          </div>
          <div data-reveal className="flex items-center gap-6">
            <div className="font-display text-7xl text-gold">4.7</div>
            <div>
              <div className="flex items-center gap-1 text-gold">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Based on 43 Google reviews
              </div>
            </div>
          </div>
        </div>

        <div data-reveal className="relative border-t border-b border-border py-16 md:py-24 mb-20">
          <div className="text-gold font-display text-8xl leading-none mb-6 italic">"</div>
          <blockquote key={reviewIdx} className="font-display italic text-3xl md:text-5xl leading-tight text-cream max-w-4xl animate-fade-in">
            {reviews[reviewIdx].text}
          </blockquote>
          <div className="mt-10 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {reviews[reviewIdx].source} · {reviews[reviewIdx].when}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={prevReview} className="w-12 h-12 border border-border hover:border-gold hover:text-gold transition-colors text-cream" aria-label="Previous">←</button>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                {String(reviewIdx + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
              <button onClick={nextReview} className="w-12 h-12 border border-border hover:border-gold hover:text-gold transition-colors text-cream" aria-label="Next">→</button>
            </div>
          </div>
        </div>

        <div data-stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((r, i) => (
            <article key={i} data-item className="border border-border p-8 hover:border-gold/60 transition-colors bg-muted/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} />)}
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{r.source}</span>
              </div>
              <p className="text-cream/90 leading-relaxed line-clamp-6">{r.text}</p>
              <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{r.when}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="book" className="relative h-[90vh] overflow-hidden grain">
        <img src={livingImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">— Reserve your stay</p>
          <h2 data-reveal className="font-display text-6xl md:text-9xl leading-[0.9] text-cream max-w-5xl">
            Come <em className="text-gold">home</em><br />to Bentley.
          </h2>
          <p data-reveal className="mt-10 max-w-lg text-muted-foreground">
            Check in Sun, Sep 6 · Check out Mon, Sep 7. Free cancellation until September 3.
          </p>
          <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="bg-gold text-ink px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-gold-soft transition-colors">
              Check Availability · $82
            </a>
            <a href="#" className="border border-gold/50 text-gold px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-colors">
              Compare Prices
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-16 border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="font-display text-4xl text-gold italic">Bentley Apartments</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Prishtina · Kosovo · Homestay
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Bentley · All rights reserved
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
