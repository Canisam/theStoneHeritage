import React from 'react';
import './ContentSection.css';
import house from '../assets/house.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContentSectionExperience = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="content-section">
      <motion.img
        style={{ y }}
        src={house}
        alt="house"
        className="floating-house"
      />
      <div className="content-box">
        <h2>ALDEVÅGEN</h2>
        <p>
          Visit the island Alden and hike up to the top also called the Norwegian horse. 
          The mountain rises straight out of the ocean, 481 m above sea level. 
          It’s one of the most significant sightings on the west coast of Norway.
        </p>
        <p><strong>Distance:</strong> 78 km</p>
      </div>
    </section>
  );
};

export default ContentSectionExperience;
