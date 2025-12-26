import React from 'react';
import { styled, Typography } from '@mui/material';

// ✅ If the file is inside public folder, just use "/test-img.jpg"
const PhotoCardTestimonial = ({imgText, description, position, name}) => {
  return (
    <Wrapper>
      <ContainerPhoto>
        <Photo>
          <img 
            src={imgText && imgText.length > 0 ? imgText : "/main-logo.png"} 
            alt="Profile" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} 
          />
        </Photo>

        <Review>
            <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >

          {description&&description.length>0?description :` I'm Khushi, a working professional, and my stay at Stone Heritage Stay was a true break from the chaos of daily life.`}
                  </Typography>
         
        </Review>
               <Typography variant="subtitle1" fontWeight="bold">
               {name&&name.length>0?name:"Saransh Tripathi"}
                </Typography>
             <Typography variant="caption" color="text.secondary">
          {position&&position.length>0?position:"Product Analyst· Tech Studio"} 
        </Typography>
      </ContainerPhoto>
    </Wrapper>
  );
};

export default PhotoCardTestimonial;

// Styled Components
const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', 
  padding: '10px',
});

const ContainerPhoto = styled('div')({
  width: '220px',
  minHeight: '250px',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const Photo = styled('div')({
  flex: 2,
  width: '100%',
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: '#eee',
});

const Review = styled('div')({
  flex: 1,
  marginTop: '10px',
  width: '100%',
  fontSize: '12px',
  lineHeight: 1.4,
  color: '#333',
  textAlign: 'center',
});
