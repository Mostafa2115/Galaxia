import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Eris.css";

import ErisImg from "../../../assets/planets/Eris.jpg";
import Erispng from "../../../assets/Eris/Erispng.png";
import ErisColor from "../../../assets/Eris/Eris1.jpg";
import Eris2 from "../../../assets/Eris/Eris2.jpg";
import Eris3 from "../../../assets/Eris/Eris3.jpg";

import HaumeaImg from "../../../assets/planets/Haumea.jpg";
import MakemakeImg from "../../../assets/planets/Makemake.jpg";
import PlutoImg from "../../../assets/planets/Pluto.jpg";

import { NavLink } from "react-router-dom";

function Eris() {
  return (
    <>
      <Navbar />

      <div className="eris-page">

        {/* ================= HERO ================= */}

        <section className="eris-hero">

          <img
            src={ErisImg}
            alt="Eris"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              DWARF PLANET
            </span>

            <h1>Eris</h1>

            <p>
              Eris is one of the most massive dwarf planets
              in the Solar System. Its discovery in 2005
              challenged the definition of a planet and
              ultimately led to Pluto being reclassified as
              a dwarf planet.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Eris
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Eris Overview</h2>

          <p>
            Basic information about one of the most massive
            dwarf planets beyond Neptune.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>2,326 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.66 × 10²² kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>0.82 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-231°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>25.9 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>558 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Erispng}
              alt="Eris"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE DWARF PLANET</span>

            <h2>The World That Changed Astronomy</h2>

            <p>
              Eris is one of the largest and most massive
              dwarf planets in the Solar System. It orbits
              far beyond Neptune in a region known as the
              scattered disk, where many icy objects travel
              in highly elongated orbits.
            </p>

            <p>
              Discovered in 2005, Eris appeared to be as
              large as—or even larger than—Pluto. This
              discovery sparked an international debate
              among astronomers and eventually led to a new
              definition of the term "planet" in 2006.
            </p>

            <p>
              Although Eris is incredibly distant and cold,
              its surface reflects a large amount of
              sunlight because it is covered with bright
              methane ice, making it one of the most
              reflective objects in the outer Solar System.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Eris is a distant frozen world that played a
              major role in changing our understanding of
              the Solar System.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">📚</div>

              <h3>Changed Planet Definition</h3>

              <p>
                The discovery of Eris led astronomers to
                redefine what qualifies as a planet, which
                resulted in Pluto being classified as a
                dwarf planet.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>Dysnomia</h3>

              <p>
                Eris has one known moon called Dysnomia.
                Observations of its orbit helped scientists
                accurately calculate the mass of Eris.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🧊</div>

              <h3>Frozen Surface</h3>

              <p>
                Methane frost covers much of Eris, creating
                an extremely bright and reflective icy
                surface.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🛰️</div>

              <h3>Extremely Distant</h3>

              <p>
                Eris travels hundreds of astronomical units
                from the Sun during its long orbit, making
                it one of the most distant known dwarf
                planets.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Eris</h2>

            <p>
              Scientists believe Eris has a dense rocky
              core surrounded by a thick mantle of water
              ice. Its surface is coated with frozen
              methane, creating one of the brightest and
              most reflective surfaces among dwarf planets.
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
                    style={{ width: "24%" }}
                  ></div>

                </div>

                <span>24%</span>

              </div>

              <div className="bar">

                <h4>Methane Ice Surface</h4>

                <div className="progress">

                  <div
                    className="crust"
                    style={{ width: "6%" }}
                  ></div>

                </div>

                <span>6%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Erispng}
              alt="Eris Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>DISCOVERY & EXPLORATION</span>

            <h2>Exploring Eris</h2>

            <p>
              Eris has never been visited by a spacecraft.
              Everything we know about this distant dwarf
              planet comes from advanced telescopes and
              astronomical observations.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                2005
              </span>

              <h3>Discovery</h3>

              <p>
                Eris was discovered by a team led by
                astronomer Michael E. Brown using the
                Samuel Oschin Telescope at Palomar
                Observatory.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2006
              </span>

              <h3>IAU Decision</h3>

              <p>
                Following the discovery of Eris, the
                International Astronomical Union introduced
                a new definition of a planet, officially
                classifying both Eris and Pluto as dwarf
                planets.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Missions</h3>

              <p>
                Scientists hope that future deep-space
                missions will one day explore Eris and
                provide the first close-up observations
                of this remarkable icy world.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Eris Gallery</h2>

            <p>
              Explore artistic illustrations and telescope
              observations of Eris, one of the most distant
              and massive dwarf planets in our Solar System.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={ErisImg} alt="Eris" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Eris2} alt="Eris" />

              <div className="gallery-overlay">

                <h3>Artist's Impression</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={ErisColor} alt="Eris" />

              <div className="gallery-overlay">

                <h3>Enhanced Color View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Eris3} alt="Eris" />

              <div className="gallery-overlay">

                <h3>Distant Frozen World</h3>

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
              Eris is one of the most important discoveries
              in modern astronomy because it changed the way
              we classify planets.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>📚</span>

              <h3>Changed Astronomy</h3>

              <p>
                The discovery of Eris directly influenced
                the International Astronomical Union's
                decision to redefine the term "planet."
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>Dysnomia</h3>

              <p>
                Eris has one known moon named Dysnomia,
                which orbits the dwarf planet once every
                sixteen days.
              </p>

            </div>

            <div className="did-card">

              <span>❄️</span>

              <h3>Bright Surface</h3>

              <p>
                Fresh methane frost makes Eris one of the
                brightest objects in the outer Solar System.
              </p>

            </div>

            <div className="did-card">

              <span>☀️</span>

              <h3>Longest Year</h3>

              <p>
                One year on Eris lasts about
                558 Earth years because of its extremely
                distant orbit around the Sun.
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
              Continue your adventure through the distant
              reaches of the Solar System and discover the
              fascinating dwarf planets beyond Neptune.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={PlutoImg} alt="Pluto" />

              <h3>Pluto</h3>

              <p>
                Explore the famous dwarf planet with its
                icy mountains and heart-shaped plains.
              </p>

              <NavLink to="/planets/pluto">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={HaumeaImg} alt="Haumea" />

              <h3>Haumea</h3>

              <p>
                Discover the rapidly spinning dwarf planet
                with its unique elongated shape and ring.
              </p>

              <NavLink to="/planets/haumea">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={MakemakeImg} alt="Makemake" />

              <h3>Makemake</h3>

              <p>
                Visit the bright icy dwarf planet located
                deep within the Kuiper Belt.
              </p>

              <NavLink to="/planets/makemake">
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
              Learn more about Eris and why it is one of the
              most important discoveries in modern astronomy.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why is Eris important?
              </summary>

              <p>
                The discovery of Eris led astronomers to
                redefine the term "planet," resulting in
                Pluto's reclassification as a dwarf planet.
              </p>

            </details>

            <details>

              <summary>
                Does Eris have any moons?
              </summary>

              <p>
                Yes. Eris has one known moon called
                Dysnomia, which helped scientists determine
                the mass of Eris.
              </p>

            </details>

            <details>

              <summary>
                Has Eris been explored by a spacecraft?
              </summary>

              <p>
                No. No spacecraft has visited Eris.
                Everything we know comes from telescope
                observations.
              </p>

            </details>

            <details>

              <summary>
                How long is a year on Eris?
              </summary>

              <p>
                One orbit around the Sun takes about
                558 Earth years because of Eris's very
                distant and elongated orbit.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Eris;