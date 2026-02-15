import {
  Box,
  IconButton,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroCarousel({
  images = [],
  autoScroll = true,
  autoScrollDelay = 6000,
  showOverlay = false,
  showHeroContent = false,
  heroTagline = "Luxury Heritage Stay",
  heroTitle = "Stone Heritage Mukteshwar",
  heroSubtitle = "Himalayan views. Handcrafted stone architecture.",
  heroButtonText = "Explore Stay",
  scrollTargetId = null,
}) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);
  
  /* ===============================
     SAFE IMAGE PRELOAD
  =============================== */
  useEffect(() => {
    if (!images.length) {
      setLoaded(true);
      return;
    }

    let mounted = true;

    Promise.all(
      images.map(
        (img) =>
          new Promise((resolve) => {
            const image = new Image();
            image.src = img.src;
            image.onload = resolve;
            image.onerror = resolve;
          })
      )
    ).then(() => {
      if (mounted) setLoaded(true);
    });

    return () => {
      mounted = false;
    };
  }, [images]);

  /* ===============================
     SAFE AUTOPLAY (NO STACKING)
  =============================== */
  useEffect(() => {
    if (!autoScroll || images.length <= 1 || !loaded) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, autoScrollDelay);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoScroll, autoScrollDelay, images.length, loaded]);

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIndex((prev) =>
      (prev + 1) % images.length
    );
  };

  const handleScroll = () => {
    if (!scrollTargetId) return;
    const el = document.getElementById(scrollTargetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!images.length) return null;

  const currentImage = images[index];

  return (
    <Box
      sx={{
        height: { xs: "60vh", md: "90vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* LOADER */}
      {!loaded && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <CircularProgress sx={{ color: "#fff" }} />
          </motion.div>
        </Box>
      )}

      {/* BACKGROUND IMAGE (NO SLIDE HACK) */}
      <Box
        component={motion.img}
        key={currentImage.src}
        src={currentImage.src}
        alt={currentImage.alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Optional Overlay */}
      {showOverlay && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
          }}
        />
      )}

      {/* HERO TEXT */}
      {showHeroContent && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: { xs: 4, md: 12 },
            color: "#fff",
            zIndex: 2,
          }}
        >
          <Box sx={{ maxWidth: 520 }}>
            <Typography
              sx={{
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                opacity: 0.8,
                mb: 2,
              }}
            >
              {heroTagline}
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: 500, mb: 3 }}
            >
              {heroTitle}
            </Typography>

            <Typography sx={{ opacity: 0.85, mb: 4 }}>
              {heroSubtitle}
            </Typography>

            <Button
              onClick={handleScroll}
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: "40px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                "&:hover": {
                  background: "#fff",
                  color: "#000",
                },
              }}
            >
              {heroButtonText}
            </Button>
          </Box>
        </Box>
      )}

      {/* Arrows */}
      <IconButton onClick={handlePrev} sx={arrowStyle("left")}>
        <ChevronLeft />
      </IconButton>

      <IconButton onClick={handleNext} sx={arrowStyle("right")}>
        <ChevronRight />
      </IconButton>
    </Box>
  );
}

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: 24,
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.2)",
  backdropFilter: "blur(6px)",
  color: "#fff",
});
