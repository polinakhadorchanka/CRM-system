import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'} className={'flex flex-row items-center select-none'}>
      <div className={'uppercase text-xl sm:text-2xl lg:text-3xl text-sky-900 dark:text-gray-50 -rotate-90 relative ' +
        '-left-[8px] sm:-left-[8px] lg:-left-3'}>My</div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
           className={'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 h-12 stroke-sky-600 dark:stroke-sky-200 relative ' +
             '-left-[11px] lg:-left-5'}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
      </svg>

      <div className={'uppercase text-xl sm:text-2xl lg:text-3xl text-sky-900 dark:text-gray-50 relative ' +
        '-left-[9px] lg:-left-5'}>CRM</div>
    </Link>
  );
};

export default Logo;