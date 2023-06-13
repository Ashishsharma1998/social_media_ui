import React from "react";
import "./Conversation.css";

function Conversation() {
  return (
    <div className="conversation">
      <img
        src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60 "
        className="conversationImg"
        alt=""
      />
      <span className="conversationName">John cena</span>
    </div>
  );
}

export default Conversation;
