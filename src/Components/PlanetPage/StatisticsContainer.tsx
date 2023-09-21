import styled from 'styled-components';
import { breakPoints } from '../../Data/breakPointAndImgSizes';
import { motion } from 'framer-motion';

const StyledContainer = styled(motion.section)`
  grid-area: statistics;
  padding: 0 1.5em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: ${breakPoints.desktop}) {
    padding: 0;
    gap: 1.5em;
    ${'' /* margin-top: 30px; */}
  }
  @media (min-width: ${breakPoints.lgDesktop}) {
    padding: 0;
    gap: 1.5em;
  }
`;

const StyledStatInfo = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);
  ${'' /* background: transparent; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1.5em;
  padding-bottom: calc(0.8em + 3px);
  text-transform: uppercase;

  & span:first-of-type {
    color: var(--secondary-font-color);
    font-size: 11px;
    letter-spacing: 0.7px;
  }

  & span:nth-of-type(2) {
    font-size: calc(var(--font-size-reg) + 4px);
    font-family: var(--title-font);
  }
  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
    gap: 0.5em;
    padding: 1em;

    & span:nth-of-type(2) {
      font-size: calc(var(--font-size-reg) + 8px);
    }

    @media (min-width: ${breakPoints.desktop}) {
      & span:first-of-type {
        font-size: 0.7rem;
        letter-spacing: 0.7px;
      }

      & span:nth-of-type(2) {
        font-size: var(--font-size-lg);
      }
    }
  }
`;

export default function StatisticsContainer({ planetInfo, planetId }) {
  return (
    <StyledContainer
      key={planetId}
      initial={{ opacity: 0, y: +20 }}
      animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -20 }}
      transition={{ ease: 'easeOut', duration: 1.5 }}
    >
      <StyledStatInfo>
        <span>rotation time</span>
        <span>{planetInfo.rotation}</span>
      </StyledStatInfo>
      <StyledStatInfo>
        <span>revolution time</span>
        <span>{planetInfo.revolution}</span>
      </StyledStatInfo>
      <StyledStatInfo>
        <span>radius</span>
        <span>{planetInfo.radius}</span>
      </StyledStatInfo>
      <StyledStatInfo>
        <span>Average temp</span>
        <span>{planetInfo.temperature}</span>
      </StyledStatInfo>
    </StyledContainer>
  );
}
