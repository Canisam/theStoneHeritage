import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const images = [
  "../src/assets/i1.jpg",
  "../src/assets/i2.jpg",
  "../src/assets/i3.jpg",
  "../src/assets/room1.png",
  "../src/assets/room2.png",
  "../src/assets/room3.png",
];

const AUTO_SCROLL_DELAY = 4000;

export default function HeroCarousel() {
  // start from 1 (first real slide)
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef(null);

  // clone first & last
  const slides = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_SCROLL_DELAY);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const handleTransitionEnd = () => {
    // Jump instantly without animation
    if (index === slides.length - 1) {
      setTransition(false);
      setIndex(1);
    }

    if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2);
    }
  };

  // Re-enable animation after jump
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  const prevSlide = () => setIndex((prev) => prev - 1);
  const nextSlide = () => setIndex((prev) => prev + 1);

  return (
    <Box
      sx={{
        position: "relative",
        height: "50vh",
        overflow: "hidden",
      }}
    >
      {/* Slides */}
      <Box
        onTransitionEnd={handleTransitionEnd}
        sx={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.8s ease-in-out" : "none",
        }}
      >
        {slides.map((img, i) => (
          <Box
            key={i}
            sx={{
              minWidth: "100%",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          opacity: 0,
          transition: "opacity 0.3s",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
        }}
        className="carousel-arrow"
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          opacity: 0,
          transition: "opacity 0.3s",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
        }}
        className="carousel-arrow"
      >
        <ChevronRight fontSize="large" />
      </IconButton>

      <style>
        {`
          .MuiBox-root:hover .carousel-arrow {
            opacity: 1;
          }
        `}
      </style>
    </Box>
  );
}
