import RoomsCard from "./RoomsCard";
import { Typography, Box } from "@mui/material";
import NavBar from "./NavBar";
import { Helmet } from "@vuer-ai/react-helmet-async";
import { motion } from "framer-motion";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Footer from "./Footer";

import BrassRoom from "/public/assets/stay/BrassRoom.jpeg";
import CopperRoom from "/public/assets/stay/CopperRoom.jpeg";
import IronRoom from "/public/assets/stay/IronRoom.jpeg";
import StoneStoryRoom from "/public/assets/stay/stoneandstoryroom.jpeg";
import StoneFamilyRoom from "/public/assets/stay/stonewoodfamilyretreat.jpeg";
import VintageRoom from "/public/assets/stay/thevintageroom.jpeg";
import CedarRoom from "/public/assets/stay/cedarroom.jpeg";

const Stay = ({
  showLayout = true,
  showHelmet = true,
}) => 
  
  {
  const staySchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Stay at Stone Heritage Mukteshwar",
    description:
      "Luxury heritage rooms and villas with 180-degree Himalayan views.",
  };

  const data = [
    {
      id: "1",
      imageBackgroundUrl: BrassRoom,
      heading: "Brass Room",
      description:
        "3 Guest · 1 Bedroom · 1 King Bed · Private Washroom",
      roomUrl: "/Rooms/1",
    },
    {
      id: "2",
      imageBackgroundUrl: CopperRoom,
      heading: "Copper Room",
      description:
        "4 Guest · King + Single Bed · Private Washroom",
      roomUrl: "/Rooms/2",
    },
    {
      id: "3",
      imageBackgroundUrl: VintageRoom,
      heading: "The Vintage Room",
      description: "2 Guest · King Bed · Private Washroom",
      roomUrl: "/Rooms/3",
    },
    {
      id: "4",
      imageBackgroundUrl: StoneFamilyRoom,
      heading: "Stonewood Family Retreat",
      description: "4 Guest · 2 King Beds · Private Washroom",
      roomUrl: "/Rooms/4",
    },
    {
      id: "5",
      imageBackgroundUrl: StoneStoryRoom,
      heading: "Stone And Story Room",
      description: "1 King Bed · Heritage Interior",
      roomUrl: "/Rooms/5",
    },
    {
      id: "6",
      imageBackgroundUrl: IronRoom,
      heading: "Iron Room",
      description: "1 King Bed · Cozy Mountain View",
      roomUrl: "/Rooms/6",
    },
    {
      id: "7",
      imageBackgroundUrl: CedarRoom,
      heading: "Cedar Room",
      description: "Warm Wooden Interior",
      roomUrl: "/Rooms/7",
    },
  ];

  const Content = (
    <Box
      id="stay-section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        background: "linear-gradient(to bottom, #f8f8f8, #ffffff)",
      }}
    >
      {/* Modern Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 2,
             color: "#984216",
          }}
        >
          Luxury Stay in Mukteshwar
        </Typography>

        <Typography
          align="center"
          sx={{
            maxWidth: 600,
            mx: "auto",
            mb: 6,
 color: "#984216",          }}
        >
          Mountain view rooms, pet-friendly villa, handcrafted heritage interiors.
        </Typography>
      </motion.div>

      {/* Rooms */}
      <RoomsCard data={data} />
    </Box>
  );

  return (
    <>
      {showHelmet && (
        <Helmet>
          <title>
            Luxury Rooms & Villas | Stone Heritage Mukteshwar
          </title>
          <meta
            name="description"
            content="Book your luxury stay at Stone Heritage Mukteshwar."
          />
          <script type="application/ld+json">
            {JSON.stringify(staySchema)}
          </script>
        </Helmet>
      )}

      {showLayout && <NavBar />}

      {Content}

      {showLayout && (
        <>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </>
  );
};

export default Stay;
