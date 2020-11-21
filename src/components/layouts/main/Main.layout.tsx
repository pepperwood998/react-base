import React from "react";
import { KeyValuePair } from "../../../interfaces/common.interface";

function MainLayout(props: KeyValuePair) {
  return <div className="h-full bg-blue-500">{props.children}</div>;
}

export default MainLayout;
