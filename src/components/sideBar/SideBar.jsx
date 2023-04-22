import { RssFeed, Chat } from "@mui/icons-material";
import Video from "@mui/icons-material/PlayCircle";
import Group from "@mui/icons-material/People";
import Bookmark from "@mui/icons-material/Bookmark";
import Questions from "@mui/icons-material/HelpOutline";
import Job from "@mui/icons-material/WorkOutlineOutlined";
import Event from "@mui/icons-material/EventOutlined";
import Course from "@mui/icons-material/SchoolOutlined";
import React from "react";
import "./SideBar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <Video className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Questions className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <Job className="sidebarIcon" />
            <span className="sidebarListItemText">Job</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <Course className="sidebarIcon" />
            <span className="sidebarListItemText">Course</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => {
            return <CloseFriend key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
