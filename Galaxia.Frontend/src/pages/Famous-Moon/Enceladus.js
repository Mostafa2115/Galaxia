import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Enceladus.css";

import EnceladusImg from "../../assets/Enceladus/enceladus.jpg";
import EnceladusColor from "../../assets/Enceladus/enceladus1.jpg";
import Enceladus2 from "../../assets/Enceladus/enceladus2.jpg";
import Enceladus3 from "../../assets/Enceladus/enceladus3.jpg";

import EuropaImg from "../../assets/Moons/Europa.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";
import TritonImg from "../../assets/Moons/Triton.jpg";

import { NavLink } from "react-router-dom";

function Enceladus() {
  return (
    <>
      <Navbar />

      <div className="enceladus-page">

        {/* ================= HERO ================= */}

        <section className="enceladus-hero">

          <img
            src={EnceladusImg}
            alt="Enceladus"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="enceladus-number">
              SATURN'S ICY MOON
            </span>

            <h1>Enceladus</h1>

            <p>
              Enceladus is a bright icy moon of Saturn,
              famous for its powerful water-ice geysers
              erupting from fractures near its south pole.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Enceladus
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Enceladus Overview</h2>

          <p>
            Discover the essential facts about Saturn's
            remarkable icy moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>504 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.08 × 10²⁰ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.113 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Saturn</h3>

              <span>238,000 km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>1.37 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface</h3>

              <span>Water Ice</span>

            </div>

          </div>

        </section>

        <section className="about-section">

          <div className="about-image">

            <img
              src={EnceladusColor}
              alt="Enceladus"
            />

          </div>

          <div className="about-content">

            <span>ABOUT ENCELADUS</span>

            <h2>A Tiny Moon With A Hidden Ocean</h2>

            <p>
              Enceladus is one of Saturn's brightest and most
              reflective moons. Its surface is covered almost
              entirely by fresh water ice.
            </p>

            <p>
              Beneath its frozen crust lies a global ocean of
              liquid water. Powerful jets of water vapor and
              icy particles erupt from fractures near its
              south pole.
            </p>

            <p>
              The material released by these jets contributes
              to Saturn's E ring and provides scientists with
              an opportunity to study material originating
              from beneath the moon's icy surface.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Enceladus</h2>

            <p>
              Discover some of the most fascinating features
              of Saturn's small but extraordinary icy moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                💧
              </div>

              <h3>Hidden Ocean</h3>

              <p>
                A global ocean of liquid water is believed
                to exist beneath Enceladus's icy crust.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                💨
              </div>

              <h3>Water Geysers</h3>

              <p>
                Powerful jets of water vapor and ice particles
                erupt from long fractures near the south pole.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                ❄️
              </div>

              <h3>Brightest Moon</h3>

              <p>
                Enceladus has an extremely bright surface
                because its fresh ice reflects most of the
                sunlight that reaches it.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🧬
              </div>

              <h3>Potential Habitability</h3>

              <p>
                Its liquid water, chemical ingredients and
                internal energy make Enceladus an important
                target in the search for potentially habitable
                environments.
              </p>

            </div>

          </div>

        </section>
                {/* ================= ENCELADUS SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Enceladus2}
              alt="Enceladus Surface"
            />

          </div>

          <div className="surface-content">

            <span>ENCELADUS'S SURFACE</span>

            <h2>A Frozen Surface With Active Geysers</h2>

            <p>
              Enceladus has a remarkably bright and smooth
              surface covered mainly by fresh water ice.
              However, its south polar region contains long
              fractures known as "tiger stripes."
            </p>

            <p>
              These fractures are the source of enormous
              plumes that release water vapor and icy
              particles from the ocean beneath the crust.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Tiger Stripes</h3>

                <p>
                  Long parallel fractures near the south
                  pole are closely associated with the
                  moon's active geysers.
                </p>

              </div>

              <div className="surface-item">

                <h3>Water Ice</h3>

                <p>
                  Fresh ice covers much of Enceladus and
                  makes its surface exceptionally reflective.
                </p>

              </div>

              <div className="surface-item">

                <h3>Active Plumes</h3>

                <p>
                  Jets of water vapor and ice particles
                  continuously escape from the polar region.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ENCELADUS LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>ENCELADUS'S LANDSCAPE</span>

            <h2>A Small Moon With A Surprisingly Active Interior</h2>

            <p>
              Enceladus has a complex surface containing
              smooth plains, fractured terrain, ridges and
              heavily cratered regions.
            </p>

            <p>
              The contrast between its ancient cratered
              regions and younger smooth terrain shows that
              Enceladus has experienced significant geological
              activity throughout its history.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Enceladus3}
              alt="Enceladus Landscape"
            />

          </div>

        </section>


        {/* ================= ENCELADUS EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Enceladus</h2>

            <p>
              Spacecraft observations have revealed that this
              small moon is one of the most scientifically
              interesting worlds orbiting Saturn.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1980
              </span>

              <h3>Voyager 1</h3>

              <p>
                Voyager 1 provided some of the first close-up
                observations of Enceladus and revealed its
                unusually bright surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1981
              </span>

              <h3>Voyager 2</h3>

              <p>
                Voyager 2 obtained higher-resolution images
                that revealed different types of terrain
                across Enceladus's surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2005
              </span>

              <h3>Cassini</h3>

              <p>
                NASA's Cassini spacecraft discovered the
                spectacular water-ice plumes erupting from
                fractures near Enceladus's south pole.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2015
              </span>

              <h3>Deep Ocean Evidence</h3>

              <p>
                Cassini observations provided strong evidence
                for a global subsurface ocean and detected
                molecular hydrogen in the plume material.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Enceladus Gallery</h2>

            <p>
              Explore the icy surface, tiger stripes and
              spectacular plumes of Saturn's fascinating moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={EnceladusImg}
                alt="Enceladus"
              />

              <div className="gallery-overlay">
                <h3>Enceladus From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Enceladus2}
                alt="Enceladus Surface"
              />

              <div className="gallery-overlay">
                <h3>Icy Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={EnceladusColor}
                alt="Enceladus"
              />

              <div className="gallery-overlay">
                <h3>Frozen Landscape</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Enceladus3}
                alt="Enceladus Landscape"
              />

              <div className="gallery-overlay">
                <h3>Tiger Stripes</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Enceladus Facts</h2>

            <p>
              Enceladus may be small, but it hides an
              extraordinary world beneath its icy surface.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>💧</span>

              <h3>Subsurface Ocean</h3>

              <p>
                A global ocean of liquid water exists beneath
                Enceladus's frozen outer shell.
              </p>

            </div>


            <div className="did-card">

              <span>💨</span>

              <h3>Water Plumes</h3>

              <p>
                Enceladus shoots enormous plumes of water
                vapor and ice particles into space.
              </p>

            </div>


            <div className="did-card">

              <span>❄️</span>

              <h3>Extremely Bright</h3>

              <p>
                Its fresh icy surface reflects most of the
                sunlight that reaches the moon.
              </p>

            </div>


            <div className="did-card">

              <span>🧬</span>

              <h3>Potentially Habitable</h3>

              <p>
                Water, chemical ingredients and an internal
                energy source make Enceladus an important
                target in the search for life.
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


            {/* ================= TRITON ================= */}

            <div className="next-card">

              <img
                src={TritonImg}
                alt="Triton"
              />

              <h3>Triton</h3>

              <p>
                Neptune's largest moon with an unusual
                retrograde orbit and icy surface activity.
              </p>

              <NavLink to="/moons/triton">
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
              Learn more about Saturn's fascinating icy moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Does Enceladus have an ocean?
              </summary>

              <p>
                Yes. Evidence from the Cassini mission indicates
                that a global ocean of liquid water exists beneath
                Enceladus's icy crust.
              </p>

            </details>


            <details>

              <summary>
                What are Enceladus's tiger stripes?
              </summary>

              <p>
                Tiger stripes are long fractures located near
                the south pole. They are the main sources of
                Enceladus's water-ice plumes.
              </p>

            </details>


            <details>

              <summary>
                Why is Enceladus so bright?
              </summary>

              <p>
                Its surface is covered with relatively fresh
                water ice, making Enceladus one of the most
                reflective objects in the Solar System.
              </p>

            </details>


            <details>

              <summary>
                Who discovered Enceladus?
              </summary>

              <p>
                Enceladus was discovered by William Herschel
                in 1789.
              </p>

            </details>


            <details>

              <summary>
                Could Enceladus support life?
              </summary>

              <p>
                Enceladus is considered a promising place to
                search for potentially habitable environments
                because it has liquid water, chemical
                ingredients and an energy source.
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

export default Enceladus;