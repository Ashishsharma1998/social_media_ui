import React, { useEffect, useState } from "react";
import "./Conversation.css";
import axios from "axios";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser?._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/user?userId=${friendId}`
        );
        console.log(res);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="conversation">
      <img
        src={
          user
            ? PF + user?.profilePicture
            : "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60 "
        }
        className="conversationImg"
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}

export default Conversation;
