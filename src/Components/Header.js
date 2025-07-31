import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink className="p-2" to="/">
        Home
      </NavLink>
      <NavLink className="p-2" to="/move-swap">
        Move&Swap
      </NavLink>
      <NavLink className="p-2" to="/calculator">
        Calculator
      </NavLink>
      <NavLink className="p-2" to="/accordian">
        Accordian
      </NavLink>
      <NavLink className="p-2" to="/search">
        Search
      </NavLink>
      <NavLink className="p-2" to="/game">
        TicTacToe
      </NavLink>
      <NavLink className="p-2" to="/file-folder">
        File-folder
      </NavLink>
      <NavLink className="p-2" to="/pagination">
        Pagination
      </NavLink>
      <NavLink className="p-2" to="/progress-bar">
        Progess-bar
      </NavLink>
      <NavLink className="p-2" to="/nested-checkbox">
        Nested-checkbox
      </NavLink>
      <NavLink className="p-2" to="/otp-input">
        OTP-input
      </NavLink>
      <NavLink className="p-2" to="/reddit-comment">
        Reddit comment
      </NavLink>
      <NavLink className="p-2" to="/match-Pair">
        Match pair game
      </NavLink>
      <NavLink className="p-2" to="/kanban-board">
        kanban board
      </NavLink>
      <NavLink className="p-2" to="/temperature-converter">
        Temparature converter
      </NavLink>
      <NavLink className="p-2" to="/draw-circles">
        Draw circles
      </NavLink>
      <NavLink className="p-2" to="/sticky-note">
        Sticky Note
      </NavLink>
    </div>
  );
};

export default Header;
