import React from "react";
import { NavLink } from "react-router-dom";
import pokeBall from "../assets/pokeball.png";

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between p-3 nav-fondo">
      <NavLink to="/">
        <img src={pokeBall} alt="Poked ball" className="img-icon" />
      </NavLink>

      <div className="d-flex gap-3">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={"/pokemones"}
        >
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};
