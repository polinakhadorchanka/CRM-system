import React, {FC, ReactNode} from 'react';
import Logo from "@components/logo";
import Nav from "@components/nav";
import ModeChanger from "@components/modeChanger";

interface PageLayoutProps {
  children?: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
  return (
    <div className={'min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 flex flex-col'}>
      <header className={'w-full h-20 bg-white dark:bg-gray-900 fixed'}>
        <div className={'container mx-auto h-full flex flex-row items-center'}>
          <Logo />
          <div className={'grow pl-16'}>
            <Nav isAdmin={true}/>
          </div>
          <div className={'relative top-0.5'}>
            <ModeChanger />
          </div>
        </div>
        <div className={'w-full h-px bg-gradient-to-r from-sky-900 dark:from-sky-600 from-15% via-sky-600 via-30% to-95% ' +
          'dark:from-sky-600 dark:from-15% dark:via-sky-200 dark:via-30% dark:to-95%'}></div>
      </header>
      <div className={'pt-20 grow'}>
        <main className={'pt-1 pb-2'}>
          <div className={'container mx-auto py-2'}>
            {children}
          </div>
        </main>
      </div>
      <footer className={'w-full h-20 relative'}>
        <div className={'w-full absolute -top-px ' +
          'h-px bg-gradient-to-l from-sky-900 dark:from-sky-600 from-15% via-sky-600 via-30% to-95% ' +
          'dark:from-sky-600 dark:from-15% dark:via-sky-200 dark:via-30% dark:to-95%'}></div>
        <div className={'container mx-auto h-full flex flex-col justify-center items-end'}>
          <div className={'text-sm text-gray-500 dark:text-gray-400'}>Asevery | 2023</div>
          <div className={'text-sm text-gray-500 dark:text-gray-400'}>developed by {' '}
            <a className={'text-sky-600 dark:text-sky-200'}
              href={'https://github.com/polinakhadorchanka'}
              target={'_blank'}>
              @polinakhadorchanka
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;