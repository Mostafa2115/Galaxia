import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Venus.css";

import VenusImg from "../../../assets/planets/Venus.jpg";
import Venuspng from "../../../assets/Venus/venuspng.png";
import Venus_color from "../../../assets/Venus/VenusIMG.jpg";
import Venus_3 from "../../../assets/Venus/venus3.jpg";
import Venus_2 from "../../../assets/Venus/venus4.jpg";

import EarthImg from "../../../assets/planets/Earth.jpg";
import MarsImg from "../../../assets/planets/Mars.jpg";
import JupiterImg from "../../../assets/planets/Jupiter.jpg";

import { NavLink } from "react-router-dom";

function Venus() {
  return (
    <>
      <Navbar />
      <div className="venus-page">
      <section className="venus-hero">

        <img
          src={VenusImg}
          alt="Venus"
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="planet-number">
            PLANET 2
          </span>

          <h1>Venus</h1>

          <p>
            The second planet from the Sun and the hottest
            planet in our Solar System.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Explore Facts
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

        </div>

      </section>

      <section className="facts-section">

        <h2>Venus Overview</h2>

        <p>
          Learn the most important facts about the hottest
          planet in our Solar System.
        </p>

        <div className="facts-grid">

          <div className="fact-card">
            <h3>Diameter</h3>
            <span>12,104 km</span>
          </div>

          <div className="fact-card">
            <h3>Temperature</h3>
            <span>465°C</span>
          </div>

          <div className="fact-card">
            <h3>Gravity</h3>
            <span>8.87 m/s²</span>
          </div>

          <div className="fact-card">
            <h3>Distance</h3>
            <span>108.2 M km</span>
          </div>

          <div className="fact-card">
            <h3>One Day</h3>
            <span>243 Earth Days</span>
          </div>

          <div className="fact-card">
            <h3>One Year</h3>
            <span>225 Earth Days</span>
          </div>

        </div>

      </section>

      <section className="about-section">

        <div className="about-image">

          <img
            src={Venus_color}
            alt="Venus"
          />

        </div>

        <div className="about-content">

          <span>ABOUT THE PLANET</span>

          <h2>Venus</h2>

          <p>
            Venus is often called Earth's twin because it is
            similar in size, mass, and structure. However,
            its surface conditions are extremely hostile.
          </p>

          <p>
            A thick atmosphere made mostly of carbon dioxide
            traps heat through a runaway greenhouse effect,
            making Venus even hotter than Mercury despite
            being farther from the Sun.
          </p>

        </div>

      </section>
        <section className="interesting-section">

        <div className="section-header">

          <span>DISCOVER MORE</span>

          <h2>Interesting Facts</h2>

          <p>
            Venus is one of the most mysterious planets,
            with extreme temperatures and a unique atmosphere.
          </p>

        </div>

        <div className="facts-cards">

          <div className="fact-box">

            <div className="fact-icon">🔥</div>

            <h3>Hottest Planet</h3>

            <p>
              Venus has an average surface temperature of
              about 465°C, making it hotter than Mercury.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">☁</div>

            <h3>Thick Clouds</h3>

            <p>
              Venus is covered by dense clouds of sulfuric
              acid that completely hide its surface.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🔄</div>

            <h3>Backward Rotation</h3>

            <p>
              Venus rotates in the opposite direction to
              most planets, so the Sun rises in the west.
            </p>

          </div>

          <div className="fact-box">

            <div className="fact-icon">🌍</div>

            <h3>Earth's Twin</h3>

            <p>
              Venus has nearly the same size and mass as
              Earth, but a completely different environment.
            </p>

          </div>

        </div>

      </section>

      <section className="structure-section">

        <div className="structure-left">

          <span>INTERNAL STRUCTURE</span>

          <h2>Inside Venus</h2>

          <p>
            Venus has a metallic core surrounded by a rocky
            mantle and crust. Its internal structure is very
            similar to Earth's, although its surface is much
            hotter due to the greenhouse effect.
          </p>

          <div className="bars">

            <div className="bar">

              <h4>Core</h4>

              <div className="progress">
                <div className="core"></div>
              </div>

              <span>32%</span>

            </div>

            <div className="bar">

              <h4>Mantle</h4>

              <div className="progress">
                <div className="mantle"></div>
              </div>

              <span>65%</span>

            </div>

            <div className="bar">

              <h4>Crust</h4>

              <div className="progress">
                <div className="crust"></div>
              </div>

              <span>3%</span>

            </div>

          </div>

        </div>

        <div className="structure-right">

          <img
            src={Venuspng}
            alt="Venus"
          />

        </div>

      </section>

      <section className="missions-section">

        <div className="section-header">

          <span>SPACE EXPLORATION</span>

          <h2>Venus Missions</h2>

          <p>
            Several spacecraft have explored Venus,
            revealing the secrets hidden beneath its clouds.
          </p>

        </div>

        <div className="timeline">

          <div className="mission-card">

            <span className="year">
              1962
            </span>

            <h3>Mariner 2</h3>

            <p>
              The first successful spacecraft to fly past
              Venus and return scientific data.
            </p>

          </div>

          <div className="mission-card">

            <span className="year">
              1975
            </span>

            <h3>Venera 9</h3>

            <p>
              The first spacecraft to land on Venus and send
              images from its surface.
            </p>

          </div>

          <div className="mission-card">

            <span className="year">
              2023
            </span>

            <h3>EnVision</h3>

            <p>
              ESA's future mission that will study the
              geology and atmosphere of Venus.
            </p>

          </div>

        </div>

      </section>
            <section className="gallery-section">

        <div className="section-header">

          <span>PHOTO GALLERY</span>

          <h2>Venus Gallery</h2>

          <p>
            Explore breathtaking views of Venus captured
            by different space missions.
          </p>

        </div>

        <div className="gallery-grid">

          <div className="gallery-card">
            <img src={VenusImg} alt="Venus" />
            <div className="gallery-overlay">
              <h3>Global View</h3>
            </div>
          </div>

          <div className="gallery-card">
            <img src={Venus_2} alt="Venus" />
            <div className="gallery-overlay">
              <h3>Cloud Layers</h3>
            </div>
          </div>

          <div className="gallery-card">
            <img src={Venus_color} alt="Venus" />
            <div className="gallery-overlay">
              <h3>False Color View</h3>
            </div>
          </div>

          <div className="gallery-card">
            <img src={Venus_3} alt="Venus" />
            <div className="gallery-overlay">
              <h3>Surface Radar</h3>
            </div>
          </div>

        </div>

      </section>

      <section className="did-section">

        <div className="section-header">

          <span>DID YOU KNOW?</span>

          <h2>Amazing Facts</h2>

          <p>
            Venus is full of surprises that make it one of
            the most fascinating planets.
          </p>

        </div>

        <div className="did-grid">

          <div className="did-card">
            <span>🔥</span>
            <h3>Hottest Planet</h3>
            <p>
              Venus is hotter than Mercury because of its
              powerful greenhouse effect.
            </p>
          </div>

          <div className="did-card">
            <span>☁</span>
            <h3>Acid Clouds</h3>
            <p>
              Its atmosphere contains clouds made mostly
              of sulfuric acid.
            </p>
          </div>

          <div className="did-card">
            <span>🔄</span>
            <h3>Backward Rotation</h3>
            <p>
              Venus spins in the opposite direction compared
              with most planets.
            </p>
          </div>

          <div className="did-card">
            <span>⏳</span>
            <h3>Long Day</h3>
            <p>
              One day on Venus lasts longer than one year
              on Venus.
            </p>
          </div>

        </div>

      </section>

      <section className="next-planets">

        <div className="section-header">

          <span>KEEP EXPLORING</span>

          <h2>Explore Other Planets</h2>

          <p>
            Continue exploring the amazing worlds of our
            Solar System.
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

            <img src={MarsImg} alt="Mars" />

            <h3>Mars</h3>

            <p>The famous Red Planet.</p>

            <NavLink to="/planets/mars">
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

        </div>

      </section>

      <section className="faq-section">

        <div className="section-header">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find quick answers to common questions about
            Venus.
          </p>

        </div>

        <div className="faq-container">

          <details>

            <summary>Why is Venus the hottest planet?</summary>

            <p>
              Its thick carbon dioxide atmosphere traps heat
              through a powerful greenhouse effect.
            </p>

          </details>

          <details>

            <summary>Does Venus have any moons?</summary>

            <p>
              No. Venus has no natural satellites.
            </p>

          </details>

          <details>

            <summary>Why does Venus rotate backwards?</summary>

            <p>
              Scientists believe a massive collision early
              in its history may have changed its rotation.
            </p>

          </details>

          <details>

            <summary>Can humans live on Venus?</summary>

            <p>
              No. Extreme temperatures and atmospheric
              pressure make it impossible for humans.
            </p>

          </details>

        </div>

      </section>

      <Footer />
</div>
    </>
  );
}

export default Venus;