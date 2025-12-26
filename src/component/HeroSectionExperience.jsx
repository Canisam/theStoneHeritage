import React from 'react';
import './HeroSection.css';
import Lottie from 'lottie-react';
import cloudAnim from '../assets/cloud-animation.json';

const HeroSectionExperience = () => {
  return (
    <section className="hero-section">
      <div className="cloud-lottie cloud1">
        <Lottie animationData={cloudAnim} loop autoplay />
      </div>
      <div className="cloud-lottie cloud2">
        <Lottie animationData={cloudAnim} loop autoplay />
      </div>
      <h1 className="title">Extreme <br /> Hiking</h1>
    </section>
  );
};

export default HeroSectionExperience;
