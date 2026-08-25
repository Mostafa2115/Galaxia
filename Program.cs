using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Galaxia.Data;
using Galaxia.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure EF Core with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.AddOpenApi();

var app = builder.Build();

// Automatically ensure DB is created and seeded
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<AppDbContext>();
        context.Database.EnsureCreated();

        // Seed Admin User if not exists
        var adminEmail = "admin@galaxia.com";
        var hasAdmin = await context.Users.AnyAsync(u => u.Email == adminEmail);
        if (!hasAdmin)
        {
            var admin = new User
            {
                FullName = "Galaxia Commander",
                Email = adminEmail,
                Username = "@admin",
                Rank = "Galactic Commander",
                Badge = "Level 99 Voyager",
                Level = 99,
                Exp = 10000,
                MaxExp = 10000,
                Joined = "August 2026",
                Location = "Orbit Base Prime",
                Bio = "System Administrator and Cosmic Commander of the Galaxia platform.",
                FavoriteObject = "Andromeda Galaxy (M31)",
                Role = "Admin"
            };

            var hasher = new PasswordHasher<User>();
            admin.PasswordHash = hasher.HashPassword(admin, "adminpassword");

            admin.Activities.Add(new Activity
            {
                Title = "Initialized Galaxia Defense System",
                Time = "Just now"
            });

            context.Users.Add(admin);
            await context.SaveChangesAsync();
        }
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while creating or seeding the database.");
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
