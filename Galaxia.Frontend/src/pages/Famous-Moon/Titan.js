import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Titan.css";
import Titanimg from "../../assets/Moons/Titan.jpg";
import Titanpng from "../../assets/Titan/Titan.jpg";
import TitanColor from "../../assets/Titan/Titan1.jpg";
import Titan2 from "../../assets/Titan/Titan2.jpg";
import Titan3 from "../../assets/Titan/Titan3.jpg";

import IoImg from "../../assets/Moons/Io.jpg";
import EuropaImg from "../../assets/Moons/Europa.jpg";
import TritonImg from "../../assets/Moons/Triton.jpg";

import { NavLink } from "react-router-dom";

function Titan() {
  return (
    <>
      <Navbar />

      <div className="titan-page">

        {/* ================= HERO ================= */}

        <section className="titan-hero">

          <img
            src={Titanimg}
            alt="Titan"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="titan-number">
              SATURN'S LARGEST MOON
            </span>

            <h1>Titan</h1>

            <p>
              Titan is Saturn's largest moon and one of the
              most fascinating worlds in the Solar System,
              known for its thick atmosphere, methane lakes
              and complex organic chemistry.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Titan
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Titan Overview</h2>

          <p>
            Discover the essential facts about Saturn's
            largest moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>5,149 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>1.35 × 10²³ kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>1.35 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Saturn</h3>

              <span>1.22 Million km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>15.9 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface Temperature</h3>

              <span>−179°C</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT TITAN ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={Titanpng}
              alt="Titan"
            />

          </div>

          <div className="about-content">

            <span>ABOUT TITAN</span>

            <h2>Saturn's Mysterious Giant Moon</h2>

            <p>
              Titan is Saturn's largest moon and the second
              largest natural satellite in the Solar System.
              It is larger than the planet Mercury and has
              a remarkably thick atmosphere.
            </p>

            <p>
              Titan's atmosphere is primarily made of nitrogen,
              with methane and other organic compounds. Its
              atmospheric chemistry makes Titan one of the most
              interesting worlds for planetary scientists.
            </p>

            <p>
              Titan is also the only world beyond Earth known
              to have stable bodies of liquid on its surface.
              Instead of water, its rivers, lakes and seas are
              made primarily of liquid methane and ethane.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Titan</h2>

            <p>
              Discover some of the most fascinating features
              of Saturn's largest moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                🌫️
              </div>

              <h3>Thick Atmosphere</h3>

              <p>
                Titan has a dense atmosphere dominated by
                nitrogen, making it unique among the moons
                of the Solar System.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🌊
              </div>

              <h3>Methane Lakes</h3>

              <p>
                Titan has rivers, lakes and seas filled with
                liquid methane and ethane instead of water.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🧪
              </div>

              <h3>Organic Chemistry</h3>

              <p>
                Complex organic molecules exist in Titan's
                atmosphere and may provide clues about the
                chemistry that preceded life.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🚀
              </div>

              <h3>Huygens Landing</h3>

              <p>
                The Huygens probe successfully landed on
                Titan in 2005, becoming the first spacecraft
                to land in the outer Solar System.
              </p>

            </div>

          </div>

        </section>
                {/* ================= TITAN SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Titan2}
              alt="Titan Surface"
            />

          </div>

          <div className="surface-content">

            <span>TITAN'S SURFACE</span>

            <h2>A World Shaped By Methane</h2>

            <p>
              Titan's surface is shaped by a methane-based
              weather cycle. Methane evaporates into the
              atmosphere, forms clouds and returns to the
              surface as rain.
            </p>

            <p>
              This creates rivers, lakes and seas across
              Titan's landscape, creating a remarkably
              Earth-like surface despite its extremely
              cold environment.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Methane Rain</h3>

                <p>
                  Liquid methane falls from Titan's clouds
                  like rain.
                </p>

              </div>

              <div className="surface-item">

                <h3>Lakes & Seas</h3>

                <p>
                  Large bodies of liquid methane and ethane
                  exist near Titan's poles.
                </p>

              </div>

              <div className="surface-item">

                <h3>Ice Mountains</h3>

                <p>
                  Titan's solid surface contains mountains
                  and landscapes made largely from water ice.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TITAN LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>TITAN'S LANDSCAPE</span>

            <h2>A Moon With An Earth-Like Cycle</h2>

            <p>
              Titan is one of the few worlds known to have
              an active liquid cycle on its surface. However,
              instead of water, methane and ethane take the
              role that water plays in Earth's climate system.
            </p>

            <p>
              Beneath its thick orange atmosphere, Titan has
              a diverse landscape containing dunes, valleys,
              mountains, channels and vast polar lakes.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Titan3}
              alt="Titan Landscape"
            />

          </div>

        </section>


        {/* ================= TITAN EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Titan</h2>

            <p>
              Several spacecraft have helped scientists
              reveal the secrets hidden beneath Titan's
              thick atmosphere.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1980
              </span>

              <h3>Voyager 1</h3>

              <p>
                Voyager 1 made detailed observations of
                Titan's atmosphere during its encounter
                with Saturn's system.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2004
              </span>

              <h3>Cassini</h3>

              <p>
                NASA's Cassini spacecraft began an extensive
                study of Titan, revealing its atmosphere,
                surface and methane lakes.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2005
              </span>

              <h3>Huygens</h3>

              <p>
                The Huygens probe descended through Titan's
                atmosphere and successfully landed on its
                surface.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                Future
              </span>

              <h3>Dragonfly</h3>

              <p>
                NASA's Dragonfly mission is planned to explore
                Titan's surface and investigate its chemistry
                and potential habitability.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Titan Gallery</h2>

            <p>
              Explore the mysterious atmosphere, surface and
              landscapes of Saturn's largest moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={Titanimg}
                alt="Titan"
              />

              <div className="gallery-overlay">
                <h3>Titan From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Titan2}
                alt="Titan Surface"
              />

              <div className="gallery-overlay">
                <h3>Titan Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={TitanColor}
                alt="Titan Atmosphere"
              />

              <div className="gallery-overlay">
                <h3>Orange Atmosphere</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Titan3}
                alt="Titan Landscape"
              />

              <div className="gallery-overlay">
                <h3>Titan Landscape</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Titan Facts</h2>

            <p>
              Titan is one of the most unusual and fascinating
              worlds in our Solar System.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>🌫️</span>

              <h3>Thick Atmosphere</h3>

              <p>
                Titan has a thick nitrogen-rich atmosphere
                that is denser than Earth's atmosphere.
              </p>

            </div>


            <div className="did-card">

              <span>🌊</span>

              <h3>Methane Rain</h3>

              <p>
                Methane can evaporate, form clouds and fall
                back to Titan's surface as liquid rain.
              </p>

            </div>


            <div className="did-card">

              <span>🪐</span>

              <h3>Larger Than Mercury</h3>

              <p>
                Titan is larger in diameter than Mercury,
                although Mercury has considerably more mass.
              </p>

            </div>


            <div className="did-card">

              <span>🚁</span>

              <h3>Dragonfly Mission</h3>

              <p>
                NASA's Dragonfly mission is designed to
                explore Titan using a rotorcraft lander.
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
              Continue exploring the fascinating moons of
              the Solar System.
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
                Jupiter's volcanic moon and one of the most
                geologically active worlds in the Solar System.
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
                An icy moon of Jupiter that may contain a
                vast ocean beneath its frozen surface.
              </p>

              <NavLink to="/moons/europa">
                Explore
              </NavLink>

            </div>


            {/* ================= TRITON ================= */}

            <div className="next-card">

              <img
                src={TritonImg}
                alt="Triton"
              />

              <h3>Triton</h3>

              <p>
                Neptune's largest moon with a fascinating
                retrograde orbit and icy surface.
              </p>

              <NavLink to="/moons/triton">
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
              Learn more about Saturn's largest and most
              mysterious moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Is Titan bigger than Mercury?
              </summary>

              <p>
                Yes. Titan is larger in diameter than Mercury,
                although Mercury has greater mass.
              </p>

            </details>


            <details>

              <summary>
                Does Titan have an atmosphere?
              </summary>

              <p>
                Yes. Titan has a thick atmosphere composed
                mainly of nitrogen, along with methane and
                other organic compounds.
              </p>

            </details>


            <details>

              <summary>
                Does Titan have liquid on its surface?
              </summary>

              <p>
                Yes. Titan has stable lakes and seas of
                liquid methane and ethane, especially near
                its polar regions.
              </p>

            </details>


            <details>

              <summary>
                Has a spacecraft landed on Titan?
              </summary>

              <p>
                Yes. The Huygens probe successfully landed
                on Titan in January 2005.
              </p>

            </details>


            <details>

              <summary>
                Will humans explore Titan?
              </summary>

              <p>
                NASA's Dragonfly mission is planned to explore
                Titan and study its surface and chemistry.
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

export default Titan;