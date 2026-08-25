import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Makemake.css";

import MakemakeImg from "../../../assets/planets/Makemake.jpg";
import Makemakepng from "../../../assets/Makemake/Makemakepng.png";
import MakemakeColor from "../../../assets/Makemake/Makemake1.jpg";
import Makemake2 from "../../../assets/Makemake/Makemake2.jpg";
import Makemake3 from "../../../assets/Makemake/Makemake3.jpg";

import HaumeaImg from "../../../assets/planets/Haumea.jpg";
import ErisImg from "../../../assets/planets/Eris.jpg";
import PlutoImg from "../../../assets/planets/Pluto.jpg";

import { NavLink } from "react-router-dom";

function Makemake() {
  return (
    <>
      <Navbar />

      <div className="makemake-page">

        {/* ================= HERO ================= */}

        <section className="makemake-hero">

          <img
            src={MakemakeImg}
            alt="Makemake"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              DWARF PLANET
            </span>

            <h1>Makemake</h1>

            <p>
              Makemake is one of the largest dwarf planets
              in the Kuiper Belt. It is an icy world beyond
              Neptune with an extremely cold surface and a
              thin atmosphere that appears only when it
              approaches the Sun.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Makemake
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Makemake Overview</h2>

          <p>
            Basic information about one of the largest
            dwarf planets in the Kuiper Belt.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>1,430 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>≈3.1 × 10²¹ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>≈0.5 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-239°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>22.8 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>305 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Makemakepng}
              alt="Makemake"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE DWARF PLANET</span>

            <h2>An Icy World Beyond Neptune</h2>

            <p>
              Makemake is one of the five officially
              recognized dwarf planets in our Solar System.
              It orbits the Sun far beyond Neptune within
              the Kuiper Belt, a region filled with icy
              bodies left over from the formation of the
              Solar System.
            </p>

            <p>
              Discovered in 2005, Makemake is named after
              the creator deity of the Rapa Nui people of
              Easter Island. Its surface is covered with
              frozen methane, ethane and nitrogen ice,
              making it one of the brightest objects in the
              Kuiper Belt.
            </p>

            <p>
              Because Makemake is so far from the Sun, it
              receives only a tiny fraction of the sunlight
              that reaches Earth, keeping its surface at
              extremely low temperatures throughout its
              long journey around the Sun.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Makemake is one of the brightest and most
              mysterious dwarf planets ever discovered in
              the distant Kuiper Belt.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">🧊</div>

              <h3>Frozen Surface</h3>

              <p>
                Makemake's surface is covered with methane,
                ethane and nitrogen ice, giving it a bright
                reflective appearance.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">☀️</div>

              <h3>305-Year Orbit</h3>

              <p>
                It takes approximately 305 Earth years to
                complete one orbit around the Sun.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>Tiny Moon</h3>

              <p>
                Makemake has one known natural satellite,
                discovered in 2016, helping scientists
                estimate its mass more accurately.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">❄️</div>

              <h3>Extreme Cold</h3>

              <p>
                Surface temperatures can fall below
                -239°C, making Makemake one of the coldest
                worlds in the Solar System.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Makemake</h2>

            <p>
              Scientists believe Makemake has a dense rocky
              core surrounded by a thick mantle of frozen
              water ice. Its outer surface is coated with
              methane, ethane and traces of nitrogen ice,
              creating one of the brightest surfaces in the
              Kuiper Belt.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Rocky Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "68%" }}
                  ></div>

                </div>

                <span>68%</span>

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
                    style={{ width: "7%" }}
                  ></div>

                </div>

                <span>7%</span>

              </div>

            </div>

          </div>

          <div className="structure-right">

            <img
              src={Makemakepng}
              alt="Makemake Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>DISCOVERY & EXPLORATION</span>

            <h2>Exploring Makemake</h2>

            <p>
              Unlike Pluto, Makemake has never been visited
              by a spacecraft. Most of what we know comes
              from powerful telescopes and observations
              made from Earth and space.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                2005
              </span>

              <h3>Discovery</h3>

              <p>
                Makemake was discovered by a team led by
                astronomer Michael E. Brown using the
                Samuel Oschin Telescope at Palomar
                Observatory.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2008
              </span>

              <h3>Dwarf Planet Status</h3>

              <p>
                The International Astronomical Union
                officially classified Makemake as a
                dwarf planet, making it one of the five
                recognized dwarf planets.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Exploration</h3>

              <p>
                Scientists hope that future deep-space
                missions will one day explore Makemake
                and reveal the secrets of this distant
                icy world.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Makemake Gallery</h2>

            <p>
              Explore artistic renderings and telescope
              observations of Makemake, one of the brightest
              dwarf planets in the distant Kuiper Belt.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={MakemakeImg} alt="Makemake" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Makemake2} alt="Makemake" />

              <div className="gallery-overlay">

                <h3>Surface Rendering</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={MakemakeColor} alt="Makemake" />

              <div className="gallery-overlay">

                <h3>Enhanced Color View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Makemake3} alt="Makemake" />

              <div className="gallery-overlay">

                <h3>Kuiper Belt Object</h3>

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
              Makemake is one of the most distant and
              mysterious members of our Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🧊</span>

              <h3>Highly Reflective</h3>

              <p>
                Makemake reflects a large amount of sunlight
                because its frozen surface is covered with
                bright methane ice.
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>One Moon</h3>

              <p>
                Makemake has one confirmed moon,
                nicknamed MK2, discovered in 2016.
              </p>

            </div>

            <div className="did-card">

              <span>❄️</span>

              <h3>Almost No Atmosphere</h3>

              <p>
                Scientists believe Makemake has either a
                very thin temporary atmosphere or almost
                none at all for most of its orbit.
              </p>

            </div>

            <div className="did-card">

              <span>☀️</span>

              <h3>Very Long Year</h3>

              <p>
                One year on Makemake lasts about
                305 Earth years because of its enormous
                distance from the Sun.
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
              Continue exploring the distant icy worlds of
              the Kuiper Belt and discover other fascinating
              dwarf planets.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={PlutoImg} alt="Pluto" />

              <h3>Pluto</h3>

              <p>
                Discover the most famous dwarf planet and
                its spectacular heart-shaped region.
              </p>

              <NavLink to="/planets/pluto">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={HaumeaImg} alt="Haumea" />

              <h3>Haumea</h3>

              <p>
                Visit the fast-spinning dwarf planet with
                its unusual elongated shape.
              </p>

              <NavLink to="/planets/haumea">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={ErisImg} alt="Eris" />

              <h3>Eris</h3>

              <p>
                Explore one of the most massive dwarf
                planets in the Solar System.
              </p>

              <NavLink to="/planets/eris">
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
              Learn more about Makemake and its place in
              the distant Kuiper Belt.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                What is Makemake?
              </summary>

              <p>
                Makemake is one of the five officially
                recognized dwarf planets in our Solar
                System and is located in the Kuiper Belt.
              </p>

            </details>

            <details>

              <summary>
                Why is Makemake so cold?
              </summary>

              <p>
                Because it orbits very far from the Sun,
                receiving only a tiny amount of solar
                energy compared to Earth.
              </p>

            </details>

            <details>

              <summary>
                Does Makemake have any moons?
              </summary>

              <p>
                Yes. Makemake has one known natural
                satellite, discovered in 2016 and often
                referred to as MK2.
              </p>

            </details>

            <details>

              <summary>
                Has a spacecraft ever visited Makemake?
              </summary>

              <p>
                No. Makemake has never been visited by a
                spacecraft. Everything we know comes from
                telescopes and astronomical observations.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Makemake;