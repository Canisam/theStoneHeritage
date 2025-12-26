import React from "react";
import RoomsCard from "./RoomsCard";
import NavBar from "./NavBar";

import forestImg from "/assets/room1.png";
import mountainImg from "/assets/room2.png";
import mudImg from "/assets/room3.png";

const Stay = () => {
  const data = [
    {
      id: "1",
      imageBackgroundUrl: mudImg,
      heading: "Brass Room",
      description:
        "3 Guest . 1 Bedroom . 1 King Bed . 1 Floor Matteress . Private Washroom",
      roomUrl: "/Rooms/1",
      imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "2",
      imageBackgroundUrl: mountainImg,
      price: 2567.01,
      heading: "Deluxe Suite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum veniam dicta minus, facere nihil earum alias...",
      roomUrl: "/Rooms/2",
      imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "3",
      imageBackgroundUrl: forestImg,
      price: 3800,
      heading: "Family Suite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum veniam dicta minus, facere nihil earum alias...",
      roomUrl: "/Rooms/3",
      imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <main className="flex-1 px-clamp py-clamp">
        <RoomsCard data={data} />
      </main>
      <footer className="mt-auto text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Stay Inn. All rights reserved.
      </footer>
    </div>
  );
};

export default Stay;
