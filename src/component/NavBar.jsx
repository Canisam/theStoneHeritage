import React, { useState } from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const NavBar = () => {
  const navItems = ["Stay", "Experiences", "Volunteer", "Book Now"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavBarMainComponent>
      <Logo>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#984216",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={"/main-logo.png?w=164&h=164&fit=crop&auto=format"} alt="Logo" />
          <span>The Stone Heritage</span>
        </Link>
      </Logo>

      <HamburgerIcon onClick={toggleMenu}>
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </HamburgerIcon>

      <NavItemsContainer open={mobileMenuOpen}>
        {navItems.map((item, i) => (
          <NavItem key={i} onClick={() => setMobileMenuOpen(false)}>
            {item === "Book Now" ? (
              <a
                href="tel:+917900200563"
                target="_blank"
                style={{ textDecoration: "none", color: "#984216" }}
              >
                <BookNowButton>
                  <PhoneInTalkIcon /> &nbsp; {item}
                </BookNowButton>
              </a>
            ) : (
              <Link
                to={"/" + item.replace(/\s+/g, "")}
                style={{ textDecoration: "none", color: "#984216" }}
              >
                {item}
              </Link>
            )}
          </NavItem>
        ))}
      </NavItemsContainer>
    </NavBarMainComponent>
  );
};

export default NavBar;

/* ——— styled components ——— */

const NavBarMainComponent = styled("nav")`
  background-color: rgba(221, 161, 94, 0.85); /* 0.85 = 85% */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 4vw, 3rem);
  height: clamp(60px, 10vh, 80px);
  width: 100%;
  position: relative;
  z-index: 1000;
`;

const Logo = styled("div")`
  display: flex;
  align-items: center;
  font-size: clamp(1.1rem, 2.5vw, 1.75rem);
  font-family: serif;
  font-weight: bold;
  white-space: nowrap;

  img {
    height: clamp(40px, 6vw, 55px);
    margin-right: clamp(0.5rem, 1vw, 1rem);
    max-width: 100%;
  }
`;

const NavItemsContainer = styled("div")`
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: center;
  transition: all 0.3s ease-in-out;
  flex-direction: row;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #dda15e;
    flex-direction: column;
    width: 100%;
    padding: ${({ open }) => (open ? "1rem 0" : "0")};
    height: ${({ open }) => (open ? "auto" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    overflow: hidden;
    gap: 1rem;
  }
`;

const NavItem = styled("div")`
  font: 600 clamp(0.95rem, 2vw, 1.1rem) serif;
  cursor: pointer;
  color: #984216;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const BookNowButton = styled("div")`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #984216;
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
  border-radius: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

const HamburgerIcon = styled("div")`
  display: none;
  cursor: pointer;
  z-index: 1100;

  svg {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

