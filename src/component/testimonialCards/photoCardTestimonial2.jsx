import React from 'react';
import { styled, Typography } from '@mui/material';

const PhotoCardTestimonial2 = ({imgText, description, name, position}) => {
  return (
    <Wrapper>
      <ContainerPhoto>
        <Photo>
          <StyledImage src={imgText && imgText.length>0 ? imgText : "/test-img.jpg"} alt="Profile" />
        </Photo>
        <Review>
             <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >

          {
            description&&description.length>0?description:`   I'm Khushi, a working professional, and my stay at 
           Stone Heritage Stay was the perfect escape — 
          peaceful, refreshing, and a true break from the chaos of daily life.`
          }
                  </Typography>
       
               <Typography variant="subtitle1" fontWeight="bold">
                       {name&&name.length>0?name:"Saransh Tripathi"}
                        </Typography>
                     <Typography variant="caption" color="text.secondary">
                  {position&&position.length>0?position:"Product Analyst· Tech Studio"} 
                </Typography>
        </Review>
      </ContainerPhoto>
    </Wrapper>
  );
};

export default PhotoCardTestimonial2;

// Styled Components
const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#f9f9f9',
});

const ContainerPhoto = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  maxWidth: '600px',
  width: '100%',
});

const Photo = styled('div')({
  flex: '0 0 40%',
  minHeight: '200px',
  backgroundColor: '#eee',
  overflow: 'hidden',
});

const Review = styled('div')({
  flex: 1,
  padding: '15px',
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#333',
  textAlign: 'left',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
