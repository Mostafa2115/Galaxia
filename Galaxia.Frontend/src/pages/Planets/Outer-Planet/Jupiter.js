import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Jupiter.css";

import JupiterImg from "../../../assets/planets/Jupiter.jpg";
import Jupiterpng from "../../../assets/Jupiter/Jupiterpng.png";
import JupiterColor from "../../../assets/Jupiter/Jupiter1.jpg";
import Jupiter2 from "../../../assets/Jupiter/Jupiter2.jpg";
import Jupiter3 from "../../../assets/Jupiter/Jupiter3.jpg";

import MarsImg from "../../../assets/planets/Mars.jpg";
import SaturnImg from "../../../assets/planets/Saturn.jpg";
import NeptuneImg from "../../../assets/planets/Neptune.jpg";

import { NavLink } from "react-router-dom";

function Jupiter() {
  return (
    <>
      <Navbar />

      <div className="jupiter-page">

        {/* ================= HERO ================= */}

        <section className="jupiter-hero">

          <img
            src={JupiterImg}
            alt="Jupiter"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              PLANET 5
            </span>

            <h1>Jupiter</h1>

            <p>
              Jupiter is the fifth planet from the Sun and
              the largest planet in the Solar System.
              This enormous gas giant is famous for its
              colorful cloud bands, gigantic storms and the
              Great Red Spot that has been raging for
              centuries.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Jupiter
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Jupiter Overview</h2>

          <p>
            Basic information about the largest planet in
            our Solar System.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>139,820 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.898 × 10²⁷ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>24.79 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-145°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>9.9 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>11.86 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Jupiterpng}
              alt="Jupiter"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE PLANET</span>

            <h2>The Giant of the Solar System</h2>

            <p>
              Jupiter is the fifth planet from the Sun and
              by far the largest planet in our Solar System.
              It is so massive that more than 1,300 Earths
              could fit inside its enormous volume.
            </p>

            <p>
              Unlike Earth, Jupiter has no solid surface.
              It is a gas giant made mostly of hydrogen and
              helium, with swirling clouds that create
              colorful bands across the planet.
            </p>

            <p>
              Jupiter's immense gravity helps shape the
              Solar System by influencing asteroids and
              comets, often protecting the inner planets
              from potential impacts.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Jupiter is one of the most fascinating worlds
              ever discovered, full of gigantic storms and
              incredible natural phenomena.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">🌪️</div>

              <h3>Great Red Spot</h3>

              <p>
                Jupiter's Great Red Spot is a gigantic
                storm larger than Earth that has been
                active for hundreds of years.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🛰️</div>

              <h3>95+ Moons</h3>

              <p>
                Jupiter has more than ninety confirmed
                moons, including the famous Galilean
                moons discovered by Galileo.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🧲</div>

              <h3>Strong Magnetic Field</h3>

              <p>
                Jupiter possesses the strongest planetary
                magnetic field in the Solar System,
                creating enormous radiation belts.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">☁️</div>

              <h3>Gas Giant</h3>

              <p>
                Jupiter is composed mainly of hydrogen
                and helium and does not have a solid
                surface like Earth.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Jupiter</h2>

            <p>
              Jupiter is believed to have a dense rocky core
              surrounded by a deep layer of metallic hydrogen
              and an outer layer of molecular hydrogen and
              helium. The immense pressure inside the planet
              creates conditions unlike anywhere else in the
              Solar System.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "12%" }}
                  ></div>

                </div>

                <span>12%</span>

              </div>

              <div className="bar">

                <h4>Metallic Hydrogen</h4>

                <div className="progress">

                  <div
                    className="mantle"
                    style={{ width: "78%" }}
                  ></div>

                </div>

                <span>78%</span>

              </div>

              <div className="bar">

                <h4>Upper Atmosphere</h4>

                <div className="progress">

                  <div
                    className="crust"
                    style={{ width: "10%" }}
                  ></div>

                </div>

                <span>10%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Jupiterpng}
              alt="Jupiter Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>SPACE MISSIONS</span>

            <h2>Jupiter Exploration Missions</h2>

            <p>
              Several spacecraft have explored Jupiter,
              revealing its atmosphere, magnetic field,
              rings and fascinating moons.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1973
              </span>

              <h3>Pioneer 10</h3>

              <p>
                The first spacecraft to successfully fly
                past Jupiter, providing humanity with its
                first close-up images of the giant planet.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                1995
              </span>

              <h3>Galileo Mission</h3>

              <p>
                Galileo orbited Jupiter for nearly eight
                years, studying the planet and its largest
                moons in unprecedented detail.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2016
              </span>

              <h3>Juno Mission</h3>

              <p>
                NASA's Juno spacecraft continues to explore
                Jupiter, investigating its interior,
                magnetic field and powerful atmosphere.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Jupiter Gallery</h2>

            <p>
              Discover breathtaking images of Jupiter,
              its colorful atmosphere, giant storms and
              incredible cloud formations.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={JupiterImg} alt="Jupiter" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Jupiter3} alt="Jupiter" />

              <div className="gallery-overlay">

                <h3>Great Red Spot</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={JupiterColor} alt="Jupiter" />

              <div className="gallery-overlay">

                <h3>Cloud Bands</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Jupiter2} alt="Jupiter" />

              <div className="gallery-overlay">

                <h3>Jupiter From Juno</h3>

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
              Jupiter is a planet of extremes, holding many
              records within our Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🪐</span>

              <h3>Largest Planet</h3>

              <p>
                More than 1,300 Earths could fit inside
                Jupiter's enormous volume.
              </p>

            </div>

            <div className="did-card">

              <span>🌪️</span>

              <h3>Giant Storm</h3>

              <p>
                The Great Red Spot is the biggest known
                storm in the Solar System.
              </p>

            </div>

            <div className="did-card">

              <span>🛰️</span>

              <h3>Many Moons</h3>

              <p>
                Jupiter has over 95 confirmed moons,
                including Io, Europa, Ganymede and
                Callisto.
              </p>

            </div>

            <div className="did-card">

              <span>⚡</span>

              <h3>Powerful Magnetosphere</h3>

              <p>
                Jupiter's magnetic field is so strong that
                it extends millions of kilometers into
                space.
              </p>

            </div>

          </div>

        </section>
                {/* ================= NEXT PLANETS ================= */}

        <section className="next-planets">

          <div className="section-header">

            <span>KEEP EXPLORING</span>

            <h2>Explore Other Planets</h2>

            <p>
              Continue your adventure through the Solar
              System and discover more amazing worlds.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={SaturnImg} alt="Saturn" />

              <h3>Saturn</h3>

              <p>
                Discover the beautiful planet famous for
                its spectacular rings.
              </p>

              <NavLink to="/planets/saturn">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={MarsImg} alt="Mars" />

              <h3>Mars</h3>

              <p>
                Visit the mysterious Red Planet and its
                fascinating history.
              </p>

              <NavLink to="/planets/mars">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={NeptuneImg} alt="Neptune" />

              <h3>Neptune</h3>

              <p>
                Explore the distant blue ice giant at the
                edge of the Solar System.
              </p>

              <NavLink to="/planets/neptune">
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
              Find answers to some of the most common
              questions about Jupiter.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why is Jupiter called a Gas Giant?
              </summary>

              <p>
                Because it is composed mainly of hydrogen
                and helium and does not have a solid surface
                like Earth.
              </p>

            </details>

            <details>

              <summary>
                How many moons does Jupiter have?
              </summary>

              <p>
                Jupiter has more than 95 confirmed moons,
                with Ganymede being the largest moon in the
                Solar System.
              </p>

            </details>

            <details>

              <summary>
                What is the Great Red Spot?
              </summary>

              <p>
                It is a gigantic storm larger than Earth
                that has been active for centuries.
              </p>

            </details>

            <details>

              <summary>
                Can Jupiter support life?
              </summary>

              <p>
                Jupiter itself cannot support life because
                it has no solid surface and experiences
                extreme pressure and temperatures.
              </p>

            </details>

          </div>

        </section>

      <Footer />

      </div>

    </>

  );

}

export default Jupiter;