import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { MenuData } from "./MenuData";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="logo">
          Zuluyo <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icons">
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={() => setClicked(!clicked)}
          ></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          {isAuthenticated ? (
            <li>
              <NavLink
                className="nav-links-mobile"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="nav-links-mobile"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
