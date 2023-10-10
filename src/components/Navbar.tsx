import Link from 'next/link';
import React from 'react';
import { SearchIcon } from './ui/icons';

const Navbar = () => {
  return (
    <nav className="flex py-2 justify-between px-4 items-center max-w-[480px] w-full bg-blue-100 mx-auto h-full border-b-2 border-neutral">
      <Link
        href="/"
        className="py-2 px-4 bg-secondary text-neutral text-xl font-bold rounded-2xl shadow-neutral shadow-md hover:opacity-70 transition-opacity"
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
