import React, {FC, ReactNode} from 'react';
import Logo from "@components/logo";
import Nav from "@components/nav";
import ModeChanger from "@components/modeChanger";

interface PageLayoutProps {
  children?: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
  return (
    <div className={'min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50'}>
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
      <div className={'pt-20'}>
        <main className={'pt-1'}>
          <div className={'container mx-auto py-2'}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageLayout;