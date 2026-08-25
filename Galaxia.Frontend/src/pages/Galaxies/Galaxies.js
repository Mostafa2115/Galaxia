import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Galaxies.css";

import GalaxyHero from "../../assets/Galaxies/Black Eye.jpg";

function Galaxies() {
  return (
    <>
      <Navbar />

      <main className="galaxies-page">

        {/* ================= HERO ================= */}

        <section className="galaxies-hero">

          <img
            src={GalaxyHero}
            alt="Galaxies"
            className="galaxies-hero-bg"
          />

          <div className="galaxies-hero-overlay"></div>

          <div className="galaxies-hero-content">

            <span>THE UNIVERSE</span>

            <h1>Galaxies</h1>

            <p>
              Explore enormous collections of stars, planets,
              gas and cosmic dust that shape the structure
              of our universe.
            </p>

            <NavLink
              to="/galaxies/catalog"
              className="galaxies-explore-btn"
            >
              Explore Galaxies
            </NavLink>

          </div>

        </section>


        {/* ================= INTRO ================= */}

        <section className="galaxies-intro">

          <div className="section-title">

            <span>DISCOVER THE COSMOS</span>

            <h2>What Is A Galaxy?</h2>

            <p>
              A galaxy is a vast gravitationally bound system
              containing stars, planets, gas, dust and dark matter.
              Galaxies can contain millions, billions or even
              trillions of stars.
            </p>

          </div>


          <div className="galaxy-types">

            <div className="galaxy-type-card">

              <div className="type-number">
                01
              </div>

              <h3>Spiral Galaxies</h3>

              <p>
                Galaxies with beautiful spiral arms extending
                from a central bulge.
              </p>

            </div>


            <div className="galaxy-type-card">

              <div className="type-number">
                02
              </div>

              <h3>Elliptical Galaxies</h3>

              <p>
                Large rounded galaxies containing mostly older
                stars and relatively little gas and dust.
              </p>

            </div>


            <div className="galaxy-type-card">

              <div className="type-number">
                03
              </div>

              <h3>Irregular Galaxies</h3>

              <p>
                Galaxies without a clear regular shape, often
                influenced by gravitational interactions.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section className="galaxies-features">

          <div className="section-title">

            <span>BEYOND OUR GALAXY</span>

            <h2>Worlds Beyond Imagination</h2>

            <p>
              Every galaxy tells a different story about the
              formation and evolution of the universe.
            </p>

          </div>


          <div className="galaxies-feature-grid">

            <div className="galaxy-feature-card">

              <div className="feature-icon">
                ✨
              </div>

              <h3>Billions Of Stars</h3>

              <p>
                Galaxies contain enormous numbers of stars,
                each potentially hosting its own planetary systems.
              </p>

            </div>


            <div className="galaxy-feature-card">

              <div className="feature-icon">
                🌀
              </div>

              <h3>Cosmic Structures</h3>

              <p>
                Galaxies come in many shapes and sizes, from
                elegant spirals to massive elliptical systems.
              </p>

            </div>


            <div className="galaxy-feature-card">

              <div className="feature-icon">
                🌌
              </div>

              <h3>Deep Space</h3>

              <p>
                Some galaxies are millions or even billions of
                light-years away from Earth.
              </p>

            </div>


            <div className="galaxy-feature-card">

              <div className="feature-icon">
                🕳️
              </div>

              <h3>Supermassive Black Holes</h3>

              <p>
                Many large galaxies contain enormous black holes
                at their centers.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CATALOG CTA ================= */}

        <section className="galaxies-catalog-cta">

          <div className="catalog-cta-content">

            <span>START YOUR JOURNEY</span>

            <h2>Explore Famous Galaxies</h2>

            <p>
              From our home galaxy to distant cosmic neighbors,
              discover five fascinating galaxies and learn
              what makes each one unique.
            </p>

            <NavLink
              to="/galaxies/catalog"
              className="catalog-btn"
            >
              View Galaxy Catalog
            </NavLink>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Galaxies;