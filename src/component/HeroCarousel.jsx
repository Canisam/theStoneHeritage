import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useMemo, useRef, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

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
      "/assets/stay/CopperRoom/copperRoom1.jpeg",
      "/assets/stay/CopperRoom/copperRoom2.jpeg",
      "/assets/stay/CopperRoom/copperRoom3.jpeg",
      "/assets/stay/CopperRoom/copperRoom4.jpeg",
      "/assets/stay/CopperRoom/copperRoom6.jpeg",
      "/assets/stay/CopperRoom/copperRoom7.jpeg",
    ],
  },
    {
    id: 3,
    images: [
      "/assets/stay/VintageStoneRoom/vintageStoneRoom1.jpeg",
      "/assets/stay/VintageStoneRoom/vintageStoneRoom2.jpeg",
      "/assets/stay/VintageStoneRoom/vintageStoneRoom3.jpeg",
      "/assets/stay/VintageStoneRoom/vintageStoneRoom4.jpeg",
      "/assets/stay/VintageStoneRoom/vintageStoneRoom5.jpeg",
      "/assets/stay/VintageStoneRoom/vintageStoneRoom6.jpeg",
    ],
  },
    {
    id: 4,
    images: [
      "/assets/stay/StonewoodFamilyRetreat/stonewoodFamilyRetreat1.jpeg",
      "/assets/stay/StonewoodFamilyRetreat/stonewoodFamilyRetreat2.jpeg",
      "/assets/stay/StonewoodFamilyRetreat/stonewoodFamilyRetreat3.jpeg",
      "/assets/stay/StonewoodFamilyRetreat/stonewoodFamilyRetreat4.jpeg",
    ],
  },
    {
    id: 5,
    images: [
      "/assets/stay/StoneStoryRoom/stoneStoryRoom1.jpeg",
      "/assets/stay/StoneStoryRoom/stoneStoryRoom2.jpeg",
      "/assets/stay/StoneStoryRoom/stoneStoryRoom3.jpeg",
      "/assets/stay/StoneStoryRoom/stoneStoryRoom4.jpeg",
    ],
  },
    {
    id: 6,
    images: [
      "/assets/stay/IronRoom/ironRoom1.jpeg",
      "/assets/stay/IronRoom/ironRoom2.jpeg",
      "/assets/stay/IronRoom/ironRoom3.jpeg",
      "/assets/stay/IronRoom/ironRoom4.jpeg",
    ],
  },
    {
    id: 7,
    images: [
      "/assets/stay/CedarRoom/cedarRoom1.jpeg",
      "/assets/stay/CedarRoom/cedarRoom2.jpeg",
      "/assets/stay/CedarRoom/cedarRoom3.jpeg",
      "/assets/stay/CedarRoom/cedarRoom4.jpeg",
    ],
  },
];

export default function HeroCarousel({ id = 0 }) {
  const roomId = Number(id);

  const images =
    IMAGE_GROUPS.find(g => g.id === roomId)?.images ?? [];

  const slides = useMemo(() => {
    if (!images.length) return [];
    return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [loaded, setLoaded] = useState(() => ({}));
  const timer = useRef();

  // ✅ preload & mark loaded by src
  useEffect(() => {
    const map = {};
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        map[src] = true;
        setLoaded(prev => ({ ...prev, [src]: true }));
      };
    });
  }, [images]);

  // autoplay
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIndex(p => p + 1);
    }, AUTO_SCROLL_DELAY);
    return () => clearTimeout(timer.current);
  }, [index]);

  // infinite loop jump
  const onTransitionEnd = () => {
    if (index === slides.length - 1) {
      setTransition(false);
      setIndex(1);
    } else if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2);
    }
  };

  // re-enable animation
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  if (!slides.length) return null;

  return (
<Box
  sx={{
    height: {
      xs: "45vh",  // mobile
      sm: "50vh",  // larger mobile / small tablets
      md: "55vh",  // tablets & laptops
    },
    overflow: "hidden",
    position: "relative",
  }}
>

      <Box
        onTransitionEnd={onTransitionEnd}
        sx={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform .8s ease" : "none",
        }}
      >
        {slides.map((src, i) => (
          <Box key={`${src}-${i}`} sx={{ minWidth: "100%", position: "relative" }}>
            {!loaded[src] && <LoadingOverlay />}
            <Box
              component="img"
              src={src}
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: loaded[src] ? 1 : 0,
                transition: "opacity .4s ease",
              }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={() => setIndex(i => i - 1)}
        sx={{ position: "absolute", left: 16, top: "50%", color: "#fff" }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={() => setIndex(i => i + 1)}
        sx={{ position: "absolute", right: 16, top: "50%", color: "#fff" }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}


/* ---------------- STYLES ---------------- */

const arrowStyle = side => ({
  position: "absolute",
  top: "50%",
  [side]: 16,
  transform: "translateY(-50%)",
  color: "#fff",
  background: "rgba(0,0,0,0.35)",
  "&:hover": { background: "rgba(0,0,0,0.55)" },
});
