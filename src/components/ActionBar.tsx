import { useState } from 'react';
import { Button } from './ui/Button';
import {
  BookmarkIcon,
  HeartFilledIcon,
  HeartIcon,
  BookmarkFilledIcon,
} from './ui/icons';
import ToggleButton from './ui/ToggleButton';

type Props = { likes: string[] };

export default function ActionBar({ likes }: Props) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center my-4 p-4">
        <p className="text-sm font-bold px-2 py-1 bg-white rounded-xl shadow-neutral shadow-md">{`${
          likes?.length ?? 0
        } ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <div className="flex items-center gap-x-4">
          <ToggleButton
            toggled={liked}
            onToggle={setLiked}
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
