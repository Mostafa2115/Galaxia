using Microsoft.AspNetCore.Mvc;
using Galaxia.Models;

namespace Galaxia.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlanetsController : ControllerBase
{
    private static readonly List<PlanetData> PlanetDatabase = new()
    {
        new PlanetData
        {
            Name = "Mercury",
            Type = "Inner Planet",
            Mass = "0.330 x 10^24 kg",
            Diameter = "4,879 km",
            Gravity = "3.7 m/s²",
            DistanceFromSun = "57.9 million km",
            OrbitalPeriod = "88 days",
            Temperature = "-173 to 427 °C",
            MoonsCount = 0,
            Description = "The smallest planet in our Solar System and closest to the Sun. It experiences extreme temperature swings."
        },
        new PlanetData
        {
            Name = "Venus",
            Type = "Inner Planet",
            Mass = "4.87 x 10^24 kg",
            Diameter = "12,104 km",
            Gravity = "8.9 m/s²",
            DistanceFromSun = "108.2 million km",
            OrbitalPeriod = "225 days",
            Temperature = "462 °C",
            MoonsCount = 0,
            Description = "The hottest planet in the Solar System, covered by a thick atmosphere of greenhouse gases and sulfuric acid clouds."
        },
        new PlanetData
        {
            Name = "Earth",
            Type = "Inner Planet",
            Mass = "5.97 x 10^24 kg",
            Diameter = "12,742 km",
            Gravity = "9.8 m/s²",
            DistanceFromSun = "149.6 million km",
            OrbitalPeriod = "365 days",
            Temperature = "-88 to 58 °C",
            MoonsCount = 1,
            Description = "Our home planet, and the only known world in the universe that is host to water oceans and life."
        },
        new PlanetData
        {
            Name = "Mars",
            Type = "Inner Planet",
            Mass = "0.642 x 10^24 kg",
            Diameter = "6,779 km",
            Gravity = "3.7 m/s²",
            DistanceFromSun = "227.9 million km",
            OrbitalPeriod = "687 days",
            Temperature = "-153 to 20 °C",
            MoonsCount = 2,
            Description = "The famous Red Planet, with thin carbon dioxide atmosphere, polar ice caps, and historic target for human exploration."
        },
        new PlanetData
        {
            Name = "Jupiter",
            Type = "Outer Planet",
            Mass = "1,898 x 10^24 kg",
            Diameter = "139,820 km",
            Gravity = "24.8 m/s²",
            DistanceFromSun = "778.5 million km",
            OrbitalPeriod = "12 years",
            Temperature = "-108 °C",
            MoonsCount = 95,
            Description = "The largest planet in our solar system, a gas giant known for its Great Red Spot storm and massive magnetosphere."
        },
        new PlanetData
        {
            Name = "Saturn",
            Type = "Outer Planet",
            Mass = "568 x 10^24 kg",
            Diameter = "116,460 km",
            Gravity = "10.4 m/s²",
            DistanceFromSun = "1.4 billion km",
            OrbitalPeriod = "29 years",
            Temperature = "-139 °C",
            MoonsCount = 146,
            Description = "The second-largest planet, adorned with thousands of icy rings and a diverse array of ocean-bearing moons."
        },
        new PlanetData
        {
            Name = "Uranus",
            Type = "Outer Planet",
            Mass = "86.8 x 10^24 kg",
            Diameter = "50,724 km",
            Gravity = "8.7 m/s²",
            DistanceFromSun = "2.9 billion km",
            OrbitalPeriod = "84 years",
            Temperature = "-197 °C",
            MoonsCount = 28,
            Description = "An ice giant rotating on an axis tilted nearly 90 degrees, giving it extreme seasons and faint rings."
        },
        new PlanetData
        {
            Name = "Neptune",
            Type = "Outer Planet",
            Mass = "102 x 10^24 kg",
            Diameter = "49,244 km",
            Gravity = "11.1 m/s²",
            DistanceFromSun = "4.5 billion km",
            OrbitalPeriod = "165 years",
            Temperature = "-201 °C",
            MoonsCount = 16,
            Description = "The windiest planet in our solar system, an ice giant composed of water, ammonia, and methane fluids."
        },
        new PlanetData
        {
            Name = "Pluto",
            Type = "Dwarf Planet",
            Mass = "0.013 x 10^24 kg",
            Diameter = "2,376 km",
            Gravity = "0.62 m/s²",
            DistanceFromSun = "5.9 billion km",
            OrbitalPeriod = "248 years",
            Temperature = "-225 °C",
            MoonsCount = 5,
            Description = "The most famous dwarf planet, possessing a heart-shaped nitrogen glacier, icy mountains, and a large moon Charon."
        },
        new PlanetData
        {
            Name = "Ceres",
            Type = "Dwarf Planet",
            Mass = "0.0009 x 10^24 kg",
            Diameter = "940 km",
            Gravity = "0.28 m/s²",
            DistanceFromSun = "414 million km",
            OrbitalPeriod = "4.6 years",
            Temperature = "-105 °C",
            MoonsCount = 0,
            Description = "The largest object in the asteroid belt between Mars and Jupiter, containing water ice and muddy brines."
        },
        new PlanetData
        {
            Name = "Haumea",
            Type = "Dwarf Planet",
            Mass = "0.004 x 10^24 kg",
            Diameter = "1,600 km",
            Gravity = "0.4 m/s²",
            DistanceFromSun = "6.4 billion km",
            OrbitalPeriod = "285 years",
            Temperature = "-241 °C",
            MoonsCount = 2,
            Description = "An unusually fast-spinning ellipsoid dwarf planet in the Kuiper Belt, coated in crystalline water ice."
        },
        new PlanetData
        {
            Name = "Makemake",
            Type = "Dwarf Planet",
            Mass = "0.003 x 10^24 kg",
            Diameter = "1,430 km",
            Gravity = "0.5 m/s²",
            DistanceFromSun = "6.8 billion km",
            OrbitalPeriod = "310 years",
            Temperature = "-243 °C",
            MoonsCount = 1,
            Description = "One of the largest Kuiper Belt objects, discovered in 2005, with methane, ethane, and nitrogen ice surface."
        },
        new PlanetData
        {
            Name = "Eris",
            Type = "Dwarf Planet",
            Mass = "0.017 x 10^24 kg",
            Diameter = "2,326 km",
            Gravity = "0.82 m/s²",
            DistanceFromSun = "10.1 billion km",
            OrbitalPeriod = "557 years",
            Temperature = "-243 °C",
            MoonsCount = 1,
            Description = "One of the most massive dwarf planets in our solar system, orbiting in the scattered disc outside the Kuiper belt."
        }
    };

    [HttpGet]
    public IActionResult GetPlanets()
    {
        return Ok(PlanetDatabase);
    }
}
