import { Box , Typography} from "@mui/material";
import { useState } from "react";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import HeroCarousel from "../component/HeroCarousel";
import HomeCard from "../component/HomeCard";
import HomeCardSkeleton from "../component/HomeCardSkeleton";
import MainTestimonial from "../component/testimonialCards/MainTestimonial";
import FloatingWhatsApp from "../component/FloatingWhatsApp";

import { Helmet } from "@vuer-ai/react-helmet-async";

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
  const homePageSchema= {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VacationRental",
      "@id": "https://thestoneheritage.in/#lodging",
      "additionalType": "https://en.wikipedia.org/wiki/Homestay",
      "name": "Stone Heritage Mukteshwar",
      "description": "Experience the best homestay in Mukteshwar. Handcrafted stone architecture, 360° Himalayan views & authentic Kumaoni food.",
      "url": "https://thestoneheritage.in/",
      "image": "https://thestoneheritage.in/property-view.jpg",
      "telephone": "+91-9027844424",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhowali Dhanachuli Rd, South Gola Range",
        "addressLocality": "Mukteshwar",
        "addressRegion": "Uttarakhand",
        "postalCode": "263138",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.4722,
        "longitude": 79.6467
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "360 Himalayan View", "value": "true" },
        { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": "true" },
        { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": "true" }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://thestoneheritage.in/#brand",
      "name": "Stone Heritage Mukteshwar",
      "url": "https://thestoneheritage.in/",
      "logo": "https://thestoneheritage.in/logo.png",
      "sameAs": [
        "https://www.facebook.com/thestoneheritage/",
        "https://www.instagram.com/thestoneheritage/",
        "https://www.youtube.com/@StoneHeritageMukteshwar"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9027844424",
        "contactType": "reservations"
      }
    }
  ]
};

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const isLoading = loadedCount < totalImages;

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
            {/* ✅ SEO HEAD SECTION */}
      <Helmet>
        {/* Meta Title */}
        <title>Stone Heritage Mukteshwar | Best Heritage Homestay</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Experience the best homestay in Mukteshwar at Stone Heritage Mukteshwar. Features handcrafted stone architecture, 360° Himalayan views & Kumaoni food. Book today!"
        />

        {/* Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(homePageSchema)}
        </script>
      </Helmet>
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
<Typography
  variant="h1"
  component="h1"
  sx={stoneheritagemukteshwar}
>
  Stone Heritage Mukteshwar: Luxury Heritage Homestay
</Typography>

     <Footer />
      
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </Box>
  );
};

export default HomePage;
const stoneheritagemukteshwar = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};
