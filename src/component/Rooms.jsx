import React from "react";
import { styled } from "@mui/material";
import { useLocation, useParams, Link } from "react-router-dom";
import { Helmet } from "@vuer-ai/react-helmet-async";
import { motion } from "framer-motion";

import NavBar from "./NavBar";
import FloatingWhatsApp from "./FloatingWhatsApp";
import HeroCarousel from "./HeroCarousel";

import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WeekendIcon from "@mui/icons-material/Weekend";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BalconyIcon from "@mui/icons-material/Balcony";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

/* ================= ICON STYLE ================= */

const iconStyle = {
  fontSize: "clamp(40px,5vw,70px)",
  color: "#384b42",
};

/* ================= ROOM IMAGES ================= */

const ROOM_IMAGES = {
  1: [
    { src: "/assets/stay/BrassRoom/1.jpeg", alt: "Brass Room interior view" },
    { src: "/assets/stay/BrassRoom/2.jpeg", alt: "Brass Room balcony sunrise view" },
    { src: "/assets/stay/BrassRoom/3.jpeg", alt: "Brass Room king bed" },
  ],
  2: [
    { src: "/assets/stay/CopperRoom/copperRoom1.jpeg", alt: "Copper Room interior" },
    { src: "/assets/stay/CopperRoom/copperRoom2.jpeg", alt: "Copper Room bathroom" },
  ],
  3: [
    { src: "/assets/stay/VintageStoneRoom/vintageStoneRoom1.jpeg", alt: "Vintage Stone Room interior" },
  ],
  4: [
    { src: "/assets/stay/StonewoodFamilyRetreat/stonewoodFamilyRetreat1.jpeg", alt: "Stonewood Family Retreat interior" },
  ],
   5: [{ src: "/assets/stay/StoneStoryRoom/stoneStoryRoom1.jpeg", alt: "Stone Story Room" }],
  6: [{ src: "/assets/stay/IronRoom/ironRoom1.jpeg", alt: "Iron Room" }],
  7: [{ src: "/assets/stay/CedarRoom/cedarRoom1.jpeg", alt: "Cedar Room" }],
};

/* ================= ROOMS DATA ================= */

const ROOMS_DATA = {
  1: {
    title: "Brass Room",
    description: [
      {
        subheading: "Brass Room – Heritage Villa Room",
        content:
          "Our finest heritage room featuring a private balcony with sunrise views, spacious bathroom, king-size bed and handcrafted stone charm.",
      },
      {
        subheading: "Guest Access",
        content:
          "Guests enjoy access to the garden, dining space and peaceful sitting areas.",
      },
      {
        subheading: "Other Things to Note",
        content:
          "Vegetarian meals served. Pet-friendly stay. Outdoor smoking allowed. No parties.",
      },
    ],
    amenities: [
      { logo: <BalconyIcon sx={iconStyle} />, text: "Private Balcony" },
      { logo: <BathroomIcon sx={iconStyle} />, text: "Private Washroom" },
      { logo: <ConnectedTvIcon sx={iconStyle} />, text: "Television" },
      { logo: <WhatshotIcon sx={iconStyle} />, text: "Room Heater" },
      { logo: <WeekendIcon sx={iconStyle} />, text: "Comfortable Couch" },
      { logo: <SignalWifi4BarIcon sx={iconStyle} />, text: "Free Wi-Fi" },
      { logo: <LocalCafeIcon sx={iconStyle} />, text: "Electric Kettle" },
    ],
  },

  2: {
    title: "Copper Room",
    description: [
      {
        subheading: "Copper Room – Heritage Room",
        content:
          "Charming heritage room with king + single bed, spacious bathroom and warm vintage interiors.",
      },
      {
        subheading: "Guest Access",
        content:
          "Access to garden, dining and common sitting areas.",
      },
    ],
    amenities: [
      { logo: <BalconyIcon sx={iconStyle} />, text: "Private Balcony" },
      { logo: <BathroomIcon sx={iconStyle} />, text: "Private Washroom" },
      { logo: <ConnectedTvIcon sx={iconStyle} />, text: "Television" },
      { logo: <SignalWifi4BarIcon sx={iconStyle} />, text: "Free Wi-Fi" },
    ],
  },

  3: {
    title: "Vintage Stone Room",
    description: [
      {
        subheading: "Vintage Stone Room",
        content:
          "Cozy stone-crafted room with natural light, private washroom and rustic Himalayan ambiance.",
      },
    ],
    amenities: [
      { logo: <BathroomIcon sx={iconStyle} />, text: "Private Washroom" },
      { logo: <WhatshotIcon sx={iconStyle} />, text: "Room Heater" },
      { logo: <SignalWifi4BarIcon sx={iconStyle} />, text: "Free Wi-Fi" },
    ],
  },

  4: {
    title: "Stonewood Family Retreat",
    description: [
      {
        subheading: "Stonewood Family Retreat",
        content:
          "Spacious family suite with two king beds, private washroom and serene mountain stay experience.",
      },
    ],
    amenities: [
      { logo: <BathroomIcon sx={iconStyle} />, text: "Private Washroom" },
      { logo: <WhatshotIcon sx={iconStyle} />, text: "Room Heater" },
      { logo: <SignalWifi4BarIcon sx={iconStyle} />, text: "Free Wi-Fi" },
    ],
  },
   5: {
    title: "Stone Story Room",
    description: [
      { subheading: "Stone Story Room", content: "Boutique heritage room with peaceful ambiance." },
    ],
    amenities: [
      { logo: <SignalWifi4BarIcon sx={iconStyle} />, text: "Free Wi-Fi" },
    ],
  },

  6: {
    title: "Iron Room",
    description: [
      { subheading: "Iron Room", content: "Rustic Himalayan room with traditional design." },
    ],
    amenities: [
      { logo: <WhatshotIcon sx={iconStyle} />, text: "Room Heater" },
    ],
  },

  7: {
    title: "Cedar Room",
    description: [
      { subheading: "Cedar Room", content: "Warm wooden interiors with mountain charm." },
    ],
    amenities: [
      { logo: <LocalCafeIcon sx={iconStyle} />, text: "Electric Kettle" },
    ],
  },
};

/* ================= COMPONENT ================= */

const Rooms = () => {
  const location = useLocation();
  const { id } = useParams();
  const roomId = Number(id);

  const roomData = ROOMS_DATA[roomId];
  if (!roomData) return <div>Room not found</div>;

  const pricePerNight = Number(location.state?.price) || 0;

  /* ================= SEO ================= */

  const roomSchema = {
    "@context": "https://schema.org",
    "@type": "Room",
    name: roomData.title,
    description: roomData.description[0]?.content,
    url: `https://thestoneheritage.in/rooms/${roomId}`,
    isPartOf: {
      "@type": "VacationRental",
      name: "Stone Heritage Mukteshwar",
      url: "https://thestoneheritage.in/",
    },
  };

  return (
    <>
      <Helmet>
        <title>{roomData.title} | Stone Heritage Mukteshwar</title>
        <meta name="description" content={roomData.description[0]?.content} />
        <script type="application/ld+json">
          {JSON.stringify(roomSchema)}
        </script>
      </Helmet>

      <NavBar />

      <HeroCarousel images={ROOM_IMAGES[roomId]} showOverlay />

      <Wrapper>
        <Container>

          {/* ===== DESCRIPTION ===== */}

          <Description>
            {roomData.description.map((section, i) => (
              <MotionSection
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Subheading>{section.subheading}</Subheading>
                <Paragraph>{section.content}</Paragraph>
              </MotionSection>
            ))}
          </Description>

          {/* ===== AMENITIES ===== */}

          <AmenitiesGrid>
            {roomData.amenities.map((a, i) => (
              <MotionAmenity
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <IconWrapper>{a.logo}</IconWrapper>
                <AmenityText>{a.text}</AmenityText>
              </MotionAmenity>
            ))}
          </AmenitiesGrid>

        </Container>
      </Wrapper>
{/* ================= BOOKING INFO ================= */}

<BookingInfo
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <InfoBlock>
    <InfoLabel>Check-in</InfoLabel>
    <InfoValue>1:00 PM</InfoValue>
  </InfoBlock>

  <Divider />

  <InfoBlock>
    <InfoLabel>Check-out</InfoLabel>
    <InfoValue>11:00 AM</InfoValue>
  </InfoBlock>

  <Divider />

  <InfoBlock>
    <InfoLabel>Guests</InfoLabel>
    <InfoValue>
      {roomId === 4 ? "Up to 5 Guests" : roomId === 3 ? "Up to 3 Guests" : "Up to 4 Guests"}
    </InfoValue>
  </InfoBlock>
</BookingInfo>


{/* ================= CHECK AVAILABILITY ================= */}

<AvailabilityCard>
  <Nightly>
    {pricePerNight
      ? `₹${pricePerNight.toLocaleString()} / night`
      : "Price on request"}
  </Nightly>

  <AvailabilityBtn
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    onClick={() =>
      window.open(
        `https://api.whatsapp.com/send?phone=91902784424&text=${encodeURIComponent(
          `Hi Gagan! I'm interested in booking the ${roomData.title}. Please share availability and pricing details.`
        )}`,
        "_blank"
      )
    }
  >
    Check Availability
  </AvailabilityBtn>
</AvailabilityCard>

      <FloatingWhatsApp />
    </>
  );
};

export default Rooms;

/* ================= STYLES ================= */

const Wrapper = styled("div")`
  max-width: 1400px;
  margin: auto;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Description = styled("div")`
  width: 92%;
  max-width: 950px;
  margin: 4rem auto 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const MotionSection = styled(motion.div)`
  background: #fff;
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);
  border-left: 4px solid #384b42;
`;

const Subheading = styled("h3")`
  font-size: 1.4rem;
  font-weight: 600;
  color: #384b42;
  margin-bottom: 0.8rem;
`;

const Paragraph = styled("p")`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
`;

const AmenitiesGrid = styled("div")`
  width: 92%;
  max-width: 1100px;
  margin: 3rem auto 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1.8rem;
`;

const MotionAmenity = styled(motion.div)`
  background: rgba(255,255,255,0.9);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0,0,0,0.04);
`;

const IconWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const AmenityText = styled("span")`
  font-size: 0.95rem;
  font-weight: 500;
  color: #384b42;
`;
const BookingInfo = styled(motion.div)`
  width: 92%;
  max-width: 1000px;
  margin: 4rem auto 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 18px;
  padding: 1.5rem 2rem;

  box-shadow: 0 8px 25px rgba(0,0,0,0.04);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const InfoBlock = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoLabel = styled("span")`
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.4rem;
`;

const InfoValue = styled("span")`
  font-size: 1rem;
  font-weight: 600;
  color: #384b42;
`;

const Divider = styled("div")`
  width: 1px;
  height: 40px;
  background: #e0e0e0;

  @media (max-width: 768px) {
    width: 60%;
    height: 1px;
  }
`;

const AvailabilityCard = styled("div")`
  width: 92%;
  max-width: 1000px;
  margin: 2rem auto 6rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  border-radius: 20px;
  padding: 1.5rem 2rem;

  box-shadow: 0 12px 35px rgba(0,0,0,0.06);

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    border-radius: 0;
    padding: 1rem;
    flex-direction: column;
    gap: 0.8rem;
    z-index: 1000;
  }
`;

const Nightly = styled("span")`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2d2d2d;
`;

const AvailabilityBtn = styled(motion.button)`
  padding: 0.8rem 2rem;
  border-radius: 40px;
  border: none;
  background: #384b42;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2a3a34;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
