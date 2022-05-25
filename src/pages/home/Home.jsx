import NavBar from "components/navBar/NavBar";
import SideBar from "components/sideBar/SideBar";
import React from "react";
import Widget from "components/widget/widget";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
