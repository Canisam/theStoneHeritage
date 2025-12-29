import React from "react";
import { styled } from "@mui/material";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

import NavBar from "./NavBar";
import FeaturesCard from "./FeaturesCard";

import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WeekendIcon from "@mui/icons-material/Weekend";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BalconyIcon from "@mui/icons-material/Balcony";
import LocalCafeIcon   from "@mui/icons-material/LocalCafe";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FloatingWhatsApp from "./FloatingWhatsApp";
import HeroCarousel from "./HeroCarousel";
const Rooms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
const roomId = Number(id);

  const pricePerNight =
    Number(location.state?.pricePerNight) ||
    Number(location.state?.price) ||
    0;
const roomName = location.state?.name || "Accomodation"
/*

*/
const ROOMS_DATA = {
  1: {

    description: [
      {
        subheading: "Brass Room – Heritage Villa Room",
        content:
         `Our finest heritage room in the villa, with a large private balcony that offers beautiful sunrise views. The room features a spacious, well-equipped bathroom with all modern amenities, blending comfort with classic heritage charm. It has a king-size bed, and a floor mattress can be arranged for an extra guest.
.` },
       {
        subheading: "Guest Access",
        content:
         "In this property, we have 6 boutique rooms. Guests can enjoy access to all common areas, including the garden, dining space, and sitting areas."     },
      {
        subheading: "Other Things to Note",
        content:
         `We serve vegetarian food at the property. Non-veg can be ordered from nearby restaurants.

This is a peaceful place meant for slow living, not parties.

We are pet-friendly, but we request that pets do not disturb other guests.

Smoking and drinking are allowed only in outdoor areas.`},
    ],

amenities : [
  {
    logo: (
      <BalconyIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Balcony",
    },
  {
    logo: (
      <BathroomIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Washroom",
    },
  {
    logo: (
      <ConnectedTvIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Television",
    },
  {
    logo: (
      <WhatshotIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Room Heater",
 
  },
  {
    logo: (
      <WeekendIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Comfortable Couch",
     },
  {
    logo: (
      <SignalWifi4BarIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Free Wi-Fi",

  },
  {
    logo: (
      <LocalCafeIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Electric Kettle",

  },
]
  },

  2: {


    description: [
      {
        subheading: "Copper Room – Heritage Room",
        content: "The Copper Room is a charming heritage room designed for a comfortable stay. It features one king-size bed and one single bed, with an extra floor mattress available if needed. The room has a spacious attached bathroom and carries a warm, classic heritage feel, making it ideal for families or small groups.",
      },
      {
        subheading: "Guest Access",
        content:
         "In this property, we have 6 boutique rooms. Guests can enjoy access to all common areas, including the garden, dining space, and sitting areas."     },
      {
        subheading: "Other Things to Note",
        content:
         `We serve vegetarian food at the property. Non-veg can be ordered from nearby restaurants.

This is a peaceful place meant for slow living, not parties.

We are pet-friendly, but we request that pets do not disturb other guests.

Smoking and drinking are allowed only in outdoor areas.`},
    ],

amenities : [
  {
    logo: (
      <BalconyIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Balcony",
    },
  {
    logo: (
      <BathroomIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Washroom",
    },
  {
    logo: (
      <ConnectedTvIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Television",
    },
  {
    logo: (
      <WhatshotIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Room Heater",
 
  },
  {
    logo: (
      <WeekendIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Comfortable Couch",
     },
  {
    logo: (
      <SignalWifi4BarIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Free Wi-Fi",

  },
  {
    logo: (
      <LocalCafeIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Electric Kettle",

  },
],
  },
  3: {

    description: [
      {
        subheading: "Vintage Stone Room",
        content: "A cute and cozy stone-made room with rustic charm. It has two large windows for natural light, a private attached washroom, and one comfortable king-size bed."  },
      {
        subheading: "Guest Access",
        content:
         "In this property, we have 6 boutique rooms. Guests can enjoy access to all common areas, including the garden, dining space, and sitting areas."     },
      {
        subheading: "Other Things to Note",
        content:
         `We serve vegetarian food at the property. Non-veg can be ordered from nearby restaurants.

This is a peaceful place meant for slow living, not parties.

We are pet-friendly, but we request that pets do not disturb other guests.

Smoking and drinking are allowed only in outdoor areas.`},
    ],

amenities : [
  {
    logo: (
      <BalconyIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Balcony",
    },
  {
    logo: (
      <BathroomIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Washroom",
    },
  
  {
    logo: (
      <WhatshotIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Room Heater",
 
  },
  {
    logo: (
      <WeekendIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Comfortable Couch",
     },
  {
    logo: (
      <SignalWifi4BarIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Free Wi-Fi",

  },
  {
    logo: (
      <LocalCafeIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Electric Kettle",

  },
],
  },
  4: {

    description: [
      {
        subheading: "Stonewood Family Retreat",
        content: "A spacious room ideal for families, featuring two double king-size beds and a private washroom. One extra floor mattress can be arranged if needed, making it comfortable for larger families."},    {
        subheading: "Guest Access",
        content:
         "In this property, we have 6 boutique rooms. Guests can enjoy access to all common areas, including the garden, dining space, and sitting areas."     },
      {
        subheading: "Other Things to Note",
        content:
         `We serve vegetarian food at the property. Non-veg can be ordered from nearby restaurants.

This is a peaceful place meant for slow living, not parties.

We are pet-friendly, but we request that pets do not disturb other guests.

Smoking and drinking are allowed only in outdoor areas.`},
    ],

amenities : [
  {
    logo: (
      <BalconyIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Balcony",
    },
  {
    logo: (
      <BathroomIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Private Washroom",
    },
  
  {
    logo: (
      <WhatshotIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Room Heater",
 
  },
  {
    logo: (
      <WeekendIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Comfortable Couch",
     },
  {
    logo: (
      <SignalWifi4BarIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Free Wi-Fi",

  },
  {
    logo: (
      <LocalCafeIcon
        sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }}
      />
    ),
    text: "Electric Kettle",

  },
],
  },

  
  5: { description: [], amenities: [], aboutIntro: "Room 5 description" },
  6: { description: [], amenities: [], aboutIntro: "Room 6 description" },
  7: { description: [], amenities: [], aboutIntro: "Room 7 description" },
};

const roomData = ROOMS_DATA[roomId] || {
  aboutIntro: "",
  description: [],
  amenities: [],
};

const { aboutIntro, description, amenities } = roomData;
const message = `👋 Hi Akash!

🏡 I’m interested in booking the *${roomName}* at The Stone Heritage.

📅 Could you please share the availability and pricing details?

🙏 Looking forward to your response.
Thanks! 😊`;


  return (
    <>
      <NavBar />
    <HeroCarousel id={parseInt(roomId, 10)}/>
      <Wrapper>
        <Container>

          <Description>
            {/* <Heading>About this space</Heading>
            <Paragraph>
              Welcome to your home away from home. This modern and cosy space is
              perfect for solo travellers, couples or small families. Fast Wi-Fi,
              AC and comfort-focused design ensure your stay is memorable.
            </Paragraph> */}

            {description.map(({ subheading, content }, i) => (
              <Section key={i}>
                <Subheading>{subheading}</Subheading>
                <Paragraph>{content}</Paragraph>
              </Section>
            ))}
          </Description>

          <Features>
            {amenities.map(({ logo, text, description }, i) => (
              
              <FeaturesCard
                key={i}
                logo={logo}
                text={text}

              />
            ))}
          </Features>
          <InfoContainer>
  <InfoItem>
    <InfoLabel>Check-in</InfoLabel>
    <InfoValue>1:00 PM</InfoValue>
  </InfoItem>

  <Divider />

  <InfoItem>
    <InfoLabel>Check-out</InfoLabel>
    <InfoValue>11:00 AM</InfoValue>
  </InfoItem>

  <Divider />

  <InfoItem>
    <InfoLabel>Guests</InfoLabel>
    <InfoValue>{roomId==4?"Up to 5 Guests":roomId==3?"Up to 3 Guests":"Up to 4 Guests"}</InfoValue>
  </InfoItem>
</InfoContainer>


          <CheckAvailability>
            <Nightly>
              {pricePerNight
                ? `₹${pricePerNight.toLocaleString()} / night`
                : "Price on request"}
            </Nightly>
          <Link
  to={`https://api.whatsapp.com/send?phone=917900200563&text=${encodeURIComponent(message)}`}
  target="_blank"
  style={{ textDecoration: "none" }}
>  <AvailabilityBtn >
              Check Availability
            </AvailabilityBtn>
            </Link>
          </CheckAvailability>

        </Container>
      </Wrapper>
      
      <FloatingWhatsApp/>
    </>
  );
};

export default Rooms;

/* ---------- styled ---------- */
const Wrapper = styled("div")`
 
  max-width: 1400px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ImageSlider = styled("div")`
  width: 100%;
  margin-top: 1rem;
`;

const Features = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;  
  margin-top: 1.5rem;
  margin-bottom: 2vh;

  /* Mobile: allow wrapping (IMPORTANT) */
  @media (max-width: 480px) {
    justify-content: flex-start;
    gap: 0rem;  
  }
`;


const Description = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 95%;
  margin-top: 2rem;
  padding: clamp(1rem, 3vw, 2rem);
`;

const Heading = styled("h2")`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subheading = styled("h3")`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #384b42;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Paragraph = styled("p")`
  font-size: clamp(0.95rem, 1.5vw, 1.125rem);
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.75rem;
  text-align: center;

  @media (min-width: 768px) {
    // text-align: left;
  }
`;

const Section = styled("div")`
  margin-bottom: 1rem;
  width: 100%;
`;

const CheckAvailability = styled("div")`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.06);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-top: 2rem;

  /* Desktop: inline card style */
  position: static;

  @media (max-width: 768px) {
    /* Mobile: sticky at bottom */
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
  }
`;

const Nightly = styled("span")`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 600;
  color: #2d2d2d;
`;

const AvailabilityBtn = styled("button")`
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
  background-color: #384b42;
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #2a3a34;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const InfoContainer = styled("div")`
  width: 95%;
  margin: 0 2rem auto 0;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    flex-direction: column;
  margin-bottom: 6rem;
    gap: 0.75rem;
    padding: 1rem ;
  }
`;

const InfoItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const InfoLabel = styled("span")`
  font-size: 0.85rem;
  color: #777;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const InfoValue = styled("span")`
  font-size: 1rem;
  color: #2d2d2d;
  font-weight: 600;
`;

const Divider = styled("div")`
  width: 1px;
  height: 40px;
  background: #ddd;

  @media (max-width: 600px) {
    width: 60%;
    height: 1px;
  }
`;
