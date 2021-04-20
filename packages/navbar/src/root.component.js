import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </Router>
  );
}
