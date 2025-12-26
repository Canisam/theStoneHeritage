// components/HeroSection.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MapMask from "/assets/bg-uk.png"; // Transparent map of Uttarakhand
import OverlayImage from "/assets/image1.png"; // Image inside map

const HeroSectionVolunteer = () => {
  return (
    <Container component="section" aria-labelledby="hero-title">
      <ContentBox>
        <Title id="hero-title" component="h1">
          Be the Change.
          <br />
          Start with <Emphasis>a Helping Hand</Emphasis>
        </Title>

        <Paragraph component="p">
          Join our mission to uplift communities, empower individuals, and bring
          lasting change. Whether you give your time, skills, or heart — every
          act of service counts.
        </Paragraph>

        <CTAButton
          variant="contained"
          size="large"
          aria-label="Become a volunteer"
        >
          Become a Volunteer
        </CTAButton>
      </ContentBox>

      <MapMaskWrapper aria-hidden="true">
        <MaskedImage src={OverlayImage} alt="Uttarakhand map with overlay" />
      </MapMaskWrapper>
    </Container>
  );
};

export default HeroSectionVolunteer;

/* -------------------------
   Styled components
   ------------------------- */

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "clamp(1rem, 3vw, 2.5rem)",
  padding: "clamp(1.25rem, 3.5vw, 4rem)",
  backgroundColor: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(6px)",
  borderRadius: 20,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  flexWrap: "wrap",
  overflow: "hidden",

  maxWidth: 1280,
  marginLeft: "auto",
  marginRight: "auto",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    padding: "clamp(1rem, 4vw, 2rem)",
  },
}));

const ContentBox = styled("div")(({ theme }) => ({
  flex: "1 1 420px",
  maxWidth: 560,
  minWidth: 240,
  padding: "clamp(1rem, 2.5vw, 2rem)",
  backgroundColor: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(6px)",
  borderRadius: 16,
  animation: "fadeInUp 0.8s ease-out",
  boxSizing: "border-box",

  "@keyframes fadeInUp": {
    from: { opacity: 0, transform: "translateY(18px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "100%",
    padding: "clamp(0.75rem, 4vw, 1.25rem)",
    textAlign: "center",
    marginBottom: "0.75rem",
  },
}));

const MapMaskWrapper = styled("div")(({ theme }) => ({
  flex: "0 0 clamp(240px, 40%, 700px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: "zoomIn 0.9s ease-out",
  transition: "transform 0.35s ease, filter 0.35s ease",
  borderRadius: 12,
  overflow: "visible",
  minWidth: 200,

  "@keyframes zoomIn": {
    from: { transform: "scale(0.96)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  },

  "&:hover img": {
    transform: "scale(1.04)",
    filter: "drop-shadow(0 12px 25px rgba(25,118,210,0.28))",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    flex: "1 1 100%",
    marginBottom: 0,
    order: -1,
  },
}));

const MaskedImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  transition: "transform 0.35s ease, filter 0.35s ease",
  display: "block",

  maskImage: `url(${MapMask})`,
  maskSize: "cover",
  maskRepeat: "no-repeat",
  maskPosition: "center",

  WebkitMaskImage: `url(${MapMask})`,
  WebkitMaskSize: "cover",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",

  maxWidth: 900,
  borderRadius: 12,
});

const Title = styled(Typography)({
  fontWeight: 800,
  fontSize: "clamp(1.6rem, 2.6vw + 0.8rem, 3rem)",
  lineHeight: 1.15,
  marginBottom: "0.9rem",
  color: "#0f1724",
  letterSpacing: "-0.01em",
  wordWrap: "break-word",
});

const Emphasis = styled("span")({
  color: "#1976d2",
});

const Paragraph = styled(Typography)({
  fontSize: "clamp(0.95rem, 1.2vw + 0.6rem, 1.15rem)",
  color: "#333",
  lineHeight: 1.7,
  marginBottom: "1.25rem",
  opacity: 0.95,
});

const CTAButton = styled(Button)({
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "clamp(10px, 1.2vw, 14px) clamp(20px, 2.5vw, 32px)",
  fontSize: "clamp(0.95rem, 1vw + 0.4rem, 1rem)",
  borderRadius: 28,
  textTransform: "none",
  boxShadow: "0 8px 20px rgba(25,118,210,0.25)",
  transition:
    "transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease",

  "&:hover": {
    backgroundColor: "#1256a3",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 26px rgba(25,118,210,0.32)",
  },

  "&:focus": {
    outline: "3px solid rgba(25,118,210,0.18)",
    outlineOffset: 2,
  },
});
