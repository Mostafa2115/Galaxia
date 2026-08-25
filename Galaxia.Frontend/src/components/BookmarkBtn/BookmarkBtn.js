import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./BookmarkBtn.css";

function BookmarkBtn({ item }) {
  const { user, toggleFavorite } = useAuth();
  const navigate = useNavigate();

  const isSaved = user?.favorites?.some((fav) => String(fav.id) === String(item.id));

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      alert("Please sign in to save celestial objects to your explorer profile!");
      navigate("/signin");
      return;
    }
    toggleFavorite(item);
  };

  return (
    <button
      className={`bookmark-btn ${isSaved ? "saved" : ""}`}
      onClick={handleBookmarkClick}
      title={isSaved ? "Remove from Saved Favorites" : "Save to Profile Favorites"}
      aria-label="Bookmark item"
    >
      {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      <span>{isSaved ? "Saved" : "Save"}</span>
    </button>
  );
}

export default BookmarkBtn;
