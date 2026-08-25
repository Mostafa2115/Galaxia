import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import BookmarkBtn from "../../../components/BookmarkBtn/BookmarkBtn";
import "./Earth.css";

import EarthImg from "../../../assets/planets/Earth.jpg";
import Earthpng from "../../../assets/Earth/Earthpng.png";
import EarthColor from "../../../assets/Earth/Earth1.jpg";
import Earth2 from "../../../assets/Earth/Earth2.jpg";
import Earth3 from "../../../assets/Earth/Earth3.jpg";

import MarsImg from "../../../assets/planets/Mars.jpg";
import JupiterImg from "../../../assets/planets/Jupiter.jpg";
import SaturnImg from "../../../assets/planets/Saturn.jpg";

import { NavLink } from "react-router-dom";

function Earth() {
  return (
    <>
      <Navbar />
  <div className="earth-page">
      {/* ================= HERO ================= */}

      <section className="earth-hero">

        <img
          src={EarthImg}
          alt="Earth"
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="planet-number">
            PLANET 3
          </span>

          <h1>Earth</h1>

          <p>
            Earth is the third planet from the Sun and the
            only known world where life exists.
            Its rich atmosphere, liquid oceans and moderate
            climate make it a unique place in our Solar System.
          </p>

          <div className="hero-buttons">

            <a href="#overview">
              <button className="btn-primary">
                Explore Earth
              </button>
            </a>

            <a href="#gallery">
              <button className="btn-secondary">
                View Gallery
              </button>
            </a>

            <BookmarkBtn
              item={{
                id: "planet-earth",
                title: "Earth - Home Planet",
                category: "Planet",
                path: "/planets/earth",
                desc: "Our home planet and the only known world where life exists."
              }}
            />

          </div>

        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="facts-section" id="overview">

        <h2>Earth Overview</h2>

        <p>
          Basic information about our home planet.
        </p>

        <div className="facts-grid">

          <div className="fact-card">

            <h3>Diameter</h3>

            <span>12,742 km</span>

          </div>

          <div className="fact-card">

            <h3>Mass</h3>

            <span>5.97 × 10²⁴ kg</span>

          </div>

          <div className="fact-card">

            <h3>Gravity</h3>

            <span>9.81 m/s²</span>

          </div>

          <div className="fact-card">

            <h3>Average Temp</h3>

            <span>15°C</span>

          </div>

          <div className="fact-card">

            <h3>Length of Day</h3>

            <span>24 Hours</span>

          </div>

          <div className="fact-card">

            <h3>Length of Year</h3>

            <span>365.25 Days</span>

          </div>

        </div>

      </section>
            {/* ================= ABOUT ================= */}

      <section className="about-section">

        <div className="about-image">

          <img
            src={Earthpng}
            alt="Earth"
          />

        </div>

        <div className="about-content">

          <span>ABOUT THE PLANET</span>

          <h2>The Blue Planet</h2>

          <p>
            Earth is the third planet from the Sun and the
            fifth largest planet in the Solar System.
            It formed approximately 4.54 billion years ago
            and remains the only known planet capable of
            supporting life.
          </p>

          <p>
            Around 71% of Earth's surface is covered by
            oceans while the remaining 29% consists of
            continents, mountains, forests, deserts and
            thousands of islands.
          </p>

          <p>
            Earth's atmosphere is composed mainly of
            nitrogen and oxygen. It protects the planet
            from harmful solar radiation and keeps the
            temperature suitable for life.
          </p>

        </div>

      </section>

      {/* ================= INTERESTING FACTS ================= */}

      <section className="interesting-section">

        <div className="section-header">

          <span>DISCOVER MORE</span>

          <h2>Interesting Facts</h2>

          <p>
            Earth is unlike any other planet discovered so
            far. Here are some fascinating facts about our
            incredible home.
          </p>

        </div>

        <div className="facts-cards">

          <div className="fact-box">

            <div className="fact-icon">🌍</div>

            <h3>Only Known Planet With Life</h3>

            <p>
              Earth is the only known planet in the universe
              where life naturally exists.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🌊</div>

            <h3>71% Covered By Water</h3>

            <p>
              Oceans cover most of Earth's surface, giving
              the planet its famous blue appearance.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🌙</div>

            <h3>One Natural Satellite</h3>

            <p>
              Earth's Moon stabilizes the planet's rotation
              and creates ocean tides.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🧲</div>

            <h3>Powerful Magnetic Field</h3>

            <p>
              Earth's magnetic field protects life from
              harmful solar wind and cosmic radiation.
            </p>

          </div>

        </div>

      </section>
            {/* ================= STRUCTURE ================= */}

      <section className="structure-section">

        <div className="structure-left">

          <span>INTERNAL STRUCTURE</span>

          <h2>Inside Earth</h2>

          <p>
            Earth is composed of four main layers:
            the crust, mantle, outer core and inner core.
            These layers work together to create volcanic
            activity, earthquakes and the magnetic field
            that protects our planet.
          </p>

          <div className="bars">

            <div className="bar">

              <h4>Inner & Outer Core</h4>

              <div className="progress">

                <div
                  className="core"
                  style={{ width: "32%" }}
                ></div>

              </div>

              <span>32%</span>

            </div>

            <div className="bar">

              <h4>Mantle</h4>

              <div className="progress">

                <div
                  className="mantle"
                  style={{ width: "67%" }}
                ></div>

              </div>

              <span>67%</span>

            </div>

            <div className="bar">

              <h4>Crust</h4>

              <div className="progress">

                <div
                  className="crust"
                  style={{ width: "1%" }}
                ></div>

              </div>

              <span>1%</span>

            </div>

          </div>

        </div>

        <div className="structure-right">

          <img
            src={Earthpng}
            alt="Earth Structure"
          />

        </div>

      </section>

      {/* ================= MISSIONS ================= */}

      <section className="missions-section">

        <div className="section-header">

          <span>SPACE MISSIONS</span>

          <h2>Earth Observation Missions</h2>

          <p>
            Although humans live on Earth, space agencies
            constantly launch satellites to study climate,
            oceans, forests and weather changes.
          </p>

        </div>

        <div className="timeline">

          <div className="mission-card">

            <span className="year">
              1972
            </span>

            <h3>Landsat Program</h3>

            <p>
              Landsat satellites have continuously monitored
              Earth's land surface for more than 50 years,
              providing valuable environmental data.
            </p>

          </div>

          <div className="mission-card">

            <span className="year">
              1998
            </span>

            <h3>International Space Station</h3>

            <p>
              The ISS orbits Earth every 90 minutes,
              allowing astronauts to perform scientific
              experiments in microgravity.
            </p>

          </div>

          <div className="mission-card">

            <span className="year">
              2015
            </span>

            <h3>DSCOVR Mission</h3>

            <p>
              DSCOVR captures stunning full-disk images of
              Earth while monitoring solar activity that
              can affect our planet.
            </p>

          </div>

        </div>

      </section>
            {/* ================= GALLERY ================= */}

      <section className="gallery-section" id="gallery">

        <div className="section-header">

          <span>PHOTO GALLERY</span>

          <h2>Earth Gallery</h2>

          <p>
            Explore breathtaking views of our beautiful
            planet from space.
          </p>

        </div>

        <div className="gallery-grid">

          <div className="gallery-card">

            <img src={EarthImg} alt="Earth" />

            <div className="gallery-overlay">

              <h3>Blue Marble</h3>

            </div>

          </div>

          <div className="gallery-card">

            <img src={Earth2} alt="Earth" />

            <div className="gallery-overlay">

              <h3>Cloud Systems</h3>

            </div>

          </div>

          <div className="gallery-card">

            <img src={EarthColor} alt="Earth" />

            <div className="gallery-overlay">

              <h3>Continents</h3>

            </div>

          </div>

          <div className="gallery-card">

            <img src={Earth3} alt="Earth" />

            <div className="gallery-overlay">

              <h3>View From Orbit</h3>

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
            Earth is full of incredible features that make
            it unique among all known planets.
          </p>

        </div>

        <div className="did-grid">

          <div className="did-card">

            <span>🌊</span>

            <h3>Oceans Dominate</h3>

            <p>
              About 71% of Earth's surface is covered by
              oceans, making it the only known planet with
              abundant liquid water.
            </p>

          </div>

          <div className="did-card">

            <span>🌿</span>

            <h3>Millions of Species</h3>

            <p>
              Scientists estimate that Earth is home to
              millions of different living organisms.
            </p>

          </div>

          <div className="did-card">

            <span>🧲</span>

            <h3>Natural Shield</h3>

            <p>
              Earth's magnetic field protects the planet
              from harmful charged particles coming from
              the Sun.
            </p>

          </div>

          <div className="did-card">

            <span>🌙</span>

            <h3>The Moon</h3>

            <p>
              Earth's Moon helps stabilize the planet's
              rotation and produces ocean tides.
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
            Continue your journey through the Solar System
            and discover more fascinating worlds.
          </p>

        </div>

        <div className="next-grid">

          <div className="next-card">

            <img src={MarsImg} alt="Mars" />

            <h3>Mars</h3>

            <p>
              Explore the mysterious Red Planet and its
              ancient history.
            </p>

            <NavLink to="/planets/mars">
              Explore
            </NavLink>

          </div>

          <div className="next-card">

            <img src={JupiterImg} alt="Jupiter" />

            <h3>Jupiter</h3>

            <p>
              Discover the largest planet in our Solar
              System.
            </p>

            <NavLink to="/planets/jupiter">
              Explore
            </NavLink>

          </div>

          <div className="next-card">

            <img src={SaturnImg} alt="Saturn" />

            <h3>Saturn</h3>

            <p>
              Visit the magnificent planet famous for its
              spectacular rings.
            </p>

            <NavLink to="/planets/saturn">
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
            Everything you need to know about our home
            planet.
          </p>

        </div>

        <div className="faq-container">

          <details>

            <summary>
              Why is Earth called the Blue Planet?
            </summary>

            <p>
              Because about 71% of Earth's surface is
              covered by water, making it appear blue when
              viewed from space.
            </p>

          </details>

          <details>

            <summary>
              How old is Earth?
            </summary>

            <p>
              Earth formed approximately 4.54 billion years
              ago.
            </p>

          </details>

          <details>

            <summary>
              How many moons does Earth have?
            </summary>

            <p>
              Earth has one natural satellite, the Moon.
            </p>

          </details>

          <details>

            <summary>
              Why can life exist on Earth?
            </summary>

            <p>
              Earth has liquid water, oxygen-rich
              atmosphere, suitable temperatures and a
              protective magnetic field that make life
              possible.
            </p>

          </details>

        </div>

      </section>

      <Footer />
      </div>

    </>

  );

}

export default Earth;