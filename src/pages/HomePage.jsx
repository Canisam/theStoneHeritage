import HomeContainer from "../component/HomeContainer";
import HomeCard from "../component/HomeCard";
import { Box } from "@mui/material";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import MainTestimonial from "../component/testimonialCards/MainTestimonial";
import HeroCarousel from "../component/HeroCarousel";
const HomePage = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: "full",
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <HeroCarousel />

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
          backgroundColor: "#fff",
          color: "#984216",
          textAlign: "center",
        }}
      >
        <HomeCard
          image="/assets/cards/c1.webp"
          title="Accommodation"
          link="/Stay"
        />
        <HomeCard
          image="/assets/cards/c2.webp"
          title="Experience"
          link="/Experiences"
        />
        <HomeCard
          image="/assets/cards/c3.jpg"
          title="Volunteer"
          link="/Volunteer"
        />
      </Box>

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
        <HomeCard
          image="/assets/cards/c4.jpg"
          title="Work with us"
          link="/coming-soon"
        />
        <HomeCard
          image="/assets/cards/c5.jpg"
          title="Virtual Tour"
          link="/coming-soon"
        />
        <HomeCard
          image="/assets/cards/c6.jpg"
          title="Create your own tour"
          link="/coming-soon"
        />
      </Box>

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <MainTestimonial />
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
