import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Diemos.css";

import DeimosImg from "../../assets/Deimos/diemos.jpg";
import DeimosColor from "../../assets/Deimos/diemos1.jpg";
import Deimos2 from "../../assets/Deimos/diemos2.jpg";
import Deimos3 from "../../assets/Deimos/diemos3.jpg";

import PhobosImg from "../../assets/Moons/Phobos.jpg";
import EuropaImg from "../../assets/Moons/Europa.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function Deimos() {
  return (
    <>
      <Navbar />

      <div className="deimos-page">

        {/* ================= HERO ================= */}

        <section className="deimos-hero">

          <img
            src={DeimosImg}
            alt="Deimos"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="deimos-number">
              MARS'S OUTER MOON
            </span>

            <h1>Deimos</h1>

            <p>
              Deimos is the smaller and more distant of
              Mars's two moons, a tiny irregular world with
              a dark, cratered surface.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Deimos
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Deimos Overview</h2>

          <p>
            Discover the essential facts about Mars's
            mysterious outer moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>12.4 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.48 × 10¹⁵ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.003 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Mars</h3>

              <span>23,460 km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>30.3 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Surface</h3>

              <span>Rocky & Dark</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT DEIMOS ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={DeimosColor}
              alt="Deimos"
            />

          </div>

          <div className="about-content">

            <span>ABOUT DEIMOS</span>

            <h2>A Tiny Moon With A Mysterious Origin</h2>

            <p>
              Deimos is the smaller and more distant of
              Mars's two natural satellites. Its tiny,
              irregular shape makes it look more like an
              asteroid than a traditional spherical moon.
            </p>

            <p>
              Its surface is covered with dark material and
              impact craters. Deimos is also coated with a
              layer of loose dust and regolith that gives
              the moon its relatively smooth appearance.
            </p>

            <p>
              Scientists are still studying where Deimos
              came from. Its origin may be connected to
              asteroids, although its formation history
              remains an important question in planetary
              science.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Deimos</h2>

            <p>
              Discover some of the most fascinating features
              of Mars's small outer moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🔴
              </div>

              <h3>Mars's Outer Moon</h3>

              <p>
                Deimos orbits farther from Mars than Phobos
                and takes about 30 hours to complete one orbit.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🪨
              </div>

              <h3>Irregular Shape</h3>

              <p>
                Deimos is too small for its gravity to pull
                it into a spherical shape, giving it an
                asteroid-like appearance.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🌑
              </div>

              <h3>Dark Surface</h3>

              <p>
                Its surface is very dark and is covered with
                fine dust and rocky material.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🛰️
              </div>

              <h3>Future Exploration</h3>

              <p>
                Deimos could become an important destination
                for future missions studying the Mars system
                and the origin of its moons.
              </p>

            </div>

          </div>

        </section>
                {/* ================= DEIMOS SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Deimos2}
              alt="Deimos Surface"
            />

          </div>

          <div className="surface-content">

            <span>DEIMOS'S SURFACE</span>

            <h2>A Dark And Dusty Rocky World</h2>

            <p>
              Deimos has a dark surface covered with loose
              dust and rocky material. Its small size and weak
              gravity allow fine material to accumulate across
              much of the moon.
            </p>

            <p>
              Although Deimos has many impact craters, its
              surface appears relatively smooth because much
              of the cratered terrain is covered by a thick
              layer of regolith.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Cratered Terrain</h3>

                <p>
                  Ancient impacts have left numerous craters
                  across the moon's dark surface.
                </p>

              </div>

              <div className="surface-item">

                <h3>Loose Regolith</h3>

                <p>
                  Fine dust and rocky debris cover much of
                  Deimos's surface.
                </p>

              </div>

              <div className="surface-item">

                <h3>Low Gravity</h3>

                <p>
                  Deimos's extremely weak gravity contributes
                  to its ability to retain a loose, dusty surface.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= DEIMOS LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>DEIMOS'S LANDSCAPE</span>

            <h2>A Tiny Irregular Moon</h2>

            <p>
              Deimos is not large enough for its gravity to
              shape it into a sphere. Instead, it has an
              irregular, elongated form similar to a small
              asteroid.
            </p>

            <p>
              Its low-relief landscape and dark appearance
              make it very different from the larger rocky
              planets and moons of the Solar System.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Deimos3}
              alt="Deimos Landscape"
            />

          </div>

        </section>


        {/* ================= DEIMOS EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Deimos</h2>

            <p>
              Several spacecraft have observed Deimos while
              studying Mars and its surrounding moons.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1877
              </span>

              <h3>Discovery</h3>

              <p>
                American astronomer Asaph Hall discovered
                Deimos and Phobos while observing Mars from
                the U.S. Naval Observatory.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1971
              </span>

              <h3>Mariner 9</h3>

              <p>
                NASA's Mariner 9 became the first spacecraft
                to orbit another planet and captured images
                of both Martian moons.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1977
              </span>

              <h3>Viking Missions</h3>

              <p>
                NASA's Viking spacecraft photographed Deimos
                in greater detail while studying the Martian
                system.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Missions</h3>

              <p>
                Future Mars-system missions may study Deimos
                more closely to better understand its
                composition and mysterious origin.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Deimos Gallery</h2>

            <p>
              Explore the dark, dusty and irregular surface
              of Mars's mysterious outer moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={DeimosImg}
                alt="Deimos"
              />

              <div className="gallery-overlay">
                <h3>Deimos From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Deimos2}
                alt="Deimos Surface"
              />

              <div className="gallery-overlay">
                <h3>Deimos Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={DeimosColor}
                alt="Deimos"
              />

              <div className="gallery-overlay">
                <h3>Dark Rocky Terrain</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Deimos3}
                alt="Deimos Landscape"
              />

              <div className="gallery-overlay">
                <h3>Irregular Landscape</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Deimos Facts</h2>

            <p>
              Deimos may be tiny, but it has a fascinating
              place in the Mars system.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🔴</span>

              <h3>Mars's Outer Moon</h3>

              <p>
                Deimos is the smaller and more distant of
                Mars's two moons.
              </p>

            </div>


            <div className="did-card">

              <span>🪨</span>

              <h3>Asteroid-Like Shape</h3>

              <p>
                Its weak gravity leaves Deimos with an
                irregular shape rather than a spherical one.
              </p>

            </div>


            <div className="did-card">

              <span>🌑</span>

              <h3>Very Dark Surface</h3>

              <p>
                Deimos has a dark surface covered by dust,
                regolith and rocky material.
              </p>

            </div>


            <div className="did-card">

              <span>🚀</span>

              <h3>Future Destination</h3>

              <p>
                Deimos could become an interesting target
                for future exploration of the Mars system.
              </p>

            </div>

          </div>

        </section>


        {/* ================= EXPLORE OTHER MOONS ================= */}

        <section className="next-moons">

          <div className="section-header">

            <span>KEEP EXPLORING</span>

            <h2>Explore Other Moons</h2>

            <p>
              Continue your journey through the fascinating
              moons of the Solar System.
            </p>

          </div>

          <div className="next-grid">

            {/* ================= PHOBOS ================= */}

            <div className="next-card">

              <img
                src={PhobosImg}
                alt="Phobos"
              />

              <h3>Phobos</h3>

              <p>
                Mars's larger and closer moon, famous for
                its huge Stickney crater.
              </p>

              <NavLink to="/moons/phobos">
                Explore
              </NavLink>

            </div>


            {/* ================= EUROPA ================= */}

            <div className="next-card">

              <img
                src={EuropaImg}
                alt="Europa"
              />

              <h3>Europa</h3>

              <p>
                Jupiter's icy moon with a possible ocean
                beneath its frozen surface.
              </p>

              <NavLink to="/moons/europa">
                Explore
              </NavLink>

            </div>


            {/* ================= TITAN ================= */}

            <div className="next-card">

              <img
                src={TitanImg}
                alt="Titan"
              />

              <h3>Titan</h3>

              <p>
                Saturn's largest moon with a thick atmosphere
                and lakes of liquid hydrocarbons.
              </p>

              <NavLink to="/moons/titan">
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
              Learn more about Mars's mysterious outer moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                What is Deimos?
              </summary>

              <p>
                Deimos is the smaller and more distant of
                Mars's two natural satellites.
              </p>

            </details>


            <details>

              <summary>
                How big is Deimos?
              </summary>

              <p>
                Deimos has an average diameter of only about
                12.4 kilometers, making it one of the smallest
                known moons in the Solar System.
              </p>

            </details>


            <details>

              <summary>
                Why does Deimos have an irregular shape?
              </summary>

              <p>
                Its gravity is too weak to pull its material
                into a spherical shape, so Deimos retains an
                irregular asteroid-like form.
              </p>

            </details>


            <details>

              <summary>
                Who discovered Deimos?
              </summary>

              <p>
                Deimos was discovered by Asaph Hall in 1877
                while he was observing Mars.
              </p>

            </details>


            <details>

              <summary>
                Could Deimos be explored in the future?
              </summary>

              <p>
                Yes. Deimos could be a useful destination for
                future missions investigating the Mars system
                and the origin of its two moons.
              </p>

            </details>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <Footer />

      </div>

    </>
  );
}

export default Deimos;