'use client';

import { usePathname } from 'next/navigation';
import MenuBar from './Menubar';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isNotHomePage = pathName !== '/';

  return (
    <div className="min-h-full flex flex-col items-center bg-primary w-[375px] sm:w-[480px] mx-auto shadow-xl border-solid border-x-[6px]">
      {isNotHomePage && (
        <header className="w-full sticky top-0 bg-primary z-[1] border-b-2 border-t-[6px]">
          <Navbar />
        </header>
      )}
      <main className={`w-[375px] sm:w-[480px] flex-[1] ${isNotHomePage ? 'p-4' : 'p-0'}`}> {children}</main>
      {isNotHomePage && (
        <footer className="w-full h-[48px] fixed bottom-0 left-0 right-0 z-[1]">
          <MenuBar />
        </footer>
      )}
    </div>
  );
};

export default Layout;
