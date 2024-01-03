import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Search } from "./Search";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home-header-right">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home-inputcontainer">
          <Search />
        </div>
      </div>
    </div>
  );
};
