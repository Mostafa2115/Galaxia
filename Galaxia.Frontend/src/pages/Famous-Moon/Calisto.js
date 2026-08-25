import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Callisto.css";

import CallistoImg from "../../assets/Callisto/callisto.jpg";
import CallistoColor from "../../assets/Callisto/callisto1.jpg";
import Callisto2 from "../../assets/Callisto/callisto2.jpg";
import Callisto3 from "../../assets/Callisto/callisto3.jpg";

import EuropaImg from "../../assets/Moons/Europa.jpg";
import GanymedeImg from "../../assets/Moons/Ganymede.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function Callisto() {
  return (
    <>
      <Navbar />

      <div className="callisto-page">

        {/* ================= HERO ================= */}

        <section className="callisto-hero">

          <img
            src={CallistoImg}
            alt="Callisto"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="callisto-number">
              JUPITER'S OUTER MOON
            </span>

            <h1>Callisto</h1>

            <p>
              Callisto is Jupiter's second-largest moon and
              one of the most heavily cratered worlds in the
              Solar System.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Callisto
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Callisto Overview</h2>

          <p>
            Discover the essential facts about Jupiter's
            ancient and heavily cratered moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>4,821 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.08 × 10²³ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>1.24 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Jupiter</h3>

              <span>1.88 million km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>16.69 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface</h3>

              <span>Rock & Ice</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT CALLISTO ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={CallistoColor}
              alt="Callisto"
            />

          </div>

          <div className="about-content">

            <span>ABOUT CALLISTO</span>

            <h2>An Ancient World Covered In Craters</h2>

            <p>
              Callisto is the second-largest moon of Jupiter
              and one of the most heavily cratered objects in
              the Solar System.
            </p>

            <p>
              Its surface is extremely old and has changed
              relatively little over billions of years. The
              moon is composed mainly of rock and ice, with
              a dark surface covered by countless impact scars.
            </p>

            <p>
              Beneath its surface, scientists have found
              evidence suggesting that Callisto may contain
              a deep subsurface ocean of liquid water.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Callisto</h2>

            <p>
              Discover some of the most fascinating features
              of Jupiter's ancient outer moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🪨
              </div>

              <h3>Heavily Cratered</h3>

              <p>
                Callisto has one of the oldest and most heavily
                cratered surfaces known in the Solar System.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                💧
              </div>

              <h3>Possible Ocean</h3>

              <p>
                Evidence suggests that a layer of liquid water
                may exist deep beneath Callisto's icy surface.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🌑
              </div>

              <h3>Dark Surface</h3>

              <p>
                Callisto reflects relatively little sunlight,
                giving its surface a dark and ancient appearance.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🪐
              </div>

              <h3>Far From Jupiter</h3>

              <p>
                Callisto orbits farther from Jupiter than the
                other three Galilean moons.
              </p>

            </div>

          </div>

        </section>
                {/* ================= CALLISTO SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Callisto2}
              alt="Callisto Surface"
            />

          </div>

          <div className="surface-content">

            <span>CALLISTO'S SURFACE</span>

            <h2>A World Shaped By Billions Of Impacts</h2>

            <p>
              Callisto's surface is dominated by impact
              craters created over billions of years. Its
              ancient terrain has remained relatively
              unchanged compared with many other moons.
            </p>

            <p>
              One of its most impressive features is Valhalla,
              a gigantic impact structure surrounded by
              enormous concentric rings.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Impact Craters</h3>

                <p>
                  Thousands of impacts have shaped the
                  ancient surface of Callisto.
                </p>

              </div>

              <div className="surface-item">

                <h3>Valhalla</h3>

                <p>
                  A huge multi-ring impact basin stretching
                  across thousands of kilometers.
                </p>

              </div>

              <div className="surface-item">

                <h3>Rock & Ice</h3>

                <p>
                  Callisto is composed of a mixture of
                  rocky material and water ice.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CALLISTO LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>CALLISTO'S LANDSCAPE</span>

            <h2>An Ancient And Quiet World</h2>

            <p>
              Unlike Jupiter's inner Galilean moons, Callisto
              shows relatively little evidence of recent
              geological activity.
            </p>

            <p>
              Its heavily cratered landscape preserves a
              remarkable record of the Solar System's ancient
              history, making Callisto an important world for
              studying the early evolution of planetary bodies.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Callisto3}
              alt="Callisto Landscape"
            />

          </div>

        </section>


        {/* ================= CALLISTO EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Callisto</h2>

            <p>
              Multiple spacecraft have studied Callisto
              while exploring the Jupiter system.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1610
              </span>

              <h3>Discovery</h3>

              <p>
                Galileo Galilei discovered Callisto along
                with Jupiter's other three large Galilean
                moons.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1979
              </span>

              <h3>Voyager Missions</h3>

              <p>
                Voyager 1 and Voyager 2 obtained detailed
                images of Callisto and revealed its heavily
                cratered surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1996
              </span>

              <h3>Galileo</h3>

              <p>
                NASA's Galileo spacecraft made multiple
                observations of Callisto and studied its
                surface, interior and environment.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Future Exploration</h3>

              <p>
                Future Jupiter-system missions may provide
                additional observations that help scientists
                understand Callisto's interior and possible
                subsurface ocean.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Callisto Gallery</h2>

            <p>
              Explore the ancient, dark and heavily cratered
              surface of Jupiter's distant Galilean moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={CallistoImg}
                alt="Callisto"
              />

              <div className="gallery-overlay">
                <h3>Callisto From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Callisto2}
                alt="Callisto Surface"
              />

              <div className="gallery-overlay">
                <h3>Cratered Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={CallistoColor}
                alt="Callisto"
              />

              <div className="gallery-overlay">
                <h3>Ancient Terrain</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Callisto3}
                alt="Callisto Landscape"
              />

              <div className="gallery-overlay">
                <h3>Callisto Landscape</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Callisto Facts</h2>

            <p>
              Callisto preserves some of the oldest landscapes
              in the Jupiter system.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🪨</span>

              <h3>Ancient Surface</h3>

              <p>
                Callisto has one of the oldest and most heavily
                cratered surfaces in the Solar System.
              </p>

            </div>


            <div className="did-card">

              <span>💧</span>

              <h3>Possible Ocean</h3>

              <p>
                Scientists have found evidence suggesting
                that liquid water may exist beneath its surface.
              </p>

            </div>


            <div className="did-card">

              <span>🌑</span>

              <h3>Dark World</h3>

              <p>
                Callisto reflects relatively little sunlight,
                giving it a dark appearance from space.
              </p>

            </div>


            <div className="did-card">

              <span>🪐</span>

              <h3>Galilean Moon</h3>

              <p>
                Callisto was discovered by Galileo Galilei
                in 1610 along with Europa, Io and Ganymede.
              </p>

            </div>

          </div>

        </section>


        {/* ================= EXPLORE OTHER MOONS ================= */}

        <section className="next-moons">

          <div className="section-header">

            <span>KEEP EXPLORING</span>

            <h2>Explore Other Moons</h2>

            <p>
              Continue your journey through the fascinating
              moons of the Solar System.
            </p>

          </div>

          <div className="next-grid">

            {/* ================= EUROPA ================= */}

            <div className="next-card">

              <img
                src={EuropaImg}
                alt="Europa"
              />

              <h3>Europa</h3>

              <p>
                Jupiter's icy moon with a possible ocean
                beneath its frozen surface.
              </p>

              <NavLink to="/moons/europa">
                Explore
              </NavLink>

            </div>


            {/* ================= GANYMEDE ================= */}

            <div className="next-card">

              <img
                src={GanymedeImg}
                alt="Ganymede"
              />

              <h3>Ganymede</h3>

              <p>
                The largest moon in the Solar System and
                the only known moon with its own magnetic field.
              </p>

              <NavLink to="/moons/ganymede">
                Explore
              </NavLink>

            </div>


            {/* ================= TITAN ================= */}

            <div className="next-card">

              <img
                src={TitanImg}
                alt="Titan"
              />

              <h3>Titan</h3>

              <p>
                Saturn's largest moon with a thick atmosphere
                and lakes of liquid hydrocarbons.
              </p>

              <NavLink to="/moons/titan">
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
              Learn more about Jupiter's ancient outer moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                What is Callisto?
              </summary>

              <p>
                Callisto is Jupiter's second-largest moon and
                one of the most heavily cratered worlds in the
                Solar System.
              </p>

            </details>


            <details>

              <summary>
                How old is Callisto's surface?
              </summary>

              <p>
                Callisto's surface is extremely ancient and
                preserves evidence of impacts that occurred
                billions of years ago.
              </p>

            </details>


            <details>

              <summary>
                Does Callisto have an ocean?
              </summary>

              <p>
                Evidence suggests that Callisto may have a
                subsurface ocean of liquid water beneath its
                icy and rocky exterior.
              </p>

            </details>


            <details>

              <summary>
                Who discovered Callisto?
              </summary>

              <p>
                Callisto was discovered by Galileo Galilei
                in 1610 along with Jupiter's other Galilean moons.
              </p>

            </details>


            <details>

              <summary>
                Why is Callisto heavily cratered?
              </summary>

              <p>
                Callisto has experienced enormous numbers of
                impacts over its long history and has relatively
                little geological activity to erase those scars.
              </p>

            </details>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <Footer />

      </div>

    </>
  );
}

export default Callisto;