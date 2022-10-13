import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
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
                    <span>John</span>
                    <span>Logout</span>
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
