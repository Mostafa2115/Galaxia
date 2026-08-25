import "./All-planets.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";

import Mercury from "../../assets/planets/Mercury.jpg";
import Venus from "../../assets/planets/Venus.jpg";
import Earth from "../../assets/planets/Earth.jpg";
import Mars from "../../assets/planets/Mars.jpg";

import Jupiter from "../../assets/planets/Jupiter.jpg";
import Saturn from "../../assets/planets/Saturn.jpg";
import Uranus from "../../assets/planets/Uranus.jpg";
import Neptune from "../../assets/planets/Neptune.jpg";

import Pluto from "../../assets/planets/Pluto.jpg";
import Ceres from "../../assets/planets/Ceres.jpg";
import Haumea from "../../assets/planets/Haumea.jpg";
import Makemake from "../../assets/planets/Makemake.jpg";
import Eris from "../../assets/planets/Eris.jpg";

import { NavLink } from "react-router-dom";

const innerPlanets = [
  {
    name: "Mercury",
    image: Mercury,
    desc: "The smallest planet in our Solar System.",
    link: "/planets/mercury"
  },
  {
    name: "Venus",
    image: Venus,
    desc: "The hottest planet in the Solar System.",
    link: "/planets/venus"
  },
  {
    name: "Earth",
    image: Earth,
    desc: "Our home planet.",
    link: "/planets/earth"
  },
  {
    name: "Mars",
    image: Mars,
    desc: "The famous Red Planet.",
    link: "/planets/mars"
  }
];

const outerPlanets = [
  {
    name: "Jupiter",
    image: Jupiter,
    desc: "The largest planet.",
    link: "/planets/jupiter"
  },
  {
    name: "Saturn",
    image: Saturn,
    desc: "Known for its beautiful rings.",
    link: "/planets/saturn"
  },
  {
    name: "Uranus",
    image: Uranus,
    desc: "An icy giant.",
    link: "/planets/uranus"
  },
  {
    name: "Neptune",
    image: Neptune,
    desc: "The windiest planet.",
    link: "/planets/neptune"
  }
];

const dwarfPlanets = [
  {
    name: "Pluto",
    image: Pluto,
    desc: "The most famous dwarf planet.",
    link: "/planets/pluto"
  },
  {
    name: "Ceres",
    image: Ceres,
    desc: "Located in the asteroid belt.",
    link: "/planets/ceres"
  },
  {
    name: "Haumea",
    image: Haumea,
    desc: "An unusual dwarf planet.",
    link: "/planets/haumea"
  },
  {
    name: "Makemake",
    image: Makemake,
    desc: "Discovered in 2005.",
    link: "/planets/makemake"
  },
  {
    name: "Eris",
    image: Eris,
    desc: "One of the largest dwarf planets.",
    link: "/planets/eris"
  }
];

function PlanetSection({ title, planets }) {
  return (
    <>
      <h2 className="planet-title">{title}</h2>

      <div className="planet-grid">
        {planets.map((planet, index) => (
          <div className="planet-card" key={index}>
            <img src={planet.image} alt={planet.name} />

            <div className="planet-info">
              <h3>{planet.name}</h3>
              <p>{planet.desc}</p>

              <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", marginTop: "15px", flexWrap: "wrap" }}>
                <NavLink to={planet.link || `/planets/${planet.name.toLowerCase()}`}>
                  <button className="btn-explore">Explore</button>
                </NavLink>
                
                <BookmarkBtn
                  item={{
                    id: `planet-${planet.name.toLowerCase()}`,
                    title: `${planet.name}`,
                    category: "Planet",
                    path: planet.link || `/planets/${planet.name.toLowerCase()}`,
                    desc: planet.desc
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AllPlanets() {
  return (
    <>
      <Navbar />

      <section className="all-planets">
        <div className="hero">
          <h1>All Planets</h1>
          <p>Explore every planet in our Solar System and save them to your explorer profile.</p>
        </div>

        <PlanetSection title="Inner Planets" planets={innerPlanets} />
        <PlanetSection title="Outer Planets" planets={outerPlanets} />
        <PlanetSection title="Dwarf Planets" planets={dwarfPlanets} />
      </section>

      <Footer />
    </>
  );
}

export default AllPlanets;