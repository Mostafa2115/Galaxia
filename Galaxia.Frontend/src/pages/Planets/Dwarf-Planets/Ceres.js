import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Ceres.css";

import CeresImg from "../../../assets/planets/Ceres.jpg";
import Cerespng from "../../../assets/Ceres/Cerespng.png";
import CeresColor from "../../../assets/Ceres/Ceres1.jpg";
import Ceres2 from "../../../assets/Ceres/Ceres2.jpg";
import Ceres3 from "../../../assets/Ceres/Ceres3.jpg";

import MarsImg from "../../../assets/planets/Mars.jpg";
import PlutoImg from "../../../assets/planets/Pluto.jpg";
import MakemakeImg from "../../../assets/planets/Makemake.jpg";

import { NavLink } from "react-router-dom";

function Ceres() {
  return (
    <>
      <Navbar />

      <div className="ceres-page">

        {/* ================= HERO ================= */}

        <section className="ceres-hero">

          <img
            src={CeresImg}
            alt="Ceres"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              DWARF PLANET
            </span>

            <h1>Ceres</h1>

            <p>
              Ceres is the largest object in the Asteroid
              Belt between Mars and Jupiter and the only
              dwarf planet located in the inner Solar
              System. It is believed to contain large
              amounts of water ice beneath its surface.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Ceres
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Ceres Overview</h2>

          <p>
            Basic information about the largest body in the
            Asteroid Belt.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>939 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>9.39 × 10²⁰ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.27 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-105°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>9.1 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>4.6 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Cerespng}
              alt="Ceres"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE DWARF PLANET</span>

            <h2>The Largest Object in the Asteroid Belt</h2>

            <p>
              Ceres is the largest object in the Asteroid
              Belt located between Mars and Jupiter. It was
              discovered in 1801 by the Italian astronomer
              Giuseppe Piazzi and is the only dwarf planet
              found within the inner Solar System.
            </p>

            <p>
              Unlike most asteroids, Ceres is massive enough
              for its gravity to pull it into a nearly
              spherical shape. Scientists believe it contains
              large amounts of water ice beneath its crust,
              making it one of the most intriguing objects
              in the Asteroid Belt.
            </p>

            <p>
              Observations from NASA's Dawn spacecraft
              revealed mysterious bright deposits inside
              several craters, believed to be made of
              sodium carbonate and other salts left behind
              by ancient underground brines.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Ceres is far more than a giant asteroid. It is
              a fascinating dwarf planet with evidence of
              water, ancient geological activity and
              mysterious bright spots.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">💧</div>

              <h3>Water Ice</h3>

              <p>
                Scientists believe Ceres contains enormous
                amounts of water ice beneath its surface,
                possibly more fresh water than exists on
                Earth.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">✨</div>

              <h3>Bright Spots</h3>

              <p>
                The famous bright spots inside Occator
                Crater are made mainly of reflective salt
                deposits left by underground briny water.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🚀</div>

              <h3>Dawn Mission</h3>

              <p>
                NASA's Dawn spacecraft became the first
                mission to orbit Ceres, revealing its
                geology, craters and hidden ice deposits.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌑</div>

              <h3>Asteroid Belt</h3>

              <p>
                Ceres is the largest object in the Asteroid
                Belt and contains about one-third of the
                belt's total mass.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Ceres</h2>

            <p>
              Scientists believe Ceres has a rocky core
              surrounded by a thick layer of water ice and
              hydrated minerals. Evidence suggests that
              beneath its crust there may have once been a
              subsurface ocean of salty liquid water,
              making Ceres one of the most interesting
              worlds in the inner Solar System.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Rocky Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "65%" }}
                  ></div>

                </div>

                <span>65%</span>

              </div>

              <div className="bar">

                <h4>Water Ice Mantle</h4>

                <div className="progress">

                  <div
                    className="mantle"
                    style={{ width: "28%" }}
                  ></div>

                </div>

                <span>28%</span>

              </div>

              <div className="bar">

                <h4>Surface Crust</h4>

                <div className="progress">

                  <div
                    className="crust"
                    style={{ width: "7%" }}
                  ></div>

                </div>

                <span>7%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Cerespng}
              alt="Ceres Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>DISCOVERY & EXPLORATION</span>

            <h2>Exploring Ceres</h2>

            <p>
              Ceres is the only dwarf planet that has been
              explored by a spacecraft in orbit. NASA's
              Dawn mission revealed evidence of water ice,
              mysterious bright salt deposits and signs of
              ancient geological activity.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1801
              </span>

              <h3>Discovery</h3>

              <p>
                Giuseppe Piazzi discovered Ceres on
                January 1, 1801, making it the first object
                identified within the Asteroid Belt.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2015
              </span>

              <h3>Dawn Mission</h3>

              <p>
                NASA's Dawn spacecraft entered orbit around
                Ceres, becoming the first mission to orbit
                a dwarf planet and map its surface in
                remarkable detail.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                Present
              </span>

              <h3>Scientific Research</h3>

              <p>
                Scientists continue analyzing Dawn's data,
                studying Ceres' underground ice, bright
                salt deposits and the possibility of an
                ancient subsurface ocean.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Ceres Gallery</h2>

            <p>
              Explore remarkable images of Ceres captured by
              NASA's Dawn spacecraft, revealing craters,
              mysterious bright spots and the unique surface
              of the largest object in the Asteroid Belt.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={CeresImg} alt="Ceres" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Ceres2} alt="Ceres" />

              <div className="gallery-overlay">

                <h3>Occator Crater</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={CeresColor} alt="Ceres" />

              <div className="gallery-overlay">

                <h3>Enhanced Color View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Ceres3} alt="Ceres" />

              <div className="gallery-overlay">

                <h3>Dawn Spacecraft Image</h3>

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
              Ceres is the only dwarf planet in the inner
              Solar System and continues to surprise
              scientists with evidence of water and
              geological activity.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>💧</span>

              <h3>Water Rich</h3>

              <p>
                Ceres may contain more fresh water than
                all the freshwater found on Earth,
                locked beneath its icy surface.
              </p>

            </div>

            <div className="did-card">

              <span>✨</span>

              <h3>Bright Salt Deposits</h3>

              <p>
                The famous bright spots inside Occator
                Crater are made mostly of sodium-rich
                salts left behind by underground brines.
              </p>

            </div>

            <div className="did-card">

              <span>🚀</span>

              <h3>Dawn Explorer</h3>

              <p>
                Ceres became the first dwarf planet ever
                visited and orbited by a spacecraft when
                NASA's Dawn mission arrived in 2015.
              </p>

            </div>

            <div className="did-card">

              <span>🌑</span>

              <h3>Asteroid Belt Giant</h3>

              <p>
                Ceres contains roughly one-third of the
                total mass of the entire Asteroid Belt.
              </p>

            </div>

          </div>

        </section>
                {/* ================= NEXT DWARF PLANETS ================= */}

        <section className="next-planets">

          <div className="section-header">

            <span>KEEP EXPLORING</span>

            <h2>Explore Other Dwarf Planets</h2>

            <p>
              Continue exploring the fascinating dwarf
              planets of our Solar System and discover
              the icy worlds beyond Neptune.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={PlutoImg} alt="Pluto" />

              <h3>Pluto</h3>

              <p>
                Discover the famous dwarf planet with its
                icy mountains and heart-shaped region.
              </p>

              <NavLink to="/planets/pluto">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={MakemakeImg} alt="Makemake" />

              <h3>Makemake</h3>

              <p>
                Explore the distant icy world located in
                the Kuiper Belt.
              </p>

              <NavLink to="/planets/makemake">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={MarsImg} alt="Mars" />

              <h3>Mars</h3>

              <p>
                Return to the Red Planet and compare it
                with the largest body in the Asteroid Belt.
              </p>

              <NavLink to="/planets/mars">
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
              Learn more about Ceres, the largest object
              in the Asteroid Belt.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Is Ceres a planet or an asteroid?
              </summary>

              <p>
                Ceres is officially classified as a dwarf
                planet. It is also the largest object in
                the Asteroid Belt between Mars and Jupiter.
              </p>

            </details>

            <details>

              <summary>
                Why are the bright spots on Ceres so famous?
              </summary>

              <p>
                They are bright salt deposits inside
                Occator Crater, created when salty water
                from beneath the surface reached the top
                and evaporated.
              </p>

            </details>

            <details>

              <summary>
                Has Ceres been explored by a spacecraft?
              </summary>

              <p>
                Yes. NASA's Dawn spacecraft orbited Ceres
                from 2015 to 2018, sending back thousands
                of images and scientific measurements.
              </p>

            </details>

            <details>

              <summary>
                Could Ceres contain liquid water?
              </summary>

              <p>
                Evidence suggests that Ceres may still
                contain salty liquid reservoirs beneath
                its icy crust, making it an important
                target for future exploration.
              </p>

            </details>

          </div>

        </section>

      </div>

      <Footer />

    </>

  );

}

export default Ceres;