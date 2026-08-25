import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Ganymede.css";

import GanymedeImg from "../../assets/Ganymede/ganymede.jpg";
import GanymedeColor from "../../assets/Ganymede/ganymede1.jpg";
import Ganymede2 from "../../assets/Ganymede/ganymede2.jpg";
import Ganymede3 from "../../assets/Ganymede/ganymede3.jpg";

import EuropaImg from "../../assets/Moons/Europa.jpg";
import IoImg from "../../assets/Moons/Io.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function Ganymede() {
  return (
    <>
      <Navbar />

      <div className="ganymede-page">

        {/* ================= HERO ================= */}

        <section className="ganymede-hero">

          <img
            src={GanymedeImg}
            alt="Ganymede"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="ganymede-number">
              JUPITER'S LARGEST MOON
            </span>

            <h1>Ganymede</h1>

            <p>
              Ganymede is the largest moon in the Solar System
              and the only moon known to have its own intrinsic
              magnetic field.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Ganymede
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Ganymede Overview</h2>

          <p>
            Discover the essential facts about Jupiter's
            enormous icy moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>5,268 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.48 × 10²³ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>1.43 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Jupiter</h3>

              <span>1.07 Million km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>7.15 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface</h3>

              <span>Ice & Rock</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT GANYMEDE ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={GanymedeColor}
              alt="Ganymede"
            />

          </div>

          <div className="about-content">

            <span>ABOUT GANYMEDE</span>

            <h2>The Largest Moon In The Solar System</h2>

            <p>
              Ganymede is the largest moon in the Solar System,
              even larger in diameter than the planet Mercury.
              It is one of Jupiter's four large Galilean moons.
            </p>

            <p>
              The moon is made primarily of silicate rock and
              water ice. Scientists believe that a large amount
              of liquid water may exist beneath its icy surface.
            </p>

            <p>
              Ganymede is also unique because it generates its
              own magnetic field, creating a small magnetosphere
              inside Jupiter's much larger magnetic environment.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Ganymede</h2>

            <p>
              Discover some of the most fascinating features
              of Jupiter's largest moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🪐
              </div>

              <h3>Largest Moon</h3>

              <p>
                Ganymede is the largest natural satellite in
                the Solar System and is even larger than Mercury
                in diameter.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🧲
              </div>

              <h3>Magnetic Field</h3>

              <p>
                Ganymede is the only known moon with its own
                intrinsic magnetic field and magnetosphere.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                💧
              </div>

              <h3>Hidden Ocean</h3>

              <p>
                Evidence suggests that a deep ocean of liquid
                water may exist beneath Ganymede's icy crust.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                ❄️
              </div>

              <h3>Icy Surface</h3>

              <p>
                Ganymede's surface contains large regions of
                bright ice as well as darker, older terrain
                covered with impact craters.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GANYMEDE SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Ganymede2}
              alt="Ganymede Surface"
            />

          </div>

          <div className="surface-content">

            <span>GANYMEDE'S SURFACE</span>

            <h2>An Ancient World Of Ice And Rock</h2>

            <p>
              Ganymede's surface is divided into two major
              types of terrain. Bright regions are relatively
              young and contain large grooves, while darker
              regions are older and heavily covered with craters.
            </p>

            <p>
              The moon's icy crust hides a complex interior,
              including layers of ice and rock and a possible
              deep saltwater ocean beneath the surface.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Grooved Terrain</h3>

                <p>
                  Bright regions contain long grooves and
                  ridges formed by ancient geological activity.
                </p>

              </div>

              <div className="surface-item">

                <h3>Impact Craters</h3>

                <p>
                  Darker regions preserve evidence of billions
                  of years of impacts across Ganymede.
                </p>

              </div>

              <div className="surface-item">

                <h3>Water Ice</h3>

                <p>
                  Water ice makes up a significant portion
                  of Ganymede's outer layers.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= GANYMEDE LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>GANYMEDE'S LANDSCAPE</span>

            <h2>A Moon With A Complex Geological History</h2>

            <p>
              Ganymede has a diverse landscape containing
              ancient dark regions, bright grooved terrain,
              mountains and large impact basins.
            </p>

            <p>
              Its surface records a long geological history,
              making Ganymede one of the most interesting moons
              to study in the outer Solar System.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Ganymede3}
              alt="Ganymede Landscape"
            />

          </div>

        </section>


        {/* ================= GANYMEDE EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Ganymede</h2>

            <p>
              Multiple spacecraft have explored Jupiter's
              system and helped reveal the secrets of its
              largest moon.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1610
              </span>

              <h3>Discovery</h3>

              <p>
                Galileo Galilei discovered Ganymede along
                with Jupiter's other three large Galilean
                moons.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1979
              </span>

              <h3>Voyager Missions</h3>

              <p>
                Voyager 1 and Voyager 2 captured detailed
                images of Ganymede and revealed its varied
                surface terrain.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1995
              </span>

              <h3>Galileo</h3>

              <p>
                NASA's Galileo spacecraft studied Ganymede
                extensively and provided strong evidence for
                its intrinsic magnetic field.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2034
              </span>

              <h3>JUICE</h3>

              <p>
                ESA's JUICE mission is planned to enter orbit
                around Ganymede and study its surface, interior,
                magnetic field and possible ocean.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Ganymede Gallery</h2>

            <p>
              Explore the icy surface and ancient landscapes
              of Jupiter's largest moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={GanymedeImg}
                alt="Ganymede"
              />

              <div className="gallery-overlay">
                <h3>Ganymede From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Ganymede2}
                alt="Ganymede Surface"
              />

              <div className="gallery-overlay">
                <h3>Icy Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={GanymedeColor}
                alt="Ganymede"
              />

              <div className="gallery-overlay">
                <h3>Ganymede's Terrain</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Ganymede3}
                alt="Ganymede Landscape"
              />

              <div className="gallery-overlay">
                <h3>Ancient Landscape</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Ganymede Facts</h2>

            <p>
              Ganymede is one of the most fascinating moons
              in the Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🪐</span>

              <h3>Larger Than Mercury</h3>

              <p>
                Ganymede is larger in diameter than Mercury,
                although Mercury has considerably more mass.
              </p>

            </div>


            <div className="did-card">

              <span>🧲</span>

              <h3>Its Own Magnetic Field</h3>

              <p>
                Ganymede is the only moon known to generate
                its own intrinsic magnetic field.
              </p>

            </div>


            <div className="did-card">

              <span>💧</span>

              <h3>Possible Underground Ocean</h3>

              <p>
                Scientists have strong evidence for a salty
                ocean beneath Ganymede's icy crust.
              </p>

            </div>


            <div className="did-card">

              <span>🌌</span>

              <h3>Galilean Moon</h3>

              <p>
                Ganymede was discovered in 1610 by Galileo
                Galilei along with Io, Europa and Callisto.
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


            {/* ================= IO ================= */}

            <div className="next-card">

              <img
                src={IoImg}
                alt="Io"
              />

              <h3>Io</h3>

              <p>
                Jupiter's volcanic moon and the most
                volcanically active world in the Solar System.
              </p>

              <NavLink to="/moons/io">
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
              Learn more about Jupiter's largest moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Is Ganymede bigger than Mercury?
              </summary>

              <p>
                Yes. Ganymede is larger than Mercury in
                diameter, although Mercury has more mass.
              </p>

            </details>


            <details>

              <summary>
                Does Ganymede have a magnetic field?
              </summary>

              <p>
                Yes. Ganymede is the only known moon with
                its own intrinsic magnetic field.
              </p>

            </details>


            <details>

              <summary>
                Does Ganymede have an ocean?
              </summary>

              <p>
                Evidence indicates that Ganymede has a deep
                subsurface saltwater ocean beneath its icy
                outer layers.
              </p>

            </details>


            <details>

              <summary>
                Who discovered Ganymede?
              </summary>

              <p>
                Ganymede was discovered by Galileo Galilei
                in 1610 along with Jupiter's other Galilean
                moons.
              </p>

            </details>


            <details>

              <summary>
                Will a spacecraft explore Ganymede?
              </summary>

              <p>
                ESA's JUICE mission is planned to study
                Ganymede in detail and enter orbit around
                the moon after its arrival in the Jupiter
                system.
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

export default Ganymede;