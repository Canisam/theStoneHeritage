import React from 'react'
import { styled } from '@mui/material'
import PhotoCardTestimonial from './photoCardTestimonial'
import PhotoCardTestimonial2 from './photoCardTestimonial2'
import TestimonialCard1 from './ReviewCard2'
import TestimonialCard2 from './ReviewCard3'

// Main Component
const MainTestimonial = () => {
  return (
    <OuterDiv>
      {/* LEFT SECTION */}
      <InnerDivA>
        <ChildDivA>
          <CardSmall>
            <TestimonialCard2 imgText="/assets/testimonials/t4.png" />
          </CardSmall>
          <CardSmall>
            {/* <PhotoCardTestimonial imgText="./testimonials/t2.jpg"  /> */}
            <PhotoCardTestimonial imgText="/assets/testimonials/t2.jpg" description={"This place is special not just because it’s on the main state highway of Mukteshwar, but also because the staff are so friendly and helpful. When I reached earlier than planned, they let me check in right away with no problems."}/>
          
          </CardSmall>
        </ChildDivA>
        <ChildDivB>
          <CardLarge>
            <PhotoCardTestimonial2 imgText="/assets/testimonials/t1.jpg" description={"My holiday at Stone Heritage Mukteshwar was unforgettable. Spacious rooms, beautiful gardens, and attentive service—it was everything we wanted and more. Truly the best place to enjoy Mukteshwar’s natural beauty and hospitality."} />
            <TestimonialCard1 imgText="/assets/testimonials/t8.jpg" description="The property is really pretty and beautifully located. The host and staff are friendly and helpful. Few cafés, restaurants and markets are all close by. It’s a perfect place for family, friends, or couple’s getaway..would surely recommend it :)"  />
             
          </CardLarge>
           
        </ChildDivB>
      </InnerDivA>

      {/* RIGHT SECTION */}
      <InnerDivB>
        <ChildrenDivA>
          <CardSmall>
            <PhotoCardTestimonial2 imgText="/assets/testimonials/t3.jpg" />
          </CardSmall>
          <CardSmall>
            <TestimonialCard1 imgText="/assets/testimonials/t5.jpg" description="Absolutely loved my stay at Stone Heritage Mumteshwar! The room was great, service was excellent. Every staff member was super helpful and friendly"/>
          </CardSmall>
        </ChildrenDivA>
        <ChildrenDivB>
          <CardSmall>
            <TestimonialCard2 imgText="/assets/testimonials/t6.png" description="Good experience with scenic view from the garden. Stone rooms make you feel living in castle."/>
          </CardSmall>
          <CardSmall>
            
            <PhotoCardTestimonial imgText="/assets/testimonials/t7.jpg" />
          </CardSmall>
        </ChildrenDivB>
      </InnerDivB>
    </OuterDiv>
  )
}

export default MainTestimonial

// STYLES
const OuterDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  flexWrap: 'wrap',
  width: '100%',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
})

const InnerDivA = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  flex: 1,
  minWidth: 0,
})

const InnerDivB = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  flex: 1,
  minWidth: 0,
})

const ChildDivA = styled('div')({
  display: 'flex',
  
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
 
  },
})

const ChildDivB = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const ChildrenDivA = styled('div')({
  display: 'flex',
 
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  
  },
})

const ChildrenDivB = styled('div')({
  display: 'flex',

  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    
  },
})

// Card Styles
const CardSmall = styled('div')({
  flex: 1,
  minWidth: '250px',
  maxWidth: '100%',
  '@media (max-width: 480px)': {
    minWidth: '100%',
  },
})

const CardLarge = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  minWidth: '250px',
  maxWidth: '100%',
})
