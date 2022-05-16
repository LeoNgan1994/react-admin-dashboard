import NavBar from "components/navBar/NavBar";
import SideBar from "components/sideBar/SideBar";
import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        container
      </div>
    </div>
  );
};

export default Home;
