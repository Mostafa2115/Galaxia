using System.Text.Json.Serialization;

namespace Galaxia.Models;

public class User
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Rank { get; set; } = "Novice Explorer";
    public string Badge { get; set; } = "Level 1 Voyager";
    public int Level { get; set; } = 1;
    public int Exp { get; set; } = 0;
    public int MaxExp { get; set; } = 1000;
    public string Joined { get; set; } = string.Empty;
    public string Location { get; set; } = "Earth Orbit Base";
    public string Bio { get; set; } = "Newly registered space explorer ready to discover distant stars and galaxies.";
    public string FavoriteObject { get; set; } = "Solar System";
    public string? Avatar { get; set; } // Base64 string for photo
    public string Role { get; set; } = "User"; // "User" or "Admin"

    public List<Favorite> Favorites { get; set; } = new();
    public List<Activity> Activities { get; set; } = new();
}
