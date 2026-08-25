import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Uranus.css";

import UranusImg from "../../../assets/planets/Uranus.jpg";
import Uranuspng from "../../../assets/Uranus/Uranuspng.png";
import UranusColor from "../../../assets/Uranus/Uranus1.jpg";
import Uranus2 from "../../../assets/Uranus/Uranus2.jpg";
import Uranus3 from "../../../assets/Uranus/Uranus3.jpg";

import SaturnImg from "../../../assets/planets/Saturn.jpg";
import NeptuneImg from "../../../assets/planets/Neptune.jpg";
import JupiterImg from "../../../assets/planets/Jupiter.jpg";

import { NavLink } from "react-router-dom";

function Uranus() {
  return (
    <>
      <Navbar />

      <div className="uranus-page">

        {/* ================= HERO ================= */}

        <section className="uranus-hero">

          <img
            src={UranusImg}
            alt="Uranus"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              PLANET 7
            </span>

            <h1>Uranus</h1>

            <p>
              Uranus is the seventh planet from the Sun and
              the first planet discovered using a telescope.
              This icy giant is famous for rotating on its
              side, making it one of the most unusual worlds
              in the Solar System.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Uranus
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Uranus Overview</h2>

          <p>
            Basic information about the mysterious ice giant.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>50,724 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>8.68 × 10²⁵ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>8.69 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-224°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>17.2 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>84 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Uranuspng}
              alt="Uranus"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE PLANET</span>

            <h2>The Sideways Ice Giant</h2>

            <p>
              Uranus is the seventh planet from the Sun and
              the third-largest planet in the Solar System.
              It belongs to a special class of planets known
              as ice giants because much of its interior is
              made of water, ammonia and methane ices.
            </p>

            <p>
              Uranus is unique because its rotation axis is
              tilted by about 98 degrees. Instead of spinning
              upright like most planets, it rotates almost
              completely on its side.
            </p>

            <p>
              Methane gas in Uranus' upper atmosphere absorbs
              red light and reflects blue-green wavelengths,
              giving the planet its beautiful cyan color.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Uranus is one of the strangest and coldest
              planets ever discovered.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">🔄</div>

              <h3>Rotates Sideways</h3>

              <p>
                Uranus rotates on its side, making its
                seasons unlike those of any other planet.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">❄️</div>

              <h3>Coldest Planet</h3>

              <p>
                Uranus has the coldest atmosphere in the
                Solar System, reaching temperatures below
                -224°C.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">💍</div>

              <h3>Dark Rings</h3>

              <p>
                Uranus has 13 known rings that are much
                darker and fainter than Saturn's rings.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>27 Moons</h3>

              <p>
                Uranus has 27 known moons, many of which
                are named after characters from the works
                of Shakespeare and Alexander Pope.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Uranus</h2>

            <p>
              Uranus has a small rocky core surrounded by
              a thick icy mantle made of water, ammonia and
              methane. Above this layer lies a deep
              atmosphere of hydrogen and helium with traces
              of methane that give Uranus its blue color.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Rocky Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "18%" }}
                  ></div>

                </div>

                <span>18%</span>

              </div>

              <div className="bar">

                <h4>Icy Mantle</h4>

                <div className="progress">

                  <div
                    className="mantle"
                    style={{ width: "67%" }}
                  ></div>

                </div>

                <span>67%</span>

              </div>

              <div className="bar">

                <h4>Atmosphere</h4>

                <div className="progress">

                  <div
                    className="crust"
                    style={{ width: "15%" }}
                  ></div>

                </div>

                <span>15%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Uranuspng}
              alt="Uranus Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>SPACE MISSIONS</span>

            <h2>Uranus Exploration Missions</h2>

            <p>
              Uranus has been visited by only one spacecraft,
              making it one of the least explored planets
              in our Solar System.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1977
              </span>

              <h3>Voyager Program</h3>

              <p>
                NASA's Voyager spacecraft began its historic
                journey to explore the outer planets,
                eventually reaching Uranus.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                1986
              </span>

              <h3>Voyager 2 Flyby</h3>

              <p>
                Voyager 2 became the first and only spacecraft
                to fly past Uranus, discovering new moons,
                rings and important details about its
                atmosphere and magnetic field.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Orbiter</h3>

              <p>
                Scientists hope to send a dedicated Uranus
                orbiter in the coming decades to study this
                mysterious ice giant in much greater detail.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Uranus Gallery</h2>

            <p>
              Explore beautiful images of Uranus, its pale
              blue atmosphere, faint rings and mysterious
              appearance captured during space exploration.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={UranusImg} alt="Uranus" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Uranus2} alt="Uranus" />

              <div className="gallery-overlay">

                <h3>Blue Atmosphere</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={UranusColor} alt="Uranus" />

              <div className="gallery-overlay">

                <h3>False Color Image</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Uranus3} alt="Uranus" />

              <div className="gallery-overlay">

                <h3>Voyager 2 View</h3>

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
              Uranus is one of the most unusual planets ever
              discovered, with unique characteristics unlike
              any other world.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🔄</span>

              <h3>Sideways Rotation</h3>

              <p>
                Uranus rotates at an angle of about
                98 degrees, making it appear to roll
                around the Sun.
              </p>

            </div>

            <div className="did-card">

              <span>💍</span>

              <h3>Hidden Rings</h3>

              <p>
                Uranus has a system of thin, dark rings
                that are much fainter than Saturn's.
              </p>

            </div>

            <div className="did-card">

              <span>❄️</span>

              <h3>Extreme Cold</h3>

              <p>
                Uranus has the coldest atmosphere of
                any planet in the Solar System.
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>27 Known Moons</h3>

              <p>
                Its moons are named after literary
                characters from Shakespeare's plays
                and Alexander Pope's poems.
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
              Continue exploring the outer Solar System and
              discover even more fascinating worlds.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={SaturnImg} alt="Saturn" />

              <h3>Saturn</h3>

              <p>
                Explore the magnificent ringed giant and
                its incredible moon Titan.
              </p>

              <NavLink to="/planets/saturn">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={NeptuneImg} alt="Neptune" />

              <h3>Neptune</h3>

              <p>
                Visit the distant blue giant with the
                fastest winds in the Solar System.
              </p>

              <NavLink to="/planets/neptune">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={JupiterImg} alt="Jupiter" />

              <h3>Jupiter</h3>

              <p>
                Return to the largest planet and discover
                its giant storms and dozens of moons.
              </p>

              <NavLink to="/planets/jupiter">
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
              Find answers to common questions about
              Uranus.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why does Uranus rotate on its side?
              </summary>

              <p>
                Scientists believe a massive collision early
                in the planet's history may have knocked it
                over, causing its extreme axial tilt.
              </p>

            </details>

            <details>

              <summary>
                Why is Uranus blue?
              </summary>

              <p>
                Methane in the upper atmosphere absorbs red
                light and reflects blue-green wavelengths,
                giving Uranus its distinctive color.
              </p>

            </details>

            <details>

              <summary>
                Does Uranus have rings?
              </summary>

              <p>
                Yes. Uranus has 13 known dark and narrow
                rings that were discovered in 1977.
              </p>

            </details>

            <details>

              <summary>
                Has anyone landed on Uranus?
              </summary>

              <p>
                No. No spacecraft has landed on Uranus.
                Voyager 2 remains the only spacecraft to
                have visited the planet.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Uranus;