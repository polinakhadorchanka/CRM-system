import React, {FC, ReactNode} from 'react';
import Logo from "@components/logo";
import Nav from "@components/nav";

interface PageLayoutProps {
  children?: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
  return (
    <>
      <header className={'w-full h-20 bg-white fixed'}>
        <div className={'container mx-auto h-full flex flex-row items-center'}>
          <Logo mode={'light'}/>
          <div className={'ml-16'}>
            <Nav isAdmin={true}/>
          </div>
        </div>
        <div className={'w-full h-px bg-gradient-to-r from-sky-900 from-15% via-sky-600 via-30% to-95%'}></div>
      </header>
      <div className={'pt-20'}>
        <main className={'pt-1'}>
          <div className={'container mx-auto py-2'}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default PageLayout;