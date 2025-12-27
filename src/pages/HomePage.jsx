import { Box } from "@mui/material";
import { useState } from "react";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import HeroCarousel from "../component/HeroCarousel";
import HomeContainer from "../component/HomeContainer";
import HomeCard from "../component/HomeCard";
import HomeCardSkeleton from "../component/HomeCardSkeleton";
import MainTestimonial from "../component/testimonialCards/MainTestimonial";
import FloatingWhatsApp from "../component/FloatingWhatsApp";

const cardImages = [
  "/assets/cards/c1.webp",
  "/assets/cards/c2.webp",
  "/assets/cards/c3.jpg",
  "/assets/cards/c4.jpg",
  "/assets/cards/c5.jpg",
  "/assets/cards/c6.jpg",
];

const HomePage = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = cardImages.length;

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const isLoading = loadedCount < totalImages;

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <NavBar />
      <HeroCarousel/>

      {/* Cards Section */}
      <Box
        sx={{
          display: "grid",
          gap: { xs: 2, sm: 3, md: 4 },
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          p: { xs: 2, sm: 3, md: 4 },
          textAlign: "center",
        }}
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <HomeCardSkeleton key={i} />
            ))
          : (
            <>
              <HomeCard image={cardImages[0]} title="Accommodation" link="/Stay" />
              <HomeCard image={cardImages[1]} title="Experience" link="/Experiences" />
              <HomeCard image={cardImages[2]} title="Volunteer" link="/Volunteer" />
              <HomeCard image={cardImages[3]} title="Work with us" link="/coming-soon" />
              <HomeCard image={cardImages[4]} title="Virtual Tour" link="/coming-soon" />
              <HomeCard image={cardImages[5]} title="Create your own tour" link="/coming-soon" />
            </>
          )}
      </Box>

      {/* Hidden preloader */}
      {cardImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />
      ))}

      <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 3, sm: 4, md: 6 } }}>
        <MainTestimonial />
      </Box>

      <Footer />
      
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </Box>
  );
};

export default HomePage;
