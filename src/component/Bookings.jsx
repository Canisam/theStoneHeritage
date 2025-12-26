import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

import forestImg from "../assets/room1.png";
import mountainImg from "../assets/room2.png";
import mudImg from "../assets/room3.png";

const rooms = [
  {
    id: 1,
    name: "Forest View Room",
    description: "Wake up to birdsong and a view of the forest.",
    image: forestImg,
    link: "/rooms/forest-view",
  },
  {
    id: 2,
    name: "Mountain View Room",
    description: "Enjoy a stunning view of the Himalayas.",
    image: mountainImg,
    link: "/rooms/mountain-view",
  },
  {
    id: 3,
    name: "Heritage Mud Room",
    description: "Stay in an authentic mud house with rustic charm.",
    image: mudImg,
    link: "/rooms/mud-house",
  },
];

const RoomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const activeRoom = rooms[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % rooms.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Container>
      <Text>
        <Heading>The small details make the difference.</Heading>
        <Description>
          Every room tells a story — of silence, sunrise, and soul-soothing
          moments. <br /> Find your space, your pause, your peace.
        </Description>
      </Text>

      {/* Previous image (slide out) */}
      {prevIndex !== null && (
        <Background
          key={`prev-${rooms[prevIndex].id}`}
          style={{ backgroundImage: `url(${rooms[prevIndex].image})` }}
          className="slide-out"
        />
      )}

      {/* Active image (slide in) */}
      <Background
        key={`active-${activeRoom.id}`}
        style={{ backgroundImage: `url(${activeRoom.image})` }}
        className="slide-in"
      />

      <Overlay>
        <ThumbnailRow>
          {rooms.map((room, index) => (
            <Thumbnail
              key={room.id}
              src={room.image}
              alt={room.name}
              active={index === activeIndex}
              onClick={() => {
                setPrevIndex(activeIndex);
                setActiveIndex(index);
              }}
            />
          ))}
        </ThumbnailRow>
      </Overlay>
    </Container>
  );
};

export default RoomCarousel;

/* ---------- styled ---------- */

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 45vh;
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 480px) {
    height: 35vh;
  }
`;

const Text = styled("div")`
  position: absolute;
  top: 5%;
  width: 100%;
  z-index: 4;
  text-align: center;
  color: #fff;
  padding: 0 16px;
`;

const Heading = styled("h2")`
  font-size: clamp(20px, 4vw, 32px);
  font-weight: 700;
  margin-bottom: 8px;
`;

const Description = styled("p")`
  font-size: clamp(14px, 2.2vw, 18px);
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
`;

const Background = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 1s ease-in-out;
  z-index: 1;

  &.slide-in {
    animation: slideIn 1s forwards;
  }
  &.slide-out {
    animation: slideOut 1s forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Overlay = styled("div")`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
`;

const ThumbnailRow = styled("div")`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Thumbnail = styled("img")(({ active }) => ({
  width: "120px",
  height: "80px",
  borderRadius: "8px",
  border: active ? "3px solid #fff" : "2px solid transparent",
  cursor: "pointer",
  objectFit: "cover",
  transition: "all 0.3s ease",
  opacity: active ? 1 : 0.6,
  transform: active ? "scale(1.05)" : "scale(1)",
  "@media (max-width: 768px)": {
    width: "90px",
    height: "60px",
  },
  "@media (max-width: 480px)": {
    width: "70px",
    height: "50px",
  },
}));
