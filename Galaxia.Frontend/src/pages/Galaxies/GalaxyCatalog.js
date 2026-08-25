import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import { NavLink } from "react-router-dom";
import "./GalaxyCatalog.css";

import MilkyWay from "../../assets/Galaxies/Milky_Way.jpg";
import Andromeda from "../../assets/Galaxies/Andromeda.jpg";
import BlackEye from "../../assets/Galaxies/Black Eye.jpg";

function GalaxyCatalog() {
  const galaxies = [
    {
      id: "galaxy-milkyway",
      name: "Milky Way",
      tag: "OUR GALAXY",
      type: "Barred Spiral Galaxy",
      path: "/galaxies/milky-way",
      image: MilkyWay,
      desc: "Our home galaxy, containing the Solar System and hundreds of billions of stars."
    },
    {
      id: "galaxy-andromeda",
      name: "Andromeda",
      tag: "GALACTIC NEIGHBOR",
      type: "Spiral Galaxy",
      path: "/galaxies/andromeda",
      image: Andromeda,
      desc: "A massive spiral galaxy and one of the closest major galaxies to the Milky Way."
    },
    {
      id: "galaxy-blackeye",
      name: "Black Eye Galaxy",
      tag: "DUSTY SPIRAL",
      type: "Spiral Galaxy",
      path: "/galaxies/black-eye",
      image: BlackEye,
      desc: "A remarkable galaxy known for the dark dust lane surrounding its bright central region."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="galaxy-catalog-page">
        {/* ================= HERO ================= */}
        <section className="catalog-hero">
          <div className="catalog-hero-content">
            <span>GALAXIA ARCHIVE</span>
            <h1>Galaxy Catalog</h1>
            <p>
              Explore fascinating galaxies in our cosmic neighborhood and save them to your explorer profile.
            </p>
          </div>
        </section>

        {/* ================= CATALOG ================= */}
        <section className="galaxy-catalog-section">
          <div className="catalog-section-title">
            <span>EXPLORE THE GALAXIES</span>
            <h2>Choose Your Galaxy</h2>
            <p>
              Select a galaxy to discover its structure, history, and add it to your saved favorites.
            </p>
          </div>

          <div className="galaxy-catalog-grid">
            {galaxies.map((galaxy) => (
              <div className="catalog-galaxy-card" key={galaxy.id}>
                <div className="catalog-image">
                  <img src={galaxy.image} alt={galaxy.name} />
                  <span>{galaxy.tag}</span>
                </div>

                <div className="catalog-card-content">
                  <h3>{galaxy.name}</h3>
                  <p className="galaxy-type">{galaxy.type}</p>
                  <p>{galaxy.desc}</p>

                  <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "15px", flexWrap: "wrap" }}>
                    <NavLink to={galaxy.path}>
                      Explore {galaxy.name} →
                    </NavLink>
                    <BookmarkBtn
                      item={{
                        id: galaxy.id,
                        title: `${galaxy.name} (${galaxy.type})`,
                        category: "Galaxy",
                        path: galaxy.path,
                        desc: galaxy.desc
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="catalog-bottom">
          <div className="catalog-bottom-content">
            <span>THE COSMOS AWAITS</span>
            <h2>Which Galaxy Will You Explore?</h2>
            <p>
              Journey from our own Milky Way to distant galactic neighbors and save your discoveries.
            </p>
            <NavLink to="/galaxies">
              ← Back To Galaxies
            </NavLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GalaxyCatalog;