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

type Routes = '/' | '/login' | '/new' | '/posts' | '/search' | '/bookmark';

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
    href: '/new',
    icon: <PlusIcon />,
    clickedIcon: <PlusFilledIcon />,
  },
  {
    href: '/bookmark',
    icon: <BookmarkIcon />,
    clickedIcon: <BookmarkFilledIcon />,
  },
  {
    href: '/login',
    icon: <LoginIcon />,
    clickedIcon: <LoginFilledIcon />,
  },
];

const MenuBar = () => {
  const pathname = usePathname();
  return (
    <nav className="max-w-[480px] w-full bg-blue-100 mx-auto h-full flex items-center">
      <ul className="flex w-full justify-between px-4">
        {menu.map((it) => (
          <Link className="text-2xl" key={it.href} href={it.href}>
            {pathname === it.href ? it.clickedIcon : it.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
