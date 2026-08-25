import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Triton.css";

import TritonImg from "../../assets/Triton/triton.jpg";
import TritonColor from "../../assets/Triton/triton1.jpg";
import Triton2 from "../../assets/Triton/triton2.jpg";
import Triton3 from "../../assets/Triton/triton3.jpg";

import IoImg from "../../assets/Moons/Io.jpg";
import EuropaImg from "../../assets/Moons/Europa.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function Triton() {
  return (
    <>
      <Navbar />

      <div className="triton-page">

        {/* ================= HERO ================= */}

        <section className="triton-hero">

          <img
            src={TritonImg}
            alt="Triton"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="triton-number">
              NEPTUNE'S LARGEST MOON
            </span>

            <h1>Triton</h1>

            <p>
              Triton is Neptune's largest moon and one of
              the coldest worlds in the Solar System. Its
              unusual retrograde orbit and active icy surface
              make it one of the most fascinating moons known.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Triton
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Triton Overview</h2>

          <p>
            Discover the essential facts about Neptune's
            largest natural satellite.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>2,707 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>2.14 × 10²² kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.779 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Neptune</h3>

              <span>354,759 km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>5.88 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface Temperature</h3>

              <span>−235°C</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT TRITON ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={TritonImg}
              alt="Triton"
            />

          </div>

          <div className="about-content">

            <span>ABOUT TRITON</span>

            <h2>Neptune's Captured Icy World</h2>

            <p>
              Triton is the largest moon of Neptune and one
              of the most unusual satellites in the Solar
              System. Unlike most large moons, Triton orbits
              Neptune in the opposite direction of the planet's
              rotation.
            </p>

            <p>
              Its retrograde orbit suggests that Triton may
              have originally formed in the Kuiper Belt before
              being captured by Neptune's gravity.
            </p>

            <p>
              Despite its extremely cold environment, Triton
              has an active surface. Voyager 2 observed
              geyser-like plumes erupting from its surface,
              showing that this distant moon is far from
              geologically inactive.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Triton</h2>

            <p>
              Discover some of the most fascinating features
              of Neptune's largest moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                ❄️
              </div>

              <h3>Extremely Cold</h3>

              <p>
                Triton has one of the coldest known planetary
                surfaces in the Solar System.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🔄
              </div>

              <h3>Retrograde Orbit</h3>

              <p>
                Triton orbits Neptune in the opposite direction
                to Neptune's rotation.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🌋
              </div>

              <h3>Active Geysers</h3>

              <p>
                Voyager 2 observed dark plumes rising from
                Triton's surface, evidence of active processes.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                ☄️
              </div>

              <h3>Kuiper Belt Origin</h3>

              <p>
                Scientists believe Triton may have once been
                a Kuiper Belt object before Neptune captured it.
              </p>

            </div>

          </div>

        </section>
                {/* ================= TRITON SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Triton2}
              alt="Triton Surface"
            />

          </div>

          <div className="surface-content">

            <span>TRITON'S SURFACE</span>

            <h2>An Icy World With Active Geysers</h2>

            <p>
              Triton's surface is covered by a mixture of
              frozen nitrogen, methane and water ice. Its
              unusual terrain includes smooth plains, ridges,
              craters and complex icy formations.
            </p>

            <p>
              Voyager 2 discovered dark plumes rising from
              Triton's surface. These geyser-like eruptions
              showed that the moon is still geologically active.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Nitrogen Ice</h3>

                <p>
                  Frozen nitrogen is found across large areas
                  of Triton's surface.
                </p>

              </div>

              <div className="surface-item">

                <h3>Active Geysers</h3>

                <p>
                  Dark plumes can rise from the surface and
                  extend high into Triton's atmosphere.
                </p>

              </div>

              <div className="surface-item">

                <h3>Ice Terrain</h3>

                <p>
                  Triton contains unusual ridges, plains,
                  craters and frozen landscapes.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TRITON LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>TRITON'S LANDSCAPE</span>

            <h2>A Strange World Of Frozen Terrain</h2>

            <p>
              Triton's surface is unlike most moons in the
              Solar System. Its bright icy terrain reflects
              much of the sunlight that reaches the moon.
            </p>

            <p>
              The surface contains broad plains, frozen
              lakes, ridges and unusual patterns created by
              the movement and evaporation of volatile ices.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Triton3}
              alt="Triton Landscape"
            />

          </div>

        </section>


        {/* ================= TRITON EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Triton</h2>

            <p>
              Triton has only been visited closely by one
              spacecraft, but that encounter transformed our
              understanding of this distant moon.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1846
              </span>

              <h3>Discovery</h3>

              <p>
                Triton was discovered by British astronomer
                William Lassell shortly after Neptune itself
                was discovered.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1989
              </span>

              <h3>Voyager 2</h3>

              <p>
                Voyager 2 became the first and only spacecraft
                to make a close flyby of Triton, revealing its
                active surface and atmosphere.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1989
              </span>

              <h3>Active Geysers</h3>

              <p>
                Voyager 2 photographed dark plumes erupting
                from Triton's southern polar region.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Exploration</h3>

              <p>
                Triton remains a major target for future
                planetary missions because of its unusual
                geology and possible Kuiper Belt origin.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Triton Gallery</h2>

            <p>
              Explore the icy surface and mysterious landscapes
              of Neptune's largest moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={TritonImg}
                alt="Triton"
              />

              <div className="gallery-overlay">
                <h3>Triton From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Triton2}
                alt="Triton Surface"
              />

              <div className="gallery-overlay">
                <h3>Icy Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={TritonColor}
                alt="Triton Atmosphere"
              />

              <div className="gallery-overlay">
                <h3>Triton's Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Triton3}
                alt="Triton Landscape"
              />

              <div className="gallery-overlay">
                <h3>Frozen Landscape</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Triton Facts</h2>

            <p>
              Triton is one of the strangest and most fascinating
              moons in the outer Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>❄️</span>

              <h3>One Of The Coldest Worlds</h3>

              <p>
                Triton's surface temperature is around
                −235°C, making it one of the coldest known
                planetary surfaces.
              </p>

            </div>


            <div className="did-card">

              <span>🔄</span>

              <h3>Retrograde Orbit</h3>

              <p>
                Triton moves around Neptune in the opposite
                direction to Neptune's rotation.
              </p>

            </div>


            <div className="did-card">

              <span>🌋</span>

              <h3>Ice Geysers</h3>

              <p>
                Voyager 2 detected active plumes erupting
                from Triton's surface.
              </p>

            </div>


            <div className="did-card">

              <span>☄️</span>

              <h3>Possible Kuiper Belt Origin</h3>

              <p>
                Triton's unusual orbit suggests it may have
                originated as a Kuiper Belt object.
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
              moons of our Solar System.
            </p>

          </div>

          <div className="next-grid">

            {/* ================= IO ================= */}

            <div className="next-card">

              <img
                src={IoImg}
                alt="Io"
              />

              <h3>Io</h3>

              <p>
                Jupiter's volcanic moon and one of the most
                geologically active worlds in the Solar System.
              </p>

              <NavLink to="/moons/io">
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
                An icy moon of Jupiter that may contain a
                vast ocean beneath its frozen surface.
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
              Learn more about Neptune's largest moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why does Triton orbit Neptune backwards?
              </summary>

              <p>
                Triton has a retrograde orbit, meaning it
                travels opposite to Neptune's rotation.
                This is one reason scientists believe Triton
                may have been captured from the Kuiper Belt.
              </p>

            </details>


            <details>

              <summary>
                Is Triton the largest moon of Neptune?
              </summary>

              <p>
                Yes. Triton is by far Neptune's largest moon
                and contains more than 99% of the total mass
                of Neptune's known satellite system.
              </p>

            </details>


            <details>

              <summary>
                Is Triton geologically active?
              </summary>

              <p>
                Yes. Voyager 2 observed geyser-like plumes
                erupting from Triton's surface, indicating
                active geological processes.
              </p>

            </details>


            <details>

              <summary>
                How cold is Triton?
              </summary>

              <p>
                Triton's surface temperature is approximately
                −235°C, making it one of the coldest known
                planetary surfaces.
              </p>

            </details>


            <details>

              <summary>
                Has a spacecraft landed on Triton?
              </summary>

              <p>
                No spacecraft has landed on Triton. Voyager 2
                is currently the only spacecraft to have made
                a close flyby of the moon.
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

export default Triton;