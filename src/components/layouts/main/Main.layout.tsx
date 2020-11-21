import React from "react";
import { KeyValuePair } from "../../../interfaces/common.interface";

function MainLayout(props: KeyValuePair) {
  return (
    <div>
      <p>Hasaki</p>
      {props.children}
    </div>
  );
}

export default MainLayout;
