import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { styled } from '@mui/material';
import NavBar from './NavBar';

export default function Availability() {
  const location = useLocation();
  const pricePerNight = location.state?.pricePerNight || 0;
  const roomId = location.state?.roomId || 'N/A';

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: 'selection',
    },
  ]);

  const [totalNights, setTotalNights] = useState(1);

  useEffect(() => {
    const { startDate, endDate } = dates[0];
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    setTotalNights(nights);
  }, [dates]);

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const updateGuest = (type, delta) => {
    setGuests((prev) => {
      const updated = Math.max(0, prev[type] + delta);
      return { ...prev, [type]: updated };
    });
  };

  const totalPrice = pricePerNight * totalNights;

  return (
    <>
      <NavBar />
      <Container>
        <Section>
          <Heading>When?</Heading>
          <DateSection >
            <DateRange
              editableDateInputs
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              months={1}
              direction="horizontal"
              showDateDisplay={false}
            />
          </DateSection>
        </Section>

        <Section>
          <Heading>Who?</Heading>
          <GuestSection>
            {['adults', 'children', 'infants'].map((type) => (
              <GuestRow key={type}>
                <span>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
                <Counter>
                  <Button onClick={() => updateGuest(type, -1)}>-</Button>
                  <Count>{guests[type]}</Count>
                  <Button onClick={() => updateGuest(type, 1)}>+</Button>
                </Counter>
              </GuestRow>
            ))}
          </GuestSection>
        </Section>

        <Section>
          <Heading>Price</Heading>
          <PriceRow>
            <div>
              ₹{pricePerNight.toLocaleString()} × {totalNights} night
              {totalNights > 1 ? 's' : ''}
            </div>
            <strong>₹{totalPrice.toLocaleString()}</strong>
          </PriceRow>
        </Section>

        <ContinueBtn>
          Continue
        </ContinueBtn>
      </Container>
    </>
  );
}

const Container = styled('div')`
  padding: clamp(1rem, 2vw, 2rem);
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled('div')`
  margin-top: 2.5rem;
  width: 50%;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const DateSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled('h2')`
  font-size: clamp(1.25rem, 2vw, 2rem);
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const GuestSection = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GuestRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Counter = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Button = styled('button')`
  width: 2rem;
  height: 2rem;
  font-size: 1.25rem;
  border-radius: 50%;
  background: #384b42;
  color: #fff;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background: #2a3a34;
  }
`;

const Count = styled('span')`
  font-size: 1rem;
  min-width: 1.5rem;
  text-align: center;
`;

const PriceRow = styled('div')`
  display: flex;
  justify-content: space-between;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  margin-top: 0.75rem;
  padding: 0.75rem 0;
  border-top: 1px solid #ccc;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ContinueBtn = styled('button')`
  width: 50%;
  margin-top: 2.5rem;
  padding: clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: bold;
  background: #384b42;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #2a3a34;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
