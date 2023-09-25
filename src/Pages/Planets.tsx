import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// components
import PlanetsPageContainer from '../Components/PlanetPage/PlanetsPageContainer';
import TitleAndInfoContainer from '../Components/PlanetPage/TitleAndInfoContainer';
import InfoButtonsContainer from '../Components/PlanetPage/InfoButtonsContainer';
import PlanetImage from '../Components/PlanetPage/PlanetImage';
import StatisticsContainer from '../Components/PlanetPage/StatisticsContainer';
// types and interfaces
import { PlanetsData } from '../App';

export interface DisplayedInfo {
  planetDecriptionText: string;
  planetWikiLink: string;
  picToDisplay: string;
  additionalSurfacePic: string;
  infoCategory: string;
}

export default function Planets({
  allPlanetsData,
}: {
  allPlanetsData: PlanetsData[];
}) {
  const [planetInfo, setPlanetInfo] = useState<PlanetsData | null>(null);
  const [displayedInfo, setDisplayedInfo] = useState<DisplayedInfo | null>(
    null
  );

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

  function changeDisplayedInfo(
    info: 'overview' | 'structure' | 'geology',
    pic: 'images_planet' | 'images_internal' | 'images_geology'
  ) {
    let planetDecriptionText = '';
    let planetWikiLink = '';
    let picToDisplay = '';
    let additionalSurfacePic = '';
    const infoCategory = info;

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
