import Link from 'next/link';
import React from 'react';
import { SearchFilledIcon, SearchIcon } from './ui/icons';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex py-2 justify-between px-4 items-center max-w-[480px] w-full mx-auto h-full">
      <Link href="/" className="text-neutral text-3xl font-bold ">
        TMI
      </Link>
      <Link href="/search" className="text-2xl">
        {pathname === '/search' ? <SearchFilledIcon /> : <SearchIcon />}
      </Link>
    </nav>
  );
};

export default Navbar;

// font-delta bg-secondary rounded-2xl px-2 py-1 shadow-neutral shadow-md hover:opacity-70 transition-opacity
