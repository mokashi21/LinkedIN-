import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcom from "@mui/icons-material/ThumbDownAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Option from "./Option";
import { Avatar } from "@mui/material";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="posr_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <Option Icon={ThumbUpAltOutlinedIcom} title="like" color="gray" />
        <Option Icon={ChatOutlinedIcon} title="comment" color="gray" />
        <Option Icon={ShareOutlinedIcon} title="share" color="gray" />
        <Option Icon={SendOutlinedIcon} title="send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
