import NavbarComponent from './Navbar/NavbarComponent';
import { Outlet } from 'react-router-dom';

export default function PageLayout({ allPlanetsData }) {
  return (
    <>
      <NavbarComponent allPlanetsData={allPlanetsData} />
      <Outlet />
    </>
  );
}
