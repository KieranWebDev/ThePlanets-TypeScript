import styled from 'styled-components';
import { breakPoints } from '../../Data/breakPointAndImgSizes';
// icons
import SourceIcon from '../../assets/icon-source.svg';
import { motion } from 'framer-motion';

const StyledContainer = styled.section`
  grid-area: titleInfo;
  padding: 0 1.5rem;
  text-align: center;

  @media (min-width: ${breakPoints.tablet}) {
    text-align: left;
    padding: 0;
    padding-left: 1.5em;
    margin-bottom: 1.6em;
  }

  @media (min-width: ${breakPoints.desktop}) {
    margin-top: 30px;
    margin-bottom: 0;
    padding-left: 0;
  }

  @media (min-width: ${breakPoints.lgDesktop}) {
    margin-top: 100px;
  }
`;
const StyledH1 = styled(motion.h1)`
  font-size: var(--font-size-lg);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 400;
  margin-bottom: 0.5em;

  @media (min-width: ${breakPoints.desktop}) {
    font-size: var(--font-size-xl);
    margin-bottom: 0.3em;
  }
`;

const StyledTextAndLinkContainer = styled(motion.div)``;

const StyledP = styled(motion.p)`
  ${'' /* font-size: var(--font-size-sm); */}
  font-size: 16px;
  line-height: var(--standard-line-height);
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 1.9em;
  @media (min-width: ${breakPoints.desktop}) {
    min-height: 125px;
  }
`;

const StyledLink = styled(motion.div)`
  color: var(--secondary-font-color);

  a {
    color: inherit;
    font-weight: 700;
    margin: 0 3px;
    text-decoration: none;
  }

  a img {
    margin-left: 3px;
  }

  & a:hover {
    color: white;
    text-decoration: underline;
    transition: all 0.2s ease-in-out;
  }
`;

export default function TitleAndInfoContainer({ planetName, displayedInfo }) {
  return (
    <StyledContainer>
      <StyledH1
        key={planetName}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        {planetName}
      </StyledH1>
      <StyledTextAndLinkContainer
        key={displayedInfo.planetDecriptionText}
        initial={{ opacity: 0, x: +40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: +40 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <StyledP>{displayedInfo.planetDecriptionText}</StyledP>
        <StyledLink>
          Source :
          <a
            target="_blank"
            rel="noreferrer"
            href={displayedInfo.planetWikiLink}
          >
            Wikipedia
            <img src={SourceIcon} alt="link icon" />
          </a>
        </StyledLink>
      </StyledTextAndLinkContainer>
    </StyledContainer>
  );
}
