import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const ReviewCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  borderRadius: "16px",
  // padding: theme.spacing(),
  position: "relative",
  boxShadow: theme.shadows[4],
  overflow: "visible", // ensure avatar shows outside
  display: "flex",
  alignItems: "center",
}));

const AvatarWrapper = styled("div")(() => ({
  position: "absolute",
  right: -30, // half outside card
  top: "50%",
  transform: "translateY(-50%)",

}));

export default function TestimonialCard2({imgText, description, name, position}) {
  return (
    <ReviewCard>
      <CardContent sx={{ pr: 10 }}>
  
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
             <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }}}
        >
          ❝
        </Typography>
          {description&&description.length>0?description:" Everything from rooms to food was amazing. The Scenic view, earthly vibe, and hospitality was absolute delight to experience. The stay was clean and aesthetically pleasing. I highly recommend everyone to stay here atleast once."}
       
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">
       {name&&name.length>0?name:"Saransh Tripathi"}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {position&&position.length>0?position:"Product Analyst· Tech Studio"} 
        </Typography>
      </CardContent>

      <AvatarWrapper>
        <Avatar
         src={imgText && imgText.length > 0 ? imgText : "/main-logo.png"} 
          alt="Reviewer"
          sx={{
            width: 120,
            height: 120,
            border: "4px solid white",
            boxShadow: 3,
            
          }}
        />
      </AvatarWrapper>
    </ReviewCard>
  );
}
