import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { breakPoints } from '../../Data/breakPointAndImgSizes';

// STYLES
const StyledUlDesktop = styled.ul`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    gap: 1em;
  }
  & li {
    @media (min-width: ${breakPoints.tablet}) {
      text-align: center;
    }

    @media (min-width: ${breakPoints.navDesktop}) {
      min-width: 70px;
    }
  }
`;

const StyledLink = styled(Link)`
  @media (min-width: ${breakPoints.tablet}) {
    text-transform: uppercase;
    border-top: 5px solid transparent;
    padding: 1em 0;
    text-decoration: none;
    display: block;
    color: inherit;
    font-family: var(--text-font);
    font-size: 14px;
    letter-spacing: 1px;
    line-height: var(--standard-line-height);
    font-weight: 500;
    opacity: 0.75;

    &:hover {
      opacity: 1;
      border-top-color: ${(props) => `var(${props.linkcolor})`};
      transition: all 0.25s ease-in-out;
    }

    &.active {
      border-top-color: ${(props) => `var(${props.linkcolor})`};
      opacity: 1;
    }
    @media (min-width: ${breakPoints.desktop}) {
      padding: 2em 0;
    }
  }
`;

export default function DesktopMenuComponent({ planetsNavInfo }) {
  const location = useLocation();

  return (
    <StyledUlDesktop>
      {planetsNavInfo.map((planet) => (
        <li key={planet.id}>
          <StyledLink
            to={`/${planet.name}`}
            linkcolor={planet.linkcolor}
            className={location.pathname === `/${planet.id}` ? 'active' : ''}
          >
            {planet.name}
          </StyledLink>
        </li>
      ))}
    </StyledUlDesktop>
  );
}
