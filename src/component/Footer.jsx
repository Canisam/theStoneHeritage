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
        <BrandColumn style={{ display: "flex", alignItems: "center" }}>
          <SectionTitle>Stone Heritage Mukteshwar</SectionTitle>
          <MapWrapper>
            <Link
              to={"https://maps.app.goo.gl/H9Ua6RBQ9qo7fmpM7"}
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              <img src="/assets/map.png" alt="Himalayan view from Stone Heritage Mukteshwar" />
            </Link>
          </MapWrapper>
        </BrandColumn>

        {/* Quick Links */}
        <FooterColumn>
          <SectionTitle>Quick Links</SectionTitle>
          <FooterLink>
            <Link
              to={"/Stay"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Stay
            </Link>
          </FooterLink>
          <FooterLink>
            <Link
              to={"/Volunteer"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Volunteer
            </Link>
          </FooterLink>
          <FooterLink>
            <Link
              to={"/Experience"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Experiences
            </Link>
          </FooterLink>
        </FooterColumn>

        {/* Contact */}
        <FooterColumn>
          <SectionTitle>Get In Touch</SectionTitle>
<ContactLink href="tel:+919027844424">
  +91 9027844424
</ContactLink>

<ContactLink href="tel:+917900200563">
  +91 7900200563
</ContactLink>

          <ContactText>thestoneheritage@gmail.com</ContactText>
          <ContactText>
            Bhowali Dhanachuli Rd, Mukteshwar,
            <br />
            South Gola Range, Uttarakhand 263138
          </ContactText>
        </FooterColumn>

        {/* Social */}
        <FooterColumn>
          <SectionTitle>Let&apos;s Connect ;)</SectionTitle>
          <SocialIcons>
            <Link
              to="https://api.whatsapp.com/send/?phone=%2B919027844424&text&type=phone_number&app_absent=0"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <WhatsAppIcon />
            </Link>
            <Link
              to="https://www.instagram.com/thestoneheritage/"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              <InstagramIcon />
            </Link>

            <Link
              to={
                "https://www.google.com/maps/place/Stone+Heritage+Mukteshwar/@29.4344652,79.6421795,17z/data=!3m1!4b1!4m9!3m8!1s0x39a0bd7d35a2e497:0x466b07899edd7565!5m2!4m1!1i2!8m2!3d29.4344652!4d79.6447544!16s%2Fg%2F11xcykp72p?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GoogleIcon />
            </Link>

            <Link
              to={
                "https://www.youtube.com/@StoneHeritageMukteshwar"
              }
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <YouTubeIcon />
            </Link>
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>

      <BottomBar>
        <span>© 2025 Stone Heritage Mukteshwar. All Rights Reserved.</span>
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

  @media (max-width: 600px) {
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
  line-height: 1.2;

  @media (max-width: 600px) {
    text-align: center;
  }
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

  /* 🚀 MOBILE FULL-WIDTH ESCAPE */
  @media (max-width: 600px) {
    width: 100vw;
    max-width: 100vw;

    /* cancel footer padding */
    margin-left: calc(-1 * 4vw);
    margin-right: calc(-1 * 4vw);

    img {
      border-radius: 0;
    }
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
  font-size: 16px;
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
  font-style: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  opacity: 0.85;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;
const ContactLink = styled("a")`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #984216;
  text-decoration: none;
  margin: 0.3rem 0;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(209, 192, 183, 0.8)
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
