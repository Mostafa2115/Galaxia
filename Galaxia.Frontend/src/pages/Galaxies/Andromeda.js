import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Andromeda.css";

import AndromedaHero from "../../assets/Galaxies/Andromeda.jpg";

function Andromeda() {
  return (
    <>
      <Navbar />

      <main className="andromeda-page">

        {/* ================= HERO ================= */}

        <section className="andromeda-hero">

          <img
            src={AndromedaHero}
            alt="Andromeda Galaxy"
            className="andromeda-hero-bg"
          />

          <div className="andromeda-hero-overlay"></div>

          <div className="andromeda-hero-content">

            <span>OUR GALACTIC NEIGHBOR</span>

            <h1>Andromeda</h1>

            <p>
              A magnificent spiral galaxy and the largest major
              galaxy in our Local Group, located about 2.5 million
              light-years from the Milky Way.
            </p>

            <NavLink
              to="/galaxies/catalog"
              className="andromeda-back-btn"
            >
              ← Galaxy Catalog
            </NavLink>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="andromeda-overview">

          <div className="andromeda-section-title">

            <span>GALACTIC OVERVIEW</span>

            <h2>The Great Neighbor</h2>

            <p>
              The Andromeda Galaxy, also known as Messier 31,
              is one of the most prominent galaxies visible
              from Earth and a close cosmic neighbor of the
              Milky Way.
            </p>

          </div>


          <div className="andromeda-overview-grid">

            <div className="andromeda-info-card">

              <span>TYPE</span>

              <h3>Spiral Galaxy</h3>

              <p>
                Andromeda is a large spiral galaxy with a
                bright central region and extensive stellar disk.
              </p>

            </div>


            <div className="andromeda-info-card">

              <span>DISTANCE</span>

              <h3>~2.5 Million Light-Years</h3>

              <p>
                It lies approximately 2.5 million light-years
                away from Earth.
              </p>

            </div>


            <div className="andromeda-info-card">

              <span>DIAMETER</span>

              <h3>~220,000 Light-Years</h3>

              <p>
                Its enormous stellar disk extends across
                hundreds of thousands of light-years.
              </p>

            </div>


            <div className="andromeda-info-card">

              <span>LOCAL GROUP</span>

              <h3>Largest Major Galaxy</h3>

              <p>
                Andromeda is one of the dominant galaxies
                within the Local Group.
              </p>

            </div>

          </div>

        </section>


        {/* ================= STRUCTURE ================= */}

        <section className="andromeda-structure">

          <div className="andromeda-section-title">

            <span>GALACTIC STRUCTURE</span>

            <h2>Inside Andromeda</h2>

            <p>
              Andromeda contains a complex structure made of
              stars, gas, dust, satellite galaxies and a dense
              central region.
            </p>

          </div>


          <div className="andromeda-structure-grid">

            <div className="andromeda-structure-card">

              <div className="structure-number">
                01
              </div>

              <h3>Galactic Core</h3>

              <p>
                A dense central region containing an enormous
                concentration of stars and the galaxy's central
                supermassive black hole.
              </p>

            </div>


            <div className="andromeda-structure-card">

              <div className="structure-number">
                02
              </div>

              <h3>Spiral Disk</h3>

              <p>
                A huge rotating disk containing stars, gas
                and dust arranged into broad spiral structures.
              </p>

            </div>


            <div className="andromeda-structure-card">

              <div className="structure-number">
                03
              </div>

              <h3>Dust Lanes</h3>

              <p>
                Dark lanes of cosmic dust absorb visible light
                and create some of Andromeda's most recognizable
                features.
              </p>

            </div>


            <div className="andromeda-structure-card">

              <div className="structure-number">
                04
              </div>

              <h3>Galactic Halo</h3>

              <p>
                A vast surrounding region containing old stars,
                globular clusters and large amounts of dark matter.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALACTIC CENTER ================= */}

        <section className="andromeda-center">

          <div className="andromeda-section-title">

            <span>THE HEART OF ANDROMEDA</span>

            <h2>The Galactic Center</h2>

            <p>
              At the center of Andromeda lies a dense concentration
              of stars surrounding a supermassive black hole.
              The region is one of the most energetic and complex
              parts of the galaxy.
            </p>

          </div>


          <div className="andromeda-center-content">

            <div className="andromeda-center-highlight">

              <div className="center-symbol">
                ✦
              </div>

              <h3>Supermassive Black Hole</h3>

              <p>
                Andromeda's central region contains a massive
                black hole surrounded by an enormous population
                of stars.
              </p>

            </div>


            <div className="andromeda-center-facts">

              <div className="andromeda-center-fact">

                <span>LOCATION</span>

                <h3>Galactic Center</h3>

              </div>


              <div className="andromeda-center-fact">

                <span>GALAXY</span>

                <h3>Messier 31</h3>

              </div>


              <div className="andromeda-center-fact">

                <span>OBJECT TYPE</span>

                <h3>Supermassive Black Hole</h3>

              </div>


              <div className="andromeda-center-fact">

                <span>REGION</span>

                <h3>Local Group</h3>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SIZE & SCALE ================= */}

        <section className="andromeda-scale">

          <div className="andromeda-section-title">

            <span>UNDERSTANDING THE SCALE</span>

            <h2>A Giant Among Galaxies</h2>

            <p>
              Andromeda is an enormous galaxy whose stellar disk
              extends far beyond what can be seen in a simple
              photograph.
            </p>

          </div>


          <div className="andromeda-scale-stats">

            <div className="andromeda-scale-stat">

              <h3>~220,000</h3>

              <span>Light-Years Wide</span>

            </div>


            <div className="andromeda-scale-stat">

              <h3>~1 Trillion</h3>

              <span>Estimated Stars</span>

            </div>


            <div className="andromeda-scale-stat">

              <h3>~2.5M</h3>

              <span>Light-Years Away</span>

            </div>


            <div className="andromeda-scale-stat">

              <h3>M31</h3>

              <span>Messier Catalog</span>

            </div>

          </div>

        </section>


        {/* ================= MILKY WAY CONNECTION ================= */}

        <section className="andromeda-milky-way">

          <div className="andromeda-section-title">

            <span>GALACTIC NEIGHBORS</span>

            <h2>Andromeda & The Milky Way</h2>

            <p>
              Andromeda and the Milky Way are the two dominant
              large galaxies in the Local Group and are slowly
              moving toward a future gravitational encounter.
            </p>

          </div>


          <div className="andromeda-comparison">

            <div className="andromeda-comparison-card">

              <span>OUR GALAXY</span>

              <h3>Milky Way</h3>

              <p>
                Our barred spiral galaxy, home to the Solar
                System and hundreds of billions of stars.
              </p>

            </div>


            <div className="andromeda-comparison-symbol">
              ⇄
            </div>


            <div className="andromeda-comparison-card">

              <span>GALACTIC NEIGHBOR</span>

              <h3>Andromeda</h3>

              <p>
                A massive spiral galaxy approximately
                2.5 million light-years from the Milky Way.
              </p>

            </div>

          </div>

        </section>
                {/* ================= FORMATION & HISTORY ================= */}

        <section className="andromeda-history">

          <div className="andromeda-section-title">

            <span>ANCIENT COSMIC HISTORY</span>

            <h2>The Story Of Andromeda</h2>

            <p>
              Andromeda has evolved over billions of years through
              star formation, gravitational interactions and mergers
              with smaller galaxies.
            </p>

          </div>


          <div className="andromeda-history-timeline">

            <div className="andromeda-history-item">

              <div className="history-marker">
                01
              </div>

              <div className="history-content">

                <span>ANCIENT UNIVERSE</span>

                <h3>Early Formation</h3>

                <p>
                  The building blocks of Andromeda began coming
                  together in the early universe as gravity gathered
                  enormous amounts of matter into larger structures.
                </p>

              </div>

            </div>


            <div className="andromeda-history-item">

              <div className="history-marker">
                02
              </div>

              <div className="history-content">

                <span>GALACTIC EVOLUTION</span>

                <h3>Growing Through Mergers</h3>

                <p>
                  Over cosmic time, Andromeda grew by interacting
                  and merging with smaller galaxies, adding stars
                  and other material to its growing structure.
                </p>

              </div>

            </div>


            <div className="andromeda-history-item">

              <div className="history-marker">
                03
              </div>

              <div className="history-content">

                <span>STELLAR HISTORY</span>

                <h3>Generations Of Stars</h3>

                <p>
                  Different generations of stars formed throughout
                  Andromeda, leaving behind populations of both
                  young and ancient stars.
                </p>

              </div>

            </div>


            <div className="andromeda-history-item">

              <div className="history-marker">
                04
              </div>

              <div className="history-content">

                <span>TODAY</span>

                <h3>A Living Galaxy</h3>

                <p>
                  Andromeda continues to evolve while interacting
                  gravitationally with nearby galaxies and its
                  satellite companions.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SATELLITE GALAXIES ================= */}

        <section className="andromeda-satellites">

          <div className="andromeda-section-title">

            <span>GALACTIC FAMILY</span>

            <h2>Andromeda's Companions</h2>

            <p>
              Andromeda is surrounded by numerous smaller satellite
              galaxies that are gravitationally bound to it.
            </p>

          </div>


          <div className="andromeda-satellite-grid">

            <div className="andromeda-satellite-card">

              <div className="satellite-number">
                01
              </div>

              <h3>M32</h3>

              <p>
                A compact elliptical galaxy located close to
                Andromeda and one of its best-known companions.
              </p>

            </div>


            <div className="andromeda-satellite-card">

              <div className="satellite-number">
                02
              </div>

              <h3>M110</h3>

              <p>
                A dwarf elliptical galaxy that appears near
                Andromeda in the night sky.
              </p>

            </div>


            <div className="andromeda-satellite-card">

              <div className="satellite-number">
                03
              </div>

              <h3>Dwarf Galaxies</h3>

              <p>
                Andromeda has many smaller satellite galaxies
                orbiting around its enormous gravitational system.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FUTURE ENCOUNTER ================= */}

        <section className="andromeda-future">

          <div className="andromeda-section-title">

            <span>A COSMIC FUTURE</span>

            <h2>Andromeda & The Milky Way</h2>

            <p>
              The two giant galaxies of the Local Group are
              gravitationally interacting and are expected to
              undergo a major encounter in the distant future.
            </p>

          </div>


          <div className="andromeda-future-card">

            <div className="future-icon">
              ✦
            </div>

            <h3>A Galactic Encounter</h3>

            <p>
              Andromeda is approaching the Milky Way. Over
              billions of years, their gravitational interaction
              will dramatically reshape both galaxies and may
              eventually lead to a merged galaxy.
            </p>

          </div>

        </section>
                {/* ================= INTERESTING FACTS ================= */}

        <section className="andromeda-facts">

          <div className="andromeda-section-title">

            <span>FASCINATING FACTS</span>

            <h2>Andromeda Facts</h2>

            <p>
              Andromeda is one of the most fascinating galaxies
              in our cosmic neighborhood.
            </p>

          </div>


          <div className="andromeda-facts-grid">

            <div className="andromeda-fact-card">

              <div className="fact-number">
                01
              </div>

              <h3>Visible To The Naked Eye</h3>

              <p>
                Under dark skies, Andromeda can be seen without
                a telescope as a faint, extended patch of light.
              </p>

            </div>


            <div className="andromeda-fact-card">

              <div className="fact-number">
                02
              </div>

              <h3>Messier 31</h3>

              <p>
                Andromeda is cataloged as M31 and is one of the
                most famous objects in the Messier catalog.
              </p>

            </div>


            <div className="andromeda-fact-card">

              <div className="fact-number">
                03
              </div>

              <h3>A Giant Galaxy</h3>

              <p>
                Its enormous stellar disk extends for hundreds
                of thousands of light-years across space.
              </p>

            </div>


            <div className="andromeda-fact-card">

              <div className="fact-number">
                04
              </div>

              <h3>Many Satellite Galaxies</h3>

              <p>
                Andromeda is surrounded by numerous smaller
                galaxies that are gravitationally bound to it.
              </p>

            </div>

          </div>

        </section>


        {/* ================= DID YOU KNOW ================= */}

        <section className="andromeda-did-you-know">

          <div className="andromeda-section-title">

            <span>DID YOU KNOW?</span>

            <h2>Secrets Of Andromeda</h2>

            <p>
              Even our closest major galactic neighbor still
              contains many mysteries for astronomers to explore.
            </p>

          </div>


          <div className="andromeda-did-grid">

            <div className="andromeda-did-card">

              <div className="did-icon">
                🌌
              </div>

              <h3>Millions Of Light-Years Away</h3>

              <p>
                The light we see from Andromeda today began its
                journey toward Earth roughly 2.5 million years ago.
              </p>

            </div>


            <div className="andromeda-did-card">

              <div className="did-icon">
                ⭐
              </div>

              <h3>Ancient Stars</h3>

              <p>
                Andromeda contains huge populations of old stars
                as well as regions where new stars continue to form.
              </p>

            </div>


            <div className="andromeda-did-card">

              <div className="did-icon">
                🔭
              </div>

              <h3>A Favorite Target</h3>

              <p>
                Its brightness and enormous apparent size make
                Andromeda an important target for astronomers.
              </p>

            </div>


            <div className="andromeda-did-card">

              <div className="did-icon">
                🌀
              </div>

              <h3>A Changing Galaxy</h3>

              <p>
                Gravitational interactions and past mergers have
                helped shape the Andromeda Galaxy we observe today.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="andromeda-journey">

          <div className="andromeda-journey-content">

            <span>CONTINUE YOUR COSMIC JOURNEY</span>

            <h2>Explore Andromeda</h2>

            <p>
              From its enormous spiral disk to its distant
              satellite galaxies, Andromeda is a spectacular
              example of the scale and beauty of the universe.
            </p>

            <NavLink
              to="/galaxies/catalog"
              className="andromeda-catalog-btn"
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

export default Andromeda;