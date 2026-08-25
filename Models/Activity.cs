using System.Text.Json.Serialization;

namespace Galaxia.Models;

public class Activity
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Time { get; set; } = string.Empty;

    [JsonIgnore]
    public User? User { get; set; }
}
