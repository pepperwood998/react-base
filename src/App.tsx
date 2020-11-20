import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouting from "./App.route";
import "./styles/global.scss";

function App() {
  return (
    <div className="h-full bg-gray-700 text-gray-300">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
        <div className="flex-center">
          <AppRouting></AppRouting>
        </div>
      </Router>
    </div>
  );
}

export default App;
