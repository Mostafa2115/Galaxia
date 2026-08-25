import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Pluto.css";

import PlutoImg from "../../../assets/planets/Pluto.jpg";
import Plutopng from "../../../assets/Pluto/Plutopng.png";
import PlutoColor from "../../../assets/Pluto/Pluto1.jpg";
import Pluto2 from "../../../assets/Pluto/Pluto2.jpg";
import Pluto3 from "../../../assets/Pluto/Pluto3.jpg";

import NeptuneImg from "../../../assets/planets/Neptune.jpg";
import CeresImg from "../../../assets/planets/Ceres.jpg";
import HaumeaImg from "../../../assets/planets/Haumea.jpg";

import { NavLink } from "react-router-dom";

function Pluto() {
  return (
    <>
      <Navbar />

      <div className="pluto-page">

        {/* ================= HERO ================= */}

        <section className="pluto-hero">

          <img
            src={PlutoImg}
            alt="Pluto"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              DWARF PLANET
            </span>

            <h1>Pluto</h1>

            <p>
              Pluto is the most famous dwarf planet in our
              Solar System. Located in the distant Kuiper
              Belt, it is a cold, icy world with mountains,
              glaciers and a surprisingly complex surface
              discovered by NASA's New Horizons mission.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Pluto
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Pluto Overview</h2>

          <p>
            Basic information about the most famous dwarf
            planet in the Solar System.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>2,377 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.31 × 10²² kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.62 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-229°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>6.4 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>248 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Plutopng}
              alt="Pluto"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE DWARF PLANET</span>

            <h2>The King of the Kuiper Belt</h2>

            <p>
              Pluto is a dwarf planet located in the Kuiper
              Belt, a vast region of icy objects beyond the
              orbit of Neptune. It was discovered in 1930
              by Clyde Tombaugh and remained the ninth
              planet until its reclassification in 2006.
            </p>

            <p>
              Although much smaller than Earth's Moon,
              Pluto has an incredibly diverse landscape
              featuring icy plains, rugged mountains,
              frozen valleys and possible cryovolcanoes.
            </p>

            <p>
              Pluto's thin atmosphere is mainly composed of
              nitrogen, with traces of methane and carbon
              monoxide. As Pluto moves farther from the Sun,
              much of its atmosphere freezes onto the
              surface.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Pluto continues to surprise scientists with
              its complex geology and fascinating icy
              landscape.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">❤️</div>

              <h3>Tombaugh Regio</h3>

              <p>
                Pluto's famous heart-shaped region is called
                Tombaugh Regio, named after its discoverer,
                Clyde Tombaugh.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>Charon</h3>

              <p>
                Pluto's largest moon, Charon, is so large
                compared with Pluto that the two bodies are
                often considered a double dwarf planet
                system.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">❄️</div>

              <h3>Icy Mountains</h3>

              <p>
                Pluto has mountains made primarily of water
                ice that can rise more than 3 kilometers
                above the surrounding plains.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🛰️</div>

              <h3>New Horizons</h3>

              <p>
                NASA's New Horizons spacecraft became the
                first mission to fly past Pluto in 2015,
                revealing an active and surprisingly
                complex world.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Pluto</h2>

            <p>
              Scientists believe Pluto has a rocky core
              surrounded by a thick mantle of water ice.
              Beneath its frozen surface there may even be
              a hidden subsurface ocean of liquid water,
              although this is still being investigated.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Rocky Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "70%" }}
                  ></div>

                </div>

                <span>70%</span>

              </div>

              <div className="bar">

                <h4>Water Ice Mantle</h4>

                <div className="progress">

                  <div
                    className="mantle"
                    style={{ width: "25%" }}
                  ></div>

                </div>

                <span>25%</span>

              </div>

              <div className="bar">

                <h4>Surface Ice</h4>

                <div className="progress">

                  <div
                    className="crust"
                    style={{ width: "5%" }}
                  ></div>

                </div>

                <span>5%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Plutopng}
              alt="Pluto Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>SPACE MISSIONS</span>

            <h2>Pluto Exploration</h2>

            <p>
              Pluto remained unexplored for decades until
              NASA's historic New Horizons mission revealed
              this distant world in extraordinary detail.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1930
              </span>

              <h3>Discovery of Pluto</h3>

              <p>
                Clyde Tombaugh discovered Pluto at Lowell
                Observatory, making it the ninth known
                planet of the Solar System at the time.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2006
              </span>

              <h3>New Horizons Launch</h3>

              <p>
                NASA launched the New Horizons spacecraft
                on a journey of nearly 5 billion kilometers
                toward Pluto.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2015
              </span>

              <h3>Historic Flyby</h3>

              <p>
                New Horizons became the first spacecraft to
                visit Pluto, capturing breathtaking images
                and transforming our understanding of this
                distant dwarf planet.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Pluto Gallery</h2>

            <p>
              Explore incredible images of Pluto captured
              by NASA's New Horizons mission, revealing
              mountains, glaciers and frozen plains unlike
              anything expected before 2015.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={PlutoImg} alt="Pluto" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Pluto2} alt="Pluto" />

              <div className="gallery-overlay">

                <h3>Tombaugh Regio</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={PlutoColor} alt="Pluto" />

              <div className="gallery-overlay">

                <h3>Color Enhanced View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Pluto3} alt="Pluto" />

              <div className="gallery-overlay">

                <h3>Surface Details</h3>

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
              Pluto may be small, but it is one of the most
              fascinating and scientifically important
              objects in the Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>❤️</span>

              <h3>Heart-Shaped Region</h3>

              <p>
                Pluto's bright heart-shaped region,
                Tombaugh Regio, has become one of the most
                recognizable landscapes in the Solar System.
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>Five Known Moons</h3>

              <p>
                Pluto has five known moons: Charon, Nix,
                Hydra, Kerberos and Styx.
              </p>

            </div>

            <div className="did-card">

              <span>🧊</span>

              <h3>Frozen World</h3>

              <p>
                Its surface is covered with nitrogen,
                methane and carbon monoxide ice, creating
                spectacular frozen landscapes.
              </p>

            </div>

            <div className="did-card">

              <span>🚀</span>

              <h3>First Close Visit</h3>

              <p>
                New Horizons flew past Pluto in July 2015,
                providing humanity with the first detailed
                images of this distant world.
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
              Continue your journey through the Kuiper Belt
              and beyond by exploring the fascinating dwarf
              planets of our Solar System.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={NeptuneImg} alt="Neptune" />

              <h3>Neptune</h3>

              <p>
                Return to the last major planet before the
                distant Kuiper Belt.
              </p>

              <NavLink to="/planets/neptune">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={CeresImg} alt="Ceres" />

              <h3>Ceres</h3>

              <p>
                Visit the largest object in the asteroid belt
                between Mars and Jupiter.
              </p>

              <NavLink to="/planets/ceres">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={HaumeaImg} alt="Haumea" />

              <h3>Haumea</h3>

              <p>
                Discover the fast-spinning dwarf planet with
                its unusual elongated shape.
              </p>

              <NavLink to="/planets/haumea">
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
              Learn more about Pluto and why it continues to
              fascinate scientists around the world.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why is Pluto no longer considered a planet?
              </summary>

              <p>
                In 2006, the International Astronomical Union
                reclassified Pluto as a dwarf planet because
                it does not clear the neighborhood around
                its orbit.
              </p>

            </details>

            <details>

              <summary>
                How many moons does Pluto have?
              </summary>

              <p>
                Pluto has five known moons: Charon, Nix,
                Hydra, Kerberos and Styx.
              </p>

            </details>

            <details>

              <summary>
                Can humans live on Pluto?
              </summary>

              <p>
                No. Pluto is an extremely cold world with a
                very thin atmosphere and temperatures far
                below anything humans could survive.
              </p>

            </details>

            <details>

              <summary>
                Which spacecraft explored Pluto?
              </summary>

              <p>
                NASA's New Horizons spacecraft became the
                first mission to explore Pluto during its
                historic flyby in July 2015.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Pluto;