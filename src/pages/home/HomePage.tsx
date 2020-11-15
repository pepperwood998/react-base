import React from "react";
import HomeBox from "./components/HomeBox";

import "./styles.scss";

function HomePage() {
  return (
    <div className="flex text-3xl items-center">
      <span>Home</span>
      <div className="pl-2">
        <HomeBox></HomeBox>
      </div>
    </div>
  );
}

export default HomePage;
