import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import BookmarkBtn from "../../../components/BookmarkBtn/BookmarkBtn";
import "./Mars.css";

import MarsImg from "../../../assets/planets/Mars.jpg";
import Marspng from "../../../assets/Mars/Marspng.png";
import Mars_color from "../../../assets/Mars/Mars1.jpg";
import Mars_2 from "../../../assets/Mars/Mars2.jpg";
import Mars_3 from "../../../assets/Mars/Mars3.jpg";

import JupiterImg from "../../../assets/planets/Jupiter.jpg";
import SaturnImg from "../../../assets/planets/Saturn.jpg";
import EarthImg from "../../../assets/planets/Earth.jpg";

import { NavLink } from "react-router-dom";

function Mars() {
  return (
    <>
      <Navbar />
      <div className="mars-page">
      <section className="mars-hero">

        <img
          src={MarsImg}
          alt="Mars"
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="planet-number">
            PLANET 4
          </span>

          <h1>Mars</h1>

          <p>
            Mars is the fourth planet from the Sun and is
            known as the Red Planet because of the iron oxide
            covering its surface. It is one of the most
            explored planets in the Solar System and a
            potential destination for future human missions.
          </p>

          <div className="hero-buttons">

            <a href="#overview">
              <button className="btn-primary">
                Explore Facts
              </button>
            </a>

            <a href="#gallery">
              <button className="btn-secondary">
                View Gallery
              </button>
            </a>

            <BookmarkBtn
              item={{
                id: "planet-mars",
                title: "Mars - The Red Planet",
                category: "Planet",
                path: "/planets/mars",
                desc: "The Red Planet and potential destination for future human exploration."
              }}
            />

          </div>

        </div>

      </section>

      <section className="facts-section" id="overview">

        <h2>Mars Overview</h2>

        <p>
          Learn the essential facts about the mysterious
          Red Planet.
        </p>

        <div className="facts-grid">

          <div className="fact-card">

            <h3>Diameter</h3>

            <span>6,779 km</span>

          </div>

          <div className="fact-card">

            <h3>Temperature</h3>

            <span>-63°C</span>

          </div>

          <div className="fact-card">

            <h3>Gravity</h3>

            <span>3.71 m/s²</span>

          </div>

          <div className="fact-card">

            <h3>Distance</h3>

            <span>227.9 M km</span>

          </div>

          <div className="fact-card">

            <h3>One Day</h3>

            <span>24.6 Hours</span>

          </div>

          <div className="fact-card">

            <h3>One Year</h3>

            <span>687 Days</span>

          </div>

        </div>

      </section>
            <section className="about-section">

        <div className="about-image">

          <img
            src={Mars_color}
            alt="Mars"
          />

        </div>

        <div className="about-content">

          <span>ABOUT THE PLANET</span>

          <h2>Mars</h2>

          <p>
            Mars is the fourth planet from the Sun and the
            second smallest planet in the Solar System.
            Its reddish appearance comes from iron oxide
            dust covering the surface.
          </p>

          <p>
            The planet is home to the largest volcano in
            the Solar System, Olympus Mons, and the deepest
            canyon, Valles Marineris, stretching thousands
            of kilometers across its surface.
          </p>

          <p>
            Scientists believe Mars once had rivers, lakes,
            and possibly oceans, making it one of the best
            places to search for signs of ancient life.
          </p>

        </div>

      </section>

      <section className="interesting-section">

        <div className="section-header">

          <span>DISCOVER MORE</span>

          <h2>Interesting Facts</h2>

          <p>
            Mars is one of the most fascinating planets ever
            explored by robotic missions.
          </p>

        </div>

        <div className="facts-cards">

          <div className="fact-box">

            <div className="fact-icon">🔴</div>

            <h3>The Red Planet</h3>

            <p>
              Mars appears red because its surface is rich
              in iron oxide, commonly known as rust.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🌋</div>

            <h3>Olympus Mons</h3>

            <p>
              Mars is home to Olympus Mons, the tallest
              volcano ever discovered in the Solar System.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🛰️</div>

            <h3>Highly Explored</h3>

            <p>
              More spacecraft have visited Mars than any
              other planet except Earth.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🧊</div>

            <h3>Polar Ice Caps</h3>

            <p>
              Frozen water and carbon dioxide form large
              ice caps at both Martian poles.
            </p>

          </div>

        </div>

      </section>
            <section className="structure-section">

        <div className="structure-left">

          <span>INTERNAL STRUCTURE</span>

          <h2>Inside Mars</h2>

          <p>
            Mars is made up of a dense metallic core,
            surrounded by a rocky mantle and a thin crust.
            Although smaller than Earth, its internal
            structure is surprisingly similar.
          </p>

          <div className="bars">

            <div className="bar">

              <h4>Core</h4>

              <div className="progress">

                <div className="core"></div>

              </div>

              <span>50%</span>

            </div>

            <div className="bar">

              <h4>Mantle</h4>

              <div className="progress">

                <div className="mantle"></div>

              </div>

              <span>45%</span>

            </div>

            <div className="bar">

              <h4>Crust</h4>

              <div className="progress">

                <div className="crust"></div>

              </div>

              <span>5%</span>

            </div>

          </div>

        </div>

        <div className="structure-right">

          <img
            src={Marspng}
            alt="Mars"
          />

        </div>

      </section>

      <section className="missions-section">

        <div className="section-header">

          <span>SPACE EXPLORATION</span>

          <h2>Mars Missions</h2>

          <p>
            Mars has been explored by dozens of orbiters,
            landers, and rovers searching for evidence of
            ancient water and possible life.
          </p>

        </div>

        <div className="timeline">

          <div className="mission-card">

            <span className="year">
              1976
            </span>

            <h3>Viking 1</h3>

            <p>
              The first successful spacecraft to land on
              Mars and perform scientific experiments.
            </p>

          </div>

          <div className="mission-card">

            <span className="year">
              2012
            </span>

            <h3>Curiosity Rover</h3>

            <p>
              Landed inside Gale Crater to study Mars'
              climate, rocks, and the possibility of
              ancient microbial life.
            </p>

          </div>

          <div className="mission-card">

            <span className="year">
              2021
            </span>

            <h3>Perseverance Rover</h3>

            <p>
              Currently exploring Jezero Crater while
              collecting rock samples for future return
              missions to Earth.
            </p>

          </div>

        </div>

      </section>
            {/* ================= GALLERY ================= */}

      <section className="gallery-section" id="gallery">

        <div className="section-header">

          <span>PHOTO GALLERY</span>

          <h2>Mars Gallery</h2>

          <p>
            Explore incredible images of the Red Planet
            captured by orbiters and rovers.
          </p>

        </div>

        <div className="gallery-grid">

          <div className="gallery-card">

            <img src={MarsImg} alt="Mars" />

            <div className="gallery-overlay">

              <h3>Global View</h3>

            </div>

          </div>

          <div className="gallery-card">

            <img src={Mars_2} alt="Mars" />

            <div className="gallery-overlay">

              <h3>Martian Surface</h3>

            </div>

          </div>

          <div className="gallery-card">

            <img src={Mars_color} alt="Mars" />

            <div className="gallery-overlay">

              <h3>False Color View</h3>

            </div>

          </div>

          <div className="gallery-card">

            <img src={Mars_3} alt="Mars" />

            <div className="gallery-overlay">

              <h3>Rocky Landscape</h3>

            </div>

          </div>

        </div>

      </section>

      <section className="did-section">

        <div className="section-header">

          <span>DID YOU KNOW?</span>

          <h2>Amazing Facts</h2>

          <p>
            Mars continues to be one of the most exciting
            planets for scientific exploration.
          </p>

        </div>

        <div className="did-grid">

          <div className="did-card">

            <span>🛰️</span>

            <h3>Most Explored Planet</h3>

            <p>
              Mars has been visited by more robotic missions
              than any planet except Earth.
            </p>

          </div>

          <div className="did-card">

            <span>🌋</span>

            <h3>Largest Volcano</h3>

            <p>
              Olympus Mons rises about 22 km high, making it
              the tallest volcano in the Solar System.
            </p>

          </div>

          <div className="did-card">

            <span>🌪️</span>

            <h3>Dust Storms</h3>

            <p>
              Giant dust storms can cover the entire planet
              for weeks at a time.
            </p>

          </div>

          <div className="did-card">

            <span>🧊</span>

            <h3>Frozen Water</h3>

            <p>
              Water ice has been discovered beneath the
              Martian surface and at its poles.
            </p>

          </div>

        </div>

      </section>

      <section className="next-planets">

        <div className="section-header">

          <span>KEEP EXPLORING</span>

          <h2>Explore Other Planets</h2>

          <p>
            Continue your adventure through the Solar System.
          </p>

        </div>

        <div className="next-grid">

          <div className="next-card">

            <img src={EarthImg} alt="Earth" />

            <h3>Earth</h3>

            <p>Our beautiful blue home planet.</p>

            <NavLink to="/planets/earth">

              Explore

            </NavLink>

          </div>

          <div className="next-card">

            <img src={JupiterImg} alt="Jupiter" />

            <h3>Jupiter</h3>

            <p>The largest planet in the Solar System.</p>

            <NavLink to="/planets/jupiter">

              Explore

            </NavLink>

          </div>

          <div className="next-card">

            <img src={SaturnImg} alt="Saturn" />

            <h3>Saturn</h3>

            <p>The magnificent ringed giant.</p>

            <NavLink to="/planets/saturn">

              Explore

            </NavLink>

          </div>

        </div>

      </section>

      <section className="faq-section">

        <div className="section-header">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Discover answers to common questions about Mars.
          </p>

        </div>

        <div className="faq-container">

          <details>

            <summary>Why is Mars called the Red Planet?</summary>

            <p>
              Because iron oxide (rust) on its surface gives
              Mars its distinctive reddish appearance.
            </p>

          </details>

          <details>

            <summary>Does Mars have moons?</summary>

            <p>
              Yes. Mars has two small moons named
              Phobos and Deimos.
            </p>

          </details>

          <details>

            <summary>Can humans live on Mars?</summary>

            <p>
              Not currently, but future missions aim to
              establish permanent human settlements.
            </p>

          </details>

          <details>

            <summary>Is there water on Mars?</summary>

            <p>
              Yes. Frozen water exists at the poles and
              beneath the planet's surface.
            </p>

          </details>

        </div>

      </section>

      <Footer />
</div>
    </>

  );

}

export default Mars;