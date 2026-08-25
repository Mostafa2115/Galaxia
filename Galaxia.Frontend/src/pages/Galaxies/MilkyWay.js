import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import { NavLink } from "react-router-dom";
import "./MilkyWay.css";

import MilkyWayHero from "../../assets/discoveries-main/galaxy.jpg";

function MilkyWay() {
  return (
    <>
      <Navbar />

      <main className="milky-way-page">

        {/* ================= HERO ================= */}

        <section className="milky-way-hero">

          <img
            src={MilkyWayHero}
            alt="Milky Way Galaxy"
            className="milky-way-hero-bg"
          />

          <div className="milky-way-hero-overlay"></div>

          <div className="milky-way-hero-content">

            <span>OUR HOME GALAXY</span>

            <h1>Milky Way</h1>

            <p>
              The vast barred spiral galaxy that contains our
              Solar System, billions of stars, and countless
              worlds waiting to be discovered.
            </p>

            <div style={{ display: "flex", gap: "15px", alignItems: "center", marginTop: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <NavLink
                to="/galaxies/catalog"
                className="milky-way-back-btn"
                style={{ margin: 0 }}
              >
                ← Galaxy Catalog
              </NavLink>

              <a href="#overview">
                <button className="milky-way-back-btn" style={{ background: "#8b5cf6", border: "none", cursor: "pointer" }}>
                  Explore Overview
                </button>
              </a>

              <BookmarkBtn
                item={{
                  id: "galaxy-milkyway",
                  title: "Milky Way Galaxy",
                  category: "Galaxy",
                  path: "/galaxies/milky-way",
                  desc: "Our home galaxy containing the Solar System and billions of stars."
                }}
              />
            </div>

          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

        <section className="milky-way-overview" id="overview">

          <div className="milky-way-section-title">

            <span>GALACTIC OVERVIEW</span>

            <h2>Our Place In The Universe</h2>

            <p>
              The Milky Way is a barred spiral galaxy that
              stretches across an enormous region of space.
              It is the cosmic home of our Solar System and
              hundreds of billions of stars.
            </p>

          </div>


          <div className="milky-way-overview-grid">

            <div className="milky-way-info-card">

              <span>TYPE</span>

              <h3>Barred Spiral</h3>

              <p>
                The Milky Way has a central bar of stars
                surrounded by curved spiral arms.
              </p>

            </div>


            <div className="milky-way-info-card">

              <span>DIAMETER</span>

              <h3>~100,000 Light-Years</h3>

              <p>
                The visible stellar disk extends for roughly
                one hundred thousand light-years.
              </p>

            </div>


            <div className="milky-way-info-card">

              <span>AGE</span>

              <h3>~13.6 Billion Years</h3>

              <p>
                The Milky Way formed very early in the history
                of the universe.
              </p>

            </div>


            <div className="milky-way-info-card">

              <span>LOCATION</span>

              <h3>Local Group</h3>

              <p>
                Our galaxy belongs to the Local Group, a
                collection of gravitationally bound galaxies.
              </p>

            </div>

          </div>

        </section>


        {/* ================= STRUCTURE ================= */}

        <section className="milky-way-structure">

          <div className="milky-way-section-title">

            <span>GALACTIC STRUCTURE</span>

            <h2>A Galaxy Of Many Parts</h2>

            <p>
              The Milky Way is made of several major structures
              working together to create one enormous galaxy.
            </p>

          </div>


          <div className="milky-way-structure-grid">

            <div className="milky-way-structure-card">

              <div className="structure-number">
                01
              </div>

              <h3>Galactic Core</h3>

              <p>
                The dense central region contains a huge
                concentration of stars and the supermassive
                black hole Sagittarius A*.
              </p>

            </div>


            <div className="milky-way-structure-card">

              <div className="structure-number">
                02
              </div>

              <h3>Central Bar</h3>

              <p>
                A long bar-shaped structure of stars crosses
                the central region of the Milky Way.
              </p>

            </div>


            <div className="milky-way-structure-card">

              <div className="structure-number">
                03
              </div>

              <h3>Spiral Arms</h3>

              <p>
                Curved regions filled with stars, gas and dust
                extend outward from the galactic center.
              </p>

            </div>


            <div className="milky-way-structure-card">

              <div className="structure-number">
                04
              </div>

              <h3>Galactic Halo</h3>

              <p>
                A vast surrounding region containing old stars,
                globular clusters and dark matter.
              </p>

            </div>

          </div>

        </section>
                {/* ================= GALACTIC CENTER ================= */}

        <section className="milky-way-center">

          <div className="milky-way-section-title">

            <span>THE HEART OF THE MILKY WAY</span>

            <h2>Sagittarius A*</h2>

            <p>
              At the center of the Milky Way lies Sagittarius A*,
              a supermassive black hole surrounded by an enormous
              concentration of stars, gas and dust.
            </p>

          </div>


          <div className="milky-way-center-content">

            <div className="center-highlight">

              <div className="center-symbol">
                ✦
              </div>

              <h3>Supermassive Black Hole</h3>

              <p>
                Sagittarius A* has a mass of roughly four million
                times that of the Sun and sits at the gravitational
                center of our galaxy.
              </p>

            </div>


            <div className="center-facts">

              <div className="center-fact">

                <span>LOCATION</span>

                <h3>Galactic Center</h3>

              </div>


              <div className="center-fact">

                <span>MASS</span>

                <h3>~4 Million Suns</h3>

              </div>


              <div className="center-fact">

                <span>DISTANCE FROM EARTH</span>

                <h3>~26,000 Light-Years</h3>

              </div>


              <div className="center-fact">

                <span>OBJECT TYPE</span>

                <h3>Supermassive Black Hole</h3>

              </div>

            </div>

          </div>

        </section>


        {/* ================= OUR LOCATION ================= */}

        <section className="milky-way-location">

          <div className="milky-way-section-title">

            <span>OUR COSMIC ADDRESS</span>

            <h2>Where Is The Solar System?</h2>

            <p>
              Our Solar System is not located near the center
              of the Milky Way. Instead, it lies in one of the
              galaxy's spiral arms.
            </p>

          </div>


          <div className="location-content">

            <div className="location-card">

              <span>SPIRAL ARM</span>

              <h3>Orion Arm</h3>

              <p>
                The Solar System is located in the Orion Arm,
                also known as the Orion Spur, between two major
                spiral arms of the Milky Way.
              </p>

            </div>


            <div className="location-card">

              <span>DISTANCE FROM CENTER</span>

              <h3>~26,000 Light-Years</h3>

              <p>
                Our Solar System orbits the galactic center
                from a location far outside the central region.
              </p>

            </div>


            <div className="location-card">

              <span>GALACTIC ORBIT</span>

              <h3>~230 Million Years</h3>

              <p>
                The Solar System takes roughly 230 million years
                to complete one orbit around the center of the galaxy.
              </p>

            </div>

          </div>

        </section>


        {/* ================= SCALE ================= */}

        <section className="milky-way-scale">

          <div className="milky-way-section-title">

            <span>UNDERSTANDING THE SCALE</span>

            <h2>How Large Is The Milky Way?</h2>

            <p>
              The Milky Way is so enormous that even light,
              traveling at nearly 300,000 kilometers per second,
              needs around one hundred thousand years to cross
              its stellar disk.
            </p>

          </div>


          <div className="scale-stats">

            <div className="scale-stat">

              <h3>100,000+</h3>

              <span>Light-Years Wide</span>

            </div>


            <div className="scale-stat">

              <h3>100–400B</h3>

              <span>Estimated Stars</span>

            </div>


            <div className="scale-stat">

              <h3>13.6B</h3>

              <span>Years Old</span>

            </div>


            <div className="scale-stat">

              <h3>26,000</h3>

              <span>Light-Years To Center</span>

            </div>

          </div>

        </section>
                {/* ================= FORMATION & HISTORY ================= */}

        <section className="milky-way-history">

          <div className="milky-way-section-title">

            <span>ANCIENT COSMIC HISTORY</span>

            <h2>How Did The Milky Way Form?</h2>

            <p>
              The Milky Way has evolved over billions of years
              through the gradual accumulation of stars, gas,
              dust and smaller galaxies.
            </p>

          </div>


          <div className="history-timeline">

            <div className="history-item">

              <div className="history-marker">
                01
              </div>

              <div className="history-content">

                <span>~13.6 BILLION YEARS AGO</span>

                <h3>The Early Galaxy</h3>

                <p>
                  The earliest structures that eventually became
                  the Milky Way began forming in the young universe.
                  Small concentrations of matter gradually grew under
                  the influence of gravity.
                </p>

              </div>

            </div>


            <div className="history-item">

              <div className="history-marker">
                02
              </div>

              <div className="history-content">

                <span>GALACTIC GROWTH</span>

                <h3>Building A Giant Galaxy</h3>

                <p>
                  Over time, the growing galaxy accumulated gas
                  and formed generations of stars. Smaller galaxies
                  and stellar systems were also incorporated into
                  the Milky Way.
                </p>

              </div>

            </div>


            <div className="history-item">

              <div className="history-marker">
                03
              </div>

              <div className="history-content">

                <span>SPIRAL STRUCTURE</span>

                <h3>The Galactic Disk</h3>

                <p>
                  Continued star formation and gravitational
                  interactions helped shape the rotating disk,
                  central bar and spiral structure we observe today.
                </p>

              </div>

            </div>


            <div className="history-item">

              <div className="history-marker">
                04
              </div>

              <div className="history-content">

                <span>TODAY</span>

                <h3>A Living Galaxy</h3>

                <p>
                  The Milky Way continues to evolve. New stars are
                  still forming from clouds of gas while the galaxy
                  interacts gravitationally with its neighbors.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MILKY WAY & ANDROMEDA ================= */}

        <section className="milky-way-andromeda">

          <div className="milky-way-section-title">

            <span>OUR GALACTIC NEIGHBOR</span>

            <h2>Milky Way & Andromeda</h2>

            <p>
              The Milky Way is part of the Local Group, where
              Andromeda is the largest neighboring spiral galaxy.
              Their gravitational interaction will shape the future
              of both galaxies.
            </p>

          </div>


          <div className="andromeda-comparison">

            <div className="comparison-card">

              <span>OUR GALAXY</span>

              <h3>Milky Way</h3>

              <p>
                A barred spiral galaxy containing our Solar System.
              </p>

            </div>


            <div className="comparison-symbol">
              ⇄
            </div>


            <div className="comparison-card">

              <span>NEIGHBOR</span>

              <h3>Andromeda</h3>

              <p>
                A large spiral galaxy located about 2.5 million
                light-years away.
              </p>

            </div>

          </div>

        </section>


        {/* ================= INTERESTING FACTS ================= */}

        <section className="milky-way-facts">

          <div className="milky-way-section-title">

            <span>FASCINATING FACTS</span>

            <h2>Milky Way Facts</h2>

            <p>
              Some of the most fascinating things we know about
              our enormous galactic home.
            </p>

          </div>


          <div className="milky-way-facts-grid">

            <div className="milky-way-fact-card">

              <div className="fact-number">
                01
              </div>

              <h3>Billions Of Stars</h3>

              <p>
                The Milky Way contains an enormous population
                of stars, including our Sun.
              </p>

            </div>


            <div className="milky-way-fact-card">

              <div className="fact-number">
                02
              </div>

              <h3>A Giant Black Hole</h3>

              <p>
                Sagittarius A* sits at the heart of our galaxy
                and has a mass millions of times greater than
                the Sun.
              </p>

            </div>


            <div className="milky-way-fact-card">

              <div className="fact-number">
                03
              </div>

              <h3>We Are Inside It</h3>

              <p>
                Because Earth is located inside the Milky Way,
                astronomers cannot photograph the entire galaxy
                from an outside viewpoint.
              </p>

            </div>


            <div className="milky-way-fact-card">

              <div className="fact-number">
                04
              </div>

              <h3>It Is Still Changing</h3>

              <p>
                The Milky Way is continuously forming stars,
                interacting with nearby galaxies and evolving
                over cosmic time.
              </p>

            </div>

          </div>

        </section>
     

<section className="milky-way-did-you-know">

  <div className="milky-way-section-title">

    <span>DID YOU KNOW?</span>

    <h2>Secrets Of Our Galaxy</h2>

    <p>
      The Milky Way still holds countless mysteries,
      and every new observation helps us understand our
      cosmic home a little better.
    </p>

  </div>


  <div className="did-you-know-grid">

    <div className="did-you-know-card">

      <div className="did-you-know-icon">
        ✨
      </div>

      <h3>Stellar Nurseries</h3>

      <p>
        Huge clouds of gas and dust inside the Milky Way
        continue to collapse and create new generations
        of stars.
      </p>

    </div>


    <div className="did-you-know-card">

      <div className="did-you-know-icon">
        🌌
      </div>

      <h3>Dark Matter</h3>

      <p>
        Much of the Milky Way's mass is believed to exist
        in the form of dark matter, which cannot be observed
        directly with ordinary light.
      </p>

    </div>


    <div className="did-you-know-card">

      <div className="did-you-know-icon">
        ☀️
      </div>

      <h3>Our Solar System</h3>

      <p>
        The Sun and all the planets of our Solar System
        are traveling together through the Milky Way.
      </p>

    </div>


    <div className="did-you-know-card">

      <div className="did-you-know-icon">
        🔭
      </div>

      <h3>We Study It From Inside</h3>

      <p>
        Astronomers combine observations from many different
        wavelengths to map the structure of our galaxy.
      </p>

    </div>

  </div>

</section>



<section className="milky-way-journey">

  <div className="journey-content">

    <span>YOUR COSMIC JOURNEY</span>

    <h2>Explore The Milky Way</h2>

    <p>
      From the supermassive black hole at its center to the
      distant edges of its enormous halo, the Milky Way is
      a vast cosmic structure filled with billions of stars
      and countless mysteries.
    </p>

    <NavLink
      to="/galaxies/catalog"
      className="milky-way-catalog-btn"
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

export default MilkyWay;