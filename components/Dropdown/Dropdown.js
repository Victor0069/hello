import React, { useState } from "react";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
function Dropdown({ name, body, id }) {
  const [toggle, setToggle] = useState(false);

  const dropDown = (e) => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={"dropdown"} onClick={(e) => dropDown(e)} id={id}>
        <div className="dropText">
          <h2>{name}</h2>
        </div>
        {toggle ? (
          <div style={{ fontSize: "2.5rem" }}>
            <FontAwesomeIcon color="#092643" icon={faCircleChevronUp} />
          </div>
        ) : (
          <div style={{ fontSize: "2.5rem" }}>
            <FontAwesomeIcon color="#092643" icon={faCircleChevronDown} />
          </div>
        )}
      </div>

      {toggle ? (
        <div className={"dropContent"}>
          <pre>{body}</pre>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dropdown;
