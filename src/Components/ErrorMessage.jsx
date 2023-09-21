import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakPoints } from '../Data/breakPointAndImgSizes';

const StyledPositioningContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoadingContainer = styled(motion.div)`
  max-height: 200px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  letter-spacing: 2px;
  background-color: var(--background-color);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 2em 1em;

  & h3 {
    font-size: 1rem;
    text-align: center;
  }

  @media (min-width: ${breakPoints.tablet}) {
    max-height: 500px;
    max-width: 400px;

    & h3 {
      font-size: 1.5rem;
    }
  }
`;

export default function ErrorMessage() {
  return (
    <StyledPositioningContainer>
      <StyledLoadingContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <h3>Sorry, there was an error retrieving the data.</h3>
        <h3>Please refresh the page or try again later</h3>
      </StyledLoadingContainer>
    </StyledPositioningContainer>
  );
}
