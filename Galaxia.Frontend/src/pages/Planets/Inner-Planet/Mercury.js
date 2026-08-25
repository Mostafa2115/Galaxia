import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./Mercury.css";

import MercuryImg from "../../../assets/planets/Mercury.jpg";
import Mercurypng from "../../../assets/Mercury/Mercury.png";
import Mercury_color from "../../../assets/Mercury/Mercury-Color.jpg";
import Mercury_3 from "../../../assets/Mercury/marc3.jpg";
import Mercury_2 from "../../../assets/Mercury/merc-photo2.jpg";


import VenusImg from "../../../assets/planets/Venus.jpg";
import EarthImg from "../../../assets/planets/Earth.jpg";
import MarsImg from "../../../assets/planets/Mars.jpg";

import { NavLink } from "react-router-dom";

function Mercury() {
  return (
    <>
      <Navbar />
      <div className="Mercury-page">
<section className="mercury-hero">

    <img
        src={MercuryImg}
        alt="Mercury"
        className="hero-bg"
    />

    <div className="hero-overlay"></div>

    <div className="hero-content">

        <span className="planet-number">
            PLANET 1
        </span>

        <h1>Mercury</h1>

        <p>
            Closest planet to the Sun and the smallest rocky planet
            in our Solar System.
        </p>

        <div className="hero-buttons">

            <button className="btn-primary">
              Explore Facts
            </button>

            <button className="btn-secondary">
              View Gallery
            </button>

          </div>

    </div>

</section>
<section className="facts-section">

    <h2>Mercury Overview</h2>

    <p>
        Learn the most important facts about the closest planet to the Sun.
    </p>

    <div className="facts-grid">

        <div className="fact-card">
            <h3>Diameter</h3>
            <span>4,879 km</span>
        </div>

        <div className="fact-card">
            <h3>Temperature</h3>
            <span>167°C</span>
        </div>

        <div className="fact-card">
            <h3>Gravity</h3>
            <span>3.7 m/s²</span>
        </div>

        <div className="fact-card">
            <h3>Distance</h3>
            <span>57.9 M km</span>
        </div>

        <div className="fact-card">
            <h3>One Day</h3>
            <span>58.6 Days</span>
        </div>

        <div className="fact-card">
            <h3>One Year</h3>
            <span>88 Days</span>
        </div>

    </div>

</section>
<section className="about-section">

    <div className="about-image">

        <img
            src={MercuryImg}
            alt="Mercury"
        />

    </div>

    <div className="about-content">

        <span>ABOUT THE PLANET</span>

        <h2>Mercury</h2>

        <p>
            Mercury is the smallest planet in the Solar System
            and the closest to the Sun. It has almost no
            atmosphere, which causes extreme temperature changes
            between day and night.
        </p>

        <p>
            A single day on Mercury lasts longer than its year.
            Despite being the closest planet to the Sun, it is
            not the hottest planet because of its thin atmosphere.
        </p>

    </div>

</section>
<section className="interesting-section">

    <div className="section-header">

        <span>DISCOVER MORE</span>

        <h2>Interesting Facts</h2>

        <p>
            Mercury may be the smallest planet, but it has some of
            the most fascinating characteristics in our Solar System.
        </p>

    </div>

    <div className="facts-cards">

        <div className="fact-box">
            <div className="fact-icon">☀</div>

            <h3>Closest to the Sun</h3>

            <p>
                Mercury is only about 58 million kilometers away
                from the Sun.
            </p>
        </div>

        <div className="fact-box">
            <div className="fact-icon">🪨</div>

            <h3>Rocky Planet</h3>

            <p>
                Mercury has a solid rocky surface covered with
                thousands of impact craters.
            </p>
        </div>

        <div className="fact-box">
            <div className="fact-icon">🌙</div>

            <h3>No Moons</h3>

            <p>
                Unlike Earth, Mercury has no natural satellites
                orbiting around it.
            </p>
        </div>

        <div className="fact-box">
            <div className="fact-icon">⚡</div>

            <h3>Fast Orbit</h3>

            <p>
                Mercury completes one trip around the Sun
                in only 88 Earth days.
            </p>
        </div>

    </div>

</section>
<section className="structure-section">

    <div className="structure-left">

        <span>INTERNAL STRUCTURE</span>

        <h2>Inside Mercury</h2>

        <p>
            Mercury has an enormous iron core that occupies
            nearly 85% of the planet's radius. This giant
            metallic core makes Mercury one of the densest
            planets in our Solar System.
        </p>

        <div className="bars">

            <div className="bar">

                <h4>Iron Core</h4>

                <div className="progress">
                    <div className="core"></div>
                </div>

                <span>85%</span>

            </div>

            <div className="bar">

                <h4>Mantle</h4>

                <div className="progress">
                    <div className="mantle"></div>
                </div>

                <span>10%</span>

            </div>

            <div className="bar">

                <h4>Crust</h4>

                <div className="progress">
                    <div className="crust"></div>
                </div>

                <span>5%</span>

            </div>

        </div>

    </div>

    <div className="structure-right">

        <img src={Mercurypng}alt="Mercury"
        />

    </div>

</section>
<section className="missions-section">

    <div className="section-header">

        <span>SPACE EXPLORATION</span>

        <h2>Mercury Missions</h2>

        <p>
            Humanity has sent several spacecraft to explore
            the closest planet to the Sun.
        </p>

    </div>

    <div className="timeline">

        <div className="mission-card">

            <span className="year">
                1973
            </span>

            <h3>Mariner 10</h3>

            <p>
                The first spacecraft to fly by Mercury and
                capture close-up images.
            </p>

        </div>

        <div className="mission-card">

            <span className="year">
                2004
            </span>

            <h3>MESSENGER</h3>

            <p>
                Orbited Mercury and mapped nearly the
                entire surface of the planet.
            </p>

        </div>

        <div className="mission-card">

            <span className="year">
                2018
            </span>

            <h3>BepiColombo</h3>

            <p>
                A joint ESA and JAXA mission currently
                studying Mercury in detail.
            </p>

        </div>

    </div>

</section>
<section className="gallery-section">

    <div className="section-header">

        <span>PHOTO GALLERY</span>

        <h2>Mercury Gallery</h2>

        <p>
            Explore some of the most beautiful images of Mercury
            captured by NASA and ESA missions.
        </p>

    </div>

    <div className="gallery-grid">

        <div className="gallery-card">
            <img src={MercuryImg} alt="Mercury" />
            <div className="gallery-overlay">
                <h3>Surface View</h3>
            </div>
        </div>

        <div className="gallery-card">
            <img src={Mercury_2} alt="Mercury" />
            <div className="gallery-overlay">
                <h3>another photo</h3>
            </div>
        </div>

        <div className="gallery-card">
            <img src={Mercury_color} alt="Mercury" />
            <div className="gallery-overlay">
                <h3>Color Enhanced</h3>
            </div>
        </div>

        <div className="gallery-card">
            <img src={Mercury_3} alt="Mercury" />
            <div className="gallery-overlay">
                <h3>Impact Craters</h3>
            </div>
        </div>

    </div>

</section>
<section className="did-section">

    <div className="section-header">

        <span>DID YOU KNOW?</span>

        <h2>Amazing Facts</h2>

        <p>
            Here are some surprising facts about Mercury that
            make it one of the most unique planets.
        </p>

    </div>

    <div className="did-grid">

        <div className="did-card">
            <span>☀</span>
            <h3>Longest Day</h3>
            <p>
                One day on Mercury lasts 176 Earth days.
            </p>
        </div>

        <div className="did-card">
            <span>🌡</span>
            <h3>Extreme Temperatures</h3>
            <p>
                Temperatures range from -180°C to 430°C.
            </p>
        </div>

        <div className="did-card">
            <span>🪨</span>
            <h3>Cratered Surface</h3>
            <p>
                Its surface is covered with thousands of impact craters.
            </p>
        </div>

        <div className="did-card">
            <span>🚀</span>
            <h3>Rarely Visited</h3>
            <p>
                Only a few spacecraft have explored Mercury.
            </p>
        </div>

    </div>

</section>
<section className="next-planets">

    <div className="section-header">

        <span>KEEP EXPLORING</span>

        <h2>Explore Other Planets</h2>

        <p>
            Continue your journey through the Solar System and
            discover the unique worlds beyond Mercury.
        </p>

    </div>

    <div className="next-grid">

        <div className="next-card">

            <img src={VenusImg} alt="Venus" />

            <h3>Venus</h3>

            <p>The hottest planet in the Solar System.</p>

            <NavLink to="/planets/venus">
                Explore
            </NavLink>

        </div>

        <div className="next-card">

            <img src={EarthImg} alt="Earth" />

            <h3>Earth</h3>

            <p>Our beautiful blue home planet.</p>

            <NavLink to="/planets/earth">
                Explore
            </NavLink>

        </div>

        <div className="next-card">

            <img src={MarsImg} alt="Mars" />

            <h3>Mars</h3>

            <p>The famous Red Planet waiting to be explored.</p>

            <NavLink to="/planets/mars">
                Explore
            </NavLink>

        </div>

    </div>

</section>
<section className="faq-section">

    <div className="section-header">

        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
            Find quick answers to the most common questions
            about Mercury.
        </p>

    </div>

    <div className="faq-container">

        <details>

            <summary>Why is Mercury the closest planet to the Sun?</summary>

            <p>
                Mercury orbits at an average distance of about
                58 million kilometers from the Sun.
            </p>

        </details>

        <details>

            <summary>Does Mercury have moons?</summary>

            <p>
                No. Mercury has no natural satellites.
            </p>

        </details>

        <details>

            <summary>Why is Mercury so hot during the day?</summary>

            <p>
                Because it has almost no atmosphere to protect
                its surface from the Sun's heat.
            </p>

        </details>

        <details>

            <summary>Can humans live on Mercury?</summary>

            <p>
                No. Extreme temperatures and intense solar
                radiation make it impossible.
            </p>

        </details>

    </div>

</section>

      <Footer />
 </div>
    </>
  );
}

export default Mercury;