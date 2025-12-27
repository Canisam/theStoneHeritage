import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const NavBar = () => {
  const navItems = ["Stay", "Experiences", "Volunteer", "Book Now"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <NavBarMainComponent>
      <Logo>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#984216",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/main-logo.png" alt="Logo" />
          <span>The Stone Heritage</span>
        </Link>
      </Logo>

      <HamburgerIcon onClick={() => setMobileMenuOpen((p) => !p)}>
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </HamburgerIcon>

      <NavItemsContainer
        ref={menuRef}
        open={mobileMenuOpen}
        onClick={(e) => e.stopPropagation()} // 🔥 KEY FIX
      >
        {navItems.map((item, i) => (
          <NavItem key={i} onClick={() => setMobileMenuOpen(false)}>
            {item === "Book Now" ? (
              <a
                href="tel:+917900200563"
                style={{ textDecoration: "none", color: "#984216" }}
              >
                <BookNowButton>
                  <PhoneInTalkIcon /> {item}
                </BookNowButton>
              </a>
            ) : (
              <Link
                to={`/${item.replace(/\s+/g, "")}`}
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

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #dda15e;
    flex-direction: column;
    width: 100%;

    padding: ${({ open }) => (open ? "1.2rem 0" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    pointer-events: ${({ open }) => (open ? "auto" : "none")}; /* 🔥 KEY FIX */
    max-height: ${({ open }) => (open ? "400px" : "0")};

    overflow: hidden;
    gap: 1.2rem;
    transition: opacity 0.3s ease, max-height 0.3s ease;
  }
`;



const NavItem = styled("div")`
  font-family: serif;
  font-weight: 600;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  cursor: pointer;
  color: #984216;
  transition: color 0.2s ease;
  text-align: center;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;

const BookNowButton = styled("div")`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: #984216;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;   /* 🔥 CENTER FIX */
    font-size: 1rem;
  }
`;

const HamburgerIcon = styled("div")`
  display: none;
  cursor: pointer;
  z-index: 1100;
  color: #984216; /* 🔥 FIX */

  svg {
    font-size: clamp(1.8rem, 5vw, 2.2rem);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

