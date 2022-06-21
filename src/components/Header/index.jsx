import React from "react";
import {
  Link
} from "react-router-dom";

import Profile from "./Profile";

const Header = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="tick-tac-toe">
            Tic Tack Toe
          </Link>
        </li>
          <Profile />
      </ul>
    </div>
  )
}
export default Header;