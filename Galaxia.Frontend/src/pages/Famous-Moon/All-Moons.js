import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import "./All-Moons.css";

import TheMoonImg from "../../assets/Moons/Moon.jpg";
import IoImg from "../../assets/Moons/Io.jpg";
import EuropaImg from "../../assets/Moons/Europa.jpg";
import GanymedeImg from "../../assets/Moons/Ganymede.jpg";
import CallistoImg from "../../assets/Moons/Callisto.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";
import EnceladusImg from "../../assets/Moons/Enceladus.jpg";
import TritonImg from "../../assets/Moons/Triton.jpg";
import PhobosImg from "../../assets/Moons/Phobos.jpg";
import DeimosImg from "../../assets/Moons/Deimos.jpg";

const moonsData = [
  {
    id: "moon-moon",
    name: "The Moon",
    planet: "EARTH",
    path: "/moons/moon",
    image: TheMoonImg,
    desc: "Earth's only natural satellite and the closest celestial body to our planet."
  },
  {
    id: "moon-io",
    name: "Io",
    planet: "JUPITER",
    path: "/moons/io",
    image: IoImg,
    desc: "A volcanic world covered with active volcanoes and constantly changing landscapes."
  },
  {
    id: "moon-europa",
    name: "Europa",
    planet: "JUPITER",
    path: "/moons/europa",
    image: EuropaImg,
    desc: "An icy moon believed to hide a vast liquid ocean beneath its frozen surface."
  },
  {
    id: "moon-ganymede",
    name: "Ganymede",
    planet: "JUPITER",
    path: "/moons/ganymede",
    image: GanymedeImg,
    desc: "The largest moon in the Solar System, even larger than the planet Mercury."
  },
  {
    id: "moon-callisto",
    name: "Callisto",
    planet: "JUPITER",
    path: "/moons/callisto",
    image: CallistoImg,
    desc: "A heavily cratered moon with an ancient surface and possible underground ocean."
  },
  {
    id: "moon-titan",
    name: "Titan",
    planet: "SATURN",
    path: "/moons/titan",
    image: TitanImg,
    desc: "Saturn's largest moon with a thick atmosphere and liquid methane lakes."
  },
  {
    id: "moon-enceladus",
    name: "Enceladus",
    planet: "SATURN",
    path: "/moons/enceladus",
    image: EnceladusImg,
    desc: "A small icy moon famous for its powerful water-ice geysers."
  },
  {
    id: "moon-triton",
    name: "Triton",
    planet: "NEPTUNE",
    path: "/moons/triton",
    image: TritonImg,
    desc: "Neptune's largest moon and one of the coldest worlds with a retrograde orbit."
  },
  {
    id: "moon-phobos",
    name: "Phobos",
    planet: "MARS",
    path: "/moons/phobos",
    image: PhobosImg,
    desc: "The larger and closer of Mars' two moons, orbiting extremely close to the Red Planet."
  },
  {
    id: "moon-deimos",
    name: "Deimos",
    planet: "MARS",
    path: "/moons/deimos",
    image: DeimosImg,
    desc: "The smaller and more distant moon of Mars, with a smooth cratered surface."
  }
];

function AllMoons() {
  return (
    <>
      <Navbar />

      <div className="all-moons-page">
        {/* ================= HERO ================= */}
        <section className="all-moons-hero">
          <div className="all-moons-hero-overlay"></div>
          <div className="all-moons-hero-content">
            <span>EXPLORE THE SOLAR SYSTEM</span>
            <h1>Moons</h1>
            <p>
              Discover the fascinating moons that orbit the planets of our Solar System. Save your favorite moons directly to your explorer profile.
            </p>
            <div className="all-moons-hero-buttons">
              <a href="#moon-collection">Explore Moons</a>
            </div>
          </div>
        </section>

        {/* ================= MOON COLLECTION ================= */}
        <section className="moon-collection" id="moon-collection">
          <div className="moon-section-title">
            <span>FAMOUS MOONS</span>
            <h2>Explore the Moons</h2>
            <p>
              Choose a moon to discover its characteristics, history, and save it to your profile.
            </p>
          </div>

          <div className="moon-grid">
            {moonsData.map((moon) => (
              <article className="moon-card" key={moon.id}>
                <div className="moon-card-image">
                  <img src={moon.image} alt={moon.name} />
                </div>

                <div className="moon-card-content">
                  <span>{moon.planet}</span>
                  <h3>{moon.name}</h3>
                  <p>{moon.desc}</p>

                  <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "15px", flexWrap: "wrap" }}>
                    <NavLink to={moon.path}>
                      Explore {moon.name}
                    </NavLink>
                    <BookmarkBtn
                      item={{
                        id: moon.id,
                        title: `${moon.name} (${moon.planet})`,
                        category: "Moon",
                        path: moon.path,
                        desc: moon.desc
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="moons-cta">
          <div className="moons-cta-content">
            <span>KEEP EXPLORING</span>
            <h2>The Solar System Is Full of Wonders</h2>
            <p>
              Every moon has a unique story waiting to be discovered. Save your favorites and track your cosmic progress.
            </p>
            <NavLink to="/planets">Explore Planets</NavLink>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AllMoons;