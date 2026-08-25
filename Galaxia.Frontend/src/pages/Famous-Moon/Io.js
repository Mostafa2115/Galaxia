import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Io.css";

import IoImg from "../../assets/Io/io.jpg";
import IoColor from "../../assets/Io/io1.jpg";
import Io2 from "../../assets/Io/io2.jpg";
import Io3 from "../../assets/Io/io3.jpg";

import EuropaImg from "../../assets/Moons/Europa.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";
import TritonImg from "../../assets/Moons/Triton.jpg";

import { NavLink } from "react-router-dom";

function Io() {
  return (
    <>
      <Navbar />

      <div className="io-page">

        {/* ================= HERO ================= */}

        <section className="io-hero">

          <img
            src={IoImg}
            alt="Io"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="io-number">
              JUPITER'S VOLCANIC MOON
            </span>

            <h1>Io</h1>

            <p>
              Io is the innermost of Jupiter's four large
              Galilean moons and the most volcanically active
              world in the Solar System.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Io
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Io Overview</h2>

          <p>
            Discover the essential facts about Jupiter's
            extraordinary volcanic moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>3,643 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>8.93 × 10²² kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>1.80 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Jupiter</h3>

              <span>421,700 km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>1.77 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface Temperature</h3>

              <span>−143°C Average</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT IO ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={IoImg}
              alt="Io"
            />

          </div>

          <div className="about-content">

            <span>ABOUT IO</span>

            <h2>Jupiter's World Of Fire</h2>

            <p>
              Io is the innermost of Jupiter's four large
              Galilean moons and the most volcanically active
              world in the Solar System.
            </p>

            <p>
              Its extraordinary volcanic activity is caused
              mainly by powerful tidal forces from Jupiter
              and the gravitational interactions between Io,
              Europa and Ganymede.
            </p>

            <p>
              Io's surface is constantly being reshaped by
              volcanic eruptions. Hundreds of volcanoes cover
              the moon, producing lava flows and enormous
              volcanic plumes.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Io</h2>

            <p>
              Discover some of the most fascinating features
              of Jupiter's volcanic moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🌋
              </div>

              <h3>Volcanic World</h3>

              <p>
                Io is the most volcanically active world
                known in the Solar System, with hundreds
                of active volcanoes.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🔥
              </div>

              <h3>Lava Flows</h3>

              <p>
                Massive lava flows spread across Io's
                surface and continuously reshape its
                colorful landscape.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🪐
              </div>

              <h3>Powerful Tidal Forces</h3>

              <p>
                Jupiter's gravity and the gravitational
                interactions with neighboring moons generate
                enormous internal heat inside Io.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                💨
              </div>

              <h3>Volcanic Plumes</h3>

              <p>
                Some eruptions send volcanic material
                hundreds of kilometers above Io's surface.
              </p>

            </div>

          </div>

        </section>
                {/* ================= IO SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Io2}
              alt="Io Surface"
            />

          </div>

          <div className="surface-content">

            <span>IO'S SURFACE</span>

            <h2>A Landscape Shaped By Volcanoes</h2>

            <p>
              Io's surface is constantly changing because of
              its intense volcanic activity. Huge lava flows,
              volcanic mountains and deposits of sulfur create
              its distinctive yellow, orange and red appearance.
            </p>

            <p>
              Some volcanic eruptions on Io are powerful enough
              to send material hundreds of kilometers above the
              surface, creating enormous plumes visible from
              spacecraft.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Active Volcanoes</h3>

                <p>
                  Hundreds of volcanoes are scattered across
                  Io's surface.
                </p>

              </div>

              <div className="surface-item">

                <h3>Sulfur Deposits</h3>

                <p>
                  Sulfur and sulfur compounds give Io much
                  of its colorful appearance.
                </p>

              </div>

              <div className="surface-item">

                <h3>Lava Plains</h3>

                <p>
                  Huge regions are covered by lava flows
                  produced by ongoing volcanic eruptions.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= IO LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>IO'S LANDSCAPE</span>

            <h2>A Moon Of Fire And Color</h2>

            <p>
              Io has one of the most visually striking surfaces
              in the Solar System. Its landscape contains
              volcanic mountains, lava lakes, plains and
              enormous deposits of sulfur.
            </p>

            <p>
              Unlike most rocky worlds, Io has relatively few
              impact craters because volcanic activity constantly
              resurfaces the moon and erases evidence of older
              impacts.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Io3}
              alt="Io Landscape"
            />

          </div>

        </section>


        {/* ================= IO EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Io</h2>

            <p>
              Spacecraft observations have revealed Io as one
              of the most active worlds in the Solar System.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1979
              </span>

              <h3>Voyager 1</h3>

              <p>
                Voyager 1 discovered active volcanic eruptions
                on Io, providing the first direct evidence of
                active volcanism beyond Earth.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1979
              </span>

              <h3>Voyager 2</h3>

              <p>
                Voyager 2 observed Io only a few months after
                Voyager 1 and confirmed the continuing volcanic
                activity on its surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1995
              </span>

              <h3>Galileo</h3>

              <p>
                NASA's Galileo spacecraft spent years studying
                Jupiter's system and made detailed observations
                of Io's volcanoes and surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2023+
              </span>

              <h3>Juno</h3>

              <p>
                NASA's Juno spacecraft has made close flybys
                of Io, capturing detailed images and studying
                its volcanic activity.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Io Gallery</h2>

            <p>
              Explore the volcanic surface and colorful
              landscapes of Jupiter's most active moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={IoImg}
                alt="Io"
              />

              <div className="gallery-overlay">
                <h3>Io From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Io2}
                alt="Io Surface"
              />

              <div className="gallery-overlay">
                <h3>Volcanic Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={IoColor}
                alt="Io Volcanoes"
              />

              <div className="gallery-overlay">
                <h3>Volcanic Landscape</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Io3}
                alt="Io Landscape"
              />

              <div className="gallery-overlay">
                <h3>Io's Colorful Terrain</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Io Facts</h2>

            <p>
              Io is one of the most extreme and fascinating
              worlds in the Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🌋</span>

              <h3>Most Volcanic World</h3>

              <p>
                Io is the most volcanically active world
                known in the Solar System.
              </p>

            </div>


            <div className="did-card">

              <span>🔥</span>

              <h3>Extreme Heat</h3>

              <p>
                Tidal forces from Jupiter generate enormous
                heat inside Io and power its volcanoes.
              </p>

            </div>


            <div className="did-card">

              <span>🌈</span>

              <h3>Colorful Surface</h3>

              <p>
                Sulfur and volcanic materials create Io's
                distinctive yellow, orange, red and black
                surface patterns.
              </p>

            </div>


            <div className="did-card">

              <span>🪐</span>

              <h3>Galilean Moon</h3>

              <p>
                Io is one of Jupiter's four large Galilean
                moons discovered by Galileo Galilei.
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
                Jupiter's icy moon with a possible subsurface
                ocean beneath its frozen crust.
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
                and lakes of liquid methane.
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
                Neptune's largest moon with a strange
                retrograde orbit and active icy surface.
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
              Learn more about Jupiter's extraordinary
              volcanic moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why is Io so volcanic?
              </summary>

              <p>
                Io experiences enormous tidal forces caused
                mainly by Jupiter's gravity and interactions
                with the other Galilean moons. These forces
                generate intense internal heat.
              </p>

            </details>


            <details>

              <summary>
                Is Io the most volcanic moon?
              </summary>

              <p>
                Yes. Io is the most volcanically active world
                currently known in the Solar System.
              </p>

            </details>


            <details>

              <summary>
                What makes Io's surface colorful?
              </summary>

              <p>
                Sulfur and sulfur compounds released by
                volcanic activity create much of Io's
                distinctive yellow, orange, red and black
                coloration.
              </p>

            </details>


            <details>

              <summary>
                How many volcanoes does Io have?
              </summary>

              <p>
                Hundreds of active volcanic centers have been
                identified on Io, making its surface one of
                the most geologically active places known.
              </p>

            </details>


            <details>

              <summary>
                Who discovered Io?
              </summary>

              <p>
                Io was discovered in 1610 by Galileo Galilei
                along with Jupiter's other three large
                Galilean moons.
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

export default Io;