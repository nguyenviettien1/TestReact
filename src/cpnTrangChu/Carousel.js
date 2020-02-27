import React from "react";
import "./../App.css";
import image0 from "./../images/carousel0.jpg";
import image1 from "./../images/carousel1.jpg";
import image2 from "./../images/carousel2.jpg";
import image3 from "./../images/carousel3.jpg";
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: image0,
    altText: 'Web Test',
    caption: 'Web Test',
    header: 'ReactJS',
    key: '0'
  },
  {
    src: image1,
    altText: 'Web Test',
    caption: 'Web Test',
    header: 'HTML',
    key: '1'
  },
  {
    src: image2,
    caption: 'Web Test',
    header: 'CSS',
    key: '2'
  },
  {
    src: image3,
    altText: 'Web Test',
    caption: 'Web Test',
    header: 'ReactStrap',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;