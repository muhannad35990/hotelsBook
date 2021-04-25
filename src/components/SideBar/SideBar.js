import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MenuBookIcon from "@material-ui/icons/MenuBook";
function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__items">
        <li className="sidebar__item">
          <HomeIcon style={{ fontSize: 20 }} className="sidebar__icon" />
          <a href="#">hotel</a>
        </li>
        <li className="sidebar__item">
          <FlightTakeoffIcon
            style={{ fontSize: 20 }}
            className="sidebar__icon"
          />
          <a href="#">flight</a>
        </li>
        <li className="sidebar__item">
          <VpnKeyIcon style={{ fontSize: 20 }} className="sidebar__icon" />
          <a href="#">car rental</a>
        </li>
        <li className="sidebar__item">
          <MenuBookIcon style={{ fontSize: 20 }} className="sidebar__icon" />
          <a href="#">tours</a>
        </li>
      </ul>
      <p className="copywrite">&copy;2021 by trillo. All rights reserved.</p>
    </div>
  );
}

export default SideBar;
