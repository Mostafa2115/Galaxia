namespace Galaxia.Models;

public class PlanetData
{
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty; // Inner, Outer, Dwarf
    public string Mass { get; set; } = string.Empty;
    public string Diameter { get; set; } = string.Empty;
    public string Gravity { get; set; } = string.Empty;
    public string DistanceFromSun { get; set; } = string.Empty;
    public string OrbitalPeriod { get; set; } = string.Empty;
    public string Temperature { get; set; } = string.Empty;
    public int MoonsCount { get; set; }
    public string Description { get; set; } = string.Empty;
}
