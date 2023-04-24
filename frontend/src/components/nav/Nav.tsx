import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface NavProps {
  isAdmin?: boolean
}

const Nav: FC<NavProps> = ({isAdmin = false}) => {
  return (
    <nav className={'flex flex-row items-center gap-8 relative top-0.5'}>
      <Link to={'/'}
            className={'uppercase text-gray-600 hover:text-sky-600'}>Vacancies</Link>
      <Link to={'/favorites'}
            className={'uppercase text-gray-600 hover:text-sky-600'}>Favorites</Link>
      {
        isAdmin &&
        <Link to={'/tokens'}
              className={'uppercase text-gray-600 hover:text-sky-600'}>Tokens</Link>
      }
    </nav>
  );
};

export default Nav;