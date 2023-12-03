import React from 'react';

type AvatarSize = 'small' | 'medium' | 'large';

type Props = {
  size?: AvatarSize;
  image?: string | null;
  highlight?: boolean;
};

const Avatar = ({ image, size = 'small', highlight = false }: Props) => {
  console.log(size, 'size');

  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={`rounded-full object-cover ${getImageSizeStyle(size)}`}
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight ? 'shadow-neutral shadow-md' : '';
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize) {
  switch (size) {
    case 'small':
      return '';
    case 'medium':
    // return 'w-11 h-11';
    case 'large':
    // return 'w-[68px] h-[68px]';
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case 'small':
      return 'w-[32px] h-[32px]';
    case 'medium':
      return 'w-[42px] h-[42px]';
    case 'large':
      return 'w-16 h-16';
  }
}
