import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Neptune.css";

import NeptuneImg from "../../../assets/planets/Neptune.jpg";
import Neptunepng from "../../../assets/Neptune/Neptunepng.png";
import NeptuneColor from "../../../assets/Neptune/Neptune1.jpg";
import Neptune2 from "../../../assets/Neptune/Neptune2.jpg";
import Neptune3 from "../../../assets/Neptune/Neptune3.jpg";

import UranusImg from "../../../assets/planets/Uranus.jpg";
import SaturnImg from "../../../assets/planets/Saturn.jpg";
import PlutoImg from "../../../assets/planets/Pluto.jpg";

import { NavLink } from "react-router-dom";

function Neptune() {
  return (
    <>
      <Navbar />

      <div className="neptune-page">

        {/* ================= HERO ================= */}

        <section className="neptune-hero">

          <img
            src={NeptuneImg}
            alt="Neptune"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="planet-number">
              PLANET 8
            </span>

            <h1>Neptune</h1>

            <p>
              Neptune is the eighth and farthest major
              planet from the Sun. This deep blue ice giant
              is famous for its extremely powerful winds,
              dark storms and icy atmosphere, making it one
              of the most mysterious worlds in the Solar
              System.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Neptune
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Neptune Overview</h2>

          <p>
            Basic information about the most distant major
            planet in our Solar System.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>49,244 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.024 × 10²⁶ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>11.15 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Average Temp</h3>

              <span>-214°C</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>16.1 Hours</span>

            </div>

            <div className="fact-card">

              <h3>Length of Year</h3>

              <span>164.8 Earth Years</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Neptunepng}
              alt="Neptune"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE PLANET</span>

            <h2>The Windy Ice Giant</h2>

            <p>
              Neptune is the eighth and most distant planet
              from the Sun. It belongs to the group of ice
              giants and is composed mainly of hydrogen,
              helium and icy materials such as water,
              ammonia and methane.
            </p>

            <p>
              Neptune is famous for its striking deep-blue
              appearance. Methane in its atmosphere absorbs
              red light while reflecting blue wavelengths,
              giving the planet its beautiful color.
            </p>

            <p>
              Although Neptune receives very little sunlight,
              it has an active atmosphere with enormous
              storms and the fastest planetary winds ever
              recorded in the Solar System.
            </p>

          </div>

        </section>

        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts</h2>

            <p>
              Neptune is a mysterious world filled with
              extreme weather, giant storms and fascinating
              moons.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">🌪️</div>

              <h3>Fastest Winds</h3>

              <p>
                Neptune has the strongest winds in the Solar
                System, reaching speeds of more than
                2,000 km/h.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🌙</div>

              <h3>Triton</h3>

              <p>
                Triton is Neptune's largest moon and orbits
                the planet in the opposite direction of its
                rotation, making it unique.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">🔵</div>

              <h3>Deep Blue Color</h3>

              <p>
                Methane gas in Neptune's atmosphere absorbs
                red light and reflects blue wavelengths,
                giving the planet its rich blue color.
              </p>

            </div>

            <div className="fact-box">

              <div className="fact-icon">☁️</div>

              <h3>Great Dark Spot</h3>

              <p>
                Neptune occasionally develops enormous dark
                storms similar to Jupiter's Great Red Spot,
                although they usually disappear after a few
                years.
              </p>

            </div>

          </div>

        </section>
                {/* ================= STRUCTURE ================= */}

        <section className="structure-section">

          <div className="structure-left">

            <span>INTERNAL STRUCTURE</span>

            <h2>Inside Neptune</h2>

            <p>
              Neptune is believed to contain a small rocky
              core surrounded by a thick icy mantle composed
              of water, ammonia and methane. Above this lies
              a deep atmosphere of hydrogen, helium and
              methane, which gives the planet its beautiful
              blue appearance.
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
              src={Neptunepng}
              alt="Neptune Structure"
            />

          </div>

        </section>

        {/* ================= MISSIONS ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>SPACE MISSIONS</span>

            <h2>Neptune Exploration Missions</h2>

            <p>
              Neptune has only been explored by one spacecraft.
              Despite this, the mission revealed remarkable
              discoveries about the planet, its atmosphere,
              rings and moons.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1977
              </span>

              <h3>Voyager Program</h3>

              <p>
                NASA launched the Voyager mission to explore
                the outer planets, beginning one of the most
                successful space missions in history.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                1989
              </span>

              <h3>Voyager 2 Flyby</h3>

              <p>
                Voyager 2 became the first and only spacecraft
                to visit Neptune, discovering the Great Dark
                Spot, new rings and studying Triton in detail.
              </p>

            </div>

            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Neptune Mission</h3>

              <p>
                Scientists hope future orbiters and probes
                will explore Neptune and Triton to better
                understand the distant ice giant.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Neptune Gallery</h2>

            <p>
              Explore stunning images of Neptune, its deep
              blue atmosphere, mysterious storms and distant
              beauty captured during space exploration.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img src={NeptuneImg} alt="Neptune" />

              <div className="gallery-overlay">

                <h3>Global View</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Neptune2} alt="Neptune" />

              <div className="gallery-overlay">

                <h3>Deep Blue Planet</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={NeptuneColor} alt="Neptune" />

              <div className="gallery-overlay">

                <h3>Atmospheric Details</h3>

              </div>

            </div>

            <div className="gallery-card">

              <img src={Neptune3} alt="Neptune" />

              <div className="gallery-overlay">

                <h3>Voyager 2 Image</h3>

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
              Neptune is a fascinating world filled with
              powerful winds, icy temperatures and unique
              discoveries.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🌪️</span>

              <h3>Fastest Winds</h3>

              <p>
                Winds on Neptune can exceed 2,100 km/h,
                making them the fastest recorded anywhere
                in the Solar System.
              </p>

            </div>

            <div className="did-card">

              <span>🌙</span>

              <h3>Triton Orbits Backwards</h3>

              <p>
                Neptune's largest moon, Triton, travels in
                the opposite direction of the planet's
                rotation, suggesting it was captured by
                Neptune's gravity.
              </p>

            </div>

            <div className="did-card">

              <span>💍</span>

              <h3>Hidden Rings</h3>

              <p>
                Neptune has several faint rings made of
                dust and ice particles that are difficult
                to observe from Earth.
              </p>

            </div>

            <div className="did-card">

              <span>🧊</span>

              <h3>Ice Giant</h3>

              <p>
                Neptune is classified as an ice giant
                because its interior contains large amounts
                of water, ammonia and methane ices.
              </p>

            </div>

          </div>

        </section>
                {/* ================= NEXT PLANETS ================= */}

        <section className="next-planets">

          <div className="section-header">

            <span>KEEP EXPLORING</span>

            <h2>Explore Other Worlds</h2>

            <p>
              Continue your journey beyond Neptune and
              discover fascinating dwarf planets at the edge
              of our Solar System.
            </p>

          </div>

          <div className="next-grid">

            <div className="next-card">

              <img src={UranusImg} alt="Uranus" />

              <h3>Uranus</h3>

              <p>
                Explore the mysterious ice giant that
                rotates on its side.
              </p>

              <NavLink to="/planets/uranus">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={SaturnImg} alt="Saturn" />

              <h3>Saturn</h3>

              <p>
                Visit the magnificent ringed planet and
                discover its incredible moons.
              </p>

              <NavLink to="/planets/saturn">
                Explore
              </NavLink>

            </div>

            <div className="next-card">

              <img src={PlutoImg} alt="Pluto" />

              <h3>Pluto</h3>

              <p>
                Continue to the famous dwarf planet beyond
                Neptune in the distant Kuiper Belt.
              </p>

              <NavLink to="/planets/pluto">
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
              about Neptune.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Why is Neptune blue?
              </summary>

              <p>
                Methane in Neptune's atmosphere absorbs red
                light and reflects blue wavelengths, giving
                the planet its striking deep-blue color.
              </p>

            </details>

            <details>

              <summary>
                How many moons does Neptune have?
              </summary>

              <p>
                Neptune has 16 confirmed moons, with Triton
                being the largest and most fascinating.
              </p>

            </details>

            <details>

              <summary>
                Has anyone landed on Neptune?
              </summary>

              <p>
                No. Neptune has never been visited by a
                lander. Voyager 2 remains the only spacecraft
                to fly past the planet.
              </p>

            </details>

            <details>

              <summary>
                Why are Neptune's winds so powerful?
              </summary>

              <p>
                Scientists are still studying this mystery,
                but Neptune produces internal heat that helps
                drive its incredibly fast atmospheric winds.
              </p>

            </details>

          </div>

        </section>

        <Footer />

      </div>

    </>

  );

}

export default Neptune;