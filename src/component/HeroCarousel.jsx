import { Box, IconButton, Skeleton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useMemo, useRef, useState } from "react";

const AUTO_SCROLL_DELAY = 4000;

const IMAGE_GROUPS = [
  {
    id: 0,
    images: [
      "/assets/stay/BrassRoom.jpeg",
      "/assets/stay/CopperRoom.jpeg",
      "/assets/stay/thevintageroom.jpeg",
      "/assets/stay/stonewoodfamilyretreat.jpeg",
      "/assets/stay/stoneandstoryroom.jpeg",
      "/assets/stay/IronRoom.jpeg",
      "/assets/stay/cedarroom.jpeg",
    ],
  },
  {
    id: 1,
    images: [
      "/assets/stay/BrassRoom/1.jpeg",
      "/assets/stay/BrassRoom/2.jpeg",
      "/assets/stay/BrassRoom/3.jpeg",
      "/assets/stay/BrassRoom/4.jpeg",
      "/assets/stay/BrassRoom/5.jpeg",
      "/assets/stay/BrassRoom/6.jpeg",
      "/assets/stay/BrassRoom/7.jpeg",
    ],
  },
  {
    id: 2,
    images: [
      "/assets/i1.jpg",
      "/assets/i2.jpg",
      "/assets/i3.jpg",
      "/assets/room1.png",
      "/assets/room2.png",
      "/assets/room3.png",
    ],
  },
];

export default function HeroCarousel({ id = 0 }) {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [loaded, setLoaded] = useState({});
  const timeoutRef = useRef(null);

  // 🔥 normalize id (router params are strings)
  const roomId = Number(id);

  // get images for room
  const activeImages = useMemo(() => {
    return IMAGE_GROUPS.find(g => g.id === roomId)?.images ?? [];
  }, [roomId]);

  // clone for infinite scroll
  const slides = useMemo(() => {
    if (!activeImages.length) return [];
    return [
      activeImages[activeImages.length - 1],
      ...activeImages,
      activeImages[0],
    ];
  }, [activeImages]);

  // reset when room changes
  useEffect(() => {
    setIndex(1);
    setLoaded({});
  }, [roomId]);

  // autoplay
  useEffect(() => {
    if (!slides.length) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setIndex(p => p + 1),
      AUTO_SCROLL_DELAY
    );

    return () => clearTimeout(timeoutRef.current);
  }, [index, slides.length]);

  // infinite jump handler
  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setTransition(false);
      setIndex(1);
    } else if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2);
    }
  };

  // re-enable animation after jump
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  // preload images (prevents flash)
  useEffect(() => {
    activeImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [activeImages]);

  if (!slides.length) return null;

  return (
    <Box sx={{ position: "relative", height: "50vh", overflow: "hidden" }}>
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
        {slides.map((src, i) => (
          <Box
            key={`${src}-${i}`}
            sx={{ minWidth: "100%", position: "relative" }}
          >
            {/* Skeleton */}
            {!loaded[src] && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
              />
            )}

            {/* Image */}
            <Box
              component="img"
              src={src}
              alt={`slide-${i}`}
              onLoad={() =>
                setLoaded(prev => ({ ...prev, [src]: true }))
              }
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
                opacity: loaded[src] ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={() => setIndex(p => p - 1)}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          background: "rgba(0,0,0,0.35)",
          "&:hover": { background: "rgba(0,0,0,0.55)" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={() => setIndex(p => p + 1)}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          background: "rgba(0,0,0,0.35)",
          "&:hover": { background: "rgba(0,0,0,0.55)" },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}
