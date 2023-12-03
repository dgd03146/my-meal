'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

import {
  HomeFilledIcon,
  HomeIcon,
  PlusIcon,
  PlusFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  LoginIcon,
} from '@/components/ui/icons';

import Avatar from './Avatar';

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
];

const MenuBar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className="max-w-[480px] mx-auto flex items-center h-full bg-primary border-t-2 border-x-[6px] border-b-[6px]">
      <ul className="flex w-full justify-between px-4 items-center">
        {menu.map((it) => (
          <li key={it.href}>
            <Link className="text-2xl flex items-center" href={it.href}>
              {pathName === it.href ? it.clickedIcon : it.icon}
            </Link>
          </li>
        ))}
        <li>
          {session ? (
            user && (
              <Link href={`/user/${user.username}`} className="flex items-center">
                <Avatar image={user.image} size="small" highlight />
              </Link>
            )
          ) : (
            <button onClick={() => signIn()} className="text-2xl flex items-center">
              <LoginIcon />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
