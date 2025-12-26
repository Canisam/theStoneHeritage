import React, { useEffect } from "react";
import "./Experience.css";
import cloudImage from "/assets/cloud.jpg";
import cabinImage from "/assets/cabin.jpg";
import mountainImage from "/assets/mainbg.png";
import NavBar from "./NavBar";
import FlipCard from "./FlipCard";

const experienceActivities = [
  {
    title: "Nature Theme",
    description: "Elegant WordPress theme for creatives",
    backDescription: "Packed with premium features and SEO-ready design",
    price: "$69",
    imageUrl:
      "https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nature Theme",
    description: "Elegant WordPress theme for creatives",
    backDescription: "Packed with premium features and SEO-ready design",
    price: "$69",
    imageUrl:
      "https://images.pexels.com/photos/13614740/pexels-photo-13614740.jpeg",
  },
  {
    title: "Nature Theme",
    description: "Elegant WordPress theme for creatives",
    backDescription: "Packed with premium features and SEO-ready design",
    price: "$69",
    imageUrl:
      "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
  },
];

const Experience = () => {
  useEffect(() => {
    const clouds = document.querySelectorAll(".cloud");
    clouds.forEach((cloud, index) => {
      cloud.animate(
        [
          { transform: `translateX(0px)` },
          { transform: `translateX(${index % 2 === 0 ? 50 : -50}px)` },
        ],
        {
          duration: 10000 + index * 3000,
          iterations: Infinity,
          direction: "alternate",
        }
      );
    });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className="experience-container">
          <img
            src={mountainImage}
            alt="Background"
            className="background-image"
          />
          <div className="hero-text">
            <h1>Extreme</h1>
            <h2>Hiking</h2>
          </div>
        </div>

        <div className="content-box">
          <div className="left-box">
            <img src={cabinImage} alt="Cabin" className="cabin-image" />
          </div>

          <div className="right-box text-content">
            <h3>NORWAY</h3>
            <h4>ALDEVÅGEN</h4>
            <p>
              Visit the island Alden and hike up to the top also called "the
              Norwegian horse." The mountain rises straight out of the ocean,
              481 m above sea level. This is one of the most significant sailing
              marks on the western coast of Norway and is visible from more than
              100 km away. From the top, you can enjoy a spectacular 360-degree
              view.
            </p>
            <p>
              The island is most notable for its 460-meter (1500 ft) tall
              mountain called Norskehesten. The mountain dominates the island,
              giving it very steep coastlines.
            </p>
            <div className="info">
              <span>78 km (~48.5 miles)</span>
              <button>More Info</button>
            </div>
          </div>
        </div>
      </div>
      {experienceActivities.map((activity, index) => (
        <FlipCard
          key={index}
          title={activity.title}
          description={activity.description}
          backDescription={activity.backDescription}
          price={activity.price}
          imageUrl={activity.imageUrl}
        />
      ))}
    </>
  );
};

export default Experience;
