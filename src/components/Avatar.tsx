import React from 'react';

const Avatar = ({ image }: { image?: string | null }) => {
  return (
    <div className="w-[2rem] h-[2rem] rounded-full bg-secondary flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full p-[0.1rem]"
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;
