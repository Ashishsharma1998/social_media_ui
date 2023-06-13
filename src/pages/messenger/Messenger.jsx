import React from "react";
import TopBar from "../../components/topBar/TopBar.jsx";
import "./Messenger.css";
import Conversation from "../../components/conversations/Conversation.jsx";
import Message from "../../components/messages/Message.jsx";
import ChatOnline from "../../components/chatOnline/ChatOnline.jsx";

function Messenger() {
  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="search for friends" />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />

              <Message />
              <Message />
              <Message />
              <Message />
            </div>

            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              ></textarea>
              <button className="chatSubmitButton">send</button>
            </div>
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
