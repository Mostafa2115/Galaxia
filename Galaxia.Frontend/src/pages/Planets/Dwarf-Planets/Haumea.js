import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Haumea.css";

import HaumeaImg from "../../../assets/planets/Haumea.jpg";
import Haumeapng from "../../../assets/Haumea/Haumeapng.png";
import HaumeaColor from "../../../assets/Haumea/Haumea1.jpg";
import Haumea2 from "../../../assets/Haumea/Haumea2.jpg";
import Haumea3 from "../../../assets/Haumea/Haumea3.jpg";

import PlutoImg from "../../../assets/planets/Pluto.jpg";
import MakemakeImg from "../../../assets/planets/Makemake.jpg";
import ErisImg from "../../../assets/planets/Eris.jpg";

import { NavLink } from "react-router-dom";

function Haumea() {
  return (
    <>
      <Navbar />

      <div className="haumea-page">

        {/* ================= HERO ================= */}

        <section className="haumea-hero">

          <img
            src={HaumeaImg}
            alt="Haumea"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              DWARF PLANET
            </span>

            <h1>Haumea</h1>

            <p>
              Haumea is one of the most unusual dwarf
              planets in the Solar System. It spins so
              rapidly that it has an elongated, football-
              like shape instead of being nearly spherical.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Haumea
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Haumea Overview</h2>

          <p>
            Basic information about one of the fastest
            rotating dwarf planets.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>≈1,960 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>4.01 × 10²¹ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>≈0.44 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-241°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>3.9 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>285 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Haumeapng}
              alt="Haumea"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE DWARF PLANET</span>

            <h2>The Fast-Spinning Dwarf Planet</h2>

            <p>
              Haumea is one of the five officially recognized
              dwarf planets in our Solar System. It resides
              in the Kuiper Belt beyond Neptune and is one
              of the most unusual objects ever discovered.
            </p>

            <p>
              Haumea rotates once every 3.9 hours, making it
              one of the fastest rotating large bodies in the
              Solar System. This incredible speed stretches
              the dwarf planet into an elongated, football-
              like shape instead of a nearly perfect sphere.
            </p>

            <p>
              Its surface is covered mainly with crystalline
              water ice, giving Haumea a bright appearance.
              Scientists believe a massive collision long ago
              created its moons and a family of icy objects
              that still travel through space together.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Haumea is one of the strangest worlds in the
              Kuiper Belt, with features unlike any other
              dwarf planet.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">🏈</div>

              <h3>Unique Shape</h3>

              <p>
                Haumea spins so rapidly that gravity cannot
                keep it perfectly round, giving it an
                elongated, football-like shape.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">💍</div>

              <h3>Ring System</h3>

              <p>
                Haumea became the first known dwarf planet
                to have a ring system, discovered in 2017
                through stellar observations.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>Two Moons</h3>

              <p>
                Haumea has two known moons, Hiʻiaka and
                Namaka, both believed to have formed after
                a giant collision.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">⚡</div>

              <h3>Rapid Rotation</h3>

              <p>
                A single day on Haumea lasts only about
                3.9 hours, making it one of the fastest
                rotating objects of its size.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Haumea</h2>

            <p>
              Scientists believe Haumea has a dense rocky
              core surrounded by a thick mantle of water
              ice. Its rapid rotation has stretched the
              dwarf planet into an elongated shape, making
              its internal structure different from most
              spherical bodies in the Solar System.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Rocky Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "72%" }}
                  ></div>

                </div>

                <span>72%</span>

              </div>

              <div className="bar">

                <h4>Water Ice Mantle</h4>

                <div className="progress">

                  <div
                    className="mantle"
                    style={{ width: "23%" }}
                  ></div>

                </div>

                <span>23%</span>

              </div>

              <div className="bar">

                <h4>Surface Ice</h4>

                <div className="progress">

                  <div
                    className="crust"
                    style={{ width: "5%" }}
                  ></div>

                </div>

                <span>5%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Haumeapng}
              alt="Haumea Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>DISCOVERY & EXPLORATION</span>

            <h2>Exploring Haumea</h2>

            <p>
              Haumea has never been visited by a spacecraft.
              Everything scientists know comes from powerful
              telescopes and observations from Earth and
              space observatories.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                2004
              </span>

              <h3>Discovery</h3>

              <p>
                Haumea was discovered by astronomers using
                observations from the Sierra Nevada and
                Palomar observatories, revealing a rapidly
                rotating icy body beyond Neptune.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2008
              </span>

              <h3>Dwarf Planet Status</h3>

              <p>
                The International Astronomical Union
                officially recognized Haumea as one of the
                five dwarf planets in the Solar System.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Exploration</h3>

              <p>
                Future missions to the Kuiper Belt may one
                day study Haumea up close, revealing more
                about its rings, moons and unusual shape.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Haumea Gallery</h2>

            <p>
              Explore artistic illustrations and telescope
              observations of Haumea, one of the most unique
              dwarf planets in the Kuiper Belt.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={HaumeaImg} alt="Haumea" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Haumea2} alt="Haumea" />

              <div className="gallery-overlay">

                <h3>Elongated Shape</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={HaumeaColor} alt="Haumea" />

              <div className="gallery-overlay">

                <h3>Enhanced Color</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Haumea3} alt="Haumea" />

              <div className="gallery-overlay">

                <h3>Artist's Concept</h3>

              </div>

            </div>

          </div>

        </section>

        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Facts</h2>

            <p>
              Haumea is one of the most extraordinary dwarf
              planets ever discovered in our Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🏈</span>

              <h3>Football Shape</h3>

              <p>
                Haumea is stretched into an elongated shape
                because of its extremely rapid rotation.
              </p>

            </div>

            <div className="did-card">

              <span>💍</span>

              <h3>Ring System</h3>

              <p>
                It is the first dwarf planet known to have
                its own ring surrounding it.
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>Two Moons</h3>

              <p>
                Haumea's moons are named Hiʻiaka and Namaka,
                both inspired by Hawaiian mythology.
              </p>

            </div>

            <div className="did-card">

              <span>⚡</span>

              <h3>Fast Rotation</h3>

              <p>
                A day on Haumea lasts only about
                3.9 hours, one of the shortest days of
                any large object in the Solar System.
              </p>

            </div>

          </div>

        </section>
                {/* ================= NEXT DWARF PLANETS ================= */}

        <section className="next-planets">

          <div className="section-header">

            <span>KEEP EXPLORING</span>

            <h2>Explore Other Dwarf Planets</h2>

            <p>
              Continue your journey through the distant
              worlds of the Kuiper Belt and discover more
              fascinating dwarf planets.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={PlutoImg} alt="Pluto" />

              <h3>Pluto</h3>

              <p>
                Visit the most famous dwarf planet and
                explore its icy mountains and heart-shaped
                region.
              </p>

              <NavLink to="/planets/pluto">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={MakemakeImg} alt="Makemake" />

              <h3>Makemake</h3>

              <p>
                Learn about the bright icy dwarf planet
                located deep within the Kuiper Belt.
              </p>

              <NavLink to="/planets/makemake">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={ErisImg} alt="Eris" />

              <h3>Eris</h3>

              <p>
                Discover one of the most massive dwarf
                planets, whose discovery changed the
                definition of a planet.
              </p>

              <NavLink to="/planets/eris">
                Explore
              </NavLink>

            </div>

          </div>

        </section>

        {/* ================= FAQ ================= */}

        <section className="faq-section">

          <div className="section-header">

            <span>FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Learn more about Haumea and its remarkable
              characteristics.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why is Haumea not round?
              </summary>

              <p>
                Haumea rotates so quickly that centrifugal
                force stretches it into an elongated,
                football-like shape instead of a sphere.
              </p>

            </details>

            <details>

              <summary>
                Does Haumea have rings?
              </summary>

              <p>
                Yes. Haumea has a narrow ring that was
                discovered in 2017, making it the first
                known dwarf planet with a ring system.
              </p>

            </details>

            <details>

              <summary>
                How many moons does Haumea have?
              </summary>

              <p>
                Haumea has two known moons, Hiʻiaka and
                Namaka, both named after figures from
                Hawaiian mythology.
              </p>

            </details>

            <details>

              <summary>
                Has Haumea ever been visited by a spacecraft?
              </summary>

              <p>
                No. Haumea has never been explored by a
                spacecraft. All current knowledge comes
                from telescopes and astronomical studies.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Haumea;