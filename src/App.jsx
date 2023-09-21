import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import supabase from './Services/superbase';
//components
import Planets from './Pages/Planets';
import PageLayout from './Components/PageLayout';
import LoadingMessage from './Components/LoadingMessage';
import ErrorMessage from './Components/ErrorMessage';
import ParticlesContainer from './Components/ParticlesContainer';

function App() {
  const [allPlanetsData, setAllPlanetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch data from supabase
  useEffect(() => {
    getPlanets();
  }, []);

  async function getPlanets() {
    try {
      const { data, error } = await supabase.from('planets').select();
      if (error) {
        throw new Error(error.message);
      }
      setAllPlanetsData(data);
      setLoading(false);
      // console.log('data fetched');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <ParticlesContainer />
      {loading && <LoadingMessage />}
      {error && <ErrorMessage />}

      {allPlanetsData.length > 0 && (
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
