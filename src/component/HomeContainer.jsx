// HomeContainer.jsx
import { Box, Typography } from '@mui/material';

const HomeContainer = ({
  bgImage,
  text,
  overlayColor = 'rgba(127,168,158,0.5)', // semi-transparent teal overlay
  minHeight = '60vh',
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayColor,
        }}
      />

      {/* Content box */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(255,255,255,0.85)',
          color: '#984216',
          borderRadius: 2,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 2, sm: 3, md: 4 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 1.5, sm: 2 },
          maxWidth: { xs: '90%', sm: '80%', md: '700px' },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeContainer;