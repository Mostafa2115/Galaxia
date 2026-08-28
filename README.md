# Galaxia - Cosmic Exploration Space Portal

Galaxia is a comprehensive astronomical exploration web portal designed for space enthusiasts. It features interactive 3D solar system visualizations, celestial catalogs, space telemetry data archives, and personalized explorer profiles.

The project is structured cleanly into two main components:
- **`Galaxia.Backend`**: An ASP.NET Core Web API powered by SQL Server and Entity Framework Core.
- **`Galaxia.Frontend`**: A modern React SPA utilizing Three.js and React Three Fiber for interactive 3D cosmic scenes.

---

## Architecture Overview

```
Galaxia/
│
├── Galaxia.slnx                 # Root solution file for Visual Studio
├── README.md                    # Root project documentation (this file)
│
├── Galaxia.Backend/             # ASP.NET Core Web API project folder
│   ├── Controllers/             # REST controllers (Auth, Admin, Planets)
│   ├── Data/                    # AppDbContext for Entity Framework Core
│   ├── Models/                  # Data entities (User, Favorite, Activity)
│   ├── Properties/              # Launch settings & profile configurations
│   ├── appsettings.json         # Database connection & application settings
│   └── Program.cs               # API configuration, CORS, and seed operations
│
└── Galaxia.Frontend/            # React client project folder
    ├── public/                  # Static assets & document templates
    └── src/                     # React source components
        ├── components/          # Shared visual controls (Navbar, Footer, Hero)
        ├── context/             # AuthContext handling API state machine
        ├── pages/               # Views (Home, Compare, Profile, Details)
        ├── App.js               # Route mapping configurations
        └── index.js             # Root render and provider setup
```

---

## Tech Stack

### Backend
- **Framework**: .NET 10.0 ASP.NET Core Web API
- **ORM**: Entity Framework Core
- **Database**: Microsoft SQL Server (LocalDB)
- **Security**: PBKDF2 Password Hashing (`Microsoft.AspNetCore.Identity.PasswordHasher`)
- **API Spec**: OpenAPI & Swagger UI interactive documentation (available at `/swagger` in Development mode)

### Frontend
- **Framework**: React 19.x SPA
- **Router**: React Router DOM v7
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: React Icons (FontAwesome & Gi Icons)

---

## Core Features

1. **Explorer Authentication**: Secure user registration, sign-in, and local state sessions.
2. **Security Controls**: In-app password updating with current credential validation.
3. **Platform Statistics**: Public user-metrics dynamically queried and displayed in the "Space Statistics" panel.
4. **Admin Panel Control**: Visible only to users with the `Admin` role. Admins can view the explorer registry list, toggle system privileges (User ⇄ Admin), or delete accounts.
5. **Celestial Comparison**: Interactive side-by-side telemetry comparison of 13 planets and dwarf planets, showing physical parameters like mass, gravity, orbital period, moons count, and temperatures.

---

## Setup & Running the Application

### 1. Backend Setup (`Galaxia.Backend`)

#### Prerequisites
- Install [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- Install [SQL Server Express / LocalDB](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb) (standard with Visual Studio on Windows)

#### Steps
1. Navigate to the backend directory:
   ```bash
   cd Galaxia.Backend
   ```
2. Configure your SQL Server connection string in `appsettings.json` under `ConnectionStrings:DefaultConnection`. The default uses LocalDB:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=GalaxiaDb;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   ```
3. Trust your local HTTPS development certificates:
   ```bash
   dotnet dev-certs https --trust
   ```
4. Run the project:
   ```bash
   dotnet run
   ```
   *The application will automatically initialize the database schema and seed a default Admin account if it does not exist.*

#### Seed Admin Credentials
- **Email**: `admin@galaxia.com`
- **Password**: `adminpassword`

---

### 2. Frontend Setup (`Galaxia.Frontend`)

#### Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS Version recommended)

#### Steps
1. Navigate to the frontend directory:
   ```bash
   cd Galaxia.Frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. **Important local SSL configuration**:
   Because the backend runs on HTTPS (`https://localhost:44321`) using a self-signed development certificate, the browser will block requests until trusted.
   - Open this URL directly in your browser: [https://localhost:44321/api/admin/users-count](https://localhost:44321/api/admin/users-count)
   - When the security warning page appears, click **Advanced** (خيارات متقدمة) and click **Proceed to localhost (unsafe)** (متابعة).
   - Once trusted, you should see a simple JSON payload response: `{"count":1}`.
4. Run the React development server:
   ```bash
   npm start
   ```
   *This opens `http://localhost:3000` in your web browser.*

---

## API Endpoints

### Authentication (`/api/auth`)
- `POST /api/auth/register`: Creates a new user account.
- `POST /api/auth/login`: Validates credentials and starts session.
- `POST /api/auth/change-password`: Modifies password after checking current hash.
- `PUT /api/auth/profile`: Updates biography, avatar, location, etc.
- `POST /api/auth/toggle-favorite`: Toggles bookmark state for celestial objects.

### Admin Dashboard (`/api/admin`)
- `GET /api/admin/users-count`: Returns the total count of registered explorers (public).
- `GET /api/admin/users`: Lists detailed profiles of all registered users (admin only).
- `PUT /api/admin/users/{id}/role`: Elevates or demotes user roles between `User` and `Admin`.
- `DELETE /api/admin/users/{id}`: Permanently deletes a user from the system.

### Celestial Catalog (`/api/planets`)
- `GET /api/planets`: Pulls the complete database of 13 planets and dwarf planets.
