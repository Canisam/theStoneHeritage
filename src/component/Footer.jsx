import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterGrid>

        {/* Brand / Map */}
        <BrandColumn>
          <SectionTitle>The Stone Heritage</SectionTitle>
          <MapWrapper>
            <Link to={"https://share.google/nJXFb3hclCotiPLKc"} style={{textDecoration:"none", color:"inherit"}}>
            <img src="/assets/map.png" alt="Stone Heritage Map" />
            </Link>
          </MapWrapper>
        </BrandColumn>

        {/* Quick Links */}
        <FooterColumn>
          <SectionTitle>Quick Links</SectionTitle>
          <FooterLink>Stay</FooterLink>
          <FooterLink>Volunteer</FooterLink>
          <FooterLink>Experience</FooterLink>
        </FooterColumn>

        {/* Contact */}
        <FooterColumn>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactText>+91 9027844424</ContactText>
          <ContactText>+91 7900200563</ContactText>
          <ContactText>thestoneheritage@gmail.com</ContactText>
          <ContactText>
            Sign Board, Stops At Stone Heritage,<br />
            Bhowali Dhanachuli Rd, Mukteshwar,<br />
            South Gola Range, Uttarakhand 263138
          </ContactText>
        </FooterColumn>

        {/* Social */}
        <FooterColumn >
          <SectionTitle >Let&apos;s Connect ;)</SectionTitle>
          <SocialIcons>
      <Link
  to="https://api.whatsapp.com/send/?phone=%2B917900200563&text&type=phone_number&app_absent=0"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <WhatsAppIcon />
</Link>
<Link
  to="https://www.instagram.com/thestoneheritage/"
  style={{ textDecoration: "none", color: "inherit" }}
>
    <InstagramIcon />
</Link>

      <Link to={"https://www.google.com/maps/place/Stone+Heritage+Mukteshwar/@29.4344652,79.6421795,17z/data=!3m1!4b1!4m9!3m8!1s0x39a0bd7d35a2e497:0x466b07899edd7565!5m2!4m1!1i2!8m2!3d29.4344652!4d79.6447544!16s%2Fg%2F11xcykp72p?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"} style={{textDecoration:"none", color:"inherit"}}>
            <GoogleIcon />
            </Link>

            <Link to={"https://www.youtube.com/watch?v=6r-H4ywHnqM&pp=ygUSdGhlIHN0b25lIGhlcml0YWdl"}   style={{textDecoration:"none", color:"inherit"}}>
            <YouTubeIcon />
            </Link>    
          </SocialIcons>
        </FooterColumn>

      </FooterGrid>

      <BottomBar>
        <span>© 2025 Stone Heritage. All Rights Reserved.</span>
        <span>📍 Mukteshwar, Uttarakhand 263138</span>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled("footer")`
  background-color: rgba(221, 161, 94, 0.85); /* 0.85 = 85% */
  padding: 2vh 4vw 1vh;
  color: #984216;
`;

const FooterGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: ${({ align }) => align || "left"};

  @media (max-width: 600px) {
    text-align: center;
    align-items: center;
  }
`;

const BrandColumn = styled(FooterColumn)`
  align-items: flex-start;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const SectionTitle = styled("h4")`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const MapWrapper = styled("div")`
  width: 100%;
  max-width: 260px;
  height: 25vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }
`;


const FooterLink = styled("span")`
  font-size: 16px;
  cursor: pointer;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const ContactText = styled("p")`
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.9;
`;

const SocialIcons = styled("div")`
  display: flex;
  gap: 18px;

  svg {
    font-size: 32px;
    cursor: pointer;
    opacity: 0.85;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  svg:hover {
    transform: translateY(-4px) scale(1.1);
    opacity: 1;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const BottomBar = styled("div")`
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  padding-top: 15px;

  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.85;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;
