import { useState } from 'react';

import {
  BookmarkIcon,
  HeartFilledIcon,
  HeartIcon,
  BookmarkFilledIcon,
} from './ui/icons';
import ToggleButton from './ui/ToggleButton';
import { SimplePost } from '@/model/post';

import usePosts from '@/hooks/posts';
import useMe from '@/hooks/me';

type Props = { post: SimplePost };

export default function ActionBar({ post }: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
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
            onToggle={handleBookmark}
            onIcon={<BookmarkFilledIcon />}
            offIcon={<BookmarkIcon />}
          />
        </div>
      </div>
    </>
  );
}
