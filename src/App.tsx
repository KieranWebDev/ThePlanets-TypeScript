import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import supabase from './Services/superbase';
//components
import Planets from './Pages/Planets';
import PageLayout from './Components/PageLayout';
import LoadingMessage from './Components/LoadingMessage';
import ErrorMessage from './Components/ErrorMessage';
import ParticlesContainer from './Components/ParticlesContainer';

interface PlanetsData {
  geology_content: string;
  geology_source: string;
  id: string;
  images_geology: string;
  images_internal: string;
  images_planet: string;
  name: string;
  overview_content: string;
  overview_source: string;
  radius: string;
  revolution: string;
  rotation: string;
  structure_content: string;
  structure_source: string;
  temperature: string;
}

function App() {
  const [allPlanetsData, setAllPlanetsData] = useState<PlanetsData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // fetch data from supabase
  useEffect(() => {
    getPlanets();
  }, []);

  async function getPlanets() {
    try {
      setIsError(false);
      const { data, error } = await supabase.from('planets').select();
      if (error) {
        throw new Error(error.message);
      }
      setAllPlanetsData(data);
      setIsLoading(false);
      // console.log('data fetched');
    } catch (error: unknown) {
      setIsLoading(false);
      if (typeof error === 'object' && error !== null) {
        setIsError(true);
      }
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <ParticlesContainer />
      {isLoading && <LoadingMessage />}
      {isError && <ErrorMessage />}

      {allPlanetsData !== null && (
        <BrowserRouter>
          <Routes>
            <Route element={<PageLayout allPlanetsData={allPlanetsData} />}>
              <Route index element={<Navigate to="/earth" />} />
              <Route
                path="/:id"
                element={<Planets allPlanetsData={allPlanetsData} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
