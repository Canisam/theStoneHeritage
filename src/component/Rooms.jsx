import React from "react";
import { styled } from "@mui/material";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import NavBar from "./NavBar";
import Bookings from "./Bookings";
import FeaturesCard from "./FeaturesCard";

import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
const Rooms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: roomId } = useParams();

  const pricePerNight =
    Number(location.state?.pricePerNight) ||
    Number(location.state?.price) ||
    0;

  const amenities = [
    {
      logo: <SignalWifi4BarIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
      text: "Free Wi-Fi",
      description: "High-speed wireless internet available 24/7.",
    },
    {
      logo: <AcUnitIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
      text: "Air-Conditioning",
      description: "Stay cool and comfortable all year round.",
    },
    {
      logo: <ConnectedTvIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
      text: "Smart TV",
      description: "Watch your favourites on a 42-inch smart TV.",
    },
    {
      logo: <RoomServiceIcon sx={{ fontSize: "clamp(40px,5vw,70px)", color: "#384b42" }} />,
      text: "Room Service",
      description: "On-demand food and beverage delivery.",
    },
    {
      logo: <LocalParkingIcon sx={{ fontSize: "clamp(36px,4vw,50px)", color: "#384b42" }} />,
      text: "Free Parking",
      description: "Secure, on-site parking is included.",
    },
  ];

  const description = [
    {
      subheading: "Guest Access",
      content:
        "You'll have full access to the apartment, balcony and kitchen—make yourself at home!",
    },
    {
      subheading: "Other Things to Note",
      content:
        "Fresh linens, toiletries and a welcome kit provided. Please respect the house rules.",
    },
    {
      subheading: "Neighborhood",
      content:
        "Quiet residential area just 5 min from the city centre. Cafés and shops are within walking distance.",
    },
  ];

  const goToAvailability = () =>
    navigate("/Availability", {
      state: { pricePerNight, roomId },
    });

  return (
    <>
      <NavBar />
      <Wrapper>
        <Container>
          <ImageSlider>
            <Bookings />
          </ImageSlider>

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
            <AvailabilityBtn onClick={goToAvailability}>
              Check Availability
            </AvailabilityBtn>
          </CheckAvailability>
        </Container>
      </Wrapper>
      <Footer/>
      <FloatingWhatsApp/>
    </>
  );
};

export default Rooms;

/* ---------- styled ---------- */
const Wrapper = styled("div")`
  width: 95%;
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
  gap: clamp(0.5rem, 1vw, 1rem);
  margin-top: 1.5rem;
  margin-bottom: 12vh;
  align-items: stretch;
  justify-content: center;
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
    text-align: left;
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
