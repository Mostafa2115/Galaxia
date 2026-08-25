import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const API_BASE_URL = "https://localhost:44321/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("galaxia_user");
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
      }
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("galaxia_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("galaxia_user");
    }
  }, [user]);

  // Compute stats dynamically based on favorites
  const computeStats = (favoritesList) => {
    const favs = favoritesList || [];
    return {
      planets: favs.filter((f) => f.category === "Planet").length,
      moons: favs.filter((f) => f.category === "Moon").length,
      galaxies: favs.filter((f) => f.category === "Galaxy").length,
      favoritesCount: favs.length,
    };
  };

  // Helper to format database user object for frontend consumption
  const formatUser = (dbUser) => {
    if (!dbUser) return null;
    return {
      ...dbUser,
      // Map ItemId back to id for frontend compatibility
      favorites: (dbUser.favorites || []).map((fav) => ({
        id: fav.itemId,
        title: fav.title,
        category: fav.category,
        path: fav.path,
        desc: fav.desc,
      })),
      stats: computeStats(dbUser.favorites),
    };
  };

  // Register New User
  const register = async (fullName, email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to create explorer account.");
    }

    const data = await response.json();
    const formatted = formatUser(data);
    setUser(formatted);
    return formatted;
  };

  // Sign In Existing User
  const login = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Invalid credentials.");
    }

    const data = await response.json();
    const formatted = formatUser(data);
    setUser(formatted);
    return formatted;
  };

  // Sign Out
  const logout = () => {
    setUser(null);
  };

  // Update Profile Info
  const updateProfile = async (updatedData) => {
    if (!user) return;

    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        fullName: updatedData.fullName || user.fullName,
        username: updatedData.username || user.username,
        location: updatedData.location !== undefined ? updatedData.location : user.location,
        favoriteObject: updatedData.favoriteObject !== undefined ? updatedData.favoriteObject : user.favoriteObject,
        bio: updatedData.bio !== undefined ? updatedData.bio : user.bio,
        avatar: updatedData.avatar !== undefined ? updatedData.avatar : user.avatar,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to update profile.");
    }

    const data = await response.json();
    const formatted = formatUser(data);
    setUser(formatted);
    return formatted;
  };

  // Change Password
  const changePassword = async (currentPassword, newPassword) => {
    if (!user) throw new Error("No explorer session active.");

    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        currentPassword,
        newPassword,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to update password.");
    }

    return await response.json();
  };

  // Toggle Favorite Item
  const toggleFavorite = async (item) => {
    if (!user) return;

    const response = await fetch(`${API_BASE_URL}/auth/toggle-favorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        itemId: item.id,
        title: item.title,
        category: item.category,
        path: item.path,
        desc: item.desc,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to save bookmark.");
    }

    const data = await response.json();
    const formatted = formatUser(data);
    setUser(formatted);
    return formatted;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        updateProfile,
        changePassword,
        toggleFavorite,
        isAuthenticated: !!user,
        API_BASE_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
