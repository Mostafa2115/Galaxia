using System.Text.Json.Serialization;

namespace Galaxia.Models;

public class Favorite
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string ItemId { get; set; } = string.Empty; // e.g. "planet-earth"
    public string Title { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Path { get; set; } = string.Empty;
    public string Desc { get; set; } = string.Empty;

    [JsonIgnore]
    public User? User { get; set; }
}
