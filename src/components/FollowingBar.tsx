'use client';

import { DetailUser } from '@/model/user';
import useSWR from 'swr';
import { PacmanLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following && [...data.following, ...data.following, ...data.following];

  return (
    <section className="w-full flex justify-center items-center min-h-[90px] mb-4 overflow-x-auto">
      {loading ? (
        <PacmanLoader color="#121063" />
      ) : (
        !users || (users.length === 0 && <p className="font-semibold">{`You don't have follwing`}</p>)
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link key={username} href={`/user/${username}`} className="flex flex-col items-center w-20">
              <Avatar image={image} size="large" />
              <p className="w-full text-center font-semibold text-sm overflow-hidden text-ellipsis">{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}

export default FollowingBar;
