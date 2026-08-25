import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Phobos.css";

import PhobosImg from "../../assets/Phobos/phobos.jpg";
import PhobosColor from "../../assets/Phobos/phobos1.jpg";
import Phobos2 from "../../assets/Phobos/phobos2.jpg";
import Phobos3 from "../../assets/Phobos/phobos3.jpg";

import DeimosImg from "../../assets/Moons/Deimos.jpg";
import TritonImg from "../../assets/Moons/Triton.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function Phobos() {
  return (
    <>
      <Navbar />

      <div className="phobos-page">

        {/* ================= HERO ================= */}

        <section className="phobos-hero">

          <img
            src={PhobosImg}
            alt="Phobos"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="phobos-number">
              MARS' LARGEST MOON
            </span>

            <h1>Phobos</h1>

            <p>
              Phobos is the larger and closer of Mars'
              two moons. This small, irregular world orbits
              extremely close to the Red Planet and is slowly
              spiraling toward Mars.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Phobos
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Phobos Overview</h2>

          <p>
            Discover the essential facts about Mars'
            mysterious inner moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>22.4 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.07 × 10¹⁶ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.0057 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Mars</h3>

              <span>9,377 km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>7.65 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Surface</h3>

              <span>Rocky & Cratered</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT PHOBOS ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={PhobosImg}
              alt="Phobos"
            />

          </div>

          <div className="about-content">

            <span>ABOUT PHOBOS</span>

            <h2>Mars' Mysterious Inner Moon</h2>

            <p>
              Phobos is the larger of Mars' two moons and
              orbits extremely close to the planet. Its
              irregular shape and heavily cratered surface
              make it very different from Earth's Moon.
            </p>

            <p>
              Phobos completes an orbit around Mars in less
              than eight hours. Because it orbits faster than
              Mars rotates, it rises in the west and sets in
              the east when viewed from the Martian surface.
            </p>

            <p>
              Scientists believe Phobos may be an asteroid
              captured by Mars or a remnant produced by a
              massive impact in the early history of the
              Martian system.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Phobos</h2>

            <p>
              Discover some of the most fascinating features
              of Mars' unusual inner moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🔴
              </div>

              <h3>Very Close To Mars</h3>

              <p>
                Phobos orbits only about 9,377 kilometers
                above the center of Mars, making it one of
                the closest moons to its planet.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                ⚡
              </div>

              <h3>Extremely Fast Orbit</h3>

              <p>
                Phobos completes one orbit around Mars in
                approximately 7 hours and 39 minutes.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                💥
              </div>

              <h3>Huge Crater</h3>

              <p>
                The enormous Stickney crater covers a large
                portion of Phobos' surface and is its most
                prominent geological feature.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🛰️
              </div>

              <h3>Future Mission Target</h3>

              <p>
                Phobos is considered an important target for
                future robotic missions and possible sample
                return missions.
              </p>

            </div>

          </div>

        </section>
                {/* ================= PHOBOS SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Phobos2}
              alt="Phobos Surface"
            />

          </div>

          <div className="surface-content">

            <span>PHOBOS' SURFACE</span>

            <h2>A Small World Covered In Craters</h2>

            <p>
              Phobos has an irregular, heavily cratered
              surface covered with dust, rocks and grooves.
              Its most famous feature is the enormous
              Stickney crater.
            </p>

            <p>
              Long grooves stretch across much of Phobos'
              surface. Scientists continue to study their
              origin and their connection to the moon's
              impact history.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Stickney Crater</h3>

                <p>
                  The largest crater on Phobos and one of
                  its most recognizable features.
                </p>

              </div>

              <div className="surface-item">

                <h3>Surface Grooves</h3>

                <p>
                  Long grooves and markings cover large
                  areas of the moon.
                </p>

              </div>

              <div className="surface-item">

                <h3>Rocky Terrain</h3>

                <p>
                  Phobos has a dark, irregular and heavily
                  cratered rocky surface.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PHOBOS LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>PHOBOS' LANDSCAPE</span>

            <h2>A Strange Moon Orbiting Mars</h2>

            <p>
              Phobos is not spherical like Earth's Moon.
              Its small size and weak gravity allow it to
              maintain a highly irregular shape.
            </p>

            <p>
              From the surface of Mars, Phobos would appear
              to move rapidly across the sky. Because its
              orbital period is shorter than Mars' rotation
              period, it rises in the west and sets in the east.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Phobos3}
              alt="Phobos Landscape"
            />

          </div>

        </section>


        {/* ================= PHOBOS EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Phobos</h2>

            <p>
              Several spacecraft have observed Phobos,
              providing scientists with valuable information
              about Mars' mysterious moon.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1971
              </span>

              <h3>Mariner 9</h3>

              <p>
                Mariner 9 became the first spacecraft to orbit
                Mars and captured some of the earliest detailed
                images of Phobos.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1977
              </span>

              <h3>Viking Missions</h3>

              <p>
                NASA's Viking orbiters observed Phobos and
                provided additional information about its
                shape and surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2011
              </span>

              <h3>Mars Express</h3>

              <p>
                ESA's Mars Express spacecraft has repeatedly
                observed Phobos and studied its composition
                and geological features.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Phobos Sample Return</h3>

              <p>
                Future missions may collect samples from
                Phobos to help determine its origin and
                understand the early history of Mars.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Phobos Gallery</h2>

            <p>
              Explore the strange surface and heavily cratered
              landscape of Mars' largest moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={PhobosImg}
                alt="Phobos"
              />

              <div className="gallery-overlay">
                <h3>Phobos From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Phobos2}
                alt="Phobos Surface"
              />

              <div className="gallery-overlay">
                <h3>Phobos Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={PhobosColor}
                alt="Phobos"
              />

              <div className="gallery-overlay">
                <h3>Cratered Terrain</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Phobos3}
                alt="Phobos Landscape"
              />

              <div className="gallery-overlay">
                <h3>Phobos Landscape</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Phobos Facts</h2>

            <p>
              Phobos may be small, but it has some truly
              fascinating characteristics.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🔴</span>

              <h3>Closer Than You Think</h3>

              <p>
                Phobos orbits closer to Mars than any other
                planetary moon orbits its planet.
              </p>

            </div>


            <div className="did-card">

              <span>⚡</span>

              <h3>Three Times A Day</h3>

              <p>
                Phobos moves so quickly that it can rise and
                set from the Martian surface in only a few hours.
              </p>

            </div>


            <div className="did-card">

              <span>💥</span>

              <h3>Stickney Crater</h3>

              <p>
                The Stickney crater is nearly half the size
                of Phobos itself.
              </p>

            </div>


            <div className="did-card">

              <span>🚀</span>

              <h3>Future Exploration</h3>

              <p>
                Scientists are interested in bringing samples
                from Phobos back to Earth to study its origin.
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

            {/* ================= DEIMOS ================= */}

            <div className="next-card">

              <img
                src={DeimosImg}
                alt="Deimos"
              />

              <h3>Deimos</h3>

              <p>
                The smaller and more distant moon of Mars,
                with a smooth and mysterious appearance.
              </p>

              <NavLink to="/moons/deimos">
                Explore
              </NavLink>

            </div>


            {/* ================= TRITON ================= */}

            <div className="next-card">

              <img
                src={TritonImg}
                alt="Triton"
              />

              <h3>Triton</h3>

              <p>
                Neptune's largest moon with an unusual
                retrograde orbit and active icy surface.
              </p>

              <NavLink to="/moons/triton">
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
                and lakes of liquid methane.
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
              Learn more about Mars' mysterious inner moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                How big is Phobos?
              </summary>

              <p>
                Phobos has an average diameter of about
                22 kilometers, making it a very small moon.
              </p>

            </details>


            <details>

              <summary>
                How fast does Phobos orbit Mars?
              </summary>

              <p>
                Phobos completes one orbit around Mars in
                approximately 7 hours and 39 minutes.
              </p>

            </details>


            <details>

              <summary>
                What is the Stickney crater?
              </summary>

              <p>
                Stickney is the largest impact crater on
                Phobos and one of the moon's most prominent
                surface features.
              </p>

            </details>


            <details>

              <summary>
                Is Phobos going to crash into Mars?
              </summary>

              <p>
                Phobos is gradually losing orbital altitude
                because of tidal interactions with Mars.
                Scientists expect it to eventually break apart
                or collide with Mars over a very long timescale.
              </p>

            </details>


            <details>

              <summary>
                Has a spacecraft landed on Phobos?
              </summary>

              <p>
                Several spacecraft have studied Phobos from
                orbit or during flybys, but a successful
                controlled landing and sample return has not
                yet been completed.
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

export default Phobos;