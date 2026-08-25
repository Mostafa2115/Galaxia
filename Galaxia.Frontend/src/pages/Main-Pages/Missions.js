import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import "./Missions.css";

// Comprehensive Cosmic Missions Database
const MISSIONS_DATA = [
  {
    id: "mission-jwst",
    name: "JWST (James Webb Space Telescope)",
    shortName: "JWST",
    category: "ACTIVE",
    destination: "DEEP_SPACE",
    targetTag: "DEEP SPACE",
    status: "Nominal",
    statusType: "nominal",
    location: "L2 ORBIT (1.5M KM)",
    agency: "NASA / ESA / CSA",
    launchDate: "Dec 25, 2021",
    launchVehicle: "Ariane 5 ECA",
    distance: "1,500,000 km from Earth",
    speed: "0.20 km/s (Orbital at L2)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    desc: "Infrared space observatory observing the earliest cosmic dawn, stellar nurseries, and exoplanet atmospheres with unprecedented resolution.",
    objectives: [
      "Search for the first galaxies and luminous objects formed after the Big Bang.",
      "Determine how galaxies evolved from their formation until now.",
      "Observe the formation of stars from the first stages to planetary system emergence.",
      "Measure physical and chemical properties of planetary systems and assess biosignature potential."
    ],
    payload: ["NIRCam (Near-Infrared)", "NIRSpec (Spectrograph)", "MIRI (Mid-Infrared)", "FGS/NIRISS (Fine Guidance)"]
  },
  {
    id: "mission-artemis-3",
    name: "ARTEMIS III",
    shortName: "ARTEMIS III",
    category: "FUTURE",
    destination: "MOON",
    targetTag: "LUNAR SURFACE",
    status: "Pre-Launch",
    statusType: "prelaunch",
    location: "LUNAR SOUTH POLE",
    agency: "NASA / International",
    launchDate: "Targeted 2026-2027",
    launchVehicle: "SLS Block 1B + Starship HLS",
    distance: "384,400 km from Earth",
    speed: "Trans-Lunar Injection: 11.2 km/s",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
    desc: "First crewed lunar landing since Apollo 17 in 1972, placing the first woman and person of color on the water-ice rich Lunar South Pole.",
    objectives: [
      "Establish permanent sustainable human presence in the Moon's South Pole.",
      "Sample pristine volatiles and deep crater water-ice inside permanently shadowed regions.",
      "Deploy Lunar Terrain Vehicles and surface habitation technology for Mars prep.",
      "Conduct in-situ resource utilization (ISRU) tests to generate breathable O2 and fuel."
    ],
    payload: ["Starship Human Landing System (HLS)", "Axiom AxEMU Spacesuits", "LEAS Science Package", "Lunar Terrain Rover"]
  },
  {
    id: "mission-perseverance",
    name: "PERSEVERANCE & INGENUITY",
    shortName: "PERSEVERANCE",
    category: "ACTIVE",
    destination: "MARS",
    targetTag: "MARS CRATER",
    status: "Nominal",
    statusType: "nominal",
    location: "JEZERO CRATER, MARS",
    agency: "NASA JPL",
    launchDate: "July 30, 2020",
    launchVehicle: "Atlas V 541",
    distance: "225,000,000 km from Earth",
    speed: "Max driving speed: 152 m/h",
    image: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?q=80&w=1200&auto=format&fit=crop",
    desc: "Advanced astrobiology rover and scout helicopter collecting Martian core samples and synthesizing oxygen in Jezero Crater.",
    objectives: [
      "Identify ancient Martian environments capable of supporting past microbial life.",
      "Drill and hermetically seal core rock samples for future Mars Sample Return retrieval.",
      "Produce high-purity oxygen from the Martian CO2 atmosphere using the MOXIE module.",
      "Characterize weather, dust, and environmental radiation hazards for future astronauts."
    ],
    payload: ["SuperCam (Laser Spec)", "MOXIE (O2 Generator)", "Mastcam-Z (Stereo Zoom)", "PIXL & SHERLOC (Astrobiology)"]
  },
  {
    id: "mission-parker",
    name: "PARKER SOLAR PROBE",
    shortName: "PARKER SOLAR PROBE",
    category: "ACTIVE",
    destination: "SUN",
    targetTag: "SOLAR CORONA",
    status: "Nominal",
    statusType: "nominal",
    location: "HELIOCENTRIC / CORONA",
    agency: "NASA / JHU APL",
    launchDate: "Aug 12, 2018",
    launchVehicle: "Delta IV Heavy",
    distance: "148,000,000 km from Earth",
    speed: "692,000 km/h (430,000 mph)",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    desc: "Humanity's fastest spacecraft, repeatedly plunging through the Sun's blistering corona at 430,000 mph to solve the coronal heating mystery.",
    objectives: [
      "Trace the flow of energy that heats the solar corona to over 1 million degrees Celsius.",
      "Determine the structure and dynamics of the magnetic fields at the sources of solar wind.",
      "Explore mechanisms that accelerate and transport energetic solar particles into the heliosphere.",
      "Provide unprecedented close-range imagery of solar flare eruptions."
    ],
    payload: ["SWEAP (Solar Wind Ions)", "FIELDS (Magnetic Fields)", "WISPR (Corona Imager)", "IS☉IS (Energetic Particles)"]
  },
  {
    id: "mission-europa-clipper",
    name: "EUROPA CLIPPER",
    shortName: "EUROPA CLIPPER",
    category: "ACTIVE",
    destination: "OUTER",
    targetTag: "JOVIAN MOONS",
    status: "En Route",
    statusType: "enroute",
    location: "INTERPLANETARY CRUISE",
    agency: "NASA / JPL",
    launchDate: "Oct 14, 2024",
    launchVehicle: "Falcon Heavy",
    distance: "780,000,000 km (At Destination)",
    speed: "Cruise Velocity: 28.5 km/s",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    desc: "Flagship planetary mission conducting nearly 50 close flybys of Jupiter's icy moon Europa to confirm whether its subsurface ocean can support life.",
    objectives: [
      "Measure the thickness of Europa's icy shell and study ocean interactions.",
      "Investigate the composition of surface ice and detect possible organic plumes.",
      "Characterize Europa's surface geology and identify future lander landing sites.",
      "Evaluate magnetic fields to determine ocean depth and salinity."
    ],
    payload: ["REASON (Ice Penetrating Radar)", "MASPEX (Gas Spectrometer)", "SUDA (Surface Dust Analyzer)", "MISE (Infrared Imaging)"]
  },
  {
    id: "mission-voyager-1",
    name: "VOYAGER 1",
    shortName: "VOYAGER 1",
    category: "ACTIVE",
    destination: "DEEP_SPACE",
    targetTag: "INTERSTELLAR MEDIUM",
    status: "Legacy Stream",
    statusType: "legacy",
    location: "INTERSTELLAR SPACE",
    agency: "NASA JPL",
    launchDate: "Sept 5, 1977",
    launchVehicle: "Titan IIIE Centaur",
    distance: "24,400,000,000 km (163 AU)",
    speed: "61,200 km/h (17 km/s)",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    desc: "The most distant human-made object in history, actively sending in-situ measurements from the true interstellar medium beyond the Sun's heliosphere.",
    objectives: [
      "Traverse the termination shock, heliopause, and interstellar boundary.",
      "Measure magnetic field vectors, galactic cosmic rays, and interstellar plasma density.",
      "Carry the Golden Record message of humanity across galactic timescales.",
      "Transmit engineering telemetry over 22.5 light-hours of deep space."
    ],
    payload: ["Triaxial Fluxgate Magnetometer", "Cosmic Ray System (CRS)", "Low-Energy Charged Particle (LECP)", "Plasma Wave Subsystem (PWS)"]
  },
  {
    id: "mission-apollo-11",
    name: "APOLLO 11",
    shortName: "APOLLO 11",
    category: "HISTORIC",
    destination: "MOON",
    targetTag: "LUNAR SURFACE",
    status: "Completed",
    statusType: "completed",
    location: "SEA OF TRANQUILITY",
    agency: "NASA",
    launchDate: "July 16, 1969",
    launchVehicle: "Saturn V",
    distance: "384,400 km from Earth",
    speed: "Re-entry velocity: 11.0 km/s",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop",
    desc: "The monumental first mission that landed humans on the Moon, safely returning astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins to Earth.",
    objectives: [
      "Perform crewed lunar landing on the Sea of Tranquility.",
      "Collect and return 21.55 kg of lunar regolith and basalt rocks to Earth.",
      "Deploy Passive Seismic Experiment and Laser Ranging Retroreflector.",
      "Verify spacecraft systems, lunar descent stage, and EVA suits under lunar gravity."
    ],
    payload: ["Lunar Module (LM-5 Eagle)", "Command Module (CM-107 Columbia)", "Passive Seismic Experiment (PSEP)", "Laser Ranging Retroreflector"]
  },
  {
    id: "mission-cassini",
    name: "CASSINI-HUYGENS",
    shortName: "CASSINI",
    category: "HISTORIC",
    destination: "OUTER",
    targetTag: "SATURN SYSTEM",
    status: "Grand Finale",
    statusType: "completed",
    location: "SATURN ORBIT",
    agency: "NASA / ESA / ASI",
    launchDate: "Oct 15, 1997",
    launchVehicle: "Titan IVB / Centaur",
    distance: "1,400,000,000 km from Earth",
    speed: "Atmospheric Entry: 35 km/s",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?q=80&w=1200&auto=format&fit=crop",
    desc: "Epic 20-year mission that mapped Saturn's rings, landed the Huygens probe on liquid methane lakes of Titan, and discovered geysers on Enceladus.",
    objectives: [
      "Conduct comprehensive orbital study of Saturn's magnetosphere and ring structure.",
      "Deploy ESA's Huygens probe directly onto Titan's alien surface.",
      "Discover hydrothermal activity and subsurface liquid oceans beneath Enceladus's crust.",
      "Execute the Grand Finale plunge into Saturn's upper atmosphere to prevent contamination."
    ],
    payload: ["Huygens Surface Probe", "Cassini Radar System", "VIMS (Visual & IR Spectrometer)", "INMS (Ion & Neutral Mass Spec)"]
  },
  {
    id: "mission-dragonfly",
    name: "DRAGONFLY",
    shortName: "DRAGONFLY",
    category: "FUTURE",
    destination: "OUTER",
    targetTag: "TITAN SURFACE",
    status: "Development",
    statusType: "prelaunch",
    location: "SELK CRATER, TITAN",
    agency: "NASA / JHU APL",
    launchDate: "Targeted July 2028",
    launchVehicle: "Heavy Lift Rocket",
    distance: "1.4 Billion km from Earth",
    speed: "Flight speed on Titan: ~36 km/h",
    image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=1200&auto=format&fit=crop",
    desc: "Autonomous nuclear-powered octocopter rotorcraft that will fly dozens of kilometers across Titan to inspect prebiotic chemistry and liquid hydrocarbons.",
    objectives: [
      "Sample organic surface materials in Titan's organic-rich Selk Crater impact basin.",
      "Investigate how far prebiotic chemistry has progressed in Titan's methane environment.",
      "Search for chemical biosignatures in water-ice melt and organic sediments.",
      "Measure Titan's seismic activity, atmospheric dynamics, and methane cycle."
    ],
    payload: ["DraMS (Mass Spectrometer)", "DraGNS (Gamma-Ray & Neutron Spec)", "DraGMet (Geophysics & Meteorology)", "DragonCam (Suite of Micro-Cameras)"]
  },
  {
    id: "mission-curiosity",
    name: "CURIOSITY ROVER (MSL)",
    shortName: "CURIOSITY",
    category: "ACTIVE",
    destination: "MARS",
    targetTag: "MARS CRATER",
    status: "Nominal",
    statusType: "nominal",
    location: "GALE CRATER, MARS",
    agency: "NASA JPL",
    launchDate: "Nov 26, 2011",
    launchVehicle: "Atlas V 541",
    distance: "225,000,000 km from Earth",
    speed: "Traversed 32+ km on Mars",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
    desc: "Nuclear-powered rover exploring the sedimentary layers of Mount Sharp in Gale Crater, proving that ancient Mars possessed habitable freshwater lake beds.",
    objectives: [
      "Assess biological potential and identify carbon compounds in Martian strata.",
      "Characterize geology and geochemical history of the Gale Crater lake system.",
      "Measure Martian surface radiation to determine human exploration safety parameters.",
      "Track modern atmospheric cycles of methane and water vapor."
    ],
    payload: ["SAM (Sample Analysis at Mars)", "CheMin (X-ray Diffraction)", "ChemCam (Laser Spec)", "RAD (Radiation Assessment Detector)"]
  },
  {
    id: "mission-new-horizons",
    name: "NEW HORIZONS",
    shortName: "NEW HORIZONS",
    category: "ACTIVE",
    destination: "DEEP_SPACE",
    targetTag: "KUIPER BELT",
    status: "Extended Mission",
    statusType: "enroute",
    location: "KUIPER BELT (8.5B KM)",
    agency: "NASA / SwRI",
    launchDate: "Jan 19, 2006",
    launchVehicle: "Atlas V 551",
    distance: "8,500,000,000 km from Earth",
    speed: "58,500 km/h (16.2 km/s)",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    desc: "First reconnaissance of Pluto and its moons, followed by the historic exploration of contact binary Arrokoth in the primordial Kuiper Belt.",
    objectives: [
      "Map surface composition, morphology, and nitrogen ice glaciers of Pluto and Charon.",
      "Characterize Pluto's thin escaping atmosphere and ionosphere.",
      "Perform first close-up flyby of a primitive Kuiper Belt object (Arrokoth).",
      "Measure interstellar dust and solar wind interactions at the edge of the solar system."
    ],
    payload: ["LORRI (Long-Range Recon Imager)", "Ralph (Color Imager & Spec)", "Alice (UV Imaging Spectrometer)", "SWAP (Solar Wind at Pluto)"]
  },
  {
    id: "mission-hubble",
    name: "HUBBLE SPACE TELESCOPE",
    shortName: "HUBBLE",
    category: "ACTIVE",
    destination: "DEEP_SPACE",
    targetTag: "LOW EARTH ORBIT",
    status: "Operational",
    statusType: "nominal",
    location: "LEO 535 KM ORBIT",
    agency: "NASA / ESA",
    launchDate: "April 24, 1990",
    launchVehicle: "Space Shuttle Discovery (STS-31)",
    distance: "535 km above Earth",
    speed: "27,300 km/h (7.59 km/s)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    desc: "Legendary space telescope that revolutionized modern astrophysics for over three decades, providing breathtaking deep-field views of cosmic history.",
    objectives: [
      "Determine the Hubble constant and rate of universal cosmic acceleration.",
      "Discover and probe supermassive black holes in galactic nuclei.",
      "Study star birth, protoplanetary disks, and galactic collisions.",
      "Observe deep sky gravitational lenses and dark matter halos."
    ],
    payload: ["WFC3 (Wide Field Camera 3)", "ACS (Advanced Camera for Surveys)", "COS (Cosmic Origins Spectrograph)", "STIS (Imaging Spectrograph)"]
  }
];

// Initial Telemetry Log feed
const INITIAL_LOGS = [
  { time: "14:02:44", source: "VOYAGER_1", text: "Carrier lock verified (-162.4 dBm) via DSS-14 Goldstone." },
  { time: "14:02:50", source: "MARS_RECON", text: "High-resolution stereo packet received (4.2 MB compressed)." },
  { time: "14:03:12", source: "ISS_ZARYA", text: "Orbital station attitude adjust nominal. Reaction wheels nominal." },
  { time: "14:03:40", source: "PARKER_SP", text: "Perihelion trajectory confirmed. Heat shield thermal flux nominal." },
  { time: "14:04:01", source: "DSN_CANBERRA", text: "Deep space 70m antenna beam steering locked onto Jovian cluster." },
  { time: "14:04:22", source: "JWST_NIRSPEC", text: "Deep field infrared spectroscopy sequence initiated on Target MACS0647." }
];

function Missions() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeDestination, setActiveDestination] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMission, setSelectedMission] = useState(null);
  const [telemetryLogs, setTelemetryLogs] = useState(INITIAL_LOGS);
  const dsnStatus = "STABLE (99.98%)";
  const [radarRotation, setRadarRotation] = useState(0);

  // Radar Animation Loop
  useEffect(() => {
    const radarInterval = setInterval(() => {
      setRadarRotation((prev) => (prev + 3) % 360);
    }, 40);
    return () => clearInterval(radarInterval);
  }, []);

  // Periodic Telemetry Simulation
  useEffect(() => {
    const randomFeed = [
      { source: "ARTEMIS_ORION", text: "Avionics telemetry self-check complete. 0 anomalies detected." },
      { source: "EUROPA_CLIPPER", text: "Solar array sun-tracking aligned. Cruise trajectory nominal." },
      { source: "PERSEVERANCE", text: "Core sample #26 sealed in titanium tube inside belly carousel." },
      { source: "HUBBLE_WFC3", text: "Fine guidance sensor tracking guide star HD 218396." },
      { source: "DSN_MADRID", text: "Uplink signal SNR +24.8 dB across Deep Space Network band." }
    ];

    const telemetryInterval = setInterval(() => {
      const randomEntry = randomFeed[Math.floor(Math.random() * randomFeed.length)];
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];

      setTelemetryLogs((prev) => [
        { time: timeString, source: randomEntry.source, text: randomEntry.text },
        ...prev.slice(0, 7)
      ]);
    }, 9000);

    return () => clearInterval(telemetryInterval);
  }, []);

  // Filtered Missions Logic
  const filteredMissions = useMemo(() => {
    return MISSIONS_DATA.filter((m) => {
      // Category Filter (HISTORIC, ACTIVE, FUTURE)
      const matchesCategory =
        activeCategory === "ALL" || m.category.toUpperCase() === activeCategory.toUpperCase();

      // Destination Filter
      const matchesDestination =
        activeDestination === "ALL" || m.destination === activeDestination;

      // Search Filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        m.name.toLowerCase().includes(query) ||
        m.shortName.toLowerCase().includes(query) ||
        m.agency.toLowerCase().includes(query) ||
        m.location.toLowerCase().includes(query) ||
        m.desc.toLowerCase().includes(query);

      return matchesCategory && matchesDestination && matchesSearch;
    });
  }, [activeCategory, activeDestination, searchQuery]);

  // Statistics Counts
  const counts = useMemo(() => {
    return {
      all: MISSIONS_DATA.length,
      historic: MISSIONS_DATA.filter((m) => m.category === "HISTORIC").length,
      active: MISSIONS_DATA.filter((m) => m.category === "ACTIVE").length,
      future: MISSIONS_DATA.filter((m) => m.category === "FUTURE").length
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="missions-page">
        {/* ================= HERO & TELEMETRY SECTION ================= */}
        <section className="missions-hero-section">
          <div className="missions-hero-grid">
            {/* Left Hero Card */}
            <div className="missions-main-card">
              <div className="missions-hero-backdrop"></div>
              <div className="missions-hero-overlay"></div>

              <div className="missions-hero-content">
                <div className="hero-badge-pill">
                  <span className="pulse-dot-cyan"></span>
                  GLOBAL OVERVIEW
                </div>

                <h1 className="missions-hero-title">MISSIONS</h1>

                <p className="missions-hero-desc">
                  Cataloging humanity's enduring journey to the stars. From the first
                  atmospheric breaches to the establishment of multi-planetary outposts,
                  explore the vehicles and voyagers that expand our cosmic footprint.
                </p>

                {/* Quick Search Bar inside Hero */}
                <div className="hero-search-wrapper">
                  <div className="hero-search-input-box">
                    <span className="search-icon">🔍</span>
                    <input
                      type="text"
                      placeholder="Search mission name, agency, target..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="hero-search-input"
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
              </div>
            </div>

            {/* Right Telemetry & HUD Card */}
            <div className="missions-hud-card">
              {/* Network Status Top Header */}
              <div className="hud-header">
                <span className="hud-title">NETWORK STATUS</span>
                <span className="hud-icon-live">📡</span>
              </div>

              <div className="hud-stats-grid">
                <div className="hud-stat-item">
                  <span className="hud-stat-label">DSN UPLINK</span>
                  <span className="hud-stat-value green-glow">{dsnStatus}</span>
                </div>
                <div className="hud-stat-item">
                  <span className="hud-stat-label">BANDWIDTH</span>
                  <span className="hud-stat-value cyan-glow">42.8 Mbps</span>
                </div>
                <div className="hud-stat-item">
                  <span className="hud-stat-label">ACTIVE NODES</span>
                  <span className="hud-stat-value purple-glow">
                    MADRID, GOLDSTONE, CANBERRA
                  </span>
                </div>
              </div>

              {/* Radar Sweeper Widget */}
              <div className="hud-radar-box">
                <div className="radar-screen">
                  <div className="radar-circle circle-1"></div>
                  <div className="radar-circle circle-2"></div>
                  <div className="radar-circle circle-3"></div>
                  <div className="radar-axis-x"></div>
                  <div className="radar-axis-y"></div>

                  {/* Sweep Needle */}
                  <div
                    className="radar-sweep"
                    style={{ transform: `rotate(${radarRotation}deg)` }}
                  ></div>

                  {/* Probe Blips */}
                  <div className="radar-blip blip-jwst" title="JWST (L2 Orbit)">
                    <span>JWST</span>
                  </div>
                  <div className="radar-blip blip-voyager" title="Voyager 1 (Interstellar)">
                    <span>VOYAGER-1</span>
                  </div>
                  <div className="radar-blip blip-parker" title="Parker Probe (Solar Corona)">
                    <span>PARKER</span>
                  </div>
                  <div className="radar-blip blip-artemis" title="Artemis III (Lunar)">
                    <span>ARTEMIS</span>
                  </div>
                </div>
              </div>

              {/* Live Telemetry Log Feed */}
              <div className="hud-telemetry-box">
                <div className="telemetry-title-bar">
                  <span>TELEMETRY LOG</span>
                  <span className="pulse-dot-green"></span>
                </div>
                <div className="telemetry-log-stream">
                  {telemetryLogs.map((log, index) => (
                    <div key={index} className="log-entry">
                      <span className="log-time">[{log.time}]</span>{" "}
                      <span className="log-source">{log.source}:</span>{" "}
                      <span className="log-text">{log.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLASSIFICATION SECTION ================= */}
        <section className="missions-classification-section">
          <div className="section-header-tag">
            <span className="section-icon">⚛</span>
            <h2>CLASSIFICATION</h2>
          </div>

          <div className="classification-cards-grid">
            {/* 1. Historic Tab */}
            <div
              className={`classification-card ${activeCategory === "HISTORIC" ? "active-card" : ""}`}
              onClick={() =>
                setActiveCategory(activeCategory === "HISTORIC" ? "ALL" : "HISTORIC")
              }
            >
              <div className="class-card-top">
                <h3>HISTORIC</h3>
                <span className="class-icon">⏱️</span>
              </div>
              <p>
                Archived missions that laid the groundwork. Completed objectives
                and legacy telemetry.
              </p>
              <div className="class-stat-badge">
                {counts.historic} ARCHIVED MISSIONS (4,201 RECORDS)
              </div>
            </div>

            {/* 2. Active Tab */}
            <div
              className={`classification-card active-live-pill ${activeCategory === "ACTIVE" ? "active-card" : ""}`}
              onClick={() =>
                setActiveCategory(activeCategory === "ACTIVE" ? "ALL" : "ACTIVE")
              }
            >
              <div className="class-card-top">
                <h3>
                  <span className="pulse-dot-green"></span> ACTIVE
                </h3>
                <span className="class-icon">🛰️</span>
              </div>
              <p>
                Currently operational probes, rovers, and crewed stations
                transmitting live data.
              </p>
              <div className="class-stat-badge cyan-text">
                {counts.active} ACTIVE DIRECTIVES (148 TELEMETRY STREAMS)
              </div>
            </div>

            {/* 3. Future Tab */}
            <div
              className={`classification-card ${activeCategory === "FUTURE" ? "active-card" : ""}`}
              onClick={() =>
                setActiveCategory(activeCategory === "FUTURE" ? "ALL" : "FUTURE")
              }
            >
              <div className="class-card-top">
                <h3>FUTURE</h3>
                <span className="class-icon">🚀</span>
              </div>
              <p>
                Planned launches, conceptual architectures, and scheduled
                deployments.
              </p>
              <div className="class-stat-badge purple-text">
                {counts.future} SCHEDULED (T-MINUS 82 EVENTS)
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED DIRECTIVES & CATALOG ================= */}
        <section className="missions-catalog-section">
          <div className="catalog-header-bar">
            <div className="section-header-tag">
              <span className="section-icon">⭐</span>
              <h2>FEATURED DIRECTIVES & MISSION MANIFEST</h2>
            </div>

            {/* Destination Filters */}
            <div className="destination-filter-pills">
              <button
                className={`filter-pill ${activeDestination === "ALL" ? "active" : ""}`}
                onClick={() => setActiveDestination("ALL")}
              >
                All Destinations
              </button>
              <button
                className={`filter-pill ${activeDestination === "MOON" ? "active" : ""}`}
                onClick={() => setActiveDestination("MOON")}
              >
                🌙 Moon
              </button>
              <button
                className={`filter-pill ${activeDestination === "MARS" ? "active" : ""}`}
                onClick={() => setActiveDestination("MARS")}
              >
                🪐 Mars
              </button>
              <button
                className={`filter-pill ${activeDestination === "DEEP_SPACE" ? "active" : ""}`}
                onClick={() => setActiveDestination("DEEP_SPACE")}
              >
                🌌 Deep Space
              </button>
              <button
                className={`filter-pill ${activeDestination === "SUN" ? "active" : ""}`}
                onClick={() => setActiveDestination("SUN")}
              >
                ☀️ Solar
              </button>
              <button
                className={`filter-pill ${activeDestination === "OUTER" ? "active" : ""}`}
                onClick={() => setActiveDestination("OUTER")}
              >
                🪐 Outer Planets
              </button>
            </div>
          </div>

          {/* Missions Grid */}
          <div className="missions-grid">
            {filteredMissions.map((mission) => (
              <div key={mission.id} className="mission-card">
                {/* Image Container */}
                <div className="mission-img-box">
                  <img src={mission.image} alt={mission.name} loading="lazy" />
                  <div className="mission-img-overlay"></div>

                  {/* Badges on Image */}
                  <span className="mission-target-badge">
                    {mission.targetTag}
                  </span>

                  <span className={`mission-status-badge status-${mission.statusType}`}>
                    <span className="status-dot"></span>
                    {mission.status}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mission-card-body">
                  <div className="mission-card-title-row">
                    <h3 className="mission-card-title">{mission.shortName}</h3>
                    <span className="mission-agency-tag">{mission.agency}</span>
                  </div>

                  <p className="mission-card-desc">{mission.desc}</p>

                  <div className="mission-card-meta">
                    <div className="meta-item">
                      <span className="meta-label">DESTINATION / ORBIT</span>
                      <span className="meta-value">{mission.location}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">LAUNCH DATE</span>
                      <span className="meta-value">{mission.launchDate}</span>
                    </div>
                  </div>

                  {/* Card Bottom Buttons */}
                  <div className="mission-card-actions">
                    <button
                      className="mission-spec-btn"
                      onClick={() => setSelectedMission(mission)}
                    >
                      VIEW DATA & SPECS →
                    </button>

                    <BookmarkBtn
                      item={{
                        id: mission.id,
                        title: `${mission.shortName} Mission`,
                        category: "Mission",
                        path: "/missions",
                        desc: mission.desc
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMissions.length === 0 && (
            <div className="no-missions-found">
              <span className="empty-icon">🛰️</span>
              <h3>No Cosmic Missions Found</h3>
              <p>Try clearing your search query or selecting a different classification filter.</p>
              <button
                className="reset-filters-btn"
                onClick={() => {
                  setActiveCategory("ALL");
                  setActiveDestination("ALL");
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* ================= DETAILED MISSION MODAL ================= */}
        {selectedMission && (
          <div
            className="mission-modal-overlay"
            onClick={() => setSelectedMission(null)}
          >
            <div
              className="mission-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedMission(null)}
              >
                ✕
              </button>

              {/* Modal Hero Banner */}
              <div className="modal-banner-box">
                <img
                  src={selectedMission.image}
                  alt={selectedMission.name}
                  className="modal-banner-img"
                />
                <div className="modal-banner-overlay"></div>

                <div className="modal-banner-info">
                  <div className="modal-badges-row">
                    <span className="mission-target-badge">
                      {selectedMission.targetTag}
                    </span>
                    <span
                      className={`mission-status-badge status-${selectedMission.statusType}`}
                    >
                      <span className="status-dot"></span>
                      {selectedMission.status}
                    </span>
                    <span className="modal-category-badge">
                      {selectedMission.category}
                    </span>
                  </div>

                  <h2 className="modal-mission-title">{selectedMission.name}</h2>
                  <span className="modal-agency-name">
                    Operator: {selectedMission.agency}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {/* Description */}
                <div className="modal-section">
                  <h4 className="modal-section-title">Mission Overview</h4>
                  <p className="modal-desc-text">{selectedMission.desc}</p>
                </div>

                {/* Technical Telemetry Grid */}
                <div className="modal-specs-grid">
                  <div className="modal-spec-card">
                    <span className="spec-card-label">CURRENT LOCATION</span>
                    <span className="spec-card-value cyan-text">
                      {selectedMission.location}
                    </span>
                  </div>
                  <div className="modal-spec-card">
                    <span className="spec-card-label">DISTANCE FROM EARTH</span>
                    <span className="spec-card-value">
                      {selectedMission.distance}
                    </span>
                  </div>
                  <div className="modal-spec-card">
                    <span className="spec-card-label">LAUNCH DATE</span>
                    <span className="spec-card-value">
                      {selectedMission.launchDate}
                    </span>
                  </div>
                  <div className="modal-spec-card">
                    <span className="spec-card-label">LAUNCH VEHICLE</span>
                    <span className="spec-card-value purple-text">
                      {selectedMission.launchVehicle}
                    </span>
                  </div>
                  <div className="modal-spec-card">
                    <span className="spec-card-label">ORBITAL VELOCITY</span>
                    <span className="spec-card-value">
                      {selectedMission.speed}
                    </span>
                  </div>
                  <div className="modal-spec-card">
                    <span className="spec-card-label">NETWORK PROTOCOL</span>
                    <span className="spec-card-value green-text">
                      DSN Ka-Band Telemetry
                    </span>
                  </div>
                </div>

                {/* Objectives Checklist */}
                <div className="modal-section">
                  <h4 className="modal-section-title">Primary Scientific Objectives</h4>
                  <ul className="modal-objectives-list">
                    {selectedMission.objectives.map((obj, i) => (
                      <li key={i}>
                        <span className="obj-check">✓</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scientific Payload Badges */}
                <div className="modal-section">
                  <h4 className="modal-section-title">Scientific Instrumentation & Payload</h4>
                  <div className="modal-payload-tags">
                    {selectedMission.payload.map((item, i) => (
                      <span key={i} className="payload-tag">
                        🔬 {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="modal-footer-actions">
                  <BookmarkBtn
                    item={{
                      id: selectedMission.id,
                      title: `${selectedMission.shortName} Mission`,
                      category: "Mission",
                      path: "/missions",
                      desc: selectedMission.desc
                    }}
                  />
                  <button
                    className="modal-close-action-btn"
                    onClick={() => setSelectedMission(null)}
                  >
                    Close Dossier
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

export default Missions;
