import React from 'react';
import Avatar from './Avatar';

type Props = {
  image: string;
  username: string;
};

export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className="flex items-center">
      <Avatar image={image} size="medium" highlight />
      <span className="font-semibold ml-4">{username}</span>
    </div>
  );
}
