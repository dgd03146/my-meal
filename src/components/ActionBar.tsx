import { useState } from 'react';

import {
  BookmarkIcon,
  HeartFilledIcon,
  HeartIcon,
  BookmarkFilledIcon,
} from './ui/icons';
import ToggleButton from './ui/ToggleButton';
import { SimplePost } from '@/model/post';
import { useSession } from 'next-auth/react';
import { useSWRConfig } from 'swr';
import usePosts from '@/hooks/posts';

type Props = { post: SimplePost };

export default function ActionBar({ post }: Props) {
  const { id, likes, createdAt } = post;
  console.log('🚀 ~ file: ActionBar.tsx:19 ~ ActionBar ~ likes:', likes);

  const { data: session } = useSession();
  const user = session?.user;

  const liked = user ? likes.includes(user.username) : false;

  const [bookmarked, setBookmarked] = useState(false);

  const { setLike } = usePosts();

  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center my-4 p-4">
        <p className="text-sm font-bold px-2 py-1 bg-white rounded-xl shadow-neutral shadow-md">{`${
          likes?.length ?? 0
        } ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <div className="flex items-center gap-x-4">
          <ToggleButton
            toggled={liked}
            onToggle={handleLike}
            onIcon={<HeartFilledIcon />}
            offIcon={<HeartIcon />}
          />
          <ToggleButton
            toggled={bookmarked}
            onToggle={setBookmarked}
            onIcon={<BookmarkFilledIcon />}
            offIcon={<BookmarkIcon />}
          />
        </div>
      </div>
    </>
  );
}
