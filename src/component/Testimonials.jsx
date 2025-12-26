import { styled } from "@mui/material";


const testimonials = [
  {
    name: "Jessica Wilson",
    role: "Product Designer",
    text: "Nightingale has revolutionized how I manage my health. The AI-driven insights are incredibly precise and helpful!",
    image: "test-img.jpg",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    role: "CEO",
    text: "The community support is phenomenal. I feel more connected and informed about my health all the time.",
    image: "test-img.jpg",
    rating: 4,
  },
  {
    name: "Sara Lee",
    role: "Developer",
    text: "The AI symptom checker is incredibly intuitive and accurate. It gives me peace of mind.",
    image: "test-img.jpg",
    rating: 5,
  },
  // ... add more testimonials
];

const Testimonials = () => {
  return (
    // <TestimonialWrapper>

        <TestimonialCard >
          <Quote>“</Quote>
          <Text>{testimonials[0].text}</Text>
          <Profile>
            <img src={testimonials[0].image} alt={testimonials[0].name} />
            <div>
              <Name>{testimonials[0].name}</Name>
              <Role>{testimonials[0].role}</Role>
              <Stars>{"⭐".repeat(testimonials[0].rating)}</Stars>
            </div>
          </Profile>
        </TestimonialCard>
     
    // </TestimonialWrapper>
  );
};

export default Testimonials;

// ---------------- STYLED COMPONENTS ----------------
// const TestimonialWrapper = styled("div")`
//   width: 20%;
//   padding: 60px;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 25px;
//   background: #f7f7f7;
// `;

const TestimonialCard = styled("div")`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Quote = styled("span")`
  font-size: 40px;
  color: #ccc;
  position: absolute;
  top: 10px;
  left: 15px;
`;

const Text = styled("p")`
  font-size: 15px;
  color: #333;
  margin-top: 20px;
`;

const Profile = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Name = styled("h4")`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;

const Role = styled("span")`
  font-size: 12px;
  color: #777;
`;

const Stars = styled("div")`
  font-size: 14px;
  color: #ffb400;
`;
