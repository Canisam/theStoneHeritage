import React from "react";
import { styled } from "@mui/material";
import PhotoCardTestimonial from "./photoCardTestimonial";
import PhotoCardTestimonial2 from "./photoCardTestimonial2";
import TestimonialCard1 from "./ReviewCard2";
import TestimonialCard2 from "./ReviewCard3";

// Main Component
const MainTestimonial = () => {
  return (
    <OuterDiv>
      {/* LEFT SECTION */}
      <InnerDivA>
        <ChildDivA>
          <CardSmall>
            <TestimonialCard2
              imgText="/assets/testimonials/t4.png"
              description="This was a perfect weekend getaway from Delhi to Mukteshwar. After a long drive, the peaceful vibe, stone architecture, and warm hospitality helped us unwind completely. Watching the sunset here was unforgettable."
              name="Khushi"
            />
          </CardSmall>
          <CardSmall>
            {/* <PhotoCardTestimonial imgText="./testimonials/t2.jpg"  /> */}
            <PhotoCardTestimonial
              imgText="/assets/testimonials/t2.jpg"
              description={
                "This place is special not just because it’s on the main state highway of Mukteshwar, but also because the staff are so friendly and helpful. When I reached earlier than planned, they let me check in right away with no problems."
              }
              name="Akash"
              position=" "
            />
          </CardSmall>
        </ChildDivA>
        <ChildDivB>
          <CardLarge>
            <PhotoCardTestimonial2
              imgText="/assets/testimonials/t1.jpg"
              description="Stone Heritage Mukteshwar is a great budget homestay in Mukteshwar, Uttarakhand without compromising on experience. Clean rooms, beautiful views, and excellent hospitality make it great value for money."
              name="Saransh"
              position="Software Developer"
            />
            <TestimonialCard1
              imgText="/assets/testimonials/t8.jpg"
              description="We enjoyed early morning nature walks and small hikes around the property. Coming back to hot food and tea was the best feeling. This place is ideal for people who love slow travel and nature."
              name="Lotte"
            />
          </CardLarge>
        </ChildDivB>
      </InnerDivA>

      {/* RIGHT SECTION */}
      <InnerDivB>
        <ChildrenDivA>
          <CardSmall>
            <PhotoCardTestimonial2
              imgText="/assets/testimonials/t3.jpg"
              name="Rashmi Negi"
              description="The pure vegetarian food prepared by chef Akshay was delicious and homely. Pawan and Naveen took great care of us and made sure everything was comfortable. A wonderful experience overall."
              position=" "
            />
          </CardSmall>
          <CardSmall>
            <TestimonialCard1
              imgText="/assets/testimonials/t5.jpg"
              description="Traveling with family felt very comfortable here. Pawan and Naveen were always helpful, and the calm atmosphere made it perfect for a relaxed family stay. Definitely one of the best family homestays in Mukteshwar."
              name="Sakshi"
            />
          </CardSmall>
        </ChildrenDivA>
        <ChildrenDivB>
          <CardSmall>
            <TestimonialCard2
              imgText="/assets/testimonials/t6.png"
              description="We chose this place for a short weekend trip from Delhi, mainly because it’s pet-friendly. It turned out to be a great decision. Peaceful location, friendly staff, and lots of open space for our pet."
              name="Nikhil"
              position=" "
            />
          </CardSmall>
          <CardSmall>
            <PhotoCardTestimonial
              imgText="/assets/testimonials/t7.jpg"
              description="Stone Heritage Mukteshwar is an ideal choice if you’re looking for a family-friendly, pet-friendly, budget homestay in Mukteshwar. With good WiFi for workation, tasty vegetarian food, and beautiful sunsets, it offers a complete hill-stay experience."
              name="Gagan"
              position="- Maati Living"
            />
          </CardSmall>
        </ChildrenDivB>
      </InnerDivB>
    </OuterDiv>
  );
};

export default MainTestimonial;

// STYLES
const OuterDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",
  width: "100%",

  "@media (max-width: 480px)": {
    fontSize: "14px", // ✅ global text shrink
  },

  "@media (max-width: 1024px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  "@media (max-width: 480px)": {
    fontSize: "14px",
    "& h3": { fontSize: "16px" },
    "& h4": { fontSize: "14px" },
    "& p": { fontSize: "13px", lineHeight: 1.4 },
  },
});

const InnerDivA = styled("div")({
  display: "flex",
  flexDirection: "column",

  flex: 1,
  minWidth: 0,
});

const InnerDivB = styled("div")({
  display: "flex",
  flexDirection: "column",

  flex: 1,
  minWidth: 0,
});

const ChildDivA = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px", // ✅ gap added
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "16px",
  },
});

const ChildDivB = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px", // ✅
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "16px",
  },
});

const ChildrenDivA = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px", // ✅
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "16px",
  },
});

const ChildrenDivB = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px", // ✅
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "16px",
  },
});

// Card Styles
const CardSmall = styled("div")({
  flex: 1,
  minWidth: "250px",
  maxWidth: "100%",
  marginBottom: "20px", // ✅ space between cards
  "@media (max-width: 480px)": {
    minWidth: "100%",
    marginBottom: "16px",
  },
});

const CardLarge = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "20px", // ✅ spacing inside large card stack
  minWidth: "250px",
  maxWidth: "100%",
});
