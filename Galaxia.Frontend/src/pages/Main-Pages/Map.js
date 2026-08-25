import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";

// Galaxy Assets
import MilkyWayImg from "../../assets/Galaxies/Milky_Way.jpg";
import AndromedaImg from "../../assets/Galaxies/Andromeda.jpg";
import BlackEyeImg from "../../assets/Galaxies/Black Eye.jpg";

// Planet Assets
import MercuryImg from "../../assets/planets/Mercury.jpg";
import VenusImg from "../../assets/planets/Venus.jpg";
import EarthImg from "../../assets/planets/Earth.jpg";
import MarsImg from "../../assets/planets/Mars.jpg";
import JupiterImg from "../../assets/planets/Jupiter.jpg";
import SaturnImg from "../../assets/planets/Saturn.jpg";
import UranusImg from "../../assets/planets/Uranus.jpg";
import NeptuneImg from "../../assets/planets/Neptune.jpg";
import PlutoImg from "../../assets/planets/Pluto.jpg";

import "./Map.css";

// ==========================================
// 1. GALAXIES DATASET (Level 1 - Deep Space Layout)
// ==========================================
const GALAXIES_DATA = [
  {
    id: "gal-milkyway",
    name: "Milky Way Galaxy",
    arabicName: "مجرة درب التبانة",
    type: "Barred Spiral (SBbc)",
    diameter: "100,000 Light Years",
    starsCount: "100 - 400 Billion Stars",
    distance: "0 ly (Our Location)",
    canEnter: true, // Only Milky Way can be entered
    image: MilkyWayImg,
    fallbackImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.6)",
    tiltAngle: -20,
    top: "48%",
    left: "48%",
    width: "350px",
    height: "200px",
    cardPos: "pos-bottom",
    desc: "Our home spiral galaxy featuring the Orion Arm, hosting our Sun, Earth, and all 8 planets of the Solar System.",
    constellation: "Sagittarius (Center)",
    supermassiveCore: "Sagittarius A* (4.1M Solar Masses)",
    spiralArms: "Orion, Perseus, Scutum-Centaurus, Sagittarius"
  },
  {
    id: "gal-andromeda",
    name: "Andromeda Galaxy (M31)",
    arabicName: "مجرة المرأة المسلسلة (أندروميدا)",
    type: "Barred Spiral (SA(s)b)",
    diameter: "220,000 Light Years",
    starsCount: "1 Trillion Stars",
    distance: "2.537 Million Light Years",
    canEnter: false,
    image: AndromedaImg,
    fallbackImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.6)",
    tiltAngle: -32,
    top: "18%",
    left: "78%",
    width: "270px",
    height: "155px",
    cardPos: "pos-bottom", // Opens downwards so it's fully visible!
    desc: "The largest spiral galaxy in our Local Group, bound by gravity to collide and merge with the Milky Way in 4.5 billion years.",
    constellation: "Andromeda",
    supermassiveCore: "Supermassive Core (140M Solar Masses)",
    spiralArms: "Two main spiral arms with starburst rings"
  },
  {
    id: "gal-triangulum",
    name: "Triangulum Galaxy (M33)",
    arabicName: "مجرة المثلث",
    type: "Spiral Galaxy (SA(s)cd)",
    diameter: "60,000 Light Years",
    starsCount: "40 Billion Stars",
    distance: "3.0 Million Light Years",
    canEnter: false,
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop",
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.6)",
    tiltAngle: 15,
    top: "76%",
    left: "18%",
    width: "220px",
    height: "135px",
    cardPos: "pos-top",
    desc: "The third-largest galaxy in the Local Group, renowned for its prolific star-forming nebulae including NGC 604.",
    constellation: "Triangulum",
    supermassiveCore: "Intermediate Core (< 3,000 Solar Masses)",
    spiralArms: "Loosely wound pinwheel arms with luminous gas"
  },
  {
    id: "gal-blackeye",
    name: "Black Eye Galaxy (M64)",
    arabicName: "مجرة العين السوداء",
    type: "Spiral Galaxy (SA(rs)ab)",
    diameter: "54,000 Light Years",
    starsCount: "100 Billion Stars",
    distance: "17 Million Light Years",
    canEnter: false,
    image: BlackEyeImg,
    fallbackImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
    color: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.6)",
    tiltAngle: -12,
    top: "74%",
    left: "80%",
    width: "230px",
    height: "140px",
    cardPos: "pos-top",
    desc: "Renowned for its dramatic band of dark absorbing dust absorbing stellar light, formed from a past collision with a gas-rich dwarf galaxy.",
    constellation: "Coma Berenices",
    supermassiveCore: "Compact Supermassive Core",
    spiralArms: "Counter-rotating interstellar gas disks"
  },
  {
    id: "gal-sombrero",
    name: "Sombrero Galaxy (M104)",
    arabicName: "مجرة سومبريرو",
    type: "Unbarred Spiral (SA(s)a)",
    diameter: "50,000 Light Years",
    starsCount: "100+ Billion Stars",
    distance: "31.1 Million Light Years",
    canEnter: false,
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop",
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.6)",
    tiltAngle: -8,
    top: "18%",
    left: "18%",
    width: "240px",
    height: "140px",
    cardPos: "pos-bottom", // Opens downwards so it's fully visible!
    desc: "Features an exceptionally brilliant bulbous nucleus, nearly edge-on dark dust lane, and an unusually large halo of 2,000 globular clusters.",
    constellation: "Virgo / Corvus",
    supermassiveCore: "Supermassive Black Hole (1 Billion Solar Masses)",
    spiralArms: "Symmetric dust ring seen almost edge-on"
  }
];

// ==========================================
// 2. SOLAR PLANETS DATASET (Level 2 & Level 3)
// Perfectly scaled orbits that fit completely within the screen
// ==========================================
const SOLAR_PLANETS = [
  {
    id: "planet-mercury",
    name: "Mercury",
    arabicName: "عطارد",
    type: "Terrestrial Planet",
    orbitRadius: 48, // Scaled for zero overflow
    speed: 0.045,
    size: 6,
    image: MercuryImg,
    color: "#a3a3a3",
    glowColor: "#d4d4d4",
    path: "/planets/mercury",
    distanceFromSun: "57.9M km (0.39 AU)",
    mass: "3.30 × 10^23 kg (0.055 Earths)",
    diameter: "4,879 km",
    gravity: "3.7 m/s² (0.38 g)",
    dayLength: "58.6 Earth Days",
    yearLength: "88 Earth Days",
    temp: "-180°C to +430°C",
    moons: 0,
    atmosphere: "Trace Sodium, Potassium",
    habitability: "0.59 (Scorching Basalt)",
    desc: "The smallest planet in our Solar System and closest to the Sun, featuring cratered basalt terrain."
  },
  {
    id: "planet-venus",
    name: "Venus",
    arabicName: "الزهرة",
    type: "Terrestrial Planet",
    orbitRadius: 78,
    speed: 0.035,
    size: 9,
    image: VenusImg,
    color: "#eab308",
    glowColor: "#facc15",
    path: "/planets/venus",
    distanceFromSun: "108.2M km (0.72 AU)",
    mass: "4.87 × 10^24 kg (0.815 Earths)",
    diameter: "12,104 km",
    gravity: "8.87 m/s² (0.90 g)",
    dayLength: "243 Earth Days",
    yearLength: "225 Earth Days",
    temp: "465°C (Runaway Greenhouse)",
    moons: 0,
    atmosphere: "96.5% CO2, Sulfuric Acid",
    habitability: "0.44 (Extreme Acidic Oven)",
    desc: "The hottest planet in our Solar System, blanketed by thick toxic clouds with extreme greenhouse heating."
  },
  {
    id: "planet-earth",
    name: "Earth",
    arabicName: "الأرض",
    type: "Terrestrial Ocean World",
    orbitRadius: 112,
    speed: 0.028,
    size: 10,
    image: EarthImg,
    color: "#3b82f6",
    glowColor: "#60a5fa",
    hasMoon: true,
    path: "/planets/earth",
    distanceFromSun: "149.6M km (1.00 AU)",
    mass: "5.97 × 10^24 kg (1.00 Earth)",
    diameter: "12,742 km",
    gravity: "9.81 m/s² (1.00 g)",
    dayLength: "24 Hours",
    yearLength: "365.25 Days",
    temp: "-88°C to +58°C (Avg 15°C)",
    moons: 1,
    atmosphere: "78% Nitrogen, 21% Oxygen",
    habitability: "1.00 (Ideal Biosphere)",
    desc: "Our home planet, the only known cradle of life with vast liquid water oceans and protective atmosphere."
  },
  {
    id: "planet-mars",
    name: "Mars",
    arabicName: "المريخ",
    type: "Terrestrial Desert World",
    orbitRadius: 148,
    speed: 0.022,
    size: 8,
    image: MarsImg,
    color: "#ef4444",
    glowColor: "#f87171",
    path: "/planets/mars",
    distanceFromSun: "227.9M km (1.52 AU)",
    mass: "6.42 × 10^23 kg (0.107 Earths)",
    diameter: "6,779 km",
    gravity: "3.72 m/s² (0.38 g)",
    dayLength: "24h 37m",
    yearLength: "687 Earth Days",
    temp: "-140°C to +20°C (Avg -63°C)",
    moons: 2,
    atmosphere: "95% Carbon Dioxide",
    habitability: "0.70 (Prime Exploration Target)",
    desc: "The Red Planet, home to the solar system's tallest volcano Olympus Mons and ancient dry river valleys."
  },
  {
    id: "planet-jupiter",
    name: "Jupiter",
    arabicName: "المشتري",
    type: "Gas Giant",
    orbitRadius: 190,
    speed: 0.016,
    size: 16,
    image: JupiterImg,
    color: "#d97706",
    glowColor: "#fbbf24",
    path: "/planets/jupiter",
    distanceFromSun: "778.5M km (5.20 AU)",
    mass: "1.90 × 10^27 kg (318 Earths)",
    diameter: "139,820 km",
    gravity: "24.79 m/s² (2.53 g)",
    dayLength: "9h 55m",
    yearLength: "11.86 Earth Years",
    temp: "-110°C",
    moons: 95,
    atmosphere: "90% Hydrogen, 10% Helium",
    habitability: "0.05 (Colossal Gas Giant)",
    desc: "The king of planets, containing twice the mass of all other planets combined, with its iconic Great Red Spot."
  },
  {
    id: "planet-saturn",
    name: "Saturn",
    arabicName: "زحل",
    type: "Ringed Gas Giant",
    orbitRadius: 236,
    speed: 0.012,
    size: 14,
    image: SaturnImg,
    hasRings: true,
    color: "#eab308",
    glowColor: "#fde047",
    path: "/planets/saturn",
    distanceFromSun: "1.43B km (9.58 AU)",
    mass: "5.68 × 10^26 kg (95 Earths)",
    diameter: "116,460 km",
    gravity: "10.44 m/s² (1.06 g)",
    dayLength: "10h 33m",
    yearLength: "29.45 Earth Years",
    temp: "-140°C",
    moons: 146,
    atmosphere: "96% Hydrogen, 3% Helium",
    habitability: "0.08 (Jewel of Solar System)",
    desc: "Adorned with a magnificent ring system composed of billions of water-ice chunks and dust."
  },
  {
    id: "planet-uranus",
    name: "Uranus",
    arabicName: "أورانوس",
    type: "Ice Giant",
    orbitRadius: 278,
    speed: 0.009,
    size: 11,
    image: UranusImg,
    color: "#06b6d4",
    glowColor: "#67e8f9",
    path: "/planets/uranus",
    distanceFromSun: "2.87B km (19.2 AU)",
    mass: "8.68 × 10^25 kg (14.5 Earths)",
    diameter: "50,724 km",
    gravity: "8.69 m/s² (0.89 g)",
    dayLength: "17h 14m",
    yearLength: "84 Earth Years",
    temp: "-195°C",
    moons: 28,
    atmosphere: "83% H2, 15% He, 2% CH4",
    habitability: "0.04 (Tilted Ice Giant)",
    desc: "An icy world that rolls on its side with a dramatic 98-degree axial tilt."
  },
  {
    id: "planet-neptune",
    name: "Neptune",
    arabicName: "نبتون",
    type: "Ice Giant",
    orbitRadius: 315,
    speed: 0.007,
    size: 11,
    image: NeptuneImg,
    color: "#2563eb",
    glowColor: "#3b82f6",
    path: "/planets/neptune",
    distanceFromSun: "4.50B km (30.1 AU)",
    mass: "1.02 × 10^26 kg (17.1 Earths)",
    diameter: "49,244 km",
    gravity: "11.15 m/s² (1.14 g)",
    dayLength: "16h 06m",
    yearLength: "164.8 Earth Years",
    temp: "-200°C",
    moons: 16,
    atmosphere: "80% H2, 19% He, 1.5% CH4",
    habitability: "0.03 (Supersonic Winds)",
    desc: "The most distant major planet with supersonic winds over 2,100 km/h and deep sapphire-blue skies."
  },
  {
    id: "planet-pluto",
    name: "Pluto",
    arabicName: "بلوتو",
    type: "Dwarf Planet",
    orbitRadius: 350,
    speed: 0.005,
    size: 6,
    image: PlutoImg,
    color: "#c084fc",
    glowColor: "#e9d5ff",
    path: "/planets/pluto",
    distanceFromSun: "5.91B km (39.5 AU)",
    mass: "1.30 × 10^22 kg (0.002 Earths)",
    diameter: "2,376 km",
    gravity: "0.62 m/s²",
    dayLength: "6.4 Earth Days",
    yearLength: "248 Earth Years",
    temp: "-230°C",
    moons: 5,
    atmosphere: "Thin Nitrogen, Methane",
    habitability: "0.15 (Kuiper Belt World)",
    desc: "Famous dwarf planet at the solar frontier with heart-shaped nitrogen glaciers and water-ice mountains."
  }
];

function Map() {
  // Navigation Mode: 'GALAXY_VIEW' (5 Galaxies in Space) | 'SOLAR_VIEW' (Inside Milky Way / Solar System)
  const [viewMode, setViewMode] = useState("GALAXY_VIEW");
  const [activeGalaxy, setActiveGalaxy] = useState(GALAXIES_DATA[0]);
  const [hoveredGalaxy, setHoveredGalaxy] = useState(null);

  // Solar View States
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [orbitTime, setOrbitTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isWarping, setIsWarping] = useState(false);

  // Orbit Animation Tick
  useEffect(() => {
    let interval;
    if (!isPaused && viewMode === "SOLAR_VIEW") {
      interval = setInterval(() => {
        setOrbitTime((t) => t + 0.035);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPaused, viewMode]);

  // Click on Galaxy: Enter Milky Way if canEnter, otherwise just set activeGalaxy to inspect
  const handleGalaxyClick = useCallback((galaxy) => {
    setActiveGalaxy(galaxy);
    if (galaxy.canEnter) {
      setIsWarping(true);
      setTimeout(() => {
        setViewMode("SOLAR_VIEW");
        setSelectedPlanet(null);
        setHoveredGalaxy(null);
        setIsWarping(false);
      }, 600);
    }
  }, []);

  // Return back to Deep Space (5 Galaxies View)
  const handleReturnToSpace = useCallback(() => {
    setIsWarping(true);
    setTimeout(() => {
      setViewMode("GALAXY_VIEW");
      setSelectedPlanet(null);
      setHoveredPlanet(null);
      setHoveredGalaxy(null);
      setIsWarping(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar />

      <div className={`space-map-viewport ${isWarping ? "warping-transition" : ""}`}>
        {/* ================= BACKGROUND DEEP SPACE STARS ================= */}
        <div className="deep-space-starfield">
          <div className="stars-layer-1"></div>
          <div className="stars-layer-2"></div>
          <div className="stars-layer-3"></div>
          <div className="shooting-star"></div>
        </div>

        {/* ================= TOP HUD CONTROLS ================= */}
        <header className="space-top-hud">
          {/* Breadcrumb Navigation */}
          <div className="hud-breadcrumbs">
            <button
              className={`hud-node ${viewMode === "GALAXY_VIEW" ? "active-node" : ""}`}
              onClick={handleReturnToSpace}
            >
              🌌 DEEP SPACE (مجرات الكون)
            </button>

            {viewMode === "SOLAR_VIEW" && (
              <>
                <span className="hud-sep">›</span>
                <span className="hud-node active-node">
                  🪐 MILKY WAY (SOLAR SYSTEM - المجموعة الشمسية)
                </span>
              </>
            )}

            {selectedPlanet && (
              <>
                <span className="hud-sep">›</span>
                <span className="hud-node active-node highlight-cyan">
                  🌍 {selectedPlanet.name.toUpperCase()}
                </span>
              </>
            )}
          </div>

          {/* Galaxy Quick Tabs at Top */}
          <div className="galaxy-switcher-tabs">
            {GALAXIES_DATA.map((gal) => (
              <button
                key={gal.id}
                className={`gal-tab-btn ${activeGalaxy.id === gal.id && viewMode === "GALAXY_VIEW" ? "tab-selected" : ""}`}
                onClick={() => {
                  setActiveGalaxy(gal);
                  if (gal.canEnter) {
                    handleGalaxyClick(gal);
                  } else {
                    setViewMode("GALAXY_VIEW");
                    setHoveredGalaxy(gal);
                  }
                }}
              >
                <span
                  className="gal-tab-dot"
                  style={{ background: gal.color }}
                ></span>
                {gal.name}
              </button>
            ))}
          </div>

          {/* Return Button when in Solar System */}
          {viewMode === "SOLAR_VIEW" && (
            <button className="return-space-btn" onClick={handleReturnToSpace}>
              ← Return to Galaxies (العودة للمجرات)
            </button>
          )}
        </header>

        {/* ================= VIEW 1: 5 GALAXIES DISTRIBUTED IN DEEP SPACE ================= */}
        {viewMode === "GALAXY_VIEW" && (
          <div className="galaxies-field-stage">
            {/* Ambient Cosmic Guide Notice */}
            <div className="space-guidance-badge">
              <span className="pulse-dot-cyan"></span>
              CLICK MILKY WAY TO EXPLORE SOLAR SYSTEM • HOVER OTHERS FOR DEEP ASTRONOMICAL DATA
            </div>

            {/* 5 Galaxies Distributed Across the Deep Space Canvas */}
            {GALAXIES_DATA.map((galaxy) => {
              const isHovered = hoveredGalaxy?.id === galaxy.id;

              return (
                <div
                  key={galaxy.id}
                  className={`galaxy-node-anchor ${isHovered ? "anchor-hovered" : ""}`}
                  style={{
                    top: galaxy.top,
                    left: galaxy.left,
                    width: galaxy.width,
                    height: galaxy.height,
                    transform: "translate(-50%, -50%)"
                  }}
                  onMouseEnter={() => setHoveredGalaxy(galaxy)}
                  onMouseLeave={() => setHoveredGalaxy(null)}
                  onClick={() => handleGalaxyClick(galaxy)}
                >
                  {/* Galaxy Disc Image */}
                  <div
                    className="galaxy-disc-wrapper"
                    style={{
                      transform: `rotate(${galaxy.tiltAngle}deg)`
                    }}
                  >
                    <img
                      src={galaxy.image || galaxy.fallbackImage}
                      alt={galaxy.name}
                      className="galaxy-disc-img"
                    />

                    {/* Core Glow */}
                    <div
                      className="galaxy-core-flare"
                      style={{
                        boxShadow: `0 0 70px 25px ${galaxy.glowColor}`
                      }}
                    ></div>

                    {/* Targeting Brackets (Visible on Hover) */}
                    <div className="galaxy-holo-brackets">
                      <span className="bracket-corner corner-tl"></span>
                      <span className="bracket-corner corner-tr"></span>
                      <span className="bracket-corner corner-bl"></span>
                      <span className="bracket-corner corner-br"></span>
                    </div>
                  </div>

                  {/* Galaxy Identifier Label */}
                  <div className="galaxy-label-tag">
                    <span className="tag-dot" style={{ background: galaxy.color }}></span>
                    <span className="tag-name">{galaxy.name}</span>
                    <span className="tag-ar">({galaxy.arabicName})</span>
                  </div>

                  {/* ================= HOVER-ONLY INFO CARD ================= */}
                  {isHovered && (
                    <div
                      className={`galaxy-hover-infocard ${galaxy.cardPos || "pos-bottom"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (galaxy.canEnter) handleGalaxyClick(galaxy);
                      }}
                    >
                      <div className="infocard-badge">
                        <span className="pulse-dot-cyan"></span>
                        {galaxy.canEnter
                          ? "🌟 HOME GALAXY & SOLAR SYSTEM"
                          : `🔭 TELESCOPIC DEEP SPACE • ${galaxy.type.toUpperCase()}`}
                      </div>

                      <h3 className="infocard-title">{galaxy.name}</h3>
                      <h4 className="infocard-ar-title">{galaxy.arabicName}</h4>

                      <p className="infocard-desc">{galaxy.desc}</p>

                      <div className="infocard-specs-row">
                        <div className="spec-item">
                          <span className="lbl">CONSTELLATION:</span>
                          <span className="val">{galaxy.constellation}</span>
                        </div>
                        <div className="spec-item">
                          <span className="lbl">DIAMETER:</span>
                          <span className="val cyan-text">{galaxy.diameter}</span>
                        </div>
                        <div className="spec-item">
                          <span className="lbl">DISTANCE FROM EARTH:</span>
                          <span className="val purple-text">{galaxy.distance}</span>
                        </div>
                        <div className="spec-item">
                          <span className="lbl">ESTIMATED STARS:</span>
                          <span className="val green-text">{galaxy.starsCount}</span>
                        </div>
                        <div className="spec-item">
                          <span className="lbl">GALACTIC CORE:</span>
                          <span className="val">{galaxy.supermassiveCore}</span>
                        </div>
                        <div className="spec-item">
                          <span className="lbl">STRUCTURE:</span>
                          <span className="val">{galaxy.spiralArms}</span>
                        </div>
                      </div>

                      {/* Action Button: ONLY for Milky Way */}
                      {galaxy.canEnter ? (
                        <button
                          className="infocard-enter-btn"
                          onClick={() => handleGalaxyClick(galaxy)}
                        >
                          🚀 ENTER SOLAR SYSTEM (دخول المجموعة الشمسية) →
                        </button>
                      ) : (
                        <div className="infocard-telescope-note">
                          <span>🔭 رصد فلكي تلسكوبي فقط • لا يمكن الدخول</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ================= VIEW 2: SOLAR SYSTEM WITH SCALED ORBITS ================= */}
        {viewMode === "SOLAR_VIEW" && (
          <div className="solar-system-stage">
            {/* The Central Radiant Sun */}
            <div className="radiant-sun-center">
              <div className="sun-pulse-halo"></div>
              <div className="sun-sphere"></div>
              <span className="sun-name-badge">☀️ THE SUN (الشمس)</span>
            </div>

            {/* Orbit Tracks & Scaled Revolving Planet Spheres */}
            <div className="planetary-orbits-arena">
              {SOLAR_PLANETS.map((planet) => {
                const angle = orbitTime * planet.speed * 20;
                const posX = Math.cos(angle) * planet.orbitRadius;
                const posY = Math.sin(angle) * planet.orbitRadius;
                const isHovered = hoveredPlanet?.id === planet.id;
                const isSelected = selectedPlanet?.id === planet.id;

                return (
                  <div
                    key={planet.id}
                    className={`orbit-circular-track ${isHovered || isSelected ? "orbit-active" : ""}`}
                    style={{
                      width: `${planet.orbitRadius * 2}px`,
                      height: `${planet.orbitRadius * 2}px`
                    }}
                  >
                    {/* Planet Node */}
                    <div
                      className={`revolving-planet-sphere ${isSelected ? "planet-focused" : ""}`}
                      style={{
                        transform: `translate(${posX}px, ${posY}px)`,
                        width: `${planet.size * 2}px`,
                        height: `${planet.size * 2}px`,
                        boxShadow: `0 0 ${planet.size * 1.5}px ${planet.glowColor || planet.color}`
                      }}
                      onMouseEnter={() => setHoveredPlanet(planet)}
                      onMouseLeave={() => setHoveredPlanet(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlanet(planet);
                      }}
                    >
                      {/* Realistic Planet Texture Image */}
                      <img
                        src={planet.image}
                        alt={planet.name}
                        className="planet-texture-img"
                      />

                      {/* 3D Atmospheric Shadow & Lighting Terminator */}
                      <div className="planet-shadow-terminator"></div>

                      {/* Saturn's Rings */}
                      {planet.hasRings && (
                        <div
                          className="saturn-golden-rings"
                          style={{
                            width: `${planet.size * 3.8}px`,
                            height: `${planet.size * 1.4}px`
                          }}
                        ></div>
                      )}

                      {/* Earth's Moon */}
                      {planet.hasMoon && (
                        <div className="earth-mini-moon"></div>
                      )}

                      {/* Always Visible Planet Tag */}
                      <span className="planet-orbital-label">
                        {planet.name}
                      </span>

                      {/* Hover Tooltip Card */}
                      {isHovered && (
                        <div className="planet-hover-tooltip">
                          <div className="tooltip-title">
                            <strong>{planet.name}</strong> ({planet.arabicName})
                          </div>
                          <div className="tooltip-sub">{planet.type}</div>
                          <div className="tooltip-stat">
                            <span>Dist:</span> {planet.distanceFromSun}
                          </div>
                          <div className="tooltip-prompt">Click to open 3D Scanner 🔍</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Planet Navigation Bar */}
            <div className="planets-bottom-nav">
              <span className="nav-label">🪐 PLANETARY MANIFEST:</span>
              <div className="planets-pills-scroll">
                {SOLAR_PLANETS.map((planet) => (
                  <button
                    key={planet.id}
                    className={`planet-pill-btn ${selectedPlanet?.id === planet.id ? "pill-active" : ""}`}
                    onClick={() => setSelectedPlanet(planet)}
                  >
                    <span
                      className="planet-dot"
                      style={{ background: planet.color, boxShadow: `0 0 8px ${planet.color}` }}
                    ></span>
                    <span>{planet.name}</span>
                    <span className="ar-tag">({planet.arabicName})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level 3: 3D Planetary Holo-Scanner Modal */}
            {selectedPlanet && (
              <div
                className="planet-dossier-overlay"
                onClick={() => setSelectedPlanet(null)}
              >
                <div
                  className="planet-dossier-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="dossier-close-btn"
                    onClick={() => setSelectedPlanet(null)}
                  >
                    ✕
                  </button>

                  <div className="dossier-grid">
                    {/* Left: 3D Visual Sphere */}
                    <div className="dossier-visual-col">
                      <div className="dossier-planet-sphere">
                        <img
                          src={selectedPlanet.image}
                          alt={selectedPlanet.name}
                          className="dossier-sphere-texture"
                        />
                        {selectedPlanet.hasRings && (
                          <div className="dossier-saturn-rings"></div>
                        )}
                        <div className="dossier-atmo-glow"></div>
                      </div>

                      <div className="holo-orbit-ring ring-1"></div>
                      <div className="holo-orbit-ring ring-2"></div>

                      <span className="dossier-holo-tag">
                        ● 3D SCAN: {selectedPlanet.name.toUpperCase()}
                      </span>
                    </div>

                    {/* Right: Telemetry Specs */}
                    <div className="dossier-data-col">
                      <div className="dossier-header">
                        <div className="dossier-badge-row">
                          <span className="dossier-type-tag">
                            {selectedPlanet.type}
                          </span>
                          <span className="dossier-habit-tag">
                            ESI: {selectedPlanet.habitability}
                          </span>
                        </div>

                        <h2>{selectedPlanet.name}</h2>
                        <h3>{selectedPlanet.arabicName}</h3>
                        <p className="dossier-desc">{selectedPlanet.desc}</p>
                      </div>

                      {/* Scientific Matrix */}
                      <div className="dossier-matrix-grid">
                        <div className="dossier-cell">
                          <span className="cell-label">DISTANCE FROM SUN</span>
                          <span className="cell-value cyan-text">
                            {selectedPlanet.distanceFromSun}
                          </span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">MASS</span>
                          <span className="cell-value">{selectedPlanet.mass}</span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">DIAMETER</span>
                          <span className="cell-value">{selectedPlanet.diameter}</span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">SURFACE GRAVITY</span>
                          <span className="cell-value purple-text">
                            {selectedPlanet.gravity}
                          </span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">DAY LENGTH</span>
                          <span className="cell-value">{selectedPlanet.dayLength}</span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">ORBITAL YEAR</span>
                          <span className="cell-value">{selectedPlanet.yearLength}</span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">TEMPERATURE</span>
                          <span className="cell-value green-text">
                            {selectedPlanet.temp}
                          </span>
                        </div>
                        <div className="dossier-cell">
                          <span className="cell-label">MOONS</span>
                          <span className="cell-value">{selectedPlanet.moons} Moons</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="dossier-actions-row">
                        {selectedPlanet.path && (
                          <NavLink
                            to={selectedPlanet.path}
                            className="enter-encyclopedia-link"
                          >
                            ENTER WORLD ENCYCLOPEDIA →
                          </NavLink>
                        )}

                        <BookmarkBtn
                          item={{
                            id: selectedPlanet.id,
                            title: `${selectedPlanet.name} (${selectedPlanet.arabicName})`,
                            category: "Planet",
                            path: selectedPlanet.path,
                            desc: selectedPlanet.desc
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Orbit Simulation Pause / Resume */}
        {viewMode === "SOLAR_VIEW" && (
          <div className="solar-floating-controls">
            <button
              className="ctrl-circle-btn"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume Orbit" : "Pause Orbit"}
            >
              {isPaused ? "▶" : "⏸"}
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Map;
