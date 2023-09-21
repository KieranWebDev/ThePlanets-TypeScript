import { breakPoints } from '../../Data/breakPointAndImgSizes';
import styled from 'styled-components';

const StyledContainer = styled.div`
  ${'' /* grid-area: buttons; */}
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: ${breakPoints.tablet}) {
    padding-right: 1.5em;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    border-bottom: none;
  }
  @media (min-width: ${breakPoints.desktop}) {
    padding-right: 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1em;
    border-bottom: none;
    margin: 20px 0;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 5px solid transparent;
  padding: 25px 0 20px 0;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: var(--lg-letter-spacing);
  outline: none;

  &.overview {
    border-bottom-color: ${(props) =>
      props.infocategory === 'overview'
        ? `var(--${props.buttonbordercolor})`
        : 'none'};
    color: ${(props) =>
      props.infocategory === 'overview'
        ? `var(--font-color)`
        : 'rgba(255, 255, 255, 0.5)'};
  }

  &.structure {
    border-bottom-color: ${(props) =>
      props.infocategory === 'structure'
        ? `var(--${props.buttonbordercolor})`
        : 'none'};
    color: ${(props) =>
      props.infocategory === 'structure'
        ? `var(--font-color)`
        : 'rgba(255, 255, 255, 0.5)'};
  }

  &.geology {
    border-bottom-color: ${(props) =>
      props.infocategory === 'geology'
        ? `var(--${props.buttonbordercolor})`
        : 'none'};
    color: ${(props) =>
      props.infocategory === 'geology'
        ? `var(--font-color)`
        : 'rgba(255, 255, 255, 0.5)'};
  }

  @media (min-width: ${breakPoints.tablet}) {
    width: 85%;
    align-self: flex-end;
    padding: 1.5em 2em;
    text-align: left;
    color: var(--font-color);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      transition: all 0.25s ease-in-out;
    }
    &.overview,
    &.structure,
    &.geology {
      color: var(--font-color);
    }

    &.overview {
      background-color: ${(props) =>
        props.infocategory === 'overview'
          ? `var(--${props.buttonbordercolor})`
          : 'inherit'};
      &:hover {
        background-color: ${(props) =>
          props.infocategory === 'overview'
            ? `var(--${props.buttonbordercolor})`
            : 'var(--button-hover)'};
      }
    }

    &.structure {
      background-color: ${(props) =>
        props.infocategory === 'structure'
          ? `var(--${props.buttonbordercolor})`
          : 'inherit'};
      &:hover {
        background-color: ${(props) =>
          props.infocategory === 'structure'
            ? `var(--${props.buttonbordercolor})`
            : 'var(--button-hover)'};
      }
    }

    &.geology {
      background-color: ${(props) =>
        props.infocategory === 'geology'
          ? `var(--${props.buttonbordercolor})`
          : 'inherit'};
      &:hover {
        background-color: ${(props) =>
          props.infocategory === 'geology'
            ? `var(--${props.buttonbordercolor})`
            : 'var(--button-hover)'};
      }
    }
  }

  @media (min-width: ${breakPoints.desktop}) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;
const StyledSmallScreenSpan = styled.span`
  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`;

const StyledLgScreenSpan = styled.span`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    display: inline;
  }
`;
const StyledNumberSpan = styled.span`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    display: inline;
    margin-right: 1.5em;
  }
`;

export default function InfoButtonsContainer({
  changeDisplayedInfo,
  displayedInfo,
  buttonBorderColor,
}) {
  return (
    <StyledContainer>
      <StyledButton
        className="overview"
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('overview', 'images_planet');
        }}
        infocategory={displayedInfo.infoCategory}
      >
        <StyledSmallScreenSpan>overview</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <StyledNumberSpan>01</StyledNumberSpan>overview
        </StyledLgScreenSpan>
      </StyledButton>

      <StyledButton
        className="structure"
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('structure', 'images_internal');
        }}
        infocategory={displayedInfo.infoCategory}
      >
        <StyledSmallScreenSpan>structure</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <StyledNumberSpan>02</StyledNumberSpan>internal structure
        </StyledLgScreenSpan>
      </StyledButton>

      <StyledButton
        className="geology"
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('geology', 'images_geology');
        }}
        infocategory={displayedInfo.infoCategory}
      >
        <StyledSmallScreenSpan>surface</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <StyledNumberSpan>03</StyledNumberSpan>surface geology
        </StyledLgScreenSpan>
      </StyledButton>
    </StyledContainer>
  );
}
