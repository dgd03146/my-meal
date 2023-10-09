'use client';

import { DetailUser } from '@/model/user';
import useSWR from 'swr';
import { PacmanLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from './Avatar';

function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  return (
    <section>
      {loading ? (
        <PacmanLoader color="rgb(255,231,144)" />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have follwing`}</p>)
      )}
      {users && users.length > 0 && (
        <ul className="flex">
          {users.map(({ username, image }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} size="large" highlight />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FollowingBar;
