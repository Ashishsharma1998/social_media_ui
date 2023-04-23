import React from "react";
import RightBar from "../../components/rightBar/RightBar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import TopBar from "../../components/topBar/TopBar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
