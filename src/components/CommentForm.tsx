import React from 'react';
import { SmileIcon } from './ui/icons';
import { Button } from './ui/Button';

export default function CommentForm() {
  return (
    <form className="flex items-center py-2">
      <SmileIcon />
      <input
        className="w-full ml-2 border-none outline-none p-3 bg-primary"
        type="text"
        placeholder="Add a comment.."
      />
      <Button text="Post" className="rounded-[48px] text-sm text-neutral" />
    </form>
  );
}
