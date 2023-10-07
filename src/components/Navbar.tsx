'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import {
  HomeFilledIcon,
  HomeIcon,
  PlusIcon,
  PlusFilledIcon,
  SearchIcon,
  SearchFilledIcon,
  LoginIcon,
  LoginFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
} from '@/components/ui/icons';

type Routes = '/' | '/login' | '/posts' | '/postAdd' | '/search' | '/bookmark';

type Menu = Array<{
  href: Routes;
  icon: ReactNode;
  clickedIcon: ReactNode;
}>;

export const menu: Menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFilledIcon />,
  },
  {
    href: '/postAdd',
    icon: <PlusIcon />,
    clickedIcon: <PlusFilledIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFilledIcon />,
  },
  {
    href: '/login',
    icon: <LoginIcon />,
    clickedIcon: <LoginFilledIcon />,
  },
  {
    href: '/bookmark',
    icon: <BookmarkIcon />,
    clickedIcon: <BookmarkFilledIcon />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Link href="/">
        <h1>TMI</h1>
      </Link>
      <nav>
        <ul>
          {menu.map((it) => (
            <Link key={it.href} href={it.href}>
              {pathname === it.href ? it.clickedIcon : it.icon}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
