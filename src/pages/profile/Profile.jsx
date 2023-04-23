import React from "react";
import RightBar from "../../components/rightBar/RightBar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import TopBar from "../../components/topBar/TopBar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./Profile.css";
function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/2.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ashish sharma</h4>
              <span className="profileInfoDesc">Hello my lovely Friend!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
