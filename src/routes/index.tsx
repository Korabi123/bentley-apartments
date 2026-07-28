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
import {
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Navigation,
  Bath,
  Car,
  Wifi,
  Tv,
  Utensils,
  Shirt,
  Wind,
  Coffee,
  Sparkles,
  ShieldCheck,
  Clock,
  Compass,
  Star as StarIcon,
} from "lucide-react";

import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/gp9Go8iEHJ6JpA2i8";
const EXACT_ADDRESS = "Rruga Omer Nishani 7, 10000 Prishtina, Kosovo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bentley Apartments — Luxury Homestay in Prishtina, Kosovo" },
      {
        name: "description",
        content:
          "Bentley Apartments at Rruga Omer Nishani 7, Prishtina. 4.7★ Google rated boutique suites featuring whirlpool baths, city views, free parking, and 24/7 host support.",
      },
      { property: "og:title", content: "Bentley Apartments — Luxury Homestay in Prishtina" },
      {
        property: "og:description",
        content:
          "4.7★ rated homestay on Google Maps. Rruga Omer Nishani 7, Prishtina — 10 min walk to Mother Teresa Boulevard with whirlpool suites & private balconies.",
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
    source: "Google Maps",
    text: "Feeling like you are in Monaco, but with a view of Pristina! Living at Bentley Apartments is an experience in itself. The architecture and design make you feel like you have bought a piece of the French Riviera.",
  },
  {
    rating: 5,
    when: "a month ago",
    source: "Google Maps",
    text: "A perfect blend of classic elegance and modern functionality. Bentley in Pristina is not just an apartment complex, but a style statement. Large windows flood the spaces with natural light.",
  },
  {
    rating: 5,
    when: "a year ago",
    source: "Google Maps",
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
    source: "Google Maps",
    text: "Bentley Apartments are the best you can get in Pristina. Well equipped with washing machine, dishwasher, whirlpool — no wish remains unsatisfied. The landlord is always there to help.",
  },
  {
    rating: 5,
    when: "4 years ago",
    source: "Google Maps",
    text: "The staff go above and beyond. Osi as the owner is always there in seconds if one needs anything. Highly recommended to anyone who wants to have a good time in Prishtina.",
  },
  {
    rating: 5,
    when: "9 months ago",
    source: "Google Maps",
    text: "Very clean and met our expectations. The host was very friendly and always available. Parking was available and secure.",
  },
  {
    rating: 5,
    when: "7 years ago",
    source: "Tripadvisor",
    text: "Spacious 135 square meters and super modern with a great design. They lack nothing and are spotlessly clean.",
  },
];

const landmarks = [
  {
    name: "Mother Teresa Boulevard",
    dist: "0.7 km · 10 min walk",
    type: "Pedestrian Promenade",
    desc: "Prishtina's central avenue with vibrant cafés, dining, and open-air cultural spaces.",
  },
  {
    name: "Emin Gjiku Ethnographic Museum",
    dist: "0.4 km · 6 min walk",
    type: "Historic Site",
    desc: "Preserved 18th-century Ottoman architecture and traditional Kosovar heritage exhibitions.",
  },
  {
    name: "Skanderbeg Statue & Square",
    dist: "0.6 km · 8 min walk",
    type: "City Square",
    desc: "Iconic landmark square hosting civic events and Government buildings.",
  },
  {
    name: "Sultan Fatih Mosque (Imperial Mosque)",
    dist: "0.5 km · 7 min walk",
    type: "Historical Landmark",
    desc: "Built in 1461 by Sultan Mehmed II, showcasing grand classical Islamic architecture.",
  },
  {
    name: "Prishtina Main Bus Terminal",
    dist: "3.2 km · 8 min drive",
    type: "Transit Hub",
    desc: "Direct regional and international coach connections to neighboring cities.",
  },
  {
    name: "Pristina International Airport (PRN)",
    dist: "18 km · 25 min drive",
    type: "Airport",
    desc: "Adem Jashari International Airport with direct flights across Europe.",
  },
];

const amenities = [
  {
    icon: Bath,
    title: "Whirlpool Bath & Hydrotherapy",
    desc: "Deep hydrotherapy tub in marble-finished bathroom with rain shower.",
  },
  {
    icon: Car,
    title: "Free On-Site Secure Parking",
    desc: "Dedicated safe parking space directly at the building property.",
  },
  {
    icon: Sparkles,
    title: "Private Balcony & City Vistas",
    desc: "Unobstructed high-angle views of Prishtina's cityscape & sunsets.",
  },
  {
    icon: Utensils,
    title: "Gourmet Kitchen & Dishwasher",
    desc: "Full oven, stovetop, refrigerator, dishwasher & coffee station.",
  },
  {
    icon: Shirt,
    title: "In-Suite Laundry & Iron",
    desc: "Private washing machine, drying rack, and clothing iron.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi & Smart TV",
    desc: "Fast fiber wireless connection & large screen entertainment.",
  },
  {
    icon: Wind,
    title: "Climate Control & Heating",
    desc: "Individual air-conditioning and full winter heating system.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Host Hospitality",
    desc: "Direct contact with owner Osi for prompt assistance & local tips.",
  },
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
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(EXACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream">Bentley · Prishtina</span>
              <span className="text-[9px] text-gold/80 tracking-widest hidden sm:inline">Rruga Omer Nishani 7</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <a href="#about" className="hover:text-gold transition-colors">The Residence</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Suites</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
            <a href="#amenities" className="hover:text-gold transition-colors">Amenities</a>
            <a href="#reviews" className="hover:text-gold transition-colors">Google Reviews</a>
            <a href="#book" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-cream border border-border px-3 py-2 hover:border-gold hover:text-gold transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 text-gold" />
            </a>
            <a
              href="#book"
              className="text-[10px] uppercase tracking-[0.3em] border border-gold/50 text-gold px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
            >
              Reserve
            </a>
          </div>
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
            <div data-hero-meta className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gold mb-6 flex-wrap">
              <span className="h-px w-10 bg-gold" />
              <span>Est. Homestay · Rruga Omer Nishani 7 · Prishtina</span>
              <span className="bg-gold/10 border border-gold/30 text-gold px-2.5 py-0.5 rounded-full text-[9px] flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Google Verified Location
              </span>
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
                A quiet address at Rruga Omer Nishani 7, moments from Mother Teresa Boulevard. 120–135m² luxury suites, whirlpool baths, and host hospitality that makes a stay feel like home.
              </p>
              <div data-hero-meta className="flex items-center gap-6 flex-wrap">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right group cursor-pointer"
                >
                  <div className="flex items-center justify-end gap-1 text-gold">
                    {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-gold transition-colors flex items-center justify-end gap-1">
                    <span>4.7 · 43 Google Reviews</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </div>
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 border border-gold px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-gold overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative group-hover:text-ink transition-colors flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> Direct on Google Maps
                  </span>
                  <span className="relative group-hover:text-ink transition-colors">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div ref={marqueeRef} className="border-y border-border py-6 overflow-hidden bg-background">
          <div data-marquee-inner className="flex whitespace-nowrap font-display italic text-4xl md:text-6xl text-gold-soft/70">
            {[0, 1].map((n) => (
              <div key={n} className="flex items-center">
                {[
                  "Rruga Omer Nishani 7",
                  "4.7★ Google Verified",
                  "Whirlpool Bath Suites",
                  "Free Secure Parking",
                  "120-135m² Residences",
                  "10 Min Walk to Boulevard",
                  "24/7 Owner Hospitality",
                ].map((t) => (
                  <span key={t} className="mx-10 flex items-center gap-10">
                    {t}
                    <span className="text-gold text-2xl not-italic">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Chapter I */}
        <section id="about" className="px-6 md:px-16 py-32 md:py-48">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter I</p>
              <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream">
                A quiet<br /><em className="text-gold">sanctuary</em><br />in Prishtina.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-8">
              <p data-reveal className="text-lg text-muted-foreground leading-relaxed">
                Situated on <strong className="text-cream font-medium">Rruga Omer Nishani 7</strong> next to A-Zhushi restaurant, Bentley Apartments offers a refined residential address for travellers seeking space, privacy, and distinction.
              </p>
              <p data-reveal className="text-lg text-muted-foreground leading-relaxed">
                Each 120–135m² luxury suite opens onto private balconies with panoramic city and sunset views. Equipped with whirlpool hydrotherapy baths, full kitchens, and washing facilities — with host Osi dedicated to ensuring your stay is seamless.
              </p>

              <div data-stagger className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
                <div data-item>
                  <div className="font-display text-5xl text-gold">
                    <span data-count="4.7" data-decimals="1">0.0</span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Google rating</div>
                </div>
                <div data-item>
                  <div className="font-display text-5xl text-gold">
                    <span data-count="43">0</span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Reviews</div>
                </div>
                <div data-item>
                  <div className="font-display text-5xl text-gold">
                    <span data-count="135">0</span>
                    <span className="text-xl ml-1">m²</span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Max suite size</div>
                </div>
                <div data-item>
                  <div className="font-display text-5xl text-gold">
                    <span data-count="10">0</span>
                    <span className="text-xl ml-1">min</span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">To Boulevard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Pin Gallery */}
        <section data-pin-gallery id="gallery" className="relative h-screen overflow-hidden">
          <div data-pin-track className="flex h-full items-center gap-8 pl-6 md:pl-16 pr-[50vw]">
            <div className="shrink-0 w-[80vw] md:w-[40vw]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">— The Suites</p>
              <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-cream">
                Spacious<br /><em className="text-gold">sanctuaries</em><br />in town.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-sm">
                Scroll horizontally through our residences. Each space is equipped with hydrotherapy whirlpool, full kitchen, washing machine, dishwasher, and private balcony city views.
              </p>
            </div>

            {[
              { img: livingImg, title: "The Living Room", meta: "Balcony · City Views · 120-135m²" },
              { img: bedroomImg, title: "Master Bedroom", meta: "King Bed · Soundproof · Blackout" },
              { img: bathroomImg, title: "Whirlpool Hydrotherapy Bath", meta: "Jacuzzi · Marble · Rain shower" },
              { img: kitchenImg, title: "Gourmet Kitchen", meta: "Dishwasher · Oven · Coffee Machine" },
              { img: exteriorImg, title: "The Building & Parking", meta: "Rruga Omer Nishani 7 · Secure Parking" },
            ].map((s, i) => (
              <figure key={s.title} className="shrink-0 w-[75vw] md:w-[35vw] h-[70vh] relative overflow-hidden grain border border-border/50">
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

        {/* Chapter II — Location & Google Maps Integration */}
        <section id="location" className="px-6 md:px-16 py-32 md:py-48 border-t border-border">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter II</p>
              <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream">
                Location &<br /><em className="text-gold">Neighborhood.</em>
              </h2>
              <p data-reveal className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Bentley Apartments is located in a quiet, safe residential street just off the main arterial road, giving guests quick 10-minute walking access to Prishtina's lively Mother Teresa pedestrian boulevard while ensuring zero night-time noise.
              </p>

              {/* Address card */}
              <div data-reveal className="mt-8 p-6 border border-border bg-muted/20 backdrop-blur-sm space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">Official Address</div>
                      <div className="text-cream text-base font-sans mt-1">{EXACT_ADDRESS}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">Adjacent to A-Zhushi Restaurant · 10000 Prishtina</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <button
                    onClick={copyAddress}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] border border-border px-4 py-2.5 text-cream hover:border-gold hover:text-gold transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-gold" /> : <Copy className="w-3.5 h-3.5 text-gold" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Address"}</span>
                  </button>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] bg-gold text-ink px-4 py-2.5 font-medium hover:bg-gold-soft transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              </div>

              <div data-reveal className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Check-in Time</span>
                  <span className="font-display text-xl text-cream">From 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Check-out Time</span>
                  <span className="font-display text-xl text-cream">Until 11:00 AM</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Host Response</span>
                  <span className="font-display text-xl text-gold">Under 15 minutes</span>
                </div>
              </div>
            </div>

            {/* Landmark breakdown */}
            <div className="lg:col-span-7">
              <div data-reveal className="flex items-center justify-between mb-8">
                <h3 className="text-sm uppercase tracking-[0.3em] text-gold font-medium">Walking & Driving Distances</h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Sourced from Google Maps</span>
              </div>

              <div data-stagger className="grid sm:grid-cols-2 gap-4">
                {landmarks.map((l) => (
                  <div
                    key={l.name}
                    data-item
                    className="p-6 border border-border bg-muted/20 hover:border-gold/50 transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs text-gold mb-2">
                      <span className="text-[10px] uppercase tracking-[0.25em]">{l.type}</span>
                      <span className="bg-gold/10 border border-gold/30 px-2 py-0.5 rounded text-[10px] text-cream font-medium">
                        {l.dist}
                      </span>
                    </div>
                    <h4 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">{l.name}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
                  </div>
                ))}
              </div>

              {/* Map callout preview */}
              <div data-reveal className="mt-8 relative aspect-[16/9] border border-border overflow-hidden grain group">
                <img
                  src={exteriorImg}
                  alt="Bentley Apartments surroundings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6">
                  <MapPin className="w-10 h-10 text-gold mb-3 animate-bounce" />
                  <h4 className="font-display text-3xl text-cream">Bentley Apartments on Google Maps</h4>
                  <p className="text-xs text-muted-foreground max-w-md mt-2">
                    Get turn-by-turn driving, walking, or public transit directions directly to our front door.
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-2 bg-gold text-ink text-[10px] uppercase tracking-[0.3em] px-6 py-3 hover:bg-gold-soft transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter III — Amenities */}
        <section id="amenities" className="px-6 md:px-16 py-32 md:py-48 border-t border-border">
          <div className="max-w-3xl mb-16">
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter III</p>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream">
              Thoughtful <em className="text-gold">amenities</em><br />for every guest.
            </h2>
            <p data-reveal className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every detail verified by real Google Maps guests — from private hydrotherapy whirlpool tubs to seamless self-catering appliances and dedicated secure parking.
            </p>
          </div>

          <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a) => {
              const IconComp = a.icon;
              return (
                <div
                  key={a.title}
                  data-item
                  className="p-8 border border-border bg-muted/20 hover:border-gold/60 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 border border-border group-hover:border-gold/60 flex items-center justify-center text-gold mb-6 transition-colors bg-background/50">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Chapter IV — Verified Google Reviews */}
        <section id="reviews" className="px-6 md:px-16 py-32 md:py-48 border-t border-border">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter IV</p>
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
                  4.7★ Rating across 43+ Google Reviews
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-[9px] uppercase tracking-[0.25em] text-gold hover:underline flex items-center gap-1"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

          <div data-reveal className="relative border-t border-b border-border py-16 md:py-24 mb-20">
            <div className="text-gold font-display text-8xl leading-none mb-6 italic">"</div>
            <blockquote key={reviewIdx} className="font-display italic text-3xl md:text-5xl leading-tight text-cream max-w-4xl animate-fade-in">
              {reviews[reviewIdx].text}
            </blockquote>
            <div className="mt-10 flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                <span className="text-gold">{reviews[reviewIdx].source}</span>
                <span>·</span>
                <span>{reviews[reviewIdx].when}</span>
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
              <article key={i} data-item className="border border-border p-8 hover:border-gold/60 transition-colors bg-muted/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: r.rating }).map((_, j) => <Star key={j} />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 flex items-center gap-1">
                    {r.source}
                  </span>
                </div>
                <p className="text-cream/90 leading-relaxed line-clamp-6">{r.text}</p>
                <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{r.when}</div>
              </article>
            ))}
          </div>

          <div data-reveal className="mt-12 text-center">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/50 text-gold text-[10px] uppercase tracking-[0.3em] px-8 py-4 hover:bg-gold hover:text-ink transition-colors"
            >
              <span>Read All 43+ Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Chapter V — Booking & Direct Contact */}
        <section id="book" className="relative h-[90vh] overflow-hidden grain">
          <img src={livingImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">— Reserve your stay</p>
            <h2 data-reveal className="font-display text-6xl md:text-9xl leading-[0.9] text-cream max-w-5xl">
              Come <em className="text-gold">home</em><br />to Bentley.
            </h2>
            <p data-reveal className="mt-8 max-w-lg text-muted-foreground text-sm sm:text-base">
              Rruga Omer Nishani 7, 10000 Prishtina, Kosovo. Check-in from 2:00 PM · Check-out until 11:00 AM.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-ink px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-gold-soft transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Google Maps Location</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={copyAddress}
                className="border border-gold/50 text-gold px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-colors flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Address Copied!" : "Copy Full Address"}</span>
              </button>
            </div>
          </div>
        </section>

        <footer className="px-6 md:px-16 py-16 border-t border-border">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <div className="font-display text-4xl text-gold italic">Bentley Apartments</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-cream">
                Rruga Omer Nishani 7 · 10000 Prishtina · Kosovo
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                4.7★ Google Rating (43 Verified Reviews)
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3 text-gold" />
              </a>
              <a href="#about" className="hover:text-gold transition-colors">The Residence</a>
              <a href="#location" className="hover:text-gold transition-colors">Location</a>
              <a href="#amenities" className="hover:text-gold transition-colors">Amenities</a>
              <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-wrap items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground gap-4">
            <div>© {new Date().getFullYear()} Bentley Apartments · All rights reserved</div>
            <div>Prishtina, Kosovo</div>
          </div>
        </footer>
      </div>
    </>
  );
}
