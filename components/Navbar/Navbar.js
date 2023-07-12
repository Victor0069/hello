import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Logos, Pictures/spacex-logo-black-and-white.png";

export default function Navbar({setFocus}) {
  // const [focus, setFocus] = useState(false)

  const handleClick = () => {
    setFocus(true)
  }
  return (
    <div className="navbarMain">
      <div className="innerNavbar">
        <div className="left">
          <img width={300} src={logo} />
        </div>
        <div className="right">
          <button
            onClick={() =>
              window.scrollTo({ top: 745, left: 0, behavior: "smooth" })
            }
          >
            ABOUT
          </button>
          <button onClick={handleClick}>LOG IN</button>
        </div>
      </div>
    </div>
  );
}
