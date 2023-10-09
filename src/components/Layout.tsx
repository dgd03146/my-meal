'use client';

import { usePathname } from 'next/navigation';
import MenuBar from './Menubar';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isNotHomePage = pathName !== '/';

  return (
    <div className="h-full flex flex-col items-center mx-auto bg-primary max-w-[480px] border-8">
      {isNotHomePage && (
        <header className="w-full sticky top-0 py-2 max-h-[60px] border-b-2">
          <Navbar />
        </header>
      )}
      {children}
      {isNotHomePage && (
        <footer className="h-[48px] w-full border-t-2">
          <MenuBar />
        </footer>
      )}
    </div>
  );
};

export default Layout;
