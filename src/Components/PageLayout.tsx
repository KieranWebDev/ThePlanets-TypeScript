import NavbarComponent from './Navbar/NavbarComponent';
import { Outlet } from 'react-router-dom';
// types ans interfaces
import { PlanetsData } from '../App';

export default function PageLayout({
  allPlanetsData,
}: {
  allPlanetsData: PlanetsData[];
}) {
  return (
    <>
      <NavbarComponent allPlanetsData={allPlanetsData} />
      <Outlet />
    </>
  );
}
