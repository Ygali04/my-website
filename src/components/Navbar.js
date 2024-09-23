import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../css-components/Navbar.css"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {setExpandNavbar(false);}, [location]);

  return (
    <div className={`navbar ${expandNavbar ? "open" : "closed"}`}>
        <div className="toggleButton">
            <button onClick={() => setExpandNavbar((prev) => !prev)}> 
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/my-website"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/exp"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar