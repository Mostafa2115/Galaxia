import React, { useState, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import "./Discoveries.css";

// Pioneering Astronauts & Cosmonauts Hall of Fame
const PIONEERING_ASTRONAUTS = [
  {
    id: "astronaut-armstrong",
    name: "Neil Armstrong",
    arabicName: "نيل أرمسترونغ",
    title: "Commander, Apollo 11",
    achievement: "First Human to Walk on the Moon (July 20, 1969)",
    agency: "NASA",
    country: "USA 🇺🇸",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
    quote: "That's one small step for man, one giant leap for mankind.",
    arabicQuote: "خطوة صغيرة لإنسان، ولكنها قفزة عملاقة للبشرية.",
    bio: "Naval aviator, test pilot, and aeronautical engineer who commanded the historic Apollo 11 lunar landing mission, spending 2 hours and 31 minutes exploring Tranquility Base."
  },
  {
    id: "astronaut-gagarin",
    name: "Yuri Gagarin",
    arabicName: "يوري جاجارين",
    title: "Cosmonaut, Vostok 1",
    achievement: "First Human in Space & Earth Orbit (April 12, 1961)",
    agency: "Soviet Space Program",
    country: "USSR 🇷🇺",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800&auto=format&fit=crop",
    quote: "Poyekhali! (Let's go!) The Earth is blue. How wonderful. It is amazing.",
    arabicQuote: "انطلقنا! الأرض زرقاء.. ما أروعها! إنها مذهلة.",
    bio: "Pioneering Soviet pilot who completed a single orbit around Earth aboard Vostok 1 in 108 minutes, opening humanity's doorway to crewed spaceflight."
  },
  {
    id: "astronaut-aldrin",
    name: "Buzz Aldrin",
    arabicName: "بز ألدرين",
    title: "Lunar Module Pilot, Apollo 11",
    achievement: "Second Human on the Moon & EVA Pioneer",
    agency: "NASA",
    country: "USA 🇺🇸",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    quote: "Magnificent desolation.",
    arabicQuote: "عزلة مهيبة وفخامة منقطعة النظير.",
    bio: "Doctor of science and fighter pilot who piloted the Eagle Lunar Module to the lunar surface alongside Armstrong, pioneering extravehicular space techniques."
  },
  {
    id: "astronaut-tereshkova",
    name: "Valentina Tereshkova",
    arabicName: "فالنتينا تيريشكوفا",
    title: "Cosmonaut, Vostok 6",
    achievement: "First Woman to Fly in Space (June 16, 1963)",
    agency: "Soviet Space Program",
    country: "USSR 🇷🇺",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop",
    quote: "Hey sky, take off your hat, I'm on my way!",
    arabicQuote: "يا سماء، اخلعي قبعتك، فأنا في طريقي إليكِ!",
    bio: "At age 26, she completed 48 orbits around the Earth aboard Vostok 6, spending nearly three days in space and remaining the only woman to have flown a solo space mission."
  },
  {
    id: "astronaut-collins",
    name: "Michael Collins",
    arabicName: "مايكل كولينز",
    title: "Command Module Pilot, Apollo 11",
    achievement: "Piloted Apollo 11 Command Module in Lunar Orbit",
    agency: "NASA",
    country: "USA 🇺🇸",
    image: "https://images.unsplash.com/photo-1517976487507-5b3b4b45f942?q=80&w=800&auto=format&fit=crop",
    quote: "I am alone now, truly alone, and absolutely isolated from all known life.",
    arabicQuote: "أنا الآن وحيد تماماً، ومعزول تماماً عن كل أشكال الحياة المعروفة.",
    bio: "Orbited the Moon solo in the Command Module 'Columbia' for over 21 hours while Armstrong and Aldrin explored the surface, ensuring the crew's safe rendezvous and return to Earth."
  },
  {
    id: "astronaut-cernan",
    name: "Gene Cernan",
    arabicName: "جين سيرنان",
    title: "Commander, Apollo 17",
    achievement: "Last Human on the Moon to Date (Dec 14, 1972)",
    agency: "NASA",
    country: "USA 🇺🇸",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    quote: "We leave as we came, and, God willing, as we shall return, with peace and hope for all mankind.",
    arabicQuote: "نغادر كما أتينا، وبإذن الله سنعود بسلام وأمل للبشرية جمعاء.",
    bio: "Commander of Apollo 17 who holds the distinction of being the last astronaut to leave his footprints in the lunar dust during the final Apollo landing mission."
  }
];

// Comprehensive Planetary Expeditions & Breakthrough Discoveries Dataset
const DISCOVERIES_DATA = [
  {
    id: "disc-apollo11",
    name: "Apollo 11: First Manned Lunar Landing",
    arabicName: "أبولو 11: أول هبوط بشري على سطح القمر",
    targetPlanet: "MOON",
    targetPlanetArabic: "القمر",
    planetIcon: "🌕",
    year: "1969",
    agency: "NASA",
    type: "Crewed Lunar Landing",
    location: "Sea of Tranquility (0.67° N, 23.47° E)",
    breakthrough: "Direct Discovery & Sample Return of Lunar Basalt & High-Titanium Minerals",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop",
    desc: "Humanity's first crewed lunar landing. Neil Armstrong and Buzz Aldrin spent 21.6 hours on the lunar surface, collecting 21.5 kg of samples and deploying seismic retroreflectors.",
    details: [
      "Returned pristine lunar regolith confirming the Moon's volcanic basalt composition.",
      "Proved that humans can land, walk, perform scientific experiments, and return safely from another world.",
      "Deployed laser retroreflectors that measure Earth-Moon distance down to millimeters to this day."
    ]
  },
  {
    id: "disc-luna2-9",
    name: "Luna 2 & Luna 9: First Lunar Impact & Soft Landing",
    arabicName: "لونا 2 و 9: أول اصطدام وأول هبوط سلس على القمر",
    targetPlanet: "MOON",
    targetPlanetArabic: "القمر",
    planetIcon: "🌕",
    year: "1959 - 1966",
    agency: "Soviet Space Program",
    type: "Robotic Probe & Lander",
    location: "Ocean of Storms (Luna 9) / Mare Serenitatis (Luna 2)",
    breakthrough: "First Man-Made Object to Reach the Moon & First Panoramic Lunar Photos",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
    desc: "Luna 2 became the first human-built craft to reach the Moon in 1959. In 1966, Luna 9 achieved the first soft landing, proving the lunar dust layer was firm enough to support landers.",
    details: [
      "Luna 2 proved the Moon lacked a significant global magnetic field.",
      "Luna 9 transmitted the first close-up panoramic television images of lunar rocks and soil structure.",
      "Dispelled fears that spacecraft would sink into deep lunar dust quagmires."
    ]
  },
  {
    id: "disc-chandrayaan-water",
    name: "Chandrayaan-1 & LRO: Lunar Water Ice Discovery",
    arabicName: "تشاندرايان-1 و LRO: اكتشاف جليد الماء على القمر",
    targetPlanet: "MOON",
    targetPlanetArabic: "القمر",
    planetIcon: "🌕",
    year: "2008 - 2009",
    agency: "ISRO / NASA",
    type: "Orbital Spectrometer & Impactor",
    location: "Lunar South Pole / Shackleton Crater",
    breakthrough: "Definitive Spectroscopic Confirmation of Water Molecules (H2O) in Polar Craters",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    desc: "The Moon Mineralogy Mapper (M3) aboard Chandrayaan-1 and the LCROSS impactor confirmed millions of tons of water-ice deposits trapped in permanently shadowed polar craters.",
    details: [
      "Confirmed water molecules bound to lunar soil grains across wide polar regions.",
      "Paved the way for future long-term crewed outposts (Artemis Program) utilizing lunar ice for ISRU oxygen and fuel.",
      "Revealed complex mineralogy across the Moon's rugged highlands."
    ]
  },
  {
    id: "disc-viking-mars",
    name: "Viking 1 & 2: First Operative Mars Landings",
    arabicName: "فايكنج 1 و 2: أول هبوط تشغيلي على سطح المريخ",
    targetPlanet: "MARS",
    targetPlanetArabic: "المريخ",
    planetIcon: "🔴",
    year: "1976",
    agency: "NASA",
    type: "Robotic Lander & Orbiter",
    location: "Chryse Planitia & Utopia Planitia, Mars",
    breakthrough: "First Surface Color Panoramas of Mars & Chemical Soil Analysis",
    image: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?q=80&w=1200&auto=format&fit=crop",
    desc: "The twin Viking landers touched down on Mars in 1976, sending back humanity's first breathtaking color views of the red Martian landscape and rocky plains.",
    details: [
      "Captured high-resolution imagery revealing red iron-oxide dust and pinkish carbon-dioxide sky.",
      "Conducted the first in-situ biological metabolism tests in Martian soil.",
      "Characterized Martian weather patterns, atmospheric pressure, and seismic activity."
    ]
  },
  {
    id: "disc-curiosity-mars",
    name: "Curiosity Rover: Ancient Habitable Lake in Gale Crater",
    arabicName: "كيوريوسيتي: إثبات وجود بحيرات عذبة صالحة للحياة في المريخ",
    targetPlanet: "MARS",
    targetPlanetArabic: "المريخ",
    planetIcon: "🔴",
    year: "2012 - Present",
    agency: "NASA JPL",
    type: "Nuclear-Powered Rover",
    location: "Gale Crater & Mount Sharp, Mars",
    breakthrough: "Discovery of Ancient Freshwater Lakes & Organic Carbon Molecules on Mars",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
    desc: "Curiosity proved that ancient Mars possessed all the key chemical ingredients for life: liquid freshwater, carbon, nitrogen, oxygen, phosphorus, and sulfur.",
    details: [
      "Drilled mudstone rocks at Yellowknife Bay revealing ancient neutral pH freshwater lake sediments.",
      "Identified complex organic carbon chains preserved in 3.5-billion-year-old rock layers.",
      "Observed seasonal spikes in atmospheric methane background levels."
    ]
  },
  {
    id: "disc-perseverance-moxie",
    name: "Perseverance: Mars Oxygen Generation & Core Sampling",
    arabicName: "بيرسيفيرنس: استخراج الأكسجين وجمع عينات الحياة من المريخ",
    targetPlanet: "MARS",
    targetPlanetArabic: "المريخ",
    planetIcon: "🔴",
    year: "2021 - Present",
    agency: "NASA JPL",
    type: "Astrobiology Rover & Helicopter",
    location: "Jezero Crater Paleolake Delta",
    breakthrough: "First In-Situ Oxygen Production on Mars (MOXIE) & First Powered Flight (Ingenuity)",
    image: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?q=80&w=1200&auto=format&fit=crop",
    desc: "Perseverance landed inside Jezero Crater to seek biosignatures in an ancient river delta, extracting breathable oxygen from the CO2 atmosphere with MOXIE.",
    details: [
      "MOXIE instrument generated breathable oxygen from the thin Martian carbon dioxide atmosphere.",
      "Ingenuity helicopter achieved the first powered controlled flight on another planet, logging 72+ flights.",
      "Sealed pristine rock cores in titanium tubes for future Mars Sample Return retrieval."
    ]
  },
  {
    id: "disc-venera-venus",
    name: "Venera 7, 9 & 13: First Landing on Venus",
    arabicName: "فينيرا: أول هبوط على كوكب الزهرة والصور الأولى للسطح",
    targetPlanet: "VENUS",
    targetPlanetArabic: "الزهرة",
    planetIcon: "🟡",
    year: "1970 - 1982",
    agency: "Soviet Space Program",
    type: "Armored Planetary Lander",
    location: "Venusian Volcanic Basalt Plains",
    breakthrough: "First Spacecraft to Land on Another Planet & First Color Images at 475°C",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    desc: "Venera 7 achieved the first landing on Venus in 1970, withstanding 90 atmospheres of crushing pressure and 475°C heat to transmit first surface telemetry.",
    details: [
      "Venera 9 sent the first black-and-white photos of another planet's surface in 1975.",
      "Venera 13 recorded the first audio and color photos of Venus's yellowish sky and dark volcanic slab rocks.",
      "Analyzed extreme runaway greenhouse effect in Venus's dense sulfuric acid atmosphere."
    ]
  },
  {
    id: "disc-galileo-jupiter",
    name: "Galileo: Subsurface Oceans on Jupiter's Moons",
    arabicName: "غاليليو: اكتشاف المحيطات السائلة تحت أقمار المشتري",
    targetPlanet: "JUPITER",
    targetPlanetArabic: "المشتري",
    planetIcon: "🪐",
    year: "1995 - 2003",
    agency: "NASA / International",
    type: "Jovian Orbiter & Atmospheric Probe",
    location: "Jovian System (Europa, Ganymede, Callisto, Io)",
    breakthrough: "Proof of Subsurface Global Liquid Oceans Beneath Europa and Ganymede",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    desc: "Galileo revolutionized our view of habitable worlds, discovering that Europa harbors a vast global liquid ocean containing more water than all of Earth's oceans combined.",
    details: [
      "Detected magnetic induction signals proving a deep saltwater ocean beneath Europa's cracked ice shell.",
      "Observed active silicate volcanism on Io with lava hotter than any volcano on modern Earth.",
      "Dropped a probe deep into Jupiter's clouds, measuring intense lightning and wind speeds exceeding 600 km/h."
    ]
  },
  {
    id: "disc-cassini-titan-enceladus",
    name: "Cassini-Huygens: Ocean Geysers & Methane Lakes",
    arabicName: "كاسيني: اكتشاف ينابيع إنسيلادوس وبحيرات تيتان الميثانية",
    targetPlanet: "SATURN",
    targetPlanetArabic: "زحل",
    planetIcon: "🪐",
    year: "1997 - 2017",
    agency: "NASA / ESA / ASI",
    type: "Saturnian Orbiter & Titan Lander",
    location: "Saturn Rings, Titan & Enceladus",
    breakthrough: "Discovery of Active Water Geysers on Enceladus & Liquid Methane Seas on Titan",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?q=80&w=1200&auto=format&fit=crop",
    desc: "Cassini explored the Saturnian system for 13 years, landing ESA's Huygens probe on Titan and flying directly through the watery plumes erupting from Enceladus.",
    details: [
      "Discovered active hydrothermal vents and organic molecules venting from Enceladus's subsurface ocean.",
      "Huygens probe touched down on Titan, revealing rounded water-ice pebbles and methane river channels.",
      "Conducted 22 daring Grand Finale dives between Saturn and its innermost rings."
    ]
  },
  {
    id: "disc-messenger-mercury",
    name: "MESSENGER: Polar Water Ice on Scorching Mercury",
    arabicName: "ماسنجر: اكتشاف جليد الماء في فوهات كوكب عطارد",
    targetPlanet: "MERCURY",
    targetPlanetArabic: "عطارد",
    planetIcon: "🪐",
    year: "2004 - 2015",
    agency: "NASA",
    type: "Planetary Orbiter",
    location: "Mercury Polar Craters",
    breakthrough: "Confirmed Abundant Water Ice & Carbonaceous Organics in Polar Shadowed Craters",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    desc: "Despite surface temperatures soaring above 430°C on sunlit sides, MESSENGER discovered pure water ice buried inside permanently shadowed craters at Mercury's poles.",
    details: [
      "Utilized neutron spectrometer to detect hydrogen signatures matching pure water ice.",
      "Discovered strange volcanic hollows actively forming on Mercury's surface.",
      "Mapped Mercury's surprisingly large molten iron core."
    ]
  },
  {
    id: "disc-parker-sun",
    name: "Parker Solar Probe: Touching the Solar Corona",
    arabicName: "مسبار باركر: لمس الغلاف الجوي للشمس وحل لغز الرياح الشمسية",
    targetPlanet: "SUN",
    targetPlanetArabic: "الشمس",
    planetIcon: "☀️",
    year: "2018 - Present",
    agency: "NASA / JHU APL",
    type: "Solar Corona Probe",
    location: "Solar Corona / Alfvén Surface",
    breakthrough: "First Spacecraft to Enter the Sun's Corona & Discovery of Magnetic Switchbacks",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    desc: "Humanity's fastest machine, flying at 430,000 mph through the million-degree corona to uncover the origin of the solar wind.",
    details: [
      "Crossed the Alfvén critical surface, officially 'touching' the Sun for the first time in history.",
      "Discovered S-shaped zig-zags in the solar magnetic field called magnetic switchbacks.",
      "Uncovered the dust-free zone close to the Sun where Galaxia  dust is vaporized by solar heat."
    ]
  },
  {
    id: "disc-voyager-interstellar",
    name: "Voyager 1 & 2: Crossing into Interstellar Space",
    arabicName: "فوياجر: عبور حدود المجموعة الشمسية إلى الفضاء بين النجمي",
    targetPlanet: "DEEP_SPACE",
    targetPlanetArabic: "الفضاء السحيق",
    planetIcon: "🌌",
    year: "1977 - Present",
    agency: "NASA JPL",
    type: "Interstellar Probes",
    location: "Interstellar Medium (24.4+ Billion km)",
    breakthrough: "First Human Objects to Exit the Solar Heliopause & Enter Interstellar Space",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    desc: "Voyager 1 officially crossed the heliopause in August 2012, detecting pure galactic Galaxia  rays and carrying humanity's Golden Record toward the stars.",
    details: [
      "Traversed the outer boundary of the solar wind into the true interstellar medium.",
      "Measured interstellar plasma density and discovered magnetic field alignments outside our solar bubble.",
      "Continues to transmit telemetry across 22.5 light-hours of deep space."
    ]
  },
  {
    id: "disc-newhorizons-pluto",
    name: "New Horizons: The Living Heart of Pluto",
    arabicName: "نيوهورايزنز: اكتشاف قلب بلوتو الجليدي والتضاريس الحية",
    targetPlanet: "DEEP_SPACE",
    targetPlanetArabic: "الفضاء السحيق",
    planetIcon: "🌌",
    year: "2015",
    agency: "NASA / SwRI",
    type: "Kuiper Belt Flyby Probe",
    location: "Pluto & Kuiper Belt Object Arrokoth",
    breakthrough: "Discovery of Active Nitrogen Ice Glaciers & Water-Ice Mountains on Pluto",
    image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=1200&auto=format&fit=crop",
    desc: "New Horizons transformed Pluto from a blurry pixel into a geologically dynamic world with nitrogen glaciers, convective ice cells, and layered blue skies.",
    details: [
      "Discovered Tombaugh Regio: a massive heart-shaped nitrogen and methane glacier.",
      "Photographed towering water-ice mountain ranges rising 3,500 meters high.",
      "Conducted the farthest planetary flyby in history with the snowman-shaped Kuiper Belt object Arrokoth."
    ]
  },
  {
    id: "disc-jwst-deepspace",
    name: "James Webb (JWST): Deep Field Galaxia  Dawn & Exoplanet Chemistry",
    arabicName: "تلسكوب جيمس ويب: تصوير فجر الكون وكيمياء الكواكب الخارجية",
    targetPlanet: "DEEP_SPACE",
    targetPlanetArabic: "الفضاء السحيق",
    planetIcon: "🌌",
    year: "2021 - Present",
    agency: "NASA / ESA / CSA",
    type: "Space Infrared Observatory",
    location: "Sun-Earth L2 Lagrange Point (1.5M km)",
    breakthrough: "Direct Imaging of Galaxies from 13.4 Billion Years Ago & Carbon Dioxide on Exoplanets",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    desc: "Webb peers back to within a few hundred million years of the Big Bang, revolutionizing our understanding of early galaxy formation and alien atmospheres.",
    details: [
      "Captured the deepest and sharpest infrared images of the early universe in human history.",
      "Detected carbon dioxide, methane, and water vapor in atmospheres of distant exoplanets like WASP-96b and K2-18b.",
      "Observed the birth of stars inside iconic nebulas like the Pillars of Creation with unprecedented clarity."
    ]
  }
];

function Discoveries() {
  const [selectedPlanetFilter, setSelectedPlanetFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscovery, setSelectedDiscovery] = useState(null);
  const [selectedAstronaut, setSelectedAstronaut] = useState(null);

  // Filter logic based on Planet / Celestial destination and Search query
  const filteredDiscoveries = useMemo(() => {
    return DISCOVERIES_DATA.filter((item) => {
      // Planet Filter
      const matchesPlanet =
        selectedPlanetFilter === "ALL" ||
        item.targetPlanet === selectedPlanetFilter;

      // Search Query (matches English & Arabic names, planets, breakthroughs, details)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.arabicName.toLowerCase().includes(q) ||
        item.targetPlanet.toLowerCase().includes(q) ||
        item.targetPlanetArabic.includes(q) ||
        item.agency.toLowerCase().includes(q) ||
        item.breakthrough.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.year.includes(q);

      return matchesPlanet && matchesSearch;
    });
  }, [selectedPlanetFilter, searchQuery]);

  return (
    <>
      <Navbar />

      <div className="discoveries-page">
        {/* ================= HERO SECTION ================= */}
        <section className="discoveries-hero-section">
          <div className="discoveries-hero-content">
            <div className="discoveries-badge">
              <span className="pulse-dot-cyan"></span>
              Galaxia  EXPLORATION & DISCOVERIES
            </div>

            <h1 className="discoveries-hero-title">
              SPACE EXPEDITIONS & DISCOVERIES
            </h1>

            <p className="discoveries-hero-subtitle">
              Discover humanity's greatest voyages beyond Earth — from the first
              footsteps on lunar dust to robotic rovers traversing Mars, probes
              piercing the Sun's corona, and voyagers traversing interstellar space.
            </p>

            {/* Smart Planet & Destination Search Bar */}
            <div className="discoveries-search-container">
              <div className="discoveries-search-box">
                <span className="search-box-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search by Planet (e.g. Moon, Mars, Jupiter, الزهرة, المريخ, القمر)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="discoveries-search-input"
                />
                {searchQuery && (
                  <button
                    className="clear-search-btn"
                    onClick={() => setSearchQuery("")}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Quick Planet Destination Chips */}
            <div className="planet-chips-row">
              <button
                className={`planet-chip ${selectedPlanetFilter === "ALL" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("ALL")}
              >
                🌌 All Destinations (الكل)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "MOON" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("MOON")}
              >
                🌕 Moon (القمر)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "MARS" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("MARS")}
              >
                🔴 Mars (المريخ)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "VENUS" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("VENUS")}
              >
                🟡 Venus (الزهرة)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "JUPITER" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("JUPITER")}
              >
                🪐 Jupiter (المشتري)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "SATURN" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("SATURN")}
              >
                🪐 Saturn (زحل)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "SUN" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("SUN")}
              >
                ☀️ Sun (الشمس)
              </button>
              <button
                className={`planet-chip ${selectedPlanetFilter === "DEEP_SPACE" ? "chip-active" : ""}`}
                onClick={() => setSelectedPlanetFilter("DEEP_SPACE")}
              >
                ✨ Deep Space (الفضاء السحيق)
              </button>
            </div>
          </div>
        </section>

        {/* ================= FEATURED: FIRST RECORDED MOON VOYAGE ================= */}
        <section className="moon-spotlight-section">
          <div className="section-title-box">
            <span className="section-tag-pill">🌕 HISTORIC FIRST MILESTONE</span>
            <h2>FIRST RECORDED MOON VOYAGE & LANDINGS</h2>
            <p>
              The defining triumph of human curiosity: the first journeys that
              touched the lunar surface and forever changed humanity's Galaxia  perspective.
            </p>
          </div>

          <div className="moon-spotlight-grid">
            {/* Apollo 11 Giant Card */}
            <div className="moon-feature-card apollo-card">
              <div className="moon-card-backdrop apollo-bg"></div>
              <div className="moon-card-overlay"></div>

              <div className="moon-card-content">
                <div className="moon-card-badge">
                  <span>🏆 JULY 20, 1969</span>
                  <span>FIRST CREWED MOON LANDING</span>
                </div>

                <h3 className="moon-card-title">
                  APOLLO 11: TRANQUILITY BASE
                </h3>

                <blockquote className="moon-historic-quote">
                  "That's one small step for man, one giant leap for mankind."
                  <span className="quote-author">— Neil A. Armstrong</span>
                </blockquote>

                <p className="moon-card-desc">
                  At 20:17 UTC on July 20, 1969, the Apollo 11 Lunar Module
                  'Eagle' touched down in the Sea of Tranquility. Six hours later,
                  Neil Armstrong became the first human to set foot on another world,
                  followed by Buzz Aldrin.
                </p>

                <div className="moon-metrics-grid">
                  <div className="metric-box">
                    <span className="metric-label">LUNAR DWELL TIME</span>
                    <span className="metric-value cyan-text">21 Hours 36 Min</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">SAMPLES RETURNED</span>
                    <span className="metric-value purple-text">21.55 kg Basalt</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">CREW</span>
                    <span className="metric-value">Armstrong, Aldrin, Collins</span>
                  </div>
                </div>

                <div className="moon-card-actions">
                  <button
                    className="explore-moon-btn"
                    onClick={() =>
                      setSelectedDiscovery(
                        DISCOVERIES_DATA.find((d) => d.id === "disc-apollo11")
                      )
                    }
                  >
                    EXPLORE APOLLO 11 LOGS →
                  </button>

                  <BookmarkBtn
                    item={{
                      id: "discovery-apollo11",
                      title: "Apollo 11 First Moon Landing",
                      category: "Discovery",
                      path: "/discoveries",
                      desc: "Humanity's first crewed lunar landing at Tranquility Base in 1969."
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Luna 2 & 9 Card */}
            <div className="moon-feature-card luna-card">
              <div className="moon-card-backdrop luna-bg"></div>
              <div className="moon-card-overlay"></div>

              <div className="moon-card-content">
                <div className="moon-card-badge">
                  <span>🛰️ 1959 - 1966</span>
                  <span>FIRST IMPACT & FIRST SOFT LANDING</span>
                </div>

                <h3 className="moon-card-title">
                  LUNA 2 & LUNA 9: PIONEERING ROBOTICS
                </h3>

                <p className="moon-card-desc">
                  In September 1959, the Soviet Luna 2 became the first human
                  artifact to reach the Moon. Seven years later in 1966, Luna 9
                  completed the first successful soft touchdown, transmitting the
                  first panoramic photos of the Moon's surface.
                </p>

                <div className="moon-metrics-grid">
                  <div className="metric-box">
                    <span className="metric-label">FIRST IMPACT</span>
                    <span className="metric-value cyan-text">Luna 2 (Sept 13, 1959)</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">FIRST SOFT LANDING</span>
                    <span className="metric-value green-text">Luna 9 (Feb 3, 1966)</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">FIRST PHOTOS</span>
                    <span className="metric-value purple-text">Ocean of Storms</span>
                  </div>
                </div>

                <div className="moon-card-actions">
                  <button
                    className="explore-moon-btn"
                    onClick={() =>
                      setSelectedDiscovery(
                        DISCOVERIES_DATA.find((d) => d.id === "disc-luna2-9")
                      )
                    }
                  >
                    EXPLORE LUNA ARCHIVE →
                  </button>

                  <BookmarkBtn
                    item={{
                      id: "discovery-luna-missions",
                      title: "Luna 2 & 9 Robotic Landings",
                      category: "Discovery",
                      path: "/discoveries",
                      desc: "First man-made object on the Moon and first soft landing."
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PIONEERING ASTRONAUTS HALL OF FAME ================= */}
        <section className="astronauts-section">
          <div className="section-title-box">
            <span className="section-tag-pill">👨‍🚀 TRAILBLAZERS OF SPACE</span>
            <h2>PIONEERING ASTRONAUTS & COSMONAUTS</h2>
            <p>
              The brave pioneers who strapped into thunderous rockets to venture
              into the unknown vacuum of space.
            </p>
          </div>

          <div className="astronauts-grid">
            {PIONEERING_ASTRONAUTS.map((astro) => (
              <div
                key={astro.id}
                className="astronaut-card"
                onClick={() => setSelectedAstronaut(astro)}
              >
                <div className="astronaut-img-container">
                  <img src={astro.image} alt={astro.name} loading="lazy" />
                  <div className="astronaut-img-glow"></div>
                  <span className="astronaut-country-badge">{astro.country}</span>
                </div>

                <div className="astronaut-info">
                  <h3 className="astronaut-name">{astro.name}</h3>
                  <span className="astronaut-arabic-name">{astro.arabicName}</span>
                  <span className="astronaut-title-badge">{astro.title}</span>

                  <p className="astronaut-achievement">{astro.achievement}</p>

                  <div className="astronaut-quote-box">
                    <span className="quote-mark">“</span>
                    <p className="astronaut-quote-text">{astro.quote}</p>
                  </div>

                  <button className="view-astronaut-bio-btn">
                    VIEW MISSION PROFILE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ALL EXPEDITIONS & BREAKTHROUGHS MANIFEST ================= */}
        <section className="expeditions-manifest-section">
          <div className="manifest-header-bar">
            <div className="section-title-box" style={{ textAlign: "left", margin: 0 }}>
              <span className="section-tag-pill">🚀 EXPEDITIONS DIRECTORY</span>
              <h2>PLANETARY EXPEDITIONS & DISCOVERIES</h2>
              <p>
                Showing {filteredDiscoveries.length} planetary voyages and
                breakthrough discoveries across the Solar System.
              </p>
            </div>
          </div>

          {/* Expeditions Grid */}
          <div className="discoveries-grid">
            {filteredDiscoveries.map((item) => (
              <div key={item.id} className="discovery-card">
                {/* Image Box */}
                <div className="discovery-img-box">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="discovery-img-overlay"></div>

                  <span className="planet-target-badge">
                    <span className="planet-dot-indicator"></span>
                    {item.targetPlanet} / {item.targetPlanetArabic}
                  </span>

                  <span className="discovery-year-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.year}
                  </span>
                </div>

                {/* Body Content */}
                <div className="discovery-card-body">
                  <div className="discovery-card-top-row">
                    <span className="discovery-type-tag">{item.type}</span>
                    <span className="discovery-agency-tag">{item.agency}</span>
                  </div>

                  <h3 className="discovery-card-name">{item.name}</h3>
                  <h4 className="discovery-card-arabic-name">{item.arabicName}</h4>

                  {/* Breakthrough Badge */}
                  <div className="discovery-breakthrough-box">
                    <span className="breakthrough-icon-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4cd7f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </span>
                    <p className="breakthrough-text">{item.breakthrough}</p>
                  </div>

                  <p className="discovery-card-desc">{item.desc}</p>

                  {/* Card Bottom Actions */}
                  <div className="discovery-card-actions">
                    <button
                      className="view-discovery-btn"
                      onClick={() => setSelectedDiscovery(item)}
                    >
                      EXPLORE DISCOVERY →
                    </button>

                    <BookmarkBtn
                      item={{
                        id: item.id,
                        title: item.name,
                        category: "Discovery",
                        path: "/discoveries",
                        desc: item.desc
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDiscoveries.length === 0 && (
            <div className="no-discoveries-box">
              <span className="empty-telescope-icon">🔭</span>
              <h3>No Space Expeditions Found</h3>
              <p>
                We couldn't find any voyages matching "<strong>{searchQuery}</strong>".
                Try searching for "Moon", "Mars", "Jupiter", "Sun", "Venus", or "Apollo".
              </p>
              <button
                className="reset-search-btn"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPlanetFilter("ALL");
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>

        {/* ================= DISCOVERY DOSSIER MODAL ================= */}
        {selectedDiscovery && (
          <div
            className="discovery-modal-overlay"
            onClick={() => setSelectedDiscovery(null)}
          >
            <div
              className="discovery-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedDiscovery(null)}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="discovery-modal-banner">
                <img
                  src={selectedDiscovery.image}
                  alt={selectedDiscovery.name}
                />
                <div className="discovery-modal-banner-overlay"></div>

                <div className="discovery-modal-banner-text">
                  <div className="modal-pill-row">
                    <span className="planet-target-badge">
                      <span className="planet-dot-indicator"></span>
                      {selectedDiscovery.targetPlanet} / {selectedDiscovery.targetPlanetArabic}
                    </span>
                    <span className="discovery-year-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {selectedDiscovery.year}
                    </span>
                    <span className="discovery-type-tag">
                      {selectedDiscovery.type}
                    </span>
                  </div>

                  <h2>{selectedDiscovery.name}</h2>
                  <h3>{selectedDiscovery.arabicName}</h3>
                </div>
              </div>

              <div className="discovery-modal-body">
                {/* Breakthrough Spotlight */}
                <div className="modal-breakthrough-highlight">
                  <span className="highlight-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4cd7f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    KEY SCIENTIFIC BREAKTHROUGH
                  </span>
                  <p>{selectedDiscovery.breakthrough}</p>
                </div>

                <div className="modal-info-section">
                  <h4 className="section-subtitle-heading">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    EXPEDITION OVERVIEW
                  </h4>
                  <p>{selectedDiscovery.desc}</p>
                </div>

                <div className="modal-info-section">
                  <h4 className="section-subtitle-heading">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    SIGNIFICANT DISCOVERIES & DATA
                  </h4>
                  <ul className="modal-discoveries-list">
                    {selectedDiscovery.details.map((detail, index) => (
                      <li key={index}>
                        <span className="list-check-badge">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-specs-summary-grid">
                  <div className="modal-spec-item">
                    <span className="spec-item-label">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      TARGET LOCATION
                    </span>
                    <span className="spec-item-value cyan-text">
                      {selectedDiscovery.location}
                    </span>
                  </div>
                  <div className="modal-spec-item">
                    <span className="spec-item-label">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
                      SPACE AGENCY
                    </span>
                    <span className="spec-item-value purple-text">
                      {selectedDiscovery.agency}
                    </span>
                  </div>
                  <div className="modal-spec-item">
                    <span className="spec-item-label">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      EXPEDITION ERA
                    </span>
                    <span className="spec-item-value">
                      {selectedDiscovery.year}
                    </span>
                  </div>
                </div>

                <div className="modal-footer-row">
                  <BookmarkBtn
                    item={{
                      id: selectedDiscovery.id,
                      title: selectedDiscovery.name,
                      category: "Discovery",
                      path: "/discoveries",
                      desc: selectedDiscovery.desc
                    }}
                  />
                  <button
                    className="modal-close-btn-action"
                    onClick={() => setSelectedDiscovery(null)}
                  >
                    Close Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ASTRONAUT PROFILE MODAL ================= */}
        {selectedAstronaut && (
          <div
            className="discovery-modal-overlay"
            onClick={() => setSelectedAstronaut(null)}
          >
            <div
              className="discovery-modal-content astronaut-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedAstronaut(null)}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="astronaut-modal-header">
                <div className="astronaut-modal-avatar">
                  <img
                    src={selectedAstronaut.image}
                    alt={selectedAstronaut.name}
                  />
                </div>
                <div className="astronaut-modal-titles">
                  <span className="astronaut-country-badge">
                    {selectedAstronaut.country}
                  </span>
                  <h2>{selectedAstronaut.name}</h2>
                  <h3>{selectedAstronaut.arabicName}</h3>
                  <span className="astronaut-title-badge">
                    {selectedAstronaut.title}
                  </span>
                </div>
              </div>

              <div className="discovery-modal-body">
                <div className="astronaut-quote-spotlight">
                  <p className="en-quote">“{selectedAstronaut.quote}”</p>
                  <p className="ar-quote">«{selectedAstronaut.arabicQuote}»</p>
                </div>

                <div className="modal-info-section">
                  <h4>HISTORIC CONTRIBUTION & BIOGRAPHY</h4>
                  <p>{selectedAstronaut.bio}</p>
                </div>

                <div className="modal-info-section">
                  <h4>MAJOR ACHIEVEMENTS</h4>
                  <div className="achievement-pill">
                    🏆 {selectedAstronaut.achievement}
                  </div>
                </div>

                <div className="modal-footer-row">
                  <BookmarkBtn
                    item={{
                      id: selectedAstronaut.id,
                      title: `${selectedAstronaut.name} - Space Pioneer`,
                      category: "Astronaut",
                      path: "/discoveries",
                      desc: selectedAstronaut.achievement
                    }}
                  />
                  <button
                    className="modal-close-btn-action"
                    onClick={() => setSelectedAstronaut(null)}
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Discoveries;
