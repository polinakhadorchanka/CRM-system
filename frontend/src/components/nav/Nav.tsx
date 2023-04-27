import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useMount} from "@hooks/useMount";

interface NavProps {
  isAdmin?: boolean
}

const Nav: FC<NavProps> = ({isAdmin = false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMount = useMount(isOpen);

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(isOpen);
    }, 50)
  }, [isOpen]);

  return (
    <>
      <div className={'md:hidden'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
             className={'w-9 h-9 stroke-sky-900 dark:stroke-gray-50 relative top-0.5 cursor-pointer'}
             onClick={() => {
               setIsOpen(!isOpen)
             }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>

        {isMount &&
          <div className={`fixed -mt-0.5 top-16 right-0 bg-white dark:bg-gray-900 transition-nav duration-500
            ${animation ? 'opacity-100 left-0' : 'opacity-0 -left-20'}`}>
            <div className={'sm:container mx-auto p-4'}>
              <nav className={'flex flex-col gap-3'}>
                <Link to={'/vacancies'}
                      className={'block uppercase text-gray-600 hover:text-sky-600 ' +
                        'dark:text-gray-400 dark:hover:text-sky-200'}>
                  Vacancies
                </Link>
                <Link to={'/favorites'}
                      className={'block uppercase text-gray-600 hover:text-sky-600 ' +
                        'dark:text-gray-400 dark:hover:text-sky-200'}>
                  Favorites
                </Link>
                {
                  isAdmin &&
                  <Link to={'/tokens'}
                        className={'block uppercase text-gray-600 hover:text-sky-600 ' +
                          'dark:text-gray-400 dark:hover:text-sky-200'}>
                    Tokens
                  </Link>
                }
              </nav>
            </div>
            <div className={'w-full h-px bg-gradient-to-r from-sky-900 dark:from-sky-600 from-15% via-sky-600 via-30% to-95% ' +
                'dark:from-sky-600 dark:from-15% dark:via-sky-200 dark:via-30% dark:to-95%'}></div>
          </div>
        }

      </div>

      <div className={'hidden md:block'}>
        <nav className={'flex flex-row items-center gap-8 relative top-0.5'}>
          <Link to={'/vacancies'}
                className={'uppercase text-gray-600 hover:text-sky-600 ' +
                  'dark:text-gray-400 dark:hover:text-sky-200'}>Vacancies</Link>
          <Link to={'/favorites'}
                className={'uppercase text-gray-600 hover:text-sky-600 ' +
                  'dark:text-gray-400 dark:hover:text-sky-200'}>Favorites</Link>
          {
            isAdmin &&
            <Link to={'/tokens'}
                  className={'uppercase text-gray-600 hover:text-sky-600 ' +
                    'dark:text-gray-400 dark:hover:text-sky-200'}>Tokens</Link>
          }
        </nav>
      </div>
    </>
  );
};

export default Nav;