import Link from 'next/link';
import React from 'react';
import { SearchIcon } from './ui/icons';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 items-center max-w-[480px] w-full bg-blue-100 mx-auto h-full">
      <Link
        href="/"
        className="py-2 px-4 bg-secondary text-xl font-bold rounded-xl border-r-4 border-b-4 border-neutral hover:opacity-70 transition-opacity"
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
