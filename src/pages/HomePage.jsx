import { Box , Typography} from "@mui/material";
import { useState } from "react";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import HeroCarousel from "../component/HeroCarousel";
import HomeCard from "../component/HomeCard";
import HomeCardSkeleton from "../component/HomeCardSkeleton";
import MainTestimonial from "../component/testimonialCards/MainTestimonial";
import FloatingWhatsApp from "../component/FloatingWhatsApp";
import carouselData from "../data/carouselData";
import Stay from "../component/Stay";
import GalleryTitle from "../component/GalleryTitle";
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
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  identifier: "STONE-HERITAGE-MUKT-001",
  name: "Stone Heritage Mukteshwar",
  alternateName: "Stone Heritage Homestay Mukteshwar",
  description:
    "An authentic stone homestay in Mukteshwar offering luxury heritage cottages, 360-degree Himalayan views, and personalized hospitality by Akash.",
  url: "https://thestoneheritage.in/",
  telephone: "+91-9027844424",
  priceRange: "₹₹₹",
  image:
    "https://thestoneheritage.in/assets/img/himalayan-view-terrace.webp",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.43444,
    longitude: 79.64481,
  },
  
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhowali Dhanachuli Rd, South Gola Range",
    addressLocality: "Mukteshwar",
    addressRegion: "Uttarakhand",
    postalCode: "263138",
    addressCountry: "IN",
  },
  containsPlace: [
    {
      "@type": "Accommodation",
      name: "Vintage Stone Cottage",
      description:
        "Handcrafted heritage room with mountain views.",
    },
    {
      "@type": "Accommodation",
      name: "Stonewood Family Retreat",
      description:
        "Spacious luxury suite for family groups.",
    },
  ],
  host: {
    "@type": "Person",
    name: "Akash",
    description: "Aapka Mukteshwar wala Host & Dost",
    knowsAbout: [
      "Mukteshwar Tourism",
      "Kumaoni Culture",
      "Himalayan Hospitality",
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "137",
  },
  sameAs: [
  "https://www.facebook.com/thestoneheritage/",
  "https://www.instagram.com/thestoneheritage/",
  "https://www.youtube.com/@StoneHeritageMukteshwar"
],

};


  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const isLoading = loadedCount < totalImages;

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
            {/* ✅ SEO HEAD SECTION */}
<Helmet>
  <title>
    Stone Heritage Mukteshwar | Best Heritage Homestay
  </title>

  <meta
    name="description"
    content="Experience the best homestay in Mukteshwar..."
  />
  <meta property="og:title" content="Stone Heritage Mukteshwar" />
<meta property="og:description" content="Luxury heritage stay in Mukteshwar with Himalayan views." />
<meta property="og:image" content="https://thestoneheritage.in/assets/img/himalayan-view-terrace.webp" />
<meta property="og:url" content="https://thestoneheritage.in/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />


  {/* VacationRental Schema */}
  <script type="application/ld+json">
    {JSON.stringify(homePageSchema)}
  </script>

  {/* Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://thestoneheritage.in/#organization",
      name: "Stone Heritage Mukteshwar",
      url: "https://thestoneheritage.in/",
      logo: "https://thestoneheritage.in/logo.png",
      sameAs: [
        "https://www.facebook.com/thestoneheritage/",
        "https://www.instagram.com/thestoneheritage/",
        "https://www.youtube.com/@StoneHeritageMukteshwar"
      ],
      brand: {
  "@id": "https://thestoneheritage.in/#organization"
}
    })}
  </script>

  {/* FAQ Schema */}

  <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Stone Heritage Mukteshwar pet friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the property welcomes pets."
      }
    }
  ]
})}
</script>

</Helmet>

      <NavBar />

{/* <HeroCarousel
  images={carouselData.hero.images}
  showOverlay={true}
  showHeroContent={true}
  heroTitle="Stone Heritage Mukteshwar"
  heroSubtitle="Handcrafted stone architecture · 360° Himalayan views · Authentic Kumaoni hospitality."
  heroButtonText="Explore Stay"
  scrollTargetId="stay-section"
/> */}

<HeroCarousel
  images={carouselData.hero.images}
  showOverlay={true}
  showHeroContent={true}
  scrollTargetId="stay-section"
/>



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
      <GalleryTitle
  title="Experience Stone Heritage"
  subtitle="Luxury rooms, Himalayan views, timeless architecture."
/>
<HeroCarousel
  images={carouselData.gallery.images}
  showOverlay={false}
/>

<div id="stay-section">
 <Stay showLayout={false} showHelmet={false} />

</div>
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
