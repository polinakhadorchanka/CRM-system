import React, {FC, useRef} from 'react';
import {IVacancyShort} from "@store/types/vacancy";
import {Link} from "react-router-dom";

interface VacancyElementProps {
  vacancy: IVacancyShort;
  divide: boolean
}

const VacancyElement: FC<VacancyElementProps> = ({vacancy, divide = false}) => {
  const groupRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Link to={`/vacancy/${vacancy.ID}`}>
        <div ref={groupRef} className={'px-6 py-3 rounded-xl cursor-pointer group'}>
          <div className={'flex flex-row items-center gap-6'}>
            <div className={'w-20 h-20 bg-center bg-cover bg-no-repeat'}
                 style={{backgroundImage: `url('${vacancy.CompanyLogo}')`}}>
            </div>

            <div className={'h-full flex flex-col grow'}>
              <div className={'group-hover:text-sky-600 dark:group-hover:text-sky-200'}>{vacancy.Name}</div>
              <div className={'font-light'}>{vacancy.CompanyName}</div>
              <div className={'font-light text-gray-500'}>Posted: {' '}
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
                className={'rounded-2xl px-4 py-2 text-sky-600 dark:text-sky-200 border border-sky-600 dark:border-sky-200 ' +
                  'hover:text-gray-50 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-900 hover:border-white ' +
                  'dark:hover:text-gray-50 dark:hover:border-sky-900'}>
                Add to favorite
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