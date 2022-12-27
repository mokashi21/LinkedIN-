import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BussinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { logout } from "./features/UserSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      {/* header left */}
      <div className="header_left">
        <img
          src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* header right */}
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BussinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationIcon} title="Notification" />
        <HeaderOptions avatar={true} title="" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
