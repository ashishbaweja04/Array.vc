
import styled from 'styled-components'; // Importing styled-components for CSS-in-JS styling
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { Container } from 'react-bootstrap'; // Importing Bootstrap's Container for layout

// Styled component for the banner wrapper, centering content vertically and horizontally
const BannerWrapper = styled.div`
  display: flex; // Using flexbox for layout
  justify-content: center; // Centering horizontally
  align-items: center; // Centering vertically
  height: 80vh; // Setting the height of the banner to 60% of the viewport height
  background-color: #ffffff; // White background color
`;

// Styled component for the main text in the banner
const Text = styled.h1`
  font-family: 'Georgia', serif; // Setting a serif font for the text
  font-size: 48px; // Font size for the main text
  position: relative; // Position relative for child elements like underline and circle
`;

// Styled component for the animated underline below the text
const Underline = styled(motion.div)`
  position: absolute; // Positioning it absolutely within the Text component
  left: 0; // Aligning to the left
  bottom: -13px; // Positioning below the text
  height: 5px; // Height of the underline
  width: 100%; // Full width of the Text component
  background-color: #b19cd8; // Color of the underline
`;

// Styled component for the animated circle that appears near the text
const Circle = styled(motion.div)`
  position: absolute; // Positioning it absolutely within the Text component
  width: 290px; // Width of the circle
  height: 70px; // Height of the circle
  border: 5px solid #b19cd8; // Border color and thickness
  border-radius: 50%; // Making it a circle
  top: 0; // Aligning to the top of the Text component
  left: 400px; // Positioning it to the right of the Text
`;

// The main Banner functional component
export const Banner = () => {
  return (
    <Container> {/* Bootstrap Container for responsive layout */}
      <BannerWrapper>
        <Text>
        Unique Network = Second wave of customers          {/* Underline component that animates from width 0 to 35% */}
          <Underline
            initial={{ width: 0 }} // Initial width set to 0 for animation start
            animate={{ width: '60%' }} // Animate to 35% width
            transition={{ duration: 1.5 }} // Transition duration for the animation
          />
          {/* Circle component that animates from scale 0 to 1 */}
          <Circle 
            initial={{ scale: 0 }} // Initial scale set to 0 for animation start
            animate={{ scale: 1 }} // Animate to full scale (visible)
            transition={{ duration: 1.5, delay: 1.5 }} // Transition duration and delay before starting
          />
        </Text>
      </BannerWrapper>
      <p>
         <b> Array brings a unique twist to venture capital</b>. Think of us as your first Business Development hire. Our team of investors, advisors, and mentors is invaluable and contributes to the success of your company and the fund. We are in it with you and want to understand who would be your ideal customer. If we can help bring them onboard then it's an easy investment decision for us.
         <br/>
         <br />
          We provide access to over 200 C-level experts from top public and private companies to help startups from day one. Our experts come from every major company inside and outside of Silicon Valley, across the health, retail, education, security, SaaS, and communication industries.
        </p>
    </Container>
  );
};
