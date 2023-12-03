import { SearchUser } from '@/model/user';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
  user: SearchUser;
};

export default function UserCard({ user: { name, username, image, following, followers } }: Props) {
  return (
    <Link
      className="flex items-center w-full rounded-sm border mb-2 p-4 bg-white hover:bg-white/50"
      href={`/user${username}`}
    >
      <Avatar image={image} />
      <div>
        <p>{username}</p>
        <p className="text-black font-bold leading-4">{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
