import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Avatar, Rating } from "@mui/material";

// Styled Components
const ReviewCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 320,
  borderRadius: "16px",
  paddingTop: theme.spacing(6), // space for avatar
  position: "relative",
  textAlign: "center",
  boxShadow: theme.shadows[4],
  overflow: "visible",
}));

const AvatarWrapper = styled("div")(() => ({
  position: "absolute",
  top: -40, // moves avatar up → half outside card
  left: "50%",
  transform: "translateX(-50%)",
}));

export default function TestimonialCard1({imgText, name, description }) {
  return (
    <ReviewCard>
      <AvatarWrapper>
        <Avatar
          src={imgText}
          alt="Reviewer"
          sx={{
            width: 100,
            height: 100,
            border: "4px solid white",
            boxShadow: 3,
          }}
        />
      </AvatarWrapper>

      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>

        <Rating value={5} precision={0.5} readOnly sx={{ color: "#fbc02d", mb: 1 }} />
       <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >

          {description}
                  </Typography>



      </CardContent>
    </ReviewCard>
  );
}
