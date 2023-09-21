import styled from 'styled-components';
import { Link } from 'react-router-dom';
//icon image
import Chevron from '../../assets/icon-chevron.svg';

// STYLES
const MobileMenuContainer = styled.nav`
  height: 100vh;
  width: 100%;
  z-index: 5;
  position: fixed;
  top: 60px;
  left: 0;
  background-color: var(--background-color);
  display: flex;
  padding: 0 1.5rem;
  padding-top: 30px;
`;

const StyledUlMobile = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  & li {
    list-style-type: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: inherit;
  padding: 20px 0;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.3px;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => `var(${props.circlecolor})`};
`;

const ChevronIcon = styled.img`
  margin-left: auto;
`;
export default function MobileMenuComponent({
  toggleMobileMenu,
  planetsNavInfo,
}) {
  return (
    <MobileMenuContainer>
      <StyledUlMobile>
        {planetsNavInfo.map((planet) => (
          <li key={planet.id}>
            <StyledLink onClick={toggleMobileMenu} to={`/${planet.id}`}>
              <Circle circlecolor={planet.linkcolor}></Circle> {planet.name}
              <ChevronIcon src={Chevron} alt="arrow-icon" />
            </StyledLink>
          </li>
        ))}
      </StyledUlMobile>
    </MobileMenuContainer>
  );
}
