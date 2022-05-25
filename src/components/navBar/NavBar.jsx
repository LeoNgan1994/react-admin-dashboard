import {
  DarkModeOutlined,
  LanguageOutlined,
  LightModeOutlined,
  SearchOffOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from "@mui/icons-material";
import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder="Search" />
          <SearchOffOutlined />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            <div className="language">English</div>
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
            {/* <LightModeOutlined /> */}
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/7015865/pexels-photo-7015865.jpeg?cs=srgb&dl=pexels-alina-vilchenko-7015865.jpg&fm=jpg"
              alt="Photo by Alina Vilchenko from Pexels"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
