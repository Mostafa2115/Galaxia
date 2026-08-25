import "./Hero.css";
import HeroImage from "../../assets/featured-planets-main/img-hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>GALAXIA</h1>

        <p className="hero-description">
          Explore the Infinite Frontiers of our Universe.
          Discover planets, moons, stars, galaxies,
          and humanity's greatest space missions.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn btn-hero">
            Begin Exploration
          </button>

          <button className="secondary-btn btn-hero">
            View Missions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;