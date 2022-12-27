import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import logo from "./pexels-gradienta-7130475.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentitem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar_main">
      <div className="sidebar_top">
        <img src={logo} alt="" />
        <Avatar src={user.photoUrl} className="sidebar_avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed You</p>
          <p className="sidebar_statnumber">2534</p>
        </div>
        <div className="sidebar_stat">
          <p>Views On Post</p>
          <p className="sidebar_statnumber">2340 </p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactsjs")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
