// import React, { useEffect } from "react";
// import "./Experience.css";
// import cabinImage from "/assets/cabin.jpg";
// import mountainImage from "/assets/mainbg.png";
// import NavBar from "./NavBar";
// import FlipCard from "./FlipCard";
// import FloatingWhatsApp from "./FloatingWhatsApp";
// import Footer from "./Footer";
// import { Helmet, HelmetProvider } from '@vuer-ai/react-helmet-async';

// const experienceActivities = [
//   {
//     title: "Nature Theme",
//     description: "Elegant WordPress theme for creatives",
//     backDescription: "Packed with premium features and SEO-ready design",
//     price: "$69",
//     imageUrl:
//       "https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Nature Theme",
//     description: "Elegant WordPress theme for creatives",
//     backDescription: "Packed with premium features and SEO-ready design",
//     price: "$69",
//     imageUrl:
//       "https://images.pexels.com/photos/13614740/pexels-photo-13614740.jpeg",
//   },
//   {
//     title: "Nature Theme",
//     description: "Elegant WordPress theme for creatives",
//     backDescription: "Packed with premium features and SEO-ready design",
//     price: "$69",
//     imageUrl:
//       "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
//   },
// ];

// const Experience = () => {
//    <HelmetProvider>
//       <Helmet>
//         <title>Top Things to Do in Mukteshwar | Stone Heritage Mukteshwar</title>
//         <meta name="description" content="Explore Mukteshwar with Stone Heritage. Discover hidden waterfalls, 350-year-old temples, fruit orchard tours, and rock climbing at Chauli Ki Jali." />
//       </Helmet>
//     </HelmetProvider>
//   useEffect(() => {
//     const clouds = document.querySelectorAll(".cloud");
//     clouds.forEach((cloud, index) => {
//       cloud.animate(
//         [
//           { transform: `translateX(0px)` },
//           { transform: `translateX(${index % 2 === 0 ? 50 : -50}px)` },
//         ],
//         {
//           duration: 10000 + index * 3000,
//           iterations: Infinity,
//           direction: "alternate",
//         }
//       );
//     });
//   }, []);

//   return (
//     <>
//       <NavBar />
//       <div>
//         <div className="experience-container">
//           <img
//             src={mountainImage}
//             alt="Background"
//             className="background-image"
//           />
//           <div className="hero-text">
//             <h1>Extreme</h1>
//             <h2>Hiking</h2>
//           </div>
//         </div>

//         <div className="content-box">
//           <div className="left-box">
//             <img src={cabinImage} alt="Cabin" className="cabin-image" />
//           </div>

//           <div className="right-box text-content">
//             <h3>NORWAY</h3>
//             <h4>ALDEVÅGEN</h4>
//             <p>
//               Visit the island Alden and hike up to the top also called "the
//               Norwegian horse." The mountain rises straight out of the ocean,
//               481 m above sea level. This is one of the most significant sailing
//               marks on the western coast of Norway and is visible from more than
//               100 km away. From the top, you can enjoy a spectacular 360-degree
//               view.
//             </p>
//             <p>
//               The island is most notable for its 460-meter (1500 ft) tall
//               mountain called Norskehesten. The mountain dominates the island,
//               giving it very steep coastlines.
//             </p>
//             <div className="info">
//               <span>78 km (~48.5 miles)</span>
//               <button>More Info</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {experienceActivities.map((activity, index) => (
//         <FlipCard
//           key={index}
//           title={activity.title}
//           description={activity.description}
//           backDescription={activity.backDescription}
//           price={activity.price}
//           imageUrl={activity.imageUrl}
//         />
//       ))}
//       <Footer></Footer>
//       <FloatingWhatsApp></FloatingWhatsApp>
//     </>
//   );
// };

// export default Experience;
import React, { useEffect } from "react";
import "./Experience.css";
import cabinImage from "/assets/cabin.jpg";
import mountainImage from "/assets/mainbg.png";
import NavBar from "./NavBar";
import FlipCard from "./FlipCard";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Footer from "./Footer";
import { Helmet } from "@vuer-ai/react-helmet-async";

const experienceActivities = [
  {
    title: "Rock Climbing at Chauli Ki Jali",
    description: "Adventure climbing experience",
    backDescription: "Thrilling rock climbing with Himalayan views",
    // price: "$69",
    imageUrl: "https://images.unsplash.com/photo-1682685797406-97f364419b4a",
  },
  {
    title: "Stargazing under Himalayan Skies",
    description: "Night sky experience",
    backDescription: "Crystal clear Himalayan night skies",
    // price: "$49",
    imageUrl:
      "https://images.pexels.com/photos/13614740/pexels-photo-13614740.jpeg",
  },
  {
    title: "Traditional Kumaoni Cooking Workshop",
    description: "Local food experience",
    backDescription: "Authentic Kumaoni cuisine workshop",
    // price: "$59",
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
          { transform: "translateX(0px)" },
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

  // ✅ Schema JSON-LD (ItemList)
  const experienceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Experiences at Stone Heritage Mukteshwar",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Rock Climbing at Chauli Ki Jali",
        url: "https://thestoneheritage.in/experience#adventure",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stargazing under Himalayan Skies",
        url: "https://thestoneheritage.in/experience#stargazing",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Traditional Kumaoni Cooking Workshop",
        url: "https://thestoneheritage.in/experience#food",
      },
    ],
  };

  return (
    <>
      {/* ✅ SEO HEAD CONTENT */}
      <Helmet>
        {/* Meta Title */}
        <title>
          Top Things to Do in Mukteshwar | Stone Heritage Mukteshwar
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore unforgettable experiences at Stone Heritage Mukteshwar including rock climbing at Chauli Ki Jali, stargazing under Himalayan skies, and traditional Kumaoni cooking workshops."
        />

        {/* Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(experienceSchema)}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <NavBar />

      <div className="experience-container">
        <img
          src={mountainImage}
          alt="Mukteshwar mountains"
          className="background-image"
        />
        <div className="hero-text">
          <h1>Experiences Mukteshwar</h1>
      
        </div>
      </div>

      <div className="content-box">
        <div className="left-box">
          <img
            src={cabinImage}
            alt="Stone Heritage cabin"
            className="cabin-image"
          />
        </div>

        <div className="right-box text-content">
          <h3>Stone Heritage</h3>
          <h4>Mukteshwar</h4>

          <p>
            Discover curated experiences surrounded by Himalayan forests, adventure trails,
  and authentic Kumaoni culture. Here are the top <strong>things to do in Mukteshwar</strong>: 
  explore Chauli Ki Jali, visit the serene Bhalu Gaad Waterfall, go stargazing 
  under Mukteshwar’s crystal-clear night skies, and indulge in traditional Kumaoni cuisine.
          </p>
        </div>
      </div>

      {experienceActivities.map((activity, index) => (
        <FlipCard key={index} {...activity} />
      ))}

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Experience;
