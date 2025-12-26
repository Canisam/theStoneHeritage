import { styled } from "@mui/material";
import NavBar from "./NavBar";
import Bookings from "./Bookings";
const Home = () => {
  return (
    <>
      <NavBar/>
  {/* <Container>
    <Image />
    <Overlay />
    <Content>
      <Heading>Welcome To The Stone Heritage</Heading>
      <Description>
        A serene retreat nestled deep within the biodiverse Himalayan forests. We are a passionate community of nature lovers dedicated to preserving the charm of traditional Pahadi mud-houses. Our eco-hostel offers an authentic mountain experience, where guests reconnect with nature, enjoy peaceful stays, and explore hidden Himalayan trails.
      </Description>
      <Button>Book Now</Button>
    </Content>
  </Container> */}
    <Bookings/>
    </>
  );
};

export default Home;

// Styled Components

const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 900px;
`;

const Image = styled("div")`
  width: 100%;
  height: 900px;
  background-image: url("img.gif");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Overlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 900px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled("div")`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

const Heading = styled("h1")`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Description = styled("p")`
  font-size: 28px;
  font-weight: 400;
  width: 60%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;
  }
`;

const Button = styled("button")`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  background-color: #ff6f61;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
