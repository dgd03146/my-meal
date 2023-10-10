'use client';

import { usePathname } from 'next/navigation';
import MenuBar from './Menubar';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isNotHomePage = pathName !== '/';
  console.log(isNotHomePage, 'isNothp');

  return (
    <div className="min-h-full flex flex-col items-center bg-primary w-[375px] sm:w-[480px] mx-auto">
      {isNotHomePage && (
        <header className="w-full sticky top-0 max-h-[60px] bg-primary z-[1001]">
          <Navbar />
        </header>
      )}
      <main className={`w-[375px] sm:w-[480px] flex-[1] ${isNotHomePage ? 'p-4' : 'p-0'}`}> {children}</main>
      {isNotHomePage && (
        <footer className="h-[48px] fixed bottom-0 left-0 right-0 z-10">
          <MenuBar />
        </footer>
      )}
    </div>
  );
};

export default Layout;
