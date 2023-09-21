import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// components
import PlanetsPageContainer from '../Components/PlanetPage/PlanetsPageContainer';
import TitleAndInfoContainer from '../Components/PlanetPage/TitleAndInfoContainer';
import InfoButtonsContainer from '../Components/PlanetPage/InfoButtonsContainer';
import PlanetImage from '../Components/PlanetPage/PlanetImage';
import StatisticsContainer from '../Components/PlanetPage/StatisticsContainer';

export default function Planets({ allPlanetsData }) {
  const [planetInfo, setPlanetInfo] = useState(null);
  const [displayedInfo, setDisplayedInfo] = useState({});

  const params = useParams();

  useEffect(() => {
    const filteredData = allPlanetsData.filter(
      (planet) => planet.id === params.id
    );
    setPlanetInfo(filteredData[0]);
  }, [allPlanetsData, params.id]);

  useEffect(() => {
    changeDisplayedInfo('overview', 'images_planet');
  }, [planetInfo]);

  function changeDisplayedInfo(info, pic) {
    let planetDecriptionText = '';
    let planetWikiLink = '';
    let picToDisplay = '';
    let additionalSurfacePic = '';
    let infoCategory = info;

    if (planetInfo) {
      planetDecriptionText = planetInfo[`${info}_content`];
      planetWikiLink = planetInfo[`${info}_source`];

      if (info === 'geology') {
        picToDisplay = planetInfo.images_planet;
        additionalSurfacePic = planetInfo.images_geology;
      } else {
        picToDisplay = planetInfo[pic];
      }
    }

    setDisplayedInfo({
      planetDecriptionText: planetDecriptionText,
      planetWikiLink: planetWikiLink,
      picToDisplay: picToDisplay,
      additionalSurfacePic: additionalSurfacePic,
      infoCategory: infoCategory,
    });
  }

  return (
    <>
      {planetInfo ? (
        <PlanetsPageContainer>
          <TitleAndInfoContainer
            planetName={planetInfo.name}
            displayedInfo={displayedInfo}
          />

          <InfoButtonsContainer
            changeDisplayedInfo={changeDisplayedInfo}
            displayedInfo={displayedInfo}
            buttonBorderColor={planetInfo.id}
          />

          <PlanetImage
            displayedInfo={displayedInfo}
            planetName={planetInfo.name}
            planetId={planetInfo.id}
          />
          <StatisticsContainer
            planetInfo={planetInfo}
            planetId={planetInfo.id}
          />
        </PlanetsPageContainer>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
