import React from "react";
import "./../App.css";
import Carousel from "./../cpnTrangChu/Carousel.js";
import Jumbotron from "./../cpnTrangChu/Jumbotron.js";
import ShowApp from "./../cpnTrangChu/ShowApp.js";
import Advisory from "../cpnTrangChu/Advisory";
import Members from "../cpnTrangChu/Members";
import Show from "../cpnTrangChu/Show";


class Trangchu extends React.Component {
  render() {
    return (
      <div className="container">
        {/* Carousel */}
        <Carousel></Carousel>
        <hr className="my-2" />
        {/* jumbotron */}
        <Jumbotron></Jumbotron>
        <ShowApp></ShowApp>
        <hr className="my-2" />
        <Advisory></Advisory>
        <Members></Members>
        <hr className="my-4" />
        <Show></Show>
      </div>
    );
  }
}
export default Trangchu;
