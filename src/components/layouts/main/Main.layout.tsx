import React from "react";
import { KeyValuePair } from "../../../interfaces/common.interface";
import { NavLink } from "react-router-dom";

function MainLayout(props: KeyValuePair) {
  return (
    <div className="h-full flex bg-blue-500">
      <nav className="w-1/6">
        <ul>
          <li>
            <NavLink to="/launcher/add">Create Page</NavLink>
          </li>
          <li>
            <NavLink to="/launcher/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-5/6">{props.children}</div>
    </div>
  );
}

export default MainLayout;
