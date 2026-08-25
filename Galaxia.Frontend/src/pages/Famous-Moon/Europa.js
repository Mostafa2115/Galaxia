import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Europa.css";

import EuropaImg from "../../assets/Europa/europa.jpg";
import EuropaColor from "../../assets/Europa/europa1.jpg";
import Europa2 from "../../assets/Europa/europa2.jpg";
import Europa3 from "../../assets/Europa/europa3.jpg";

import IoImg from "../../assets/Moons/Io.jpg";
import GanymedeImg from "../../assets/Moons/Ganymede.jpg";
import TitanImg from "../../assets/Moons/Titan.jpg";

import { NavLink } from "react-router-dom";

function Europa() {
  return (
    <>
      <Navbar />

      <div className="europa-page">

        {/* ================= HERO ================= */}

        <section className="europa-hero">

          <img
            src={EuropaImg}
            alt="Europa"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="europa-number">
              JUPITER'S ICY MOON
            </span>

            <h1>Europa</h1>

            <p>
              Europa is one of Jupiter's four Galilean moons,
              covered by a bright icy crust and believed to
              contain a vast ocean of liquid water beneath
              its surface.
            </p>

            <div className="hero-buttons">

            <button className="btn-primary">
              Explore Europa
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="facts-section">

          <h2>Europa Overview</h2>

          <p>
            Discover the essential facts about Jupiter's
            mysterious icy moon.
          </p>

          <div className="facts-grid">

            <div className="fact-card">

              <h3>Diameter</h3>

              <span>3,122 km</span>

            </div>

            <div className="fact-card">

              <h3>Mass</h3>

              <span>4.80 × 10²² kg</span>

            </div>

            <div className="fact-card">

              <h3>Gravity</h3>

              <span>1.31 m/s²</span>

            </div>

            <div className="fact-card">

              <h3>Distance from Jupiter</h3>

              <span>671,100 km</span>

            </div>

            <div className="fact-card">

              <h3>Orbital Period</h3>

              <span>3.55 Earth Days</span>

            </div>

            <div className="fact-card">

              <h3>Surface</h3>

              <span>Water Ice</span>

            </div>

          </div>

        </section>
                {/* ================= ABOUT EUROPA ================= */}

        <section className="about-section">

          <div className="about-image">

            <img
              src={EuropaColor}
              alt="Europa"
            />

          </div>

          <div className="about-content">

            <span>ABOUT EUROPA</span>

            <h2>An Icy World With A Hidden Ocean</h2>

            <p>
              Europa is one of Jupiter's four large Galilean
              moons and one of the most intriguing worlds in
              the Solar System.
            </p>

            <p>
              Its surface is covered by a relatively thin layer
              of water ice. Beneath that frozen crust, scientists
              believe a deep global ocean of liquid water may
              exist.
            </p>

            <p>
              Europa's cracked and surprisingly smooth surface
              is constantly shaped by Jupiter's gravity and
              tidal forces, making it an important target in
              the search for potentially habitable environments
              beyond Earth.
            </p>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="interesting-section">

          <div className="section-header">

            <span>DISCOVER MORE</span>

            <h2>Interesting Facts About Europa</h2>

            <p>
              Discover some of the most fascinating features
              of Jupiter's icy moon.
            </p>

          </div>

          <div className="facts-cards">

            <div className="fact-box">

              <div className="fact-icon">
                💧
              </div>

              <h3>Hidden Ocean</h3>

              <p>
                Scientists believe that a vast ocean of liquid
                water lies beneath Europa's frozen surface.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                ❄️
              </div>

              <h3>Icy Crust</h3>

              <p>
                Europa is covered by a bright layer of water
                ice marked by long cracks and ridges.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🪐
              </div>

              <h3>Tidal Forces</h3>

              <p>
                Jupiter's powerful gravity continuously
                flexes Europa's interior and contributes to
                its geological activity.
              </p>

            </div>


            <div className="fact-box">

              <div className="fact-icon">
                🧬
              </div>

              <h3>Potentially Habitable</h3>

              <p>
                Europa's subsurface ocean makes it one of the
                most promising places to search for environments
                that could support life.
              </p>

            </div>

          </div>

        </section>
                {/* ================= EUROPA SURFACE ================= */}

        <section className="surface-section">

          <div className="surface-image">

            <img
              src={Europa2}
              alt="Europa Surface"
            />

          </div>

          <div className="surface-content">

            <span>EUROPA'S SURFACE</span>

            <h2>A Frozen Surface Full Of Cracks</h2>

            <p>
              Europa's surface is dominated by water ice and
              crossed by enormous cracks, ridges and bands.
              The relatively young surface contains very few
              large impact craters.
            </p>

            <p>
              The reddish-brown markings across the ice may
              contain salts and other materials brought up
              from Europa's interior.
            </p>

            <div className="surface-highlights">

              <div className="surface-item">

                <h3>Ice Crust</h3>

                <p>
                  A thick layer of water ice covers Europa's
                  surface and protects the ocean below.
                </p>

              </div>

              <div className="surface-item">

                <h3>Surface Cracks</h3>

                <p>
                  Long fractures and ridges stretch across
                  Europa's bright icy terrain.
                </p>

              </div>

              <div className="surface-item">

                <h3>Red-Brown Streaks</h3>

                <p>
                  Distinctive reddish markings may contain
                  salts and materials from beneath the ice.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EUROPA LANDSCAPE ================= */}

        <section className="landscape-section">

          <div className="landscape-content">

            <span>EUROPA'S LANDSCAPE</span>

            <h2>A Young And Active Icy World</h2>

            <p>
              Europa has one of the smoothest surfaces among
              the Solar System's large moons. Its lack of many
              large impact craters suggests that the surface
              has been renewed relatively recently.
            </p>

            <p>
              The moon's icy shell may move and deform above
              the ocean below, creating the complex network
              of fractures and ridges visible across its surface.
            </p>

          </div>

          <div className="landscape-image">

            <img
              src={Europa3}
              alt="Europa Landscape"
            />

          </div>

        </section>


        {/* ================= EUROPA EXPLORATION ================= */}

        <section className="missions-section">

          <div className="section-header">

            <span>EXPLORATION HISTORY</span>

            <h2>Exploring Europa</h2>

            <p>
              Spacecraft observations have transformed Europa
              from a distant icy moon into one of the most
              important targets for planetary exploration.
            </p>

          </div>

          <div className="timeline">

            <div className="mission-card">

              <span className="year">
                1610
              </span>

              <h3>Discovery</h3>

              <p>
                Galileo Galilei discovered Europa along with
                Jupiter's other three large Galilean moons.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1979
              </span>

              <h3>Voyager Missions</h3>

              <p>
                Voyager 1 and Voyager 2 captured detailed
                images of Europa and revealed its complex
                network of surface fractures.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                1995
              </span>

              <h3>Galileo</h3>

              <p>
                NASA's Galileo spacecraft studied Europa
                extensively and provided strong evidence
                supporting the existence of a subsurface ocean.
              </p>

            </div>


            <div className="mission-card">

              <span className="year">
                2030s
              </span>

              <h3>Europa Clipper</h3>

              <p>
                NASA's Europa Clipper mission is designed to
                perform repeated close flybys of Europa and
                investigate its ice shell, ocean and potential
                habitability.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALLERY ================= */}

        <section className="gallery-section">

          <div className="section-header">

            <span>PHOTO GALLERY</span>

            <h2>Europa Gallery</h2>

            <p>
              Explore the frozen surface and mysterious
              landscapes of Jupiter's icy moon.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-card">

              <img
                src={EuropaImg}
                alt="Europa"
              />

              <div className="gallery-overlay">
                <h3>Europa From Space</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Europa2}
                alt="Europa Surface"
              />

              <div className="gallery-overlay">
                <h3>Icy Surface</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={EuropaColor}
                alt="Europa"
              />

              <div className="gallery-overlay">
                <h3>Europa's Frozen Terrain</h3>
              </div>

            </div>


            <div className="gallery-card">

              <img
                src={Europa3}
                alt="Europa Landscape"
              />

              <div className="gallery-overlay">
                <h3>Surface Fractures</h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="did-section">

          <div className="section-header">

            <span>DID YOU KNOW?</span>

            <h2>Amazing Europa Facts</h2>

            <p>
              Europa is one of the most fascinating and
              potentially habitable worlds beyond Earth.
            </p>

          </div>

          <div className="did-grid">

            <div className="did-card">

              <span>💧</span>

              <h3>Global Ocean</h3>

              <p>
                A huge ocean of liquid water may exist beneath
                Europa's frozen crust.
              </p>

            </div>


            <div className="did-card">

              <span>❄️</span>

              <h3>Icy World</h3>

              <p>
                Europa's surface is primarily composed of
                water ice and is crossed by enormous fractures.
              </p>

            </div>


            <div className="did-card">

              <span>🧬</span>

              <h3>Possible Habitability</h3>

              <p>
                Its water, chemistry and internal energy make
                Europa a major target in the search for
                environments suitable for life.
              </p>

            </div>


            <div className="did-card">

              <span>🪐</span>

              <h3>Galilean Moon</h3>

              <p>
                Europa was discovered in 1610 by Galileo
                Galilei along with Jupiter's other large moons.
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

            {/* ================= IO ================= */}

            <div className="next-card">

              <img
                src={IoImg}
                alt="Io"
              />

              <h3>Io</h3>

              <p>
                Jupiter's volcanic moon and the most
                volcanically active world in the Solar System.
              </p>

              <NavLink to="/moons/io">
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
                The largest moon in the Solar System and the
                only known moon with its own magnetic field.
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
              Learn more about Jupiter's mysterious icy moon.
            </p>

          </div>

          <div className="faq-container">

            <details>

              <summary>
                Does Europa really have an ocean?
              </summary>

              <p>
                Scientists have strong evidence that a deep
                global ocean of liquid water exists beneath
                Europa's icy surface.
              </p>

            </details>


            <details>

              <summary>
                Could Europa support life?
              </summary>

              <p>
                Europa is considered one of the most promising
                places to search for potentially habitable
                environments beyond Earth, although no life
                has been discovered there.
              </p>

            </details>


            <details>

              <summary>
                What is Europa's surface made of?
              </summary>

              <p>
                Europa's surface is primarily composed of
                water ice, with salts and other materials
                contributing to its reddish-brown markings.
              </p>

            </details>


            <details>

              <summary>
                Who discovered Europa?
              </summary>

              <p>
                Europa was discovered by Galileo Galilei
                in 1610 along with Jupiter's other three
                large Galilean moons.
              </p>

            </details>


            <details>

              <summary>
                How will Europa be explored?
              </summary>

              <p>
                NASA's Europa Clipper mission is designed to
                perform repeated close flybys of Europa and
                investigate its surface, ice shell and possible
                subsurface ocean.
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

export default Europa;