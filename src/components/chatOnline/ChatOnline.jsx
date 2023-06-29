import React, { useEffect, useState } from "react";
import "./ChatOnline.css";
import axios from "axios";

function ChatOnline({ onlineUsers, currentUser, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/user/friends/" + currentUser?._id
        );
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [currentUser]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/conversations/${currentUser?._id}/${user._id}`
      );
      console.log(res);
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id))
    );
  }, [friends, onlineUsers]);
  console.log(onlineFriends);
  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div
          className="chatOnlineFriend"
          onClick={() => {
            handleClick(o);
          }}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                PF + o.profilePicture ||
                "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60 "
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatOnline;
