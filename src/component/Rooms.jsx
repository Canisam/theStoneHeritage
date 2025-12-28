import React from "react";
import { styled } from "@mui/material";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

import NavBar from "./NavBar";
import FeaturesCard from "./FeaturesCard";

import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
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
// console.log("Room", roomName);
//   const amenities = [
//     {
//       logo: <SignalWifi4BarIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
//       text: "Free Wi-Fi",
//       description: "High-speed wireless internet available 24/7.",
//     },
//     {
//       logo: <AcUnitIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
//       text: "Air-Conditioning",
//       description: "Stay cool and comfortable all year round.",
//     },
//     {
//       logo: <ConnectedTvIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
//       text: "Smart TV",
//       description: "Watch your favourites on a 42-inch smart TV.",
//     },
//     {
//       logo: <RoomServiceIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
//       text: "Room Service",
//       description: "On-demand food and beverage delivery.",
//     },
//     {
//       logo: <LocalParkingIcon sx={{ fontSize: "clamp(36px,4vw,50px)", color: "#384b42" }} />,
//       text: "Free Parking",
//       description: "Secure, on-site parking is included.",
//     },
//   ];

//   const description = [
//     {
//       subheading: "Guest Access",
//       content:
//         "You'll have full access to the apartment, balcony and kitchen—make yourself at home!",
//     },
//     {
//       subheading: "Other Things to Note",
//       content:
//         "Fresh linens, toiletries and a welcome kit provided. Please respect the house rules.",
//     },
//     {
//       subheading: "Neighborhood",
//       content:
//         "Quiet residential area just 5 min from the city centre. Cafés and shops are within walking distance.",
//     },
//   ];
const ROOMS_DATA = {
  1: {
    aboutIntro:
    "Stone Heritage, Mukteshwar A Boutique Heritage Escape Stone Heritage is a handcrafted boutique stay set in a restored heritage building in the Kumaon Hills of Uttarakhand. With rustic stone architecture, antique dcor, and cozy interiors, it offers a unique blend of heritage charm and modern comfort. The property features 7 boutique rooms, each thoughtfully designed to create a warm and homely atmosphere. Guests can enjoy wholesome vegetarian meals, unwind by the fireplace, and soak in the peaceful mountain vibes. Perfectly placed to capture both sunrise and sunset views, Stone Heritage is surrounded by lush greenery and scenic trails, making it ideal for nature lovers and those seeking a serene escape. Its convenient on-road parking on the state highway ensures easy accessibility without compromising on tranquility. Whether youre here to relax, explore nearby hikes, or simply slow down, Stone Heritage promises a rejuvenating retreat in the heart of the Himalayaswhere comfort, heritage, and natural beauty come together."
,
    description: [
      {
        subheading: "The Space",
        content:
         `Our property is located just 5 km before Mukteshwar, right on the state highway, in the heart of nature. It features beautiful boutique rooms with garden space where you can enjoy both sunrise and sunset views. We serve delicious vegetarian food on the property.

There are two walking trails nearby—one short trail leading to a scenic sunset point, and a longer one that takes you to the famous Mukteshwar Mahadev Temple, about 5 km away.` },
      {
        subheading: "Guest Access",
        content:
         "Guests can comfortably access all areas of the property."     },
      {
        subheading: "Other Things to Note",
        content:
         `House Rules are simple and gentle -this is our home.
Our kitchen is strictly vegetarian, and loud music is not allowed.`},
    ],

    amenities: [
      {
        logo: <SignalWifi4BarIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
        text: "Free Wi-Fi",
        description: "High-speed internet available 24/7.",
      },
      {
        logo: <AcUnitIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
        text: "Air-Conditioning",
        description: "Stay cool and comfortable.",
      },
      {
        logo: <ConnectedTvIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
        text: "Smart TV",
        description: "42-inch smart TV for entertainment.",
      },
    ],
  },

  2: {
    aboutIntro:
      "A spacious room ideal for families, offering comfort and privacy.",

    description: [
      {
        subheading: "Guest Access",
        content: "Entire room with attached bathroom and balcony access.",
      },
      {
        subheading: "Neighborhood",
        content: "Quiet residential area close to cafés and shops.",
      },
    ],

    amenities: [
      {
        logo: <SignalWifi4BarIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
        text: "Free Wi-Fi",
        description: "Fast and reliable internet.",
      },
      {
        logo: <RoomServiceIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
        text: "Room Service",
        description: "On-demand food and beverages.",
      },
      {
        logo: <LocalParkingIcon sx={{ fontSize: "clamp(36px,4vw,50px)", color: "#384b42" }} />,
        text: "Free Parking",
        description: "Secure on-site parking.",
      },
    ],
  },

  // 👉 TEMP placeholders for now
  3: { description: [], amenities: [], aboutIntro: "Room 3 description" },
  4: { description: [], amenities: [], aboutIntro: "Room 4 description" },
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
            <Heading>About this space</Heading>
            <Paragraph>
              Welcome to your home away from home. This modern and cosy space is
              perfect for solo travellers, couples or small families. Fast Wi-Fi,
              AC and comfort-focused design ensure your stay is memorable.
            </Paragraph>

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
                description={description}
              />
            ))}
          </Features>

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
  margin-bottom: 12vh;

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
