import React from "react";
import { NavLink } from "react-router-dom";
import { KeyValuePair } from "../../../interfaces/common.interface";

function LandingLayout(props: KeyValuePair) {
  return (
    <div className="h-full bg-gray-700">
      <nav className="flex justify-between items-center px-2">
        <ul className="flex items-center text-gray-300">
          <li>
            <NavLink to="/" className="block py-4 px-3">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="block py-4 px-3">
              About
            </NavLink>
          </li>
        </ul>
        <input type="text" />
      </nav>
      <main>{props.children}</main>
    </div>
  );
}

export default LandingLayout;
