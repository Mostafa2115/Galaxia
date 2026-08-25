import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Compare.css";

function Compare() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanetA, setSelectedPlanetA] = useState("");
  const [selectedPlanetB, setSelectedPlanetB] = useState("");
  const [planetAData, setPlanetAData] = useState(null);
  const [planetBData, setPlanetBData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:44321/api/planets")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Failed to fetch planetary data.");
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
        // Pre-select Earth and Mars if available
        if (data.length > 0) {
          const earth = data.find((p) => p.name.toLowerCase() === "earth");
          const mars = data.find((p) => p.name.toLowerCase() === "mars");
          if (earth) {
            setSelectedPlanetA(earth.name);
            setPlanetAData(earth);
          } else {
            setSelectedPlanetA(data[0].name);
            setPlanetAData(data[0]);
          }

          if (mars) {
            setSelectedPlanetB(mars.name);
            setPlanetBData(mars);
          } else if (data.length > 1) {
            setSelectedPlanetB(data[1].name);
            setPlanetBData(data[1]);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSelectA = (e) => {
    const name = e.target.value;
    setSelectedPlanetA(name);
    const data = planets.find((p) => p.name === name);
    setPlanetAData(data || null);
  };

  const handleSelectB = (e) => {
    const name = e.target.value;
    setSelectedPlanetB(name);
    const data = planets.find((p) => p.name === name);
    setPlanetBData(data || null);
  };

  return (
    <>
      <Navbar />

      <main className="compare-page">
        <section className="compare-hero">
          <h1>Planet Comparison</h1>
          <p>Compare the atmospheric, physical and orbital parameters of different celestial bodies in our solar system.</p>
        </section>

        <section className="compare-container">
          <div className="compare-selectors">
            <div className="selector-group">
              <label htmlFor="planetA">Select First Planet</label>
              <select id="planetA" value={selectedPlanetA} onChange={handleSelectA}>
                <option value="">-- Choose Planet --</option>
                {planets.map((p) => (
                  <option key={`a-${p.name}`} value={p.name} disabled={p.name === selectedPlanetB}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="compare-versus">VS</div>

            <div className="selector-group">
              <label htmlFor="planetB">Select Second Planet</label>
              <select id="planetB" value={selectedPlanetB} onChange={handleSelectB}>
                <option value="">-- Choose Planet --</option>
                {planets.map((p) => (
                  <option key={`b-${p.name}`} value={p.name} disabled={p.name === selectedPlanetA}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="compare-loading">Retrieving planetary telemetry...</div>
          ) : planetAData && planetBData ? (
            <div className="compare-table-wrapper">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Metric / Attribute</th>
                    <th>{planetAData.name}</th>
                    <th>{planetBData.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Classification</strong></td>
                    <td><span className="planet-type-badge">{planetAData.type}</span></td>
                    <td><span className="planet-type-badge">{planetBData.type}</span></td>
                  </tr>
                  <tr>
                    <td><strong>Mass</strong></td>
                    <td className="metric-val">{planetAData.mass}</td>
                    <td className="metric-val">{planetBData.mass}</td>
                  </tr>
                  <tr>
                    <td><strong>Diameter</strong></td>
                    <td className="metric-val">{planetAData.diameter}</td>
                    <td className="metric-val">{planetBData.diameter}</td>
                  </tr>
                  <tr>
                    <td><strong>Surface Gravity</strong></td>
                    <td className="metric-val">{planetAData.gravity}</td>
                    <td className="metric-val">{planetBData.gravity}</td>
                  </tr>
                  <tr>
                    <td><strong>Distance from Sun</strong></td>
                    <td className="metric-val">{planetAData.distanceFromSun}</td>
                    <td className="metric-val">{planetBData.distanceFromSun}</td>
                  </tr>
                  <tr>
                    <td><strong>Orbital Period</strong></td>
                    <td className="metric-val">{planetAData.orbitalPeriod}</td>
                    <td className="metric-val">{planetBData.orbitalPeriod}</td>
                  </tr>
                  <tr>
                    <td><strong>Surface Temp Range</strong></td>
                    <td className="metric-val">{planetAData.temperature}</td>
                    <td className="metric-val">{planetBData.temperature}</td>
                  </tr>
                  <tr>
                    <td><strong>Moons Count</strong></td>
                    <td className="metric-val">{planetAData.moonsCount} Moons</td>
                    <td className="metric-val">{planetBData.moonsCount} Moons</td>
                  </tr>
                  <tr>
                    <td><strong>General Description</strong></td>
                    <td className="desc-cell">{planetAData.description}</td>
                    <td className="desc-cell">{planetBData.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="compare-placeholder">
              <p>Please select two distinct celestial bodies to compare parameters.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Compare;
