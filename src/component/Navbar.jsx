import React from "react";

function Navbar({ searchQuery, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="navbar__title">Firza Note</div>
      <input type="text" placeholder="Search Note..." value={searchQuery} onChange={onSearchChange} className="navbar__search-bar" />
    </nav>
  );
}

export default Navbar;
