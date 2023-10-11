import Link from 'next/link';
import React from 'react';
import { SearchIcon } from './ui/icons';

const Navbar = () => {
  return (
    <nav className="flex py-2 justify-between px-4 items-center max-w-[480px] w-full bg-blue-100 mx-auto h-full">
      <Link
        href="/"
        className="text-neutral text-xl font-bold bg-secondary rounded-2xl px-2 py-1 shadow-neutral shadow-md hover:opacity-70 transition-opacity font-delta"
      >
        TMI
      </Link>
      <Link href="/search" className="text-2xl">
        <SearchIcon />
      </Link>
    </nav>
  );
};

export default Navbar;
