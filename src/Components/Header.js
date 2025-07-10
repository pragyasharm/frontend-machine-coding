import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200 p-2 flex">
      <Link className="p-2" to="/">
        Home
      </Link>
      <Link className="p-2" to="/product-card">
        Products{" "}
      </Link>
      <Link className="p-2" to="/move-swap">
        Move&Swap
      </Link>
      <Link className="p-2" to="/calculator">
        Calculator
      </Link>
      <Link className="p-2" to="/accordian">
        Accordian
      </Link>
      <Link className="p-2" to="/search">
        Search
      </Link>
      <Link className="p-2" to="/game">
        TicTacToe
      </Link>
      <Link className="p-2" to="/file-folder">
        File-folder
      </Link>
      <Link className="p-2" to="/pagination">
        Pagination
      </Link>
      <Link className="p-2" to="/progress-bar">
        Progess-bar
      </Link>
      <Link className="p-2" to="/nested-checkbox">
        Nested-checkbox
      </Link>
      <Link className="p-2" to="/otp-input">
        OTP-input
      </Link>
    </div>
  );
};

export default Header;
