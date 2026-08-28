using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Galaxia.Data;
using Galaxia.Models;

namespace Galaxia.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly AppDbContext _context;

    public AdminController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("users-count")]
    public async Task<IActionResult> GetUsersCount()
    {
        var count = await _context.Users.CountAsync();
        return Ok(new { count });
    }

    [HttpGet("users")]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _context.Users
            .Select(u => new
            {
                u.Id,
                u.FullName,
                u.Username,
                u.Email,
                u.Role,
                u.Rank,
                u.Badge,
                u.Level,
                u.Joined,
                u.Location,
                FavoritesCount = u.Favorites.Count
            })
            .ToListAsync();

        return Ok(users);
    }

    [HttpDelete("users/{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound(new { message = "User not found." });
        }

        if (user.Role == "Admin" && await _context.Users.CountAsync(u => u.Role == "Admin") <= 1)
        {
            return BadRequest(new { message = "Cannot delete the last remaining Admin account." });
        }

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "User deleted successfully." });
    }

    [HttpPut("users/{id}/role")]
    public async Task<IActionResult> ToggleUserRole(int id, [FromBody] ToggleRoleRequest request)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound(new { message = "User not found." });
        }

        if (user.Role == "Admin" && request.Role != "Admin" && await _context.Users.CountAsync(u => u.Role == "Admin") <= 1)
        {
            return BadRequest(new { message = "Cannot demote the last remaining Admin account." });
        }

        user.Role = request.Role;
        if (user.Role == "Admin")
        {
            user.Rank = "Galactic Commander";
            user.Badge = "Level 99 Voyager";
            user.Level = 99;
        }
        else
        {
            user.Rank = "Senior Cosmic Explorer";
            user.Badge = "Level 42 Voyager";
            user.Level = 42;
        }

        await _context.SaveChangesAsync();
        return Ok(new { message = $"User role updated to {request.Role}." });
    }
}

public record ToggleRoleRequest(string Role);
