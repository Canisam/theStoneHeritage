import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

/**
 * Props
 *   data = [
 *     {
 *       id: '1',
 *       imageBackgroundUrl: 'home.jpg',
 *       price: 2567.01,
 *       heading: 'Master Suite',
 *       description: '…',
 *       roomUrl: '/Rooms/1'
 *     },
 *     …
 *   ]
 */

const RoomsCard = ({ data = [] }) => {
  return (
    <>
      {data.map((room) => (
        <Container
          key={room.id}
          style={{
            backgroundImage: `url(${room.imageBackgroundUrl})`,
          }}
        >
          <InnerOverlay>
            <Content>
              {/* <Price>₹{room.price.toLocaleString()} / night</Price> */}

              <ContentHeading>{room.heading}</ContentHeading>

              <Description>{room.description}</Description>

              <Link
                to={room.roomUrl}
                state={{ price: room.price, name: room.heading }}
                style={{ textDecoration: "none" }}
              >
                <ContentButton>
                  <span>Book&nbsp;Now</span>
                  <span>&rarr;</span>
                </ContentButton>
              </Link>
            </Content>
          </InnerOverlay>
        </Container>
      ))}
    </>
  );
};

export default RoomsCard;

/* ---------- styled components ---------- */

const Container = styled("div")`
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: clamp(40vh, 60vh, 70vh);
  margin: clamp(1rem, 4vw, 2.5rem) auto;
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 95%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const InnerOverlay = styled("div")`
  background-color: rgba(0, 0, 0, 0.65);
  width: 45%;
  min-height: 40vh;
  margin-right: 8%;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 0.75rem;

  @media (max-width: 1024px) {
    width: 70%;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    min-height: auto;
  }
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1.5rem);
  padding: clamp(1rem, 2vw, 2rem);
`;

const Price = styled("div")`
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.25rem);
`;

const ContentHeading = styled("div")`
  font-weight: 700;
  font-size: clamp(1.25rem, 2.5vw, 2rem);
`;

const Description = styled("div")`
  line-height: 1.6;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #e5e5e5;
`;

const ContentButton = styled("button")`
  background-color: brown;
  color: #fff;
  border: none;
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #7a1e1e;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;
