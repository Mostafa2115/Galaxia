import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Saturn.css";

import SaturnImg from "../../../assets/planets/Saturn.jpg";
import Saturnpng from "../../../assets/Saturn/Saturnpng.png";
import SaturnColor from "../../../assets/Saturn/Saturn1.jpg";
import Saturn2 from "../../../assets/Saturn/Saturn2.jpg";
import Saturn3 from "../../../assets/Saturn/Saturn3.jpg";

import JupiterImg from "../../../assets/planets/Jupiter.jpg";
import UranusImg from "../../../assets/planets/Uranus.jpg";
import NeptuneImg from "../../../assets/planets/Neptune.jpg";

import { NavLink } from "react-router-dom";

function Saturn() {
  return (
    <>
      <Navbar />

      <div className="saturn-page">

        {/* ================= HERO ================= */}

        <section className="saturn-hero">

          <img
            src={SaturnImg}
            alt="Saturn"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              PLANET 6
            </span>

            <h1>Saturn</h1>

            <p>
              Saturn is the sixth planet from the Sun and
              the second-largest planet in the Solar System.
              It is famous for its breathtaking ring system,
              made of billions of icy particles and rocky
              fragments orbiting the giant planet.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Saturn
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Saturn Overview</h2>

          <p>
            Basic information about the ringed giant of the
            Solar System.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>116,460 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>5.683 × 10²⁶ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>10.44 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-178°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>10.7 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>29.5 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Saturnpng}
              alt="Saturn"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE PLANET</span>

            <h2>The Ringed Giant</h2>

            <p>
              Saturn is the sixth planet from the Sun and
              the second-largest planet in the Solar System.
              It is a gas giant composed mainly of hydrogen
              and helium, similar to Jupiter.
            </p>

            <p>
              Saturn is best known for its magnificent ring
              system, which consists of billions of ice
              particles, dust, and rocky debris orbiting
              the planet at incredible speeds.
            </p>

            <p>
              Despite its enormous size, Saturn is the least
              dense planet in the Solar System. If there
              were an ocean large enough, Saturn would
              theoretically float on water.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Saturn is one of the most spectacular planets,
              famous for its rings, moons and unique
              physical properties.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">💍</div>

              <h3>Famous Rings</h3>

              <p>
                Saturn's rings stretch hundreds of
                thousands of kilometers but are only
                tens of meters thick in many places.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>Titan</h3>

              <p>
                Titan, Saturn's largest moon, has a
                thick atmosphere and lakes of liquid
                methane on its surface.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌊</div>

              <h3>Could Float</h3>

              <p>
                Saturn's average density is lower than
                water, making it the least dense planet
                in the Solar System.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌪️</div>

              <h3>Powerful Storms</h3>

              <p>
                Saturn experiences enormous storms and
                powerful winds that can exceed
                1,800 km/h.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Saturn</h2>

            <p>
              Saturn is believed to contain a dense rocky
              core surrounded by metallic hydrogen, liquid
              hydrogen, and an outer atmosphere composed
              mainly of hydrogen and helium. Immense
              pressure deep inside the planet creates
              extraordinary physical conditions.
            </p>

            <div className="bars">

              <div className="bar">

                <h4>Rocky Core</h4>

                <div className="progress">

                  <div
                    className="core"
                    style={{ width: "15%" }}
                  ></div>

                </div>

                <span>15%</span>

              </div>

              <div className="bar">

                <h4>Metallic Hydrogen</h4>

                <div className="progress">

                  <div
                    className="mantle"
                    style={{ width: "70%" }}
                  ></div>

                </div>

                <span>70%</span>

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
              src={Saturnpng}
              alt="Saturn Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>SPACE MISSIONS</span>

            <h2>Saturn Exploration Missions</h2>

            <p>
              Saturn has been explored by several spacecraft,
              but the Cassini mission completely transformed
              our understanding of the planet, its rings and
              its fascinating moons.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1979
              </span>

              <h3>Pioneer 11</h3>

              <p>
                The first spacecraft to fly close to Saturn,
                revealing new details about its atmosphere,
                magnetic field and rings.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                1981
              </span>

              <h3>Voyager 2</h3>

              <p>
                Voyager 2 captured spectacular images of
                Saturn's rings and discovered several new
                moons during its historic flyby.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                2004
              </span>

              <h3>Cassini–Huygens</h3>

              <p>
                Cassini spent 13 years orbiting Saturn,
                studying its rings, atmosphere and moons,
                while the Huygens probe landed on Titan.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Saturn Gallery</h2>

            <p>
              Explore breathtaking views of Saturn, its
              magnificent rings, and stunning cloud patterns
              captured by space missions.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={SaturnImg} alt="Saturn" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Saturn2} alt="Saturn" />

              <div className="gallery-overlay">

                <h3>Ring System</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={SaturnColor} alt="Saturn" />

              <div className="gallery-overlay">

                <h3>Golden Atmosphere</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Saturn3} alt="Saturn" />

              <div className="gallery-overlay">

                <h3>View From Cassini</h3>

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
              Saturn is one of the most extraordinary planets,
              holding several fascinating records in our
              Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>💍</span>

              <h3>Iconic Rings</h3>

              <p>
                Saturn's ring system stretches hundreds of
                thousands of kilometers and is made mostly
                of water ice.
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>146 Confirmed Moons</h3>

              <p>
                Saturn has more confirmed moons than any
                other planet, including the remarkable
                moon Titan.
              </p>

            </div>

            <div className="did-card">

              <span>🌊</span>

              <h3>Less Dense Than Water</h3>

              <p>
                Saturn is the only planet with an average
                density lower than water, meaning it would
                theoretically float.
              </p>

            </div>

            <div className="did-card">

              <span>🌪️</span>

              <h3>Hexagonal Storm</h3>

              <p>
                Saturn's north pole contains a gigantic
                six-sided storm unlike anything else
                discovered in the Solar System.
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
              and discover more incredible worlds beyond Saturn.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={JupiterImg} alt="Jupiter" />

              <h3>Jupiter</h3>

              <p>
                Visit the largest planet in our Solar System.
              </p>

              <NavLink to="/planets/jupiter">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={UranusImg} alt="Uranus" />

              <h3>Uranus</h3>

              <p>
                Discover the mysterious ice giant that rotates
                on its side.
              </p>

              <NavLink to="/planets/uranus">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={NeptuneImg} alt="Neptune" />

              <h3>Neptune</h3>

              <p>
                Explore the distant blue giant with the fastest
                winds in the Solar System.
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
              Find answers to the most common questions
              about Saturn.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why are Saturn's rings so bright?
              </summary>

              <p>
                Saturn's rings are made mostly of water ice,
                which reflects sunlight and makes them appear
                extremely bright.
              </p>

            </details>

            <details>

              <summary>
                Does Saturn have a solid surface?
              </summary>

              <p>
                No. Saturn is a gas giant composed mainly of
                hydrogen and helium, so there is no solid
                surface to stand on.
              </p>

            </details>

            <details>

              <summary>
                What is Saturn's largest moon?
              </summary>

              <p>
                Titan is Saturn's largest moon and the
                second-largest moon in the Solar System.
                It has a thick atmosphere and lakes of
                liquid methane.
              </p>

            </details>

            <details>

              <summary>
                Why is Saturn less dense than water?
              </summary>

              <p>
                Because it is made mostly of lightweight
                gases such as hydrogen and helium, giving
                it the lowest average density of any planet.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Saturn;