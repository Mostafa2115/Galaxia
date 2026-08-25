import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { FaGlobe, FaMoon, FaRocket, FaStar } from "react-icons/fa";
import { GiCometSpark } from "react-icons/gi";
import Earth from "../../assets/featured-planets-main/img-hero.jpg";
import Mars from "../../assets/featured-planets-main/mars-main.jpg";
import Jupiter from "../../assets/featured-planets-main/jupiter-main.jpg";
import Saturn from "../../assets/featured-planets-main/saturn-main.jpg";
import newplanet from "../../assets/discoveries-main/new planet.jpg";
import james_webb from "../../assets/discoveries-main/james-webb.jpg";
import water_on_mars from "../../assets/discoveries-main/water on mars.jpg";
import moon from "../../assets/discoveries-main/moon-main.jpg";
import galaxy from "../../assets/discoveries-main/galaxy.jpg";

function Home() {
  const [userCount, setUserCount] = useState(100);

  useEffect(() => {
    fetch("https://localhost:44321/api/admin/users-count")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((data) => {
        if (data && typeof data.count === "number") {
          setUserCount(data.count);
        }
      })
      .catch((err) => console.error("Could not fetch user statistics", err));
  }, []);
  const featuredPlanets = [
    {
      id: "planet-earth",
      name: "Earth",
      image: Earth,
      path: "/planets/earth",
      desc: "Our home planet and the only known world to support life."
    },
    {
      id: "planet-mars",
      name: "Mars",
      image: Mars,
      path: "/planets/mars",
      desc: "The Red Planet and the future destination of humans."
    },
    {
      id: "planet-jupiter",
      name: "Jupiter",
      image: Jupiter,
      path: "/planets/jupiter",
      desc: "The largest planet in the Solar System."
    },
    {
      id: "planet-saturn",
      name: "Saturn",
      image: Saturn,
      path: "/planets/saturn",
      desc: "Known for its magnificent ring system."
    }
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <section className="categories">

        <div className="section-title">
          <h2>Explore Categories</h2>
          <p>
            Choose a category and start your journey through the universe.
          </p>
        </div>

        <div className="categories-grid">

          <div className="category-card">
            <div className="category-icon"><FaGlobe /></div>
            <h3>Planets</h3>
            <p>Discover every planet in our Solar System.</p>
          </div>

          <NavLink to="/moons" className="category-card">

            <div className="category-icon">
              <FaMoon />
            </div>

            <h3>Moons</h3>

            <p>
              Explore famous natural satellites.
            </p>

          </NavLink>

          <div className="category-card">
            <div className="category-icon"><GiCometSpark /></div>
            <h3>Comets</h3>
            <p>Learn about icy visitors from deep space.</p>
          </div>

          <div className="category-card">
            <div className="category-icon"><FaRocket /></div>
            <h3>Missions</h3>
            <p>Explore humanity's greatest space missions.</p>
          </div>

          <NavLink to="/galaxies" className="category-card">
            <div className="category-icon">
              <FaGlobe />
            </div>

            <h3>Galaxies</h3>

            <p>
              Travel through billions of distant galaxies.
            </p>
          </NavLink>

          <div className="category-card">
            <div className="category-icon"><FaStar /></div>
            <h3>Stars</h3>
            <p>Discover the life cycle of stars.</p>
          </div>

        </div>

      </section>
      <section className="featured-planets">

        <div className="section-title">
          <h2>Featured Planets</h2>
          <p>Explore the most famous planets in our Solar System and save them to your profile.</p>
        </div>

        <div className="planet-grid">
          {featuredPlanets.map((planet) => (
            <div className="planet-card" key={planet.id}>
              <img src={planet.image} alt={planet.name} />

              <h3>{planet.name}</h3>

              <p>{planet.desc}</p>

              <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", marginBottom: "25px", flexWrap: "wrap" }}>
                <NavLink to={planet.path}>
                  <button className="btn-explore" style={{ margin: 0 }}>Explore</button>
                </NavLink>
                <BookmarkBtn
                  item={{
                    id: planet.id,
                    title: `${planet.name}`,
                    category: "Planet",
                    path: planet.path,
                    desc: planet.desc
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </section>
      <section className="discoveries-section">

        <div className="section-title">
          <h2>Latest Discoveries</h2>
          <p>
            Stay updated with the newest discoveries from space exploration.
          </p>
        </div>

        <div className="discoveries-grid">

          <div className="discovery-card">
            <img src={newplanet} alt="New Planet" />

            <div className="discovery-content">
              <span>August 2023</span>

              <h3>New Exoplanet Discovered</h3>

              <p>
                Scientists have identified a potentially habitable exoplanet
                located 120 light-years away.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="discovery-card">
            <img src={james_webb} alt="James Webb Telescope" />

            <div className="discovery-content">
              <span>July 2020</span>

              <h3>James Webb Telescope</h3>

              <p>
                Stunning new infrared images reveal never-before-seen
                structures in distant galaxies.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="discovery-card">
            <img src={water_on_mars} alt="Water on Mars" />

            <div className="discovery-content">
              <span>June 2021</span>

              <h3>Water on Mars?</h3>

              <p>
                Researchers found fresh evidence supporting the existence of
                underground ice deposits on Mars.
              </p>

              <button>Read More</button>
            </div>
          </div>

        </div>

      </section>
      <section className="missions-section">

        <div className="section-title">
          <h2>Space Missions</h2>
          <p>Explore the greatest missions in the history of space exploration.</p>
        </div>

        <div className="missions-grid">

          <div className="mission-card">
            <h3>Apollo 11</h3>
            <p>The first successful mission that landed humans on the Moon in 1969.</p>
            <button>Read More</button>
          </div>

          <div className="mission-card">
            <h3>Voyager 1</h3>
            <p>The farthest spacecraft ever launched by humanity.</p>
            <button>Read More</button>
          </div>

          <div className="mission-card">
            <h3>James Webb</h3>
            <p>The most powerful space telescope ever built.</p>
            <button>Read More</button>
          </div>

        </div>

      </section>
      <section className="stats-section">

        <div className="section-title">
          <h2>Space Statistics</h2>
          <p>Some amazing facts about our universe.</p>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>8</h3>
            <span>Planets</span>
          </div>

          <div className="stat-card">
            <h3>200+</h3>
            <span>Moons</span>
          </div>

          <div className="stat-card">
            <h3>5000+</h3>
            <span>Exoplanets</span>
          </div>

          <div className="stat-card">
            <h3>100B+</h3>
            <span>Galaxies</span>
          </div>

          <div className="stat-card">
            <h3>{userCount}+</h3>
            <span>Active Explorers</span>
          </div>

        </div>

      </section>
      <section className="solar-system">

        <div className="section-title">
          <h2>Interactive Solar System</h2>
          <p>Explore all 8 planets in our Solar System in a 3D animated interactive model. Hover over any planet to explore!</p>
        </div>

        <div className="solar-container">

          <div className="sun" title="The Sun">
            <span className="sun-pulse"></span>
          </div>

          {/* 1. Mercury / عطارد */}
          <div className="orbit mercury">
            <div className="planet mercury-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Mercury (عطارد)</span>
                <NavLink to="/planets/mercury" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 2. Venus / الزهرة */}
          <div className="orbit venus">
            <div className="planet venus-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Venus (الزهرة)</span>
                <NavLink to="/planets/venus" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 3. Earth / الأرض */}
          <div className="orbit earth">
            <div className="planet earth-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Earth (الأرض)</span>
                <NavLink to="/planets/earth" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 4. Mars / المريخ */}
          <div className="orbit mars">
            <div className="planet mars-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Mars (المريخ)</span>
                <NavLink to="/planets/mars" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 5. Jupiter / المشتري */}
          <div className="orbit jupiter">
            <div className="planet jupiter-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Jupiter (المشتري)</span>
                <NavLink to="/planets/jupiter" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 6. Saturn / زحل */}
          <div className="orbit saturn">
            <div className="planet saturn-planet">
              <div className="saturn-ring-draw"></div>
              <div className="planet-tooltip">
                <span className="planet-name">Saturn (زحل)</span>
                <NavLink to="/planets/saturn" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 7. Uranus / أورانوس */}
          <div className="orbit uranus">
            <div className="planet uranus-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Uranus (أورانوس)</span>
                <NavLink to="/planets/uranus" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

          {/* 8. Neptune / نبتون */}
          <div className="orbit neptune">
            <div className="planet neptune-planet">
              <div className="planet-tooltip">
                <span className="planet-name">Neptune (نبتون)</span>
                <NavLink to="/planets/neptune" className="planet-explore-link">
                  استكشاف الكوكب →
                </NavLink>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="explore-universe">

        <div className="section-title">
          <h2>Explore the Universe</h2>
          <p>
            Start your journey through the most exciting parts of space.
          </p>
        </div>

        <div className="explore-grid">

          <div className="explore-card">
            <img src={Earth} alt="Planets" />
            <div className="explore-content">
              <h3>Planets</h3>
              <p>Discover every planet in our Solar System.</p>
              <NavLink to="/planets"><button>Explore</button></NavLink>
            </div>
          </div>
          <div className="explore-card">
            <img src={moon} alt="Moons" />
            <div className="explore-content">
              <h3>Moons</h3>
              <p>
                Explore fascinating moons around the planets.
              </p>
              <NavLink to="/moons">
                <button>Explore</button>
              </NavLink>
            </div>
          </div>

          <div className="explore-card">
            <img src={james_webb} alt="Missions" />
            <div className="explore-content">
              <h3>Missions</h3>
              <p>Follow humanity's greatest space missions.</p>
              <button>Explore</button>
            </div>
          </div>

          <div className="explore-card">
            <img src={galaxy} alt="Galaxies" />

            <div className="explore-content">
              <h3>Galaxies</h3>

              <p>
                Travel through billions of galaxies across space.
              </p>

              <NavLink to="/galaxies">
                <button>Explore</button>
              </NavLink>
            </div>
          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default Home;