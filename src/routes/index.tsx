import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroImg from "@/assets/hero.jpg";

// Suite 1 — The Garden Residence
import s1LivingRoom1 from "@/assets/suites/suite-1/living-room-1.jpg";
import s1LivingRoom2 from "@/assets/suites/suite-1/living-room-2.jpg";
import s1Bedroom from "@/assets/suites/suite-1/bedroom.jpg";
import s1Kitchen from "@/assets/suites/suite-1/kitchen.jpg";
import s1Bathroom from "@/assets/suites/suite-1/bathroom-1.jpg";
import s1BathroomTub from "@/assets/suites/suite-1/bathroom-tub-closeup.jpg";
import s1Property from "@/assets/suites/suite-1/property.jpg";

// Suite 2 — The Skyline Penthouse
import s2LivingRoom1 from "@/assets/suites/suite-2/living-room-1.jpg";
import s2LivingRoom2 from "@/assets/suites/suite-2/living-room-2.jpg";
import s2Bedroom1 from "@/assets/suites/suite-2/bedroom-1.jpg";
import s2Bedroom2 from "@/assets/suites/suite-2/bedroom-2.jpg";
import s2Kitchen1 from "@/assets/suites/suite-2/kitchen-1.jpg";
import s2Kitchen2 from "@/assets/suites/suite-2/kitchen-2.jpg";
import s2DiningTable1 from "@/assets/suites/suite-2/dining-table-1.jpg";
import s2DiningTable2 from "@/assets/suites/suite-2/dining-table-2.jpg";
import s2Balcony1 from "@/assets/suites/suite-2/balcony-1.jpg";
import s2Balcony2 from "@/assets/suites/suite-2/balcony-2.jpg";
import s2Bathroom from "@/assets/suites/suite-2/bathroom-1.jpg";

// Suite 3 — The City View Suite
import s3LivingRoom1 from "@/assets/suites/suite-3/living-room-1.jpg";
import s3LivingRoom2 from "@/assets/suites/suite-3/living-room-2.jpg";
import s3LivingRoom3 from "@/assets/suites/suite-3/living-room-3.jpg";
import s3Bedroom1 from "@/assets/suites/suite-3/bedroom-1.jpg";
import s3Bedroom2 from "@/assets/suites/suite-3/bedroom-2.jpg";
import s3Kitchen from "@/assets/suites/suite-3/kitchen-1.jpg";
import s3Bathroom from "@/assets/suites/suite-3/bathroom-1.jpg";
import s3Balcony from "@/assets/suites/suite-3/balcony-1.jpg";

// Suite 4 — The Grand Terrace Penthouse
import s4LivingRoom1 from "@/assets/suites/suite-4/living-room-1.jpg";
import s4LivingRoom2 from "@/assets/suites/suite-4/living-room-2.jpg";
import s4LivingRoom3 from "@/assets/suites/suite-4/living-room-3.jpg";
import s4LivingRoom4 from "@/assets/suites/suite-4/living-room-4.jpg";
import s4LivingRoom5 from "@/assets/suites/suite-4/living-room-5.jpg";
import s4Bedroom1 from "@/assets/suites/suite-4/bedroom-1.jpg";
import s4Bedroom2 from "@/assets/suites/suite-4/bedroom-2.jpg";
import s4Kitchen1 from "@/assets/suites/suite-4/kitchen-1.jpg";
import s4Kitchen2 from "@/assets/suites/suite-4/kitchen-2.jpg";
import s4DiningTable from "@/assets/suites/suite-4/dining-table-1.jpg";
import s4Bathroom from "@/assets/suites/suite-4/bathroom-1.jpg";
import s4BathroomTub from "@/assets/suites/suite-4/bathroom-tub-closeup.jpg";
import s4Fireplace from "@/assets/suites/suite-4/campfire-living-room.jpg";
import s4Terrace1 from "@/assets/suites/suite-4/terrace-1.jpg";
import s4Terrace2 from "@/assets/suites/suite-4/terrace-2.jpg";

// Suite 5 — The London Bridge Suite
import s5LivingRoom1 from "@/assets/suites/suite-5/living-room-1.jpg";
import s5LivingRoom2 from "@/assets/suites/suite-5/living-room-2.jpg";
import s5LivingRoom3 from "@/assets/suites/suite-5/living-room-3.jpg";
import s5Bedroom from "@/assets/suites/suite-5/bedroom-1.jpg";
import s5Kitchen from "@/assets/suites/suite-5/kitchen-1.jpg";
import s5Bathroom from "@/assets/suites/suite-5/bathroom-1.jpg";
import s5Decor from "@/assets/suites/suite-5/living-room-closeup-decor.jpg";

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
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Building2,
  Users,
  Maximize,
  Bed,
  ChevronLeft,
  ChevronRight,
  Star as StarIcon,
} from "lucide-react";

import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Bentley+Apartments/@42.6698002,21.1710742,17z/data=!4m11!3m10!1s0x13549f7179976ec3:0x1ef52daec0397d0c!5m2!4m1!1i2!8m2!3d42.6698002!4d21.1710742!9m1!1b1!16s%2Fg%2F11nmjrf5hn?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D";
const EXACT_ADDRESS = "Rruga Omer Nishani 7, 10000 Prishtina, Kosovo";
const PHONE_DISPLAY = "+383 45 757 576";
const PHONE_TEL = "+38345757576";
const WHATSAPP_URL = "https://wa.me/38345757576";
const EMAIL_ADDRESS = "bentleyhotel@outlook.com";

const BOOKING_COM_URL = "https://www.booking.com/Share-1qBWpSh";
const AGODA_URL = "https://www.agoda.com/bentley-apartments/hotel/all/pristina-xk.html";
const BED_AND_BREAKFAST_URL = "https://www.bedandbreakfast.eu/en/a/6EUMZsLYq514/bentley-apartments";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bentley Apartments — Luxury Homestay Suites in Prishtina, Kosovo" },
      {
        name: "description",
        content:
          "Bentley Apartments at Rruga Omer Nishani 7, Prishtina. Phone: +383 45 757 576. Explore our Apartment with Hot Tub (120m²), Two-Bedroom Apartment (135m²), One-Bedroom Apartment & Executive Suite.",
      },
      { property: "og:title", content: "Bentley Apartments — Luxury Homestay in Prishtina" },
      {
        property: "og:description",
        content:
          "4.7★ rated homestay on Google Maps & 9.6 on Booking.com. Rruga Omer Nishani 7, Prishtina — whirlpool suites & private balconies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const suiteCategories = [
  {
    id: "garden",
    name: "The Garden Residence",
    tagline: "Elegant Family Apartment with Garden View",
    size: "135 m²",
    guests: "Up to 6 Guests",
    bed: "1 Queen + 1 King + 1 Queen (3 Bedrooms)",
    bath: "Black Marble Bathroom with Bathtub",
    desc: "A spacious 135m² three-bedroom apartment featuring luxurious Chesterfield-style sofas in warm brown and gold tones, ambient LED ceiling lighting, a sleek black marble bathroom, modern white-gloss kitchen, and serene garden views. Rated 10/10 for exceptional room comfort.",
    features: [
      "3 Private Bedrooms — Ideal for Families",
      "Expansive 135 m² Living Space",
      "Chesterfield-Style Designer Lounge",
      "Full Modern Kitchen with Oven & Hood",
      "Black Marble Bathroom with Bathtub",
      "Garden View & Ambient LED Lighting",
    ],
    photos: [
      { url: s1LivingRoom1, title: "Designer Living Room", caption: "Chesterfield sofas with ambient purple LED ceiling lighting" },
      { url: s1LivingRoom2, title: "Living Room — Second View", caption: "Warm tones with gold armchair accent & built-in shelving" },
      { url: s1Bedroom, title: "Master Bedroom Suite", caption: "Queen bed with vibrant red accents & artistic wall art" },
      { url: s1Kitchen, title: "Modern White-Gloss Kitchen", caption: "Full kitchen with built-in oven, stovetop & black glass backsplash" },
      { url: s1Bathroom, title: "Black Marble Bathroom", caption: "Elegant black marble walls with modern vanity & round mirror" },
      { url: s1BathroomTub, title: "Bathtub Closeup", caption: "Deep bathtub with premium fixtures in polished marble" },
      { url: s1Property, title: "Building Exterior", caption: "Modern glass-fronted façade at Rruga Omer Nishani 7" },
    ],
  },
  {
    id: "skyline",
    name: "The Skyline Penthouse",
    tagline: "Mountain-View Penthouse with LED Balcony",
    size: "135 m²",
    guests: "Up to 4 Guests",
    bed: "1 Single + 2 Single Beds (2 Bedrooms)",
    bath: "Modern Full Bathroom",
    desc: "A stunning 135m² two-bedroom penthouse with panoramic mountain views from a glass-railed balcony illuminated in vibrant pink LED. Features an open-plan living room with contemporary neutral furnishings, a sun-drenched 6-seat dining suite, and a professional-grade kitchen with amber backlighting.",
    features: [
      "2 Private Bedrooms",
      "Panoramic Mountain-View Balcony",
      "Signature LED-Lit Glass Railing",
      "6-Seat Formal Dining Suite",
      "Professional Kitchen with Mood Lighting",
      "Expansive 135 m² Open Layout",
    ],
    photos: [
      { url: s2LivingRoom1, title: "Grand Living Room", caption: "Open-plan living with modern sofas & hardwood floors" },
      { url: s2LivingRoom2, title: "Living Room — Second Angle", caption: "Spacious lounge area with built-in entertainment wall" },
      { url: s2Bedroom1, title: "Bedroom 1 — Master Suite", caption: "Warm-toned bedroom with designer wall sconces" },
      { url: s2Bedroom2, title: "Bedroom 2 — Guest Room", caption: "Comfortable second bedroom with soft neutral palette" },
      { url: s2Kitchen1, title: "Designer Kitchen", caption: "Sleek white cabinetry with amber-lit stone backsplash" },
      { url: s2Kitchen2, title: "Kitchen — Second Angle", caption: "Fully equipped with modern appliances & window view" },
      { url: s2DiningTable1, title: "Formal Dining Suite", caption: "Elegant 6-seat dining with floor-to-ceiling windows" },
      { url: s2DiningTable2, title: "Dining — Second View", caption: "Natural light flooding through panoramic curtains" },
      { url: s2Balcony1, title: "LED Skyline Balcony", caption: "Glass-railed balcony with vibrant pink LED mood lighting" },
      { url: s2Balcony2, title: "Balcony Panorama", caption: "Sweeping mountain & city views at dusk" },
      { url: s2Bathroom, title: "Modern Bathroom", caption: "Clean contemporary bathroom with premium fixtures" },
    ],
  },
  {
    id: "cityview",
    name: "The City View Suite",
    tagline: "Three-Bedroom Suite with Panoramic Balcony",
    size: "135 m²",
    guests: "Up to 6 Guests",
    bed: "1 Queen + 1 King + 1 Queen (3 Bedrooms)",
    bath: "Black Marble Bathroom",
    desc: "A richly appointed 135m² three-bedroom suite with tufted velvet sofas in chocolate and gold, a vibrant red-accented master bedroom, and a private blue LED-lit balcony with seating overlooking Prishtina's rooftops. Rated 10/10 for exceptional comfort and quality.",
    features: [
      "3 Private Bedrooms for Family or Groups",
      "Tufted Velvet Designer Furniture",
      "LED-Lit Private Balcony with Seating",
      "Garden & City Panoramic Views",
      "Full Modern Kitchen with Oven",
      "Black Marble Bathroom",
    ],
    photos: [
      { url: s3LivingRoom1, title: "Velvet Lounge", caption: "Tufted chocolate & gold velvet sofas with floral accent rug" },
      { url: s3LivingRoom2, title: "Living Room — Second Angle", caption: "Built-in entertainment wall & designer floor lamp" },
      { url: s3LivingRoom3, title: "Living Room — Panoramic View", caption: "Full-width windows with layered curtains & warm lighting" },
      { url: s3Bedroom1, title: "Master Bedroom — Red Accent", caption: "King bed with bold red feature wall & artistic canvas" },
      { url: s3Bedroom2, title: "Second Bedroom", caption: "Queen bed with red velvet throw & artistic wall décor" },
      { url: s3Kitchen, title: "Fully Equipped Kitchen", caption: "White-gloss kitchen with built-in oven & black backsplash" },
      { url: s3Bathroom, title: "Black Marble Bathroom", caption: "Elegant dark marble finishes with modern vanity" },
      { url: s3Balcony, title: "City View Balcony", caption: "Private balcony with blue LED lighting & bistro seating" },
    ],
  },
  {
    id: "grandterrace",
    name: "The Grand Terrace Penthouse",
    tagline: "Premium Penthouse with Fireplace & Terrace",
    size: "135 m²",
    guests: "2 Guests",
    bed: "1 Four-Poster Canopy Bed",
    bath: "Mosaic-Tiled Spa Bathroom with Shower",
    desc: "The most luxurious residence at Bentley Apartments — a 135m² penthouse featuring a grand open-plan living room with crystal chandelier and ornate fireplace, a dramatic four-poster canopy bed, an artisan mosaic-tiled spa bathroom, and a wraparound terrace with LED-lit panoramic mountain views over Prishtina.",
    features: [
      "Grand Crystal Chandelier & Fireplace",
      "Four-Poster Solid Wood Canopy Bed",
      "Artisan Mosaic-Tiled Spa Bathroom",
      "Wraparound LED-Lit Panoramic Terrace",
      "Mountain & City Skyline Views",
      "Premium 135 m² Penthouse Layout",
    ],
    photos: [
      { url: s4LivingRoom1, title: "Grand Penthouse Living Room", caption: "Crystal chandelier, white leather sofas & open-plan layout" },
      { url: s4LivingRoom2, title: "Living Room — Second View", caption: "Panoramic curved windows flooding the space with light" },
      { url: s4LivingRoom3, title: "Living Room — Evening Ambience", caption: "Warm ambient lighting with purple LED ceiling accents" },
      { url: s4LivingRoom4, title: "Living Room — Fireplace Corner", caption: "Ornate mantel fireplace with city artwork & plush seating" },
      { url: s4LivingRoom5, title: "Living Room — Full Panorama", caption: "Sweeping view of the entire open-plan living space" },
      { url: s4Fireplace, title: "Ornate Fireplace Detail", caption: "Classical carved stone fireplace with glowing hearth" },
      { url: s4Bedroom1, title: "Four-Poster Canopy Bedroom", caption: "Dramatic solid wood canopy bed with velvet headboard" },
      { url: s4Bedroom2, title: "Bedroom — Second Angle", caption: "Walnut wood furnishings with crystal ceiling fixture" },
      { url: s4Kitchen1, title: "Penthouse Kitchen", caption: "Sleek modern kitchen integrated into the open plan" },
      { url: s4Kitchen2, title: "Kitchen — Second View", caption: "Fully equipped with premium appliances & worktop" },
      { url: s4DiningTable, title: "Dining Area", caption: "Elegant dining space with city-view backdrop" },
      { url: s4Bathroom, title: "Mosaic Spa Bathroom", caption: "Floor-to-ceiling artisan mosaic tiles with glass shower" },
      { url: s4BathroomTub, title: "Bathroom Detail", caption: "Premium gold-accented fixtures with mosaic tiling" },
      { url: s4Terrace1, title: "Panoramic LED Terrace", caption: "Wraparound terrace with pink LED railing & mountain views" },
      { url: s4Terrace2, title: "Terrace — City Panorama", caption: "Breathtaking dusk views across Prishtina's rooftops" },
    ],
  },
  {
    id: "londonbridge",
    name: "The London Bridge Suite",
    tagline: "Boutique Art Suite with Signature Murals",
    size: "135 m²",
    guests: "2 Guests",
    bed: "1 King Bed",
    bath: "Modern Full Bathroom",
    desc: "A one-of-a-kind 135m² boutique suite defined by its striking Tower Bridge wall mural, deep teal velvet sofas with mustard accents, and a dreamlike grotto-inspired bedroom with turquoise sea cave mural. Artisan décor with lantern accents and \"dream\" lettering create an atmosphere of whimsical luxury. Rated 10/10 for exceptional comfort.",
    features: [
      "Signature Tower Bridge Living Room Mural",
      "Deep Teal Velvet & Mustard Accent Sofas",
      "Grotto-Inspired Bedroom with Sea Cave Mural",
      "Artisan Décor with Lantern Accents",
      "Garden View & Marble Floors",
      "Full Kitchen & Modern Bathroom",
    ],
    photos: [
      { url: s5LivingRoom1, title: "Tower Bridge Living Room", caption: "Striking London Bridge mural with teal velvet sofas" },
      { url: s5LivingRoom2, title: "Living Room — Second Angle", caption: "Mustard wingback chair with hanging greenery accent" },
      { url: s5LivingRoom3, title: "Living Room — Full View", caption: "Open living space with marble floors & soft LED ceiling" },
      { url: s5Bedroom, title: "Grotto-Inspired Bedroom", caption: "King bed framed by immersive turquoise sea cave mural" },
      { url: s5Kitchen, title: "Modern Kitchen", caption: "Compact fully-equipped kitchen with sleek cabinetry" },
      { url: s5Bathroom, title: "Contemporary Bathroom", caption: "Clean modern bathroom with premium fixtures" },
      { url: s5Decor, title: "Artisan Décor Detail", caption: "Wire lanterns with 'dream' lettering on warm wood shelf" },
    ],
  },
];

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
    desc: "Direct contact with owner Osi via Phone or WhatsApp for prompt assistance.",
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

  // Active suite category tab state
  const [activeTab, setActiveTab] = useState<string>("all");
  // Track active photo index per suite
  const [activePhotoIdx, setActivePhotoIdx] = useState<Record<string, number>>({
    garden: 0,
    skyline: 0,
    cityview: 0,
    grandterrace: 0,
    londonbridge: 0,
  });
  // Track direction of last photo change per suite
  const [photoDir, setPhotoDir] = useState<Record<string, "next" | "prev">>({});

  // Scroll-spy: track which section is currently in view
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = ["about", "suites", "location", "amenities", "reviews", "book"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

  const setSuitePhoto = (suiteId: string, idx: number) => {
    setActivePhotoIdx((prev) => {
      const current = prev[suiteId] || 0;
      if (idx !== current) {
        setPhotoDir((d) => ({ ...d, [suiteId]: idx > current ? "next" : "prev" }));
      }
      return { ...prev, [suiteId]: idx };
    });
  };

  const nextSuitePhoto = (suiteId: string, max: number) => {
    setPhotoDir((prev) => ({ ...prev, [suiteId]: "next" }));
    setActivePhotoIdx((prev) => ({
      ...prev,
      [suiteId]: ((prev[suiteId] || 0) + 1) % max,
    }));
  };

  const prevSuitePhoto = (suiteId: string, max: number) => {
    setPhotoDir((prev) => ({ ...prev, [suiteId]: "prev" }));
    setActivePhotoIdx((prev) => ({
      ...prev,
      [suiteId]: ((prev[suiteId] || 0) - 1 + max) % max,
    }));
  };

  const titleWords = ["Bentley", "Apartments"];

  const filteredSuites =
    activeTab === "all"
      ? suiteCategories
      : suiteCategories.filter((s) => s.id === activeTab);

  return (
    <>
      <ReactLenis root />
      <div ref={root} className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Navigation Bar */}
        <nav className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/40 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl italic text-gold leading-none">B</span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream">Bentley Apartments · Prishtina</span>
              <span className="text-[9px] text-gold/80 tracking-widest hidden sm:inline">Rruga Omer Nishani 7</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {[
              { id: "about", label: "The Residence" },
              { id: "suites", label: "Suites" },
              { id: "location", label: "Location" },
              { id: "amenities", label: "Amenities" },
              { id: "reviews", label: "Google Reviews" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors ${
                  activeSection === link.id
                    ? "text-gold"
                    : "hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="text-[10px] uppercase tracking-[0.3em] border border-gold/50 text-gold px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
            >
              Reserve
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden grain">
          <img
            ref={heroImgRef}
            src={heroImg}
            alt="Bentley Apartments luxury living suite in Prishtina"
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
                <span key={i} className="inline-block overflow-hidden mr-[0.05em] pr-[0.1em] pb-[0.25em] -mb-[0.25em]">
                  <span data-w className="inline-block italic font-light">{w}</span>
                </span>
              ))}
            </h1>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div data-hero-meta className="space-y-2 max-w-md">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A quiet address at Rruga Omer Nishani 7, moments from Mother Teresa Boulevard. 120–135m² luxury suites, whirlpool baths, and host hospitality that makes a stay feel like home.
                </p>
                <div className="flex items-center gap-4 text-xs text-cream/90 pt-1">
                  <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                  <span>·</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-emerald-400">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Host</span>
                  </a>
                </div>
              </div>

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
                  href="#suites"
                  className="group relative flex items-center gap-3 border border-gold px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-gold overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative group-hover:text-ink transition-colors flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" /> Explore Booking.com Suites
                  </span>
                  <span className="relative group-hover:text-ink transition-colors">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Banner */}
        <div ref={marqueeRef} className="border-y border-border py-6 overflow-hidden bg-background">
          <div data-marquee-inner className="flex whitespace-nowrap font-display italic text-4xl md:text-6xl text-gold-soft/70">
            {[0, 1].map((n) => (
              <div key={n} className="flex items-center">
                {[
                  "Rruga Omer Nishani 7",
                  "The Garden Residence (135m²)",
                  "The Skyline Penthouse (135m²)",
                  "The City View Suite (135m²)",
                  "The Grand Terrace Penthouse (135m²)",
                  "The London Bridge Suite (135m²)",
                  "Booking.com 9.6 Rated",
                  "Direct Phone +383 45 757 576",
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

        {/* Chapter I — About */}
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
                    <span data-count="9.6" data-decimals="1">0.0</span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Booking.com Score</div>
                </div>
                <div data-item>
                  <div className="font-display text-5xl text-gold">
                    <span data-count="4.7" data-decimals="1">0.0</span>
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Google Rating</div>
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

        {/* Dedicated Booking.com Multi-Suite Showcase with Real Photo Galleries */}
        <section id="suites" className="px-6 md:px-16 py-32 md:py-48 border-t border-border bg-background">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Booking.com Suite Inventory</p>
              <h2 data-reveal className="font-display text-5xl md:text-8xl leading-[0.9] text-cream">
                Suites & <em className="text-gold">Residences.</em>
              </h2>
              <p data-reveal className="mt-4 text-muted-foreground max-w-xl text-base">
                Browse our official Booking.com suite categories. Each suite type features its dedicated real photo gallery showing living rooms, bedrooms, hydrotherapy baths, kitchens, and balconies.
              </p>
            </div>

            {/* Suite Category Filter Tabs */}
            <div data-reveal className="flex flex-wrap gap-2 border border-border p-1 bg-muted/20">
              {[
                { id: "all", label: "All Suites" },
                { id: "garden", label: "Garden Residence" },
                { id: "skyline", label: "Skyline Penthouse" },
                { id: "cityview", label: "City View" },
                { id: "grandterrace", label: "Grand Terrace" },
                { id: "londonbridge", label: "London Bridge" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[10px] uppercase tracking-[0.25em] px-4 py-2.5 transition-all font-medium ${activeTab === tab.id
                    ? "bg-gold text-ink"
                    : "text-cream hover:text-gold"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Suite Category Cards List */}
          <div className="space-y-24">
            {filteredSuites.map((suite) => {
              const currentPhotoIdx = activePhotoIdx[suite.id] || 0;
              const currentPhoto = suite.photos[currentPhotoIdx];

              return (
                <div
                  key={suite.id}
                  data-reveal
                  className="border border-border/80 bg-muted/10 p-6 md:p-10 grid lg:grid-cols-12 gap-10 items-stretch"
                >
                  {/* Photo Gallery Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    {/* Main Featured Photo Box */}
                    <div className="relative aspect-[16/10] overflow-hidden grain border border-border/50 group">
                      <div
                        key={currentPhoto.url}
                        className={`absolute inset-0 w-full h-full ${photoDir[suite.id] === "prev" ? "animate-slide-from-left" : "animate-slide-from-right"
                          }`}
                      >
                        <img
                          src={currentPhoto.url}
                          alt={currentPhoto.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                      {/* Carousel Arrow Controls */}
                      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => prevSuitePhoto(suite.id, suite.photos.length)}
                          className="w-10 h-10 rounded-full bg-background/80 text-cream hover:text-gold border border-border flex items-center justify-center transition-colors"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => nextSuitePhoto(suite.id, suite.photos.length)}
                          className="w-10 h-10 rounded-full bg-background/80 text-cream hover:text-gold border border-border flex items-center justify-center transition-colors"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Photo Badge Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs">
                        <div className="bg-background/80 backdrop-blur-md px-3 py-1.5 border border-border">
                          <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-medium block">
                            {currentPhoto.title}
                          </span>
                          <span className="text-muted-foreground text-[10px]">
                            {currentPhoto.caption}
                          </span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-cream bg-background/80 px-2.5 py-1 border border-border">
                          Photo {currentPhotoIdx + 1} of {suite.photos.length}
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail Selector Strip */}
                    <div className={`grid gap-2 mt-4 ${suite.photos.length <= 7 ? "grid-cols-7" : suite.photos.length <= 8 ? "grid-cols-8" : "grid-cols-8"}`} style={{ gridTemplateColumns: `repeat(${Math.min(suite.photos.length, 8)}, minmax(0, 1fr))` }}>
                      {suite.photos.map((p, idx) => (
                        <button
                          key={p.title}
                          onClick={() => setSuitePhoto(suite.id, idx)}
                          className={`relative aspect-[16/10] overflow-hidden border transition-all ${currentPhotoIdx === idx
                            ? "border-gold ring-2 ring-gold/40 scale-[1.02]"
                            : "border-border/50 opacity-60 hover:opacity-100"
                            }`}
                        >
                          <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Suite Information & Specs Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gold/10 border border-gold/40 text-gold text-[9px] uppercase tracking-[0.25em] px-2.5 py-0.5 rounded font-medium">
                          {suite.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl text-cream mb-4">
                        {suite.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {suite.desc}
                      </p>

                      {/* Specs Badge Pills */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2.5 p-3 border border-border/60 bg-muted/20">
                          <Maximize className="w-4 h-4 text-gold shrink-0" />
                          <div>
                            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Footprint</div>
                            <div className="text-xs font-sans text-cream font-medium">{suite.size}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-3 border border-border/60 bg-muted/20">
                          <Users className="w-4 h-4 text-gold shrink-0" />
                          <div>
                            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Capacity</div>
                            <div className="text-xs font-sans text-cream font-medium">{suite.guests}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-3 border border-border/60 bg-muted/20 col-span-2 sm:col-span-1">
                          <Bed className="w-4 h-4 text-gold shrink-0" />
                          <div className="min-w-0">
                            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Bedding</div>
                            <div className="text-xs font-sans text-cream font-medium leading-tight mt-0.5">{suite.bed}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-3 border border-border/60 bg-muted/20 col-span-2 sm:col-span-1">
                          <Bath className="w-4 h-4 text-gold shrink-0" />
                          <div className="min-w-0">
                            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Bath Setup</div>
                            <div className="text-xs font-sans text-cream font-medium leading-tight mt-0.5">{suite.bath}</div>
                          </div>
                        </div>
                      </div>

                      {/* Feature Bullet List */}
                      <div className="space-y-2 border-t border-border/60 pt-4">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-3 font-medium">Verified Booking.com Features</div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {suite.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-xs text-cream/90">
                              <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Suite Reservation CTAs */}
                    <div className="pt-6 border-t border-border flex flex-wrap items-center gap-3">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] uppercase tracking-[0.25em] py-3.5 px-4 font-medium transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Reserve via WhatsApp</span>
                      </a>
                      <a
                        href={BOOKING_COM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 border border-gold/50 text-gold hover:bg-gold hover:text-ink text-[10px] uppercase tracking-[0.25em] py-3.5 px-4 transition-colors"
                      >
                        <span>Book on Booking.com</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Chapter II — Location & Neighborhood */}
        <section id="location" className="px-6 md:px-16 py-32 md:py-48 border-t border-border">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">— Chapter II</p>
              <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1] text-cream">
                Ten minutes<br />from the <em className="text-gold">boulevard.</em>
              </h2>
              <p data-reveal className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Tucked up a small, quiet residential street at <strong className="text-cream font-medium">Rruga Omer Nishani 7</strong> right next to A-Zhushi restaurant, Bentley Apartments gives guests fast 10-minute walking access to Prishtina's lively Mother Teresa pedestrian boulevard while ensuring total night-time quiet.
              </p>

              {/* Address Card */}
              <div data-reveal className="mt-8 p-6 border border-border bg-muted/20 backdrop-blur-sm space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">Official Residence Address</div>
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
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Cancellation Policy</span>
                  <span className="font-display text-xl text-gold">Free Cancellation Options</span>
                </div>
              </div>
            </div>

            {/* Landmark Breakdown */}
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
              Every detail verified by real Google Maps & Booking.com guests — from private hydrotherapy whirlpool tubs to seamless self-catering appliances and dedicated secure parking.
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
                  4.7★ Google Rating & 9.6 Booking.com Score
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

        {/* Chapter V — Reserve Your Stay (Full Screen Hero Image Background) */}
        <section id="book" className="relative min-h-[90vh] py-32 px-6 md:px-16 overflow-hidden grain flex flex-col justify-center items-center text-center">
          <img src={heroImg} alt="Bentley Apartments living suite" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">— Reserve your stay</p>

            <h2 data-reveal className="font-display text-6xl md:text-9xl leading-[0.9] text-cream max-w-5xl">
              Come <em className="text-gold">home</em><br />to Bentley.
            </h2>

            <p data-reveal className="mt-8 max-w-lg text-muted-foreground text-sm sm:text-base">
              Rruga Omer Nishani 7, 10000 Prishtina, Kosovo · Direct host privileges & online booking portals.
            </p>

            {/* Direct Contact Buttons */}
            <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-4 text-[10px] uppercase tracking-[0.3em] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Host</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-gold text-ink font-medium px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold-soft transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="border border-gold/50 text-gold px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>

            {/* Online Portals Glassmorphic Row */}
            <div data-reveal className="mt-12 pt-10 border-t border-border/40 w-full max-w-3xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-6 font-medium">
                Also available on online booking channels
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={BOOKING_COM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-border/80 bg-background/60 backdrop-blur-md hover:border-gold hover:text-gold text-cream text-[10px] uppercase tracking-[0.25em] transition-all flex items-center gap-2"
                >
                  <span>Booking.com</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </a>
                <a
                  href={AGODA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-border/80 bg-background/60 backdrop-blur-md hover:border-gold hover:text-gold text-cream text-[10px] uppercase tracking-[0.25em] transition-all flex items-center gap-2"
                >
                  <span>Agoda</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </a>
                <a
                  href={BED_AND_BREAKFAST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-border/80 bg-background/60 backdrop-blur-md hover:border-gold hover:text-gold text-cream text-[10px] uppercase tracking-[0.25em] transition-all flex items-center gap-2"
                >
                  <span>Bed&Breakfast.eu</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-border/80 bg-background/60 backdrop-blur-md hover:border-gold hover:text-gold text-cream text-[10px] uppercase tracking-[0.25em] transition-all flex items-center gap-2"
                >
                  <MapPin className="w-3 h-3 text-gold" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-16 py-16 border-t border-border">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="font-display text-4xl text-gold italic">Bentley Apartments</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-cream">
                Rruga Omer Nishani 7 · 10000 Prishtina · Kosovo
              </div>
              <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                <p>Phone: <a href={`tel:${PHONE_TEL}`} className="text-cream hover:text-gold">{PHONE_DISPLAY}</a></p>
                <p>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{PHONE_DISPLAY}</a></p>
                <p>Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-cream hover:text-gold">{EMAIL_ADDRESS}</a></p>
                <p className="pt-2 text-gold">4.7★ Google Rating & 9.6 Booking.com Score</p>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-wrap gap-8 justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 font-medium">Navigation</div>
                <div className="flex flex-col space-y-2 text-xs text-muted-foreground">
                  <a href="#about" className="hover:text-gold transition-colors">The Residence</a>
                  <a href="#suites" className="hover:text-gold transition-colors">Suites</a>
                  <a href="#location" className="hover:text-gold transition-colors">Location</a>
                  <a href="#amenities" className="hover:text-gold transition-colors">Amenities</a>
                  <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 font-medium">Online Portals</div>
                <div className="flex flex-col space-y-2 text-xs text-muted-foreground">
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>
                  <a href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <span>Booking.com</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>
                  <a href={AGODA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <span>Agoda</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>
                  <a href={BED_AND_BREAKFAST_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <span>Bed&Breakfast.eu</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>
                </div>
              </div>
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
