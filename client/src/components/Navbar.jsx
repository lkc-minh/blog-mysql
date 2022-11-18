import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuthContext } from "../contexts/authContext";

function Navbar() {
  const { currentUser, logout } = useAuthContext();
  console.log({ currentUser });
  return (
    <div className="Navbar">
      <div className="container">
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="links">
          <Link className="link" to={"/?cat=art"}>
            <h6>ART</h6>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h6>science</h6>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h6>technology</h6>
          </Link>
          <Link className="link" to={"/?cat=cinema"}>
            <h6>cinema</h6>
          </Link>
          <Link className="link" to={"/?cat=design"}>
            <h6>design</h6>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h6>food</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to={"/login"} className="link">
              Login
            </Link>
          )}
          <span className="write">
            <Link to={"/write"} className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
