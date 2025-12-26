import { styled } from "@mui/material";
import React from "react";
import videoBg from "../assets/vid.mp4"
const Home = () => {
  return (
    // <CenterBox>
    //   <Image>
    //     <video src={videoBg} autoPlay loop muted  />
    //     <Heading>Welcome to Stone Heritage</Heading>
    //     <SubHeading>
    //       Tropico is a nature-inspired hostel nestled in the Himalayan forest.
    //       We preserve traditional pahadi mud-houses and celebrate local
    //       biodiversity. Stay with us to explore hidden trails, rare flora, and
    //       genuine mountain hospitality.
    //     </SubHeading>
    //     <BookingBtn>Book Now!</BookingBtn>
    //   </Image>
    // </CenterBox>
    <>
    <Container>
      {/* <video src={videoBg} autoPlay loop muted  /> */}
      <Image/>
    </Container>
    </>
  );
};

export default Home;


const Container = styled('div')`
widht: 100%;  
height: 60vh;
`
const CenterBox = styled("div")`

  widht: 100vw;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  gap: 20px;
  background-color: red;
`;
const Heading = styled("div")`
  font-weight: 1000;
  font-size: 90px;
  color: rgb(160, 178, 136);
  opacity: none;
`;
const SubHeading = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  width: 95px;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
  width: 900px;
  font: 500 35px Serif;
`;

const BookingBtn = styled("div")`
  background-color: #8b4513;
  color: white;
  padding: 20px 70px;
  border-radius: 10px;
  font-size: 35px;
  margin-top: 35px;
  font-weight: 600;
`;

const Image = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("img.gif");
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 900px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
