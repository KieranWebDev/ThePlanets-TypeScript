import { useState } from 'react';
import { breakPoints } from '../../Data/breakPointAndImgSizes';
// styled Components
import styled from 'styled-components';
// icons
import HamburgerIcon from '../../assets/icon-hamburger.svg';
// components
import MobileMenuComponent from './MobileMenuComponent';
import DesktopMenuComponent from './DesktopMenuComponent';

// STYLES

const StyledHeaderContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);
  position: ${(props) => (props.mobilemenu === 'true' ? 'fixed' : 'initial')};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  width: 100%;
  top: 0;
  left: 0;
  @media (min-width: ${breakPoints.tablet}) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1em;
    max-width: 1600px;
    margin: 0 auto;
  }

  @media (min-width: ${breakPoints.navDesktop}) {
    padding: 0 2em;
    justify-content: space-between;
  }

  & h2 {
    font-weight: 400;
    font-size: 28px;
    @media (min-width: ${breakPoints.tablet}) {
      flex-basis: 100%;
      text-align: center;
      padding: 1em 0 0.5em 0;
    }

    @media (min-width: ${breakPoints.navDesktop}) {
      flex-basis: auto;
      font-size: 1.5rem;
      letter-spacing: var(--small-line-spacing);
      padding: 0;
    }
  }

  & button {
    background: inherit;
    border: none;
    @media (min-width: ${breakPoints.tablet}) {
      display: none;
    }
  }
`;

export default function Navbar({ allPlanetsData }) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenu((prev) => !prev);
  }
  const planetsNavInfo = allPlanetsData.map((planet) => {
    return {
      id: planet.id,
      name: planet.name.toLowerCase(),
      linkcolor: `--${planet.name.toLowerCase()}`,
    };
  });

  return (
    <>
      <StyledHeaderContainer mobilemenu={isMobileMenu.toString()}>
        <StyledHeader>
          <h2>THE PLANETS</h2>
          <nav>
            <DesktopMenuComponent planetsNavInfo={planetsNavInfo} />
            <button onClick={toggleMobileMenu}>
              <img src={HamburgerIcon} alt="hamburger icon" />
            </button>
          </nav>
        </StyledHeader>
      </StyledHeaderContainer>
      {isMobileMenu && (
        <MobileMenuComponent
          toggleMobileMenu={toggleMobileMenu}
          planetsNavInfo={planetsNavInfo}
        />
      )}
    </>
  );
}
