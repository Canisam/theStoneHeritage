import { Box, Button, Typography, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({ image, title, description, buttonText, link }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (link === '/coming-soon') {
      setOpen(true);
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#fff',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: { xs: 2, sm: 4 },
          },
          maxWidth: { xs: '100%', sm: 320 },
          mx: 'auto',
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: { xs: '30vh', sm: '30vh' },
            mb: 1,
            objectFit: 'cover',
            minWidth: '25vw',
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            fontWeight: 600,
            mb: 1,
            color: '#984216',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
            lineHeight: 1.5,
            mb: 2,
            px: { xs: 1, sm: 2 },
            color: 'text.secondary',
          }}
        >
          {description}
        </Typography>

        {buttonText && (
          <Button
            variant="outlined"
            size="small"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.85rem' },
              px: { xs: 2, sm: 3 },
              py: { xs: 0.5, sm: 1 },
              borderRadius: 2,
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>

      {/* Coming Soon Popup */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            textAlign: 'center',
            animation: 'scaleIn 0.3s ease',
          },
        }}
      >
        <DialogContent>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            ✨ Coming Soon
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            We are crafting this for you. Stay tuned!
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{ borderRadius: 2 , backgroundColor:" #dda15e"}}
          >
            Okay
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomeCard;
