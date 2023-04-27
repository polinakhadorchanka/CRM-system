import React, {FC, useRef} from 'react';
import {IVacancyShort} from "@store/types/vacancy";
import {Link} from "react-router-dom";

interface VacancyElementProps {
  vacancy: IVacancyShort;
  divide: boolean
}

const VacancyElement: FC<VacancyElementProps> = ({vacancy, divide = false}) => {
  const groupRef = useRef<HTMLDivElement>(null);

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <>
      <Link to={`/vacancy/${vacancy.ID}`}>
        <div ref={groupRef} className={'px-4 md:px-6 py-3 rounded-xl cursor-pointer group'}>
          <div className={'flex flex-row items-center gap-4 md:gap-6'}>
            <div className={'hidden sm:block sm:w-16 sm:h-16 md:w-20 md:h-20 bg-center bg-cover bg-no-repeat'}
                 style={{backgroundImage: `url('${vacancy.CompanyLogo}')`}}>
            </div>

            <div className={'text-xs xs:text-sm sm:text-base h-full flex flex-col grow'}>
              <div className={'group-hover:text-sky-600 dark:group-hover:text-sky-200'}>{vacancy.Name}</div>
              <div className={'font-light'}>{vacancy.CompanyName}</div>
              <div className={'font-light text-gray-500 dark:text-gray-400'}>Posted: {' '}
                {vacancy.Posted
                  ? new Date(vacancy.Posted).toLocaleDateString()
                  : '-'}
              </div>
            </div>

            <div className={'self-end'}>
              <button
                onMouseEnter={() => {
                  if (groupRef.current) groupRef.current.classList.remove('group')
                }}
                onMouseLeave={() => {
                  if (groupRef.current) groupRef.current.classList.add('group')
                }}
                onClick={addToFavorite}
                className={'rounded-2xl px-3 sm:px-4 py-2 text-sky-600 dark:text-sky-200 whitespace-nowrap ' +
                  'border border-sky-600 dark:border-sky-200 ' +
                  'hover:text-gray-50 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-900 hover:border-white ' +
                  'dark:hover:text-gray-50 dark:hover:border-sky-900'}>
                <div className={'md:hidden'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div className={'hidden md:block'}>Add to favorite</div>
              </button>
            </div>
          </div>
        </div>
      </Link>
      {
        divide &&
        <div className={'opacity-60 w-full h-px bg-gradient-to-r from-white via-sky-600 to-white ' +
          'dark:from-gray-900 dark:via-sky-200 dark:to-gray-900'}></div>
      }
    </>
  );
};

export default VacancyElement;