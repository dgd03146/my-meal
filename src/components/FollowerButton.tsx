'use client';

import type { HomeUser, ProfileUser } from '@/model/user';
import useSWR from 'swr';
import { Button } from './ui/Button';

type Props = {
  user: ProfileUser;
};

export default function FollowerButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>('/api/me');

  const showButton = loggedInUser && loggedInUser.username !== username;
  const follwing = loggedInUser && loggedInUser.following.find((item) => item.username === username);

  const text = follwing ? 'Unfollow' : 'Follow';

  return <>{showButton && <Button text={text} onClick={() => {}} />}</>;
}

//  red={text === 'Unfollow'}
