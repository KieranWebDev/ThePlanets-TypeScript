import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loading from '../assets/Loading.gif';
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
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: var(--background-color);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  flex-direction: column;
  padding: 1em;

  & img {
    width: 80%;
    height: 100px;
  }

  @media (min-width: ${breakPoints.tablet}) {
    max-height: 500px;
    width: 250px;

    & img {
      width: 100%;
      height: 200px;
    }
  }
`;

export default function LoadingMessage() {
  return (
    <StyledPositioningContainer>
      <StyledLoadingContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <h1>Loading</h1>
        <img src={Loading} alt="loading animation" />
      </StyledLoadingContainer>
    </StyledPositioningContainer>
  );
}
