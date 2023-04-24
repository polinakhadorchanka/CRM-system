import React, {FC} from 'react';

interface LogoProps {
  mode?: 'light' | 'dark'
}

const Logo: FC<LogoProps> = ({mode = 'light'}) => {
  return (
    <>
      {
        mode === 'light'
          ?
          <div className={'flex flex-row items-center'}>
            <div className={'uppercase text-3xl text-sky-900 -rotate-90 relative -left-4'}>My</div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                 className="w-12 h-12 stroke-sky-600 relative -left-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
            </svg>

            <div className={'uppercase text-3xl text-sky-900 relative -left-6'}>CRM</div>
          </div>
          :
          <div className={'flex flex-row items-center'}>
            <div className={'uppercase text-3xl text-white -rotate-90 relative -left-4'}>My</div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                 className="w-12 h-12 stroke-sky-200 relative -left-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
            </svg>

            <div className={'uppercase text-3xl text-white relative -left-6'}>CRM</div>
          </div>
      }
    </>
  );
};

export default Logo;