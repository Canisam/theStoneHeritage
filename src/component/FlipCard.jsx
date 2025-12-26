import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({
  title = 'Exclusive Design',
  description = 'Discover more about our stunning WordPress themes.',
  price = '$49',
  backDescription = 'High-performance theme with responsive design and stunning visuals.',
  imageUrl = 'https://source.unsplash.com/featured/?nature',
}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div className="card-container" onClick={toggleFlip}>
      <div className={`card ${flipped ? 'flip' : ''}`}>
        <div className="card-face card-front"  style={{ backgroundImage: `url(${imageUrl})` }} >
          <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={(e) => { e.stopPropagation(); toggleFlip(); }}>Know More</button>
          </div>
        </div>
        <div className="card-face card-back" style={{ backgroundImage: `url(${imageUrl})` }}>
          <h3>{title}</h3>
          <p>{backDescription}</p>
          <div className="price">{price}</div>
          <button onClick={(e) => { e.stopPropagation(); toggleFlip(); }}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
