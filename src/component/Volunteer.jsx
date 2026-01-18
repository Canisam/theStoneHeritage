import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import GroupIcon from "@mui/icons-material/Group";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LanguageIcon from "@mui/icons-material/Language";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import FeaturesCard from "./FeaturesCard";
import HeroSectionVolunteer from "./HeroSectionVolunteer";
import BgMap from "/assets/bg-map.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { Helmet } from "@vuer-ai/react-helmet-async";

const Volunteer = () => {
  // ✅ Volunteer Schema JSON-LD
  const volunteerSchema = {
    "@context": "https://schema.org",
    "@type": "VolunteerAction",
    name: "Community Volunteer Program at Stone Heritage Mukteshwar",
    description:
      "Exchange your skills in teaching or organic farming for a heritage stay at Stone Heritage Mukteshwar in the Himalayas.",
    location: {
      "@type": "Place",
      name: "Stone Heritage Mukteshwar",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mukteshwar",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    },
    provider: {
      "@type": "Organization",
      name: "Stone Heritage Mukteshwar",
      url: "https://thestoneheritage.in/",
    },
  };

  const skills = [
    {
      name: "Coding",
      description: "Proficient in writing clean and efficient code.",
      icon: <CodeIcon color="primary" fontSize="large" />,
    },
    {
      name: "Teamwork",
      description: "Collaborates well with diverse teams.",
      icon: <GroupIcon color="secondary" fontSize="large" />,
    },
    {
      name: "Creativity",
      description: "Brings innovative ideas to projects.",
      icon: <EmojiObjectsIcon color="warning" fontSize="large" />,
    },
    {
      name: "Communication",
      description: "Clear and confident communicator.",
      icon: <LanguageIcon color="success" fontSize="large" />,
    },
    {
      name: "Volunteering",
      description: "Passionate about community impact.",
      icon: <VolunteerActivismIcon color="error" fontSize="large" />,
    },
  ];

  const services = [
    {
      name: "Work Exchange",
      description: "Volunteer in return for a heritage stay.",
      icon: <GroupIcon color="secondary" fontSize="large" />,
    },
    {
      name: "Organic Farming",
      description: "Hands-on eco-farming experience.",
      icon: <EmojiObjectsIcon color="warning" fontSize="large" />,
    },
    {
      name: "Teaching",
      description: "Skill-sharing with local communities.",
      icon: <LanguageIcon color="success" fontSize="large" />,
    },
  ];

  return (
    <>
      {/* ✅ SEO HEAD SECTION */}
      <Helmet>
        {/* Meta Title */}
        <title>Volunteer in Mukteshwar | Work Exchange at Stone Heritage</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Volunteer in Mukteshwar with Stone Heritage. Join our work exchange program in organic farming, teaching, and community projects while staying in the Himalayas."
        />

        {/* Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(volunteerSchema)}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <NavBar />

      <PageWrapper>
      
        <HeroSectionVolunteer />


        <SectionTitle variant="h3">Volunteer Skills</SectionTitle>
        <HorizontalScroll>
          {skills.map((skill, index) => (
            <FeaturesCard
              key={index}
              logo={skill.icon}
              text={skill.name}
              description={skill.description}
            />
          ))}
        </HorizontalScroll>

        <SectionTitle variant="h3">What We Offer</SectionTitle>
        <HorizontalScroll>
          {services.map((service, index) => (
            <FeaturesCard
              key={index}
              logo={service.icon}
              text={service.name}
              description={service.description}
            />
          ))}
        </HorizontalScroll>
      </PageWrapper>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Volunteer;
const PageWrapper = styled(Box)`
  background-image: url(${BgMap});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const HorizontalScroll = styled(Box)`
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 10px;
  }
`;

const SectionTitle = styled(Typography)`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #1976d2;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);

  @media (max-width: 480px) {
    margin-top: 25px;
    margin-bottom: 5px;
  }
`;
