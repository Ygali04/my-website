import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

//styles
import "../css-components/Navbar.css"

//assets & icons
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {setExpandNavbar(false);}, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "closed"}>
        <div className="toggleButton">
            <button onClick={() => {
                    setExpandNavbar((prev) => !prev)
                }}
            > 
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/"> Homepage </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/exp"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar