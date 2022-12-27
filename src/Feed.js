import React, { useState, useEffect } from "react";
import "./Feed.css";
import Option from "./Option";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../src/Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import FlipMove from "react-flip-move";
import { selectUser } from "./features/UserSlice";
import { useSelector } from "react-redux";

function Feed() {
  const users = useSelector(selectUser);
  const [input, setInput] = useState(" ");
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      // name: "users.displayName",
      // description: "users.email",
      // message: input,
      // photoUrl: "users.photoUrl || ",
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: users.displayName,
      description: users.email,
      message: input,
      photoUrl: users.photoUrl || " ",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <Option Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <Option Icon={SubscriptionIcon} title="video" color="#E7A33E" />
          <Option Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <Option
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* 
      <Post name="Vinod Mokashi" description="This is a demo" message="wow " /> */}
    </div>
  );
}

export default Feed;
