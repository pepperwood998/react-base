import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { KeyValuePair } from "../../../interfaces/common.interface";

NavigationTabLayout.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
};

NavigationTabLayout.defaultProps = {
  items: []
};

function NavigationTabLayout(props: KeyValuePair) {
  return (
    <div>
      <nav>
        <ul className="flex">
          {props.items?.map((item: any, index: number) => (
            <li key={index}>
              <NavLink to={item?.href} className="block py-4 px-2">
                {item?.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>{props.children}</div>
    </div>
  );
}

export default NavigationTabLayout;
