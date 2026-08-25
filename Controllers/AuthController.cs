using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Galaxia.Data;
using Galaxia.Models;

namespace Galaxia.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly PasswordHasher<User> _passwordHasher = new();

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new { message = "Email and Password are required." });
        }

        var existingUser = await _context.Users.AnyAsync(u => u.Email.ToLower() == request.Email.ToLower());
        if (existingUser)
        {
            return BadRequest(new { message = "Email is already registered." });
        }

        var user = new User
        {
            FullName = string.IsNullOrWhiteSpace(request.FullName) ? "Cosmic Explorer" : request.FullName,
            Email = request.Email.Trim(),
            Username = "@" + (string.IsNullOrWhiteSpace(request.FullName) ? "explorer" : request.FullName).ToLower().Replace(" ", "_"),
            Rank = "Novice Explorer",
            Badge = "Level 1 Voyager",
            Level = 1,
            Exp = 0,
            MaxExp = 1000,
            Joined = DateTime.Now.ToString("MMMM yyyy"),
            Location = "Earth Orbit Base",
            Bio = "Newly registered space explorer ready to discover distant stars and galaxies.",
            FavoriteObject = "Solar System",
            Role = "User"
        };

        user.PasswordHash = _passwordHasher.HashPassword(user, request.Password);

        // Add default welcome activity
        user.Activities.Add(new Activity
        {
            Title = "Joined Galaxia Space Program",
            Time = "Just now"
        });

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(user);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new { message = "Email and Password are required." });
        }

        var user = await _context.Users
            .Include(u => u.Favorites)
            .Include(u => u.Activities)
            .FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());

        if (user == null)
        {
            return Unauthorized(new { message = "Invalid email or password." });
        }

        var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);
        if (verificationResult == PasswordVerificationResult.Failed)
        {
            return Unauthorized(new { message = "Invalid email or password." });
        }

        return Ok(user);
    }

    [HttpPost("change-password")]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.CurrentPassword) || string.IsNullOrWhiteSpace(request.NewPassword))
        {
            return BadRequest(new { message = "All password fields are required." });
        }

        var user = await _context.Users
            .Include(u => u.Activities)
            .FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());

        if (user == null)
        {
            return NotFound(new { message = "User not found." });
        }

        var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.CurrentPassword);
        if (verificationResult == PasswordVerificationResult.Failed)
        {
            return BadRequest(new { message = "Incorrect current password." });
        }

        user.PasswordHash = _passwordHasher.HashPassword(user, request.NewPassword);
        user.Activities.Add(new Activity
        {
            Title = "Changed security credentials",
            Time = "Just now"
        });

        await _context.SaveChangesAsync();
        return Ok(new { message = "Password updated successfully." });
    }

    [HttpPut("profile")]
    public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email))
        {
            return BadRequest(new { message = "Email is required to identify the profile." });
        }

        var user = await _context.Users
            .Include(u => u.Favorites)
            .Include(u => u.Activities)
            .FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());

        if (user == null)
        {
            return NotFound(new { message = "User profile not found." });
        }

        user.FullName = request.FullName ?? user.FullName;
        user.Username = request.Username ?? user.Username;
        user.Location = request.Location ?? user.Location;
        user.FavoriteObject = request.FavoriteObject ?? user.FavoriteObject;
        user.Bio = request.Bio ?? user.Bio;
        user.Avatar = request.Avatar; // can be null/empty or long base64 string

        user.Activities.Add(new Activity
        {
            Title = "Updated explorer identity parameters",
            Time = "Just now"
        });

        await _context.SaveChangesAsync();
        return Ok(user);
    }

    [HttpPost("toggle-favorite")]
    public async Task<IActionResult> ToggleFavorite([FromBody] ToggleFavoriteRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.ItemId))
        {
            return BadRequest(new { message = "Email and Item ID are required." });
        }

        var user = await _context.Users
            .Include(u => u.Favorites)
            .Include(u => u.Activities)
            .FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());

        if (user == null)
        {
            return NotFound(new { message = "User not found." });
        }

        var favorite = user.Favorites.FirstOrDefault(f => f.ItemId == request.ItemId);
        if (favorite != null)
        {
            user.Favorites.Remove(favorite);
            user.Activities.Add(new Activity
            {
                Title = $"Removed {request.Title} from astronomical favorites",
                Time = "Just now"
            });
        }
        else
        {
            var newFavorite = new Favorite
            {
                ItemId = request.ItemId,
                Title = request.Title,
                Category = request.Category,
                Path = request.Path,
                Desc = request.Desc
            };
            user.Favorites.Add(newFavorite);
            user.Activities.Add(new Activity
            {
                Title = $"Bookmarked {request.Title} in cosmic archive",
                Time = "Just now"
            });
        }

        await _context.SaveChangesAsync();
        return Ok(user);
    }
}

public record RegisterRequest(string FullName, string Email, string Password);
public record LoginRequest(string Email, string Password);
public record ChangePasswordRequest(string Email, string CurrentPassword, string NewPassword);
public record UpdateProfileRequest(string Email, string FullName, string Username, string Location, string FavoriteObject, string Bio, string? Avatar);
public record ToggleFavoriteRequest(string Email, string ItemId, string Title, string Category, string Path, string Desc);
