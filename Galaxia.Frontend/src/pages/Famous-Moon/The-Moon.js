import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import "./The-Moon.css";

import MoonImg from "../../assets/Moon/moon.jpg";
import Moonpng from "../../assets/Moon/moonpng.png";
import MoonColor from "../../assets/Moon/moon1.jpg";
import Moon2 from "../../assets/Moon/moon2.jpg";
import Moon3 from "../../assets/Moon/moon3.jpg";

import IoImg from "../../assets/Moons/Io.jpg";
import EuropaImg from "../../assets/Moons/Europa.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function TheMoon() {
  return (
    <>
      <Navbar />

      <div className="moon-page">

        {/* ================= HERO ================= */}

        <section className="moon-hero">

          <img
            src={MoonImg}
            alt="The Moon"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="moon-number">
              EARTH'S NATURAL SATELLITE
            </span>

            <h1>The Moon</h1>

            <p>
              The Moon is Earth's only natural satellite and
              the closest celestial body to our planet. It has
              shaped Earth's history, tides and exploration
              for billions of years.
            </p>

            <div className="hero-buttons">

              <a href="#overview">
                <button className="btn-primary">
                  Explore The Moon
                </button>
              </a>

              <a href="#gallery">
                <button className="btn-secondary">
                  View Gallery
                </button>
              </a>

              <BookmarkBtn
                item={{
                  id: "moon-moon",
                  title: "The Moon (Earth)",
                  category: "Moon",
                  path: "/moons/moon",
                  desc: "Earth's only natural satellite and the closest celestial body to our planet."
                }}
              />

            </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section" id="overview">

          <h2>Moon Overview</h2>

          <p>
            Basic information about Earth's natural satellite.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>3,474 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>7.35 × 10²² kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>1.62 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Earth</h3>

              <span>384,400 km</span>

            </div>

            <div className="fact-card">

              <h3>Length of Day</h3>

              <span>29.5 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Length of Orbit</h3>

              <span>27.3 Earth Days</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Moonpng}
              alt="The Moon"
            />

          </div>

          <div className="about-content">

            <span>ABOUT THE MOON</span>

            <h2>Earth's Natural Satellite</h2>

            <p>
              The Moon is Earth's only natural satellite and
              the closest major celestial body to our planet.
              It has been a constant companion to Earth for
              billions of years.
            </p>

            <p>
              The Moon's gravitational pull creates the tides
              in Earth's oceans and helps stabilize the tilt
              of our planet, making it an important part of
              Earth's environment.
            </p>

            <p>
              The Moon does not produce its own light.
              Instead, the bright appearance we see from Earth
              comes from sunlight reflected from its surface.
            </p>

          </div>

        </section>
                {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About The Moon</h2>

            <p>
              Discover some fascinating facts about Earth's
              natural satellite.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🌊
              </div>

              <h3>Controls The Tides</h3>

              <p>
                The Moon's gravitational pull is one of the
                main forces responsible for Earth's ocean tides.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🌑
              </div>

              <h3>Same Side Always Faces Earth</h3>

              <p>
                The Moon rotates at the same rate that it
                orbits Earth, so we generally see the same
                side from our planet.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🌋
              </div>

              <h3>Ancient Volcanic Activity</h3>

              <p>
                Dark areas called maria were formed when
                ancient volcanic lava filled large impact
                basins on the lunar surface.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                👨‍🚀
              </div>

              <h3>Humans Have Walked On It</h3>

              <p>
                The Moon is the only celestial body beyond
                Earth where humans have physically walked.
              </p>

            </div>

          </div>

        </section>
                {/* ================= MOON SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Moon2}
              alt="Moon Surface"
            />

          </div>

          <div className="surface-content">

            <span>MOON SURFACE</span>

            <h2>A World Covered In Craters</h2>

            <p>
              The Moon's surface has been shaped by billions
              of years of asteroid and meteorite impacts.
              Unlike Earth, the Moon has no thick atmosphere
              to protect its surface from incoming objects.
            </p>

            <p>
              Its landscape contains enormous impact craters,
              mountains, valleys and large dark plains known
              as maria.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Impact Craters</h3>

                <p>
                  Millions of craters cover the lunar surface.
                </p>

              </div>

              <div className="surface-item">

                <h3>Lunar Maria</h3>

                <p>
                  Dark volcanic plains formed by ancient lava.
                </p>

              </div>

              <div className="surface-item">

                <h3>Mountains</h3>

                <p>
                  Large mountain ranges rise across the Moon.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MOON LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>THE LUNAR LANDSCAPE</span>

            <h2>A Silent And Ancient World</h2>

            <p>
              The lunar landscape preserves a remarkable record
              of the Solar System's history. With almost no
              atmosphere, wind or liquid water, many features
              remain unchanged for extremely long periods.
            </p>

            <p>
              The surface is covered by a layer of loose
              material called regolith, created over billions
              of years by constant impacts.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Moon3}
              alt="Moon Landscape"
            />

          </div>

        </section>
                {/* ================= MOON EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring The Moon</h2>

            <p>
              The Moon has been explored by hundreds of
              robotic and crewed missions throughout history.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1959
              </span>

              <h3>Luna 2</h3>

              <p>
                Luna 2 became the first human-made object
                to reach the surface of another celestial
                body.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1969
              </span>

              <h3>Apollo 11</h3>

              <p>
                Apollo 11 became the first mission to land
                humans on the Moon. Neil Armstrong and
                Buzz Aldrin walked on the lunar surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1972
              </span>

              <h3>Apollo 17</h3>

              <p>
                Apollo 17 was the final crewed Apollo mission
                to the Moon and carried out extensive
                scientific exploration.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2024
              </span>

              <h3>Modern Lunar Missions</h3>

              <p>
                Modern robotic missions continue studying
                the lunar surface, resources and potential
                future landing sites.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section" id="gallery">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>The Moon Gallery</h2>

            <p>
              Explore different views of Earth's natural
              satellite and its fascinating surface.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={MoonImg}
                alt="The Moon"
              />

              <div className="gallery-overlay">

                <h3>Full Moon</h3>

              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Moon3}
                alt="Moon Surface"
              />

              <div className="gallery-overlay">

                <h3>Lunar Surface</h3>

              </div>

            </div>


            <div className="gallery-card">

              <img
                src={MoonColor}
                alt="Moon Craters"
              />

              <div className="gallery-overlay">

                <h3>Impact Craters</h3>

              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Moon2}
                alt="Moon Landscape"
              />

              <div className="gallery-overlay">

                <h3>Lunar Landscape</h3>

              </div>

            </div>

          </div>

        </section>
                {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Moon Facts</h2>

            <p>
              The Moon may look familiar, but it still holds
              many fascinating secrets.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🌙</span>

              <h3>One Natural Satellite</h3>

              <p>
                Earth has only one permanent natural satellite,
                and that is the Moon.
              </p>

            </div>


            <div className="did-card">

              <span>🌊</span>

              <h3>Ocean Tides</h3>

              <p>
                The Moon's gravitational pull plays a major
                role in creating Earth's ocean tides.
              </p>

            </div>


            <div className="did-card">

              <span>👣</span>

              <h3>Human Footprints</h3>

              <p>
                With almost no atmosphere or wind, footprints
                left by astronauts can remain on the surface
                for an extremely long time.
              </p>

            </div>


            <div className="did-card">

              <span>🌑</span>

              <h3>Phases Of The Moon</h3>

              <p>
                The Moon appears to change shape because we
                see different portions of its sunlit side as
                it orbits Earth.
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
              Continue your journey through the Solar System
              and discover some of its most fascinating moons.
            </p>

          </div>

          <div className="next-grid">

            {/* ================= IO ================= */}

            <div className="next-card">

              <img
                src={IoImg}
                alt="Io"
              />

              <h3>Io</h3>

              <p>
                Jupiter's volcanic moon and the most
                geologically active world in the Solar System.
              </p>

              <NavLink to="/moons/io">
                Explore
              </NavLink>

            </div>


            {/* ================= EUROPA ================= */}

            <div className="next-card">

              <img
                src={EuropaImg}
                alt="Europa"
              />

              <h3>Europa</h3>

              <p>
                An icy moon of Jupiter that may contain
                a vast ocean beneath its frozen surface.
              </p>

              <NavLink to="/moons/europa">
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
              Learn more about Earth's Moon through these
              common questions.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                How far is the Moon from Earth?
              </summary>

              <p>
                The Moon is approximately 384,400 kilometers
                away from Earth on average.
              </p>

            </details>


            <details>

              <summary>
                Why do we always see the same side of the Moon?
              </summary>

              <p>
                The Moon rotates once on its axis in about
                the same amount of time it takes to orbit
                Earth. This is known as synchronous rotation.
              </p>

            </details>


            <details>

              <summary>
                How long is a day on the Moon?
              </summary>

              <p>
                One complete lunar day lasts about 29.5 Earth
                days from one sunrise to the next.
              </p>

            </details>


            <details>

              <summary>
                Have humans landed on the Moon?
              </summary>

              <p>
                Yes. NASA's Apollo 11 became the first mission
                to land humans on the Moon in 1969.
              </p>

            </details>


            <details>

              <summary>
                Does the Moon have an atmosphere?
              </summary>

              <p>
                The Moon does not have a substantial atmosphere.
                Instead, it has an extremely thin exosphere.
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

export default TheMoon;