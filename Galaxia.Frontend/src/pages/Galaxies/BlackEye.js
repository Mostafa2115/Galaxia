import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./BlackEye.css";

import BlackEyeHero from "../../assets/Galaxies/Black Eye.jpg";

function BlackEye() {
  return (
    <>
      <Navbar />

      <main className="black-eye-page">

        {/* ================= HERO ================= */}

        <section className="black-eye-hero">

          <img
            src={BlackEyeHero}
            alt="Black Eye Galaxy"
            className="black-eye-hero-bg"
          />

          <div className="black-eye-hero-overlay"></div>

          <div className="black-eye-hero-content">

            <span>THE DARK-EYED GALAXY</span>

            <h1>Black Eye</h1>

            <p>
              A remarkable spiral galaxy famous for the dark
              band of dust surrounding its bright central region,
              creating the appearance of a giant cosmic eye.
            </p>

            <NavLink
              to="/galaxies/catalog"
              className="black-eye-back-btn"
            >
              ← Galaxy Catalog
            </NavLink>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="black-eye-overview">

          <div className="black-eye-section-title">

            <span>GALACTIC OVERVIEW</span>

            <h2>A Galaxy With A Dark Secret</h2>

            <p>
              The Black Eye Galaxy, also known as Messier 64,
              is a spiral galaxy located in the constellation
              Coma Berenices and is easily recognized by its
              distinctive dark dust lane.
            </p>

          </div>


          <div className="black-eye-overview-grid">

            <div className="black-eye-info-card">

              <span>TYPE</span>

              <h3>Spiral Galaxy</h3>

              <p>
                M64 is a spiral galaxy with a bright central
                region surrounded by darker lanes of cosmic dust.
              </p>

            </div>


            <div className="black-eye-info-card">

              <span>ALSO KNOWN AS</span>

              <h3>Messier 64</h3>

              <p>
                It is commonly identified as M64 in the
                Messier catalog of astronomical objects.
              </p>

            </div>


            <div className="black-eye-info-card">

              <span>CONSTELLATION</span>

              <h3>Coma Berenices</h3>

              <p>
                The galaxy appears in the northern constellation
                Coma Berenices.
              </p>

            </div>


            <div className="black-eye-info-card">

              <span>DISTANCE</span>

              <h3>~17 Million Light-Years</h3>

              <p>
                The Black Eye Galaxy lies roughly 17 million
                light-years away from Earth.
              </p>

            </div>

          </div>

        </section>


        {/* ================= THE DARK EYE ================= */}

        <section className="black-eye-feature">

          <div className="black-eye-section-title">

            <span>THE FAMOUS FEATURE</span>

            <h2>Why Is It Called Black Eye?</h2>

            <p>
              A prominent band of interstellar dust blocks light
              from part of the galaxy's bright central region,
              creating the dark appearance that gives M64 its name.
            </p>

          </div>


          <div className="black-eye-feature-grid">

            <div className="black-eye-feature-card">

              <div className="feature-number">
                01
              </div>

              <h3>Dark Dust Lane</h3>

              <p>
                Thick clouds of cosmic dust absorb and scatter
                visible light, producing the striking dark band
                seen around the galaxy's core.
              </p>

            </div>


            <div className="black-eye-feature-card">

              <div className="feature-number">
                02
              </div>

              <h3>Bright Galactic Core</h3>

              <p>
                Behind the dark dust lane lies a bright region
                filled with stars that makes the contrast even
                more dramatic.
              </p>

            </div>


            <div className="black-eye-feature-card">

              <div className="feature-number">
                03
              </div>

              <h3>Cosmic Eye</h3>

              <p>
                The combination of the bright core and dark
                dust creates the appearance of a giant eye
                floating across deep space.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALACTIC STRUCTURE ================= */}

        <section className="black-eye-structure">

          <div className="black-eye-section-title">

            <span>GALACTIC STRUCTURE</span>

            <h2>Inside The Black Eye</h2>

            <p>
              M64 contains a bright central region, a rotating
              stellar disk, and enormous clouds of gas and dust
              that shape its distinctive appearance.
            </p>

          </div>


          <div className="black-eye-structure-grid">

            <div className="black-eye-structure-card">

              <div className="structure-number">
                01
              </div>

              <h3>Galactic Core</h3>

              <p>
                The central region contains a dense population
                of stars and forms the bright center seen in
                images of the galaxy.
              </p>

            </div>


            <div className="black-eye-structure-card">

              <div className="structure-number">
                02
              </div>

              <h3>Stellar Disk</h3>

              <p>
                A rotating disk of stars surrounds the core and
                extends across a huge region of interstellar space.
              </p>

            </div>


            <div className="black-eye-structure-card">

              <div className="structure-number">
                03
              </div>

              <h3>Dust Clouds</h3>

              <p>
                Dense clouds of interstellar dust create the dark
                band that gives the galaxy its famous appearance.
              </p>

            </div>


            <div className="black-eye-structure-card">

              <div className="structure-number">
                04
              </div>

              <h3>Star Formation</h3>

              <p>
                Regions containing gas and dust provide the raw
                material needed for new stars to form.
              </p>

            </div>

          </div>

        </section>


        {/* ================= ROTATING GAS ================= */}

        <section className="black-eye-gas">

          <div className="black-eye-section-title">

            <span>A STRANGE GALACTIC MOTION</span>

            <h2>Two Different Directions</h2>

            <p>
              One of the most interesting features of M64 is
              the unusual motion of its gas. Different regions
              of the galaxy rotate in opposite directions.
            </p>

          </div>


          <div className="black-eye-gas-content">

            <div className="black-eye-gas-highlight">

              <div className="gas-symbol">
                ↻
              </div>

              <h3>Counter-Rotating Gas</h3>

              <p>
                The outer gas in the galaxy rotates in a direction
                opposite to the inner gas. This unusual structure
                is believed to be connected to an earlier
                gravitational interaction.
              </p>

            </div>


            <div className="black-eye-gas-facts">

              <div className="black-eye-gas-fact">

                <span>INNER REGION</span>

                <h3>Rotates One Way</h3>

              </div>


              <div className="black-eye-gas-fact">

                <span>OUTER REGION</span>

                <h3>Rotates Oppositely</h3>

              </div>


              <div className="black-eye-gas-fact">

                <span>RESULT</span>

                <h3>Complex Galactic Motion</h3>

              </div>


              <div className="black-eye-gas-fact">

                <span>LIKELY CAUSE</span>

                <h3>Past Galactic Interaction</h3>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SIZE & SCALE ================= */}

        <section className="black-eye-scale">

          <div className="black-eye-section-title">

            <span>UNDERSTANDING THE SCALE</span>

            <h2>How Large Is M64?</h2>

            <p>
              Although it is smaller than some of the giant
              galaxies in our Local Group, the Black Eye Galaxy
              is still an enormous stellar system.
            </p>

          </div>


          <div className="black-eye-scale-stats">

            <div className="black-eye-scale-stat">

              <h3>~17M</h3>

              <span>Light-Years Away</span>

            </div>


            <div className="black-eye-scale-stat">

              <h3>~54,000</h3>

              <span>Light-Years Wide</span>

            </div>


            <div className="black-eye-scale-stat">

              <h3>M64</h3>

              <span>Messier Catalog</span>

            </div>


            <div className="black-eye-scale-stat">

              <h3>Coma</h3>

              <span>Berenices Constellation</span>

            </div>

          </div>

        </section>
                {/* ================= FORMATION & HISTORY ================= */}

        <section className="black-eye-history">

          <div className="black-eye-section-title">

            <span>ANCIENT GALACTIC HISTORY</span>

            <h2>The Story Behind M64</h2>

            <p>
              The unusual structure of the Black Eye Galaxy
              provides clues about its long history and possible
              interactions with smaller galactic systems.
            </p>

          </div>


          <div className="black-eye-history-timeline">

            <div className="black-eye-history-item">

              <div className="history-marker">
                01
              </div>

              <div className="history-content">

                <span>ANCIENT GALACTIC ERA</span>

                <h3>Galaxy Formation</h3>

                <p>
                  M64 developed over billions of years as gravity
                  gathered stars, gas and dust into an organized
                  galactic structure.
                </p>

              </div>

            </div>


            <div className="black-eye-history-item">

              <div className="history-marker">
                02
              </div>

              <div className="history-content">

                <span>GALACTIC INTERACTION</span>

                <h3>A Possible Past Encounter</h3>

                <p>
                  Astronomers believe that M64 may have interacted
                  with a smaller galaxy in the past. Such an encounter
                  could have introduced gas moving in a different
                  direction.
                </p>

              </div>

            </div>


            <div className="black-eye-history-item">

              <div className="history-marker">
                03
              </div>

              <div className="history-content">

                <span>CHANGING STRUCTURE</span>

                <h3>Counter-Rotating Gas</h3>

                <p>
                  The interaction may have contributed to the unusual
                  counter-rotating gas observed between the inner
                  and outer regions of the galaxy.
                </p>

              </div>

            </div>


            <div className="black-eye-history-item">

              <div className="history-marker">
                04
              </div>

              <div className="history-content">

                <span>TODAY</span>

                <h3>A Distinctive Galaxy</h3>

                <p>
                  Today, M64 remains one of the most recognizable
                  spiral galaxies because of its dramatic dark dust
                  lane and unusual internal motion.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= STAR FORMATION ================= */}

        <section className="black-eye-stars">

          <div className="black-eye-section-title">

            <span>STARS & STELLAR EVOLUTION</span>

            <h2>A Galaxy Still Creating Stars</h2>

            <p>
              The Black Eye Galaxy contains regions rich in gas
              and dust where new generations of stars can form.
            </p>

          </div>


          <div className="black-eye-stars-grid">

            <div className="black-eye-star-card">

              <div className="star-number">
                01
              </div>

              <h3>Gas Clouds</h3>

              <p>
                Cold clouds of gas provide the material needed
                for the birth of new stars.
              </p>

            </div>


            <div className="black-eye-star-card">

              <div className="star-number">
                02
              </div>

              <h3>Dust & Molecules</h3>

              <p>
                Dense molecular regions contain dust and gas
                that can collapse under gravity.
              </p>

            </div>


            <div className="black-eye-star-card">

              <div className="star-number">
                03
              </div>

              <h3>Young Stars</h3>

              <p>
                Newly formed stars illuminate their surroundings
                and contribute to the galaxy's active regions.
              </p>

            </div>


            <div className="black-eye-star-card">

              <div className="star-number">
                04
              </div>

              <h3>Stellar Evolution</h3>

              <p>
                Stars throughout M64 represent different stages
                of stellar evolution, from young stars to ancient
                stellar populations.
              </p>

            </div>

          </div>

        </section>


        {/* ================= GALACTIC ENVIRONMENT ================= */}

        <section className="black-eye-environment">

          <div className="black-eye-section-title">

            <span>THE COSMIC ENVIRONMENT</span>

            <h2>M64 In Its Neighborhood</h2>

            <p>
              The Black Eye Galaxy exists within a larger cosmic
              environment where galaxies interact through gravity
              across immense distances.
            </p>

          </div>


          <div className="black-eye-environment-card">

            <div className="environment-icon">
              🌌
            </div>

            <h3>A Galaxy Shaped By Gravity</h3>

            <p>
              Galactic structure is never completely isolated.
              Over billions of years, gravitational encounters
              can influence the motion of gas, the distribution
              of stars and the future evolution of a galaxy.
            </p>

          </div>

        </section>
                {/* ================= INTERESTING FACTS ================= */}

        <section className="black-eye-facts">

          <div className="black-eye-section-title">

            <span>FASCINATING FACTS</span>

            <h2>Black Eye Galaxy Facts</h2>

            <p>
              M64 is one of the most distinctive galaxies in
              the night sky, with several unusual features
              that make it especially interesting to astronomers.
            </p>

          </div>


          <div className="black-eye-facts-grid">

            <div className="black-eye-fact-card">

              <div className="fact-number">
                01
              </div>

              <h3>Messier 64</h3>

              <p>
                The Black Eye Galaxy is officially known as
                Messier 64 and is one of the famous objects
                in the Messier catalog.
              </p>

            </div>


            <div className="black-eye-fact-card">

              <div className="fact-number">
                02
              </div>

              <h3>A Cosmic Eye</h3>

              <p>
                Its dark dust lane creates a striking appearance
                that resembles a giant eye looking through space.
              </p>

            </div>


            <div className="black-eye-fact-card">

              <div className="fact-number">
                03
              </div>

              <h3>Unusual Gas Motion</h3>

              <p>
                Gas in different parts of the galaxy rotates in
                opposite directions, making M64 especially unusual.
              </p>

            </div>


            <div className="black-eye-fact-card">

              <div className="fact-number">
                04
              </div>

              <h3>Millions Of Light-Years Away</h3>

              <p>
                The light from M64 takes roughly 17 million years
                to travel from the galaxy to Earth.
              </p>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="black-eye-did-you-know">

          <div className="black-eye-section-title">

            <span>DID YOU KNOW?</span>

            <h2>Secrets Of The Black Eye</h2>

            <p>
              The Black Eye Galaxy is a perfect example of how
              galaxies can have complex histories hidden within
              their structure.
            </p>

          </div>


          <div className="black-eye-did-grid">

            <div className="black-eye-did-card">

              <div className="did-icon">
                👁️
              </div>

              <h3>Why Black Eye?</h3>

              <p>
                The dark dust lane near the center resembles
                the dark area around a human eye.
              </p>

            </div>


            <div className="black-eye-did-card">

              <div className="did-icon">
                🌌
              </div>

              <h3>Not Actually Black</h3>

              <p>
                The dark region is not empty space. It contains
                enormous amounts of dust that block visible light.
              </p>

            </div>


            <div className="black-eye-did-card">

              <div className="did-icon">
                🔭
              </div>

              <h3>Astronomer's Favorite</h3>

              <p>
                Its unusual appearance makes M64 a fascinating
                target for both professional and amateur astronomy.
              </p>

            </div>


            <div className="black-eye-did-card">

              <div className="did-icon">
                🌀
              </div>

              <h3>A Complex History</h3>

              <p>
                The galaxy's unusual gas motion provides clues
                about interactions that may have occurred long ago.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="black-eye-journey">

          <div className="black-eye-journey-content">

            <span>CONTINUE YOUR COSMIC JOURNEY</span>

            <h2>Explore The Black Eye Galaxy</h2>

            <p>
              From its mysterious dark dust lane to its unusual
              rotating gas, M64 shows us that every galaxy has
              a story written across the stars.
            </p>

            <NavLink
              to="/galaxies/catalog"
              className="black-eye-catalog-btn"
            >
              ← Back To Galaxy Catalog
            </NavLink>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default BlackEye;