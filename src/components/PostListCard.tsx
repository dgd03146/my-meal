import Avatar from './Avatar';
import Image from 'next/image';

import { parseDate } from '@/utils/date';
import { SimplePost } from '@/model/post';

import CommentForm from './CommentForm';
import ActionBar from './ActionBar';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className="border-b">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <Avatar image={userImage} size="medium" highlight />
          <span className="font-semibold ml-4">{username}</span>
        </div>
        <p className=" text-neutral">•{parseDate(createdAt)}</p>
      </div>
      <p className="font-bold py-4 font-libre">{text}</p>
      <div className="w-full h-[250px]">
        <Image
          className="w-full h-full object-cover aspect-square rounded-[24px] border-neutral shadow-neutral shadow-md"
          src={image}
          alt={`photo by ${username}`}
          width={500}
          height={500}
          priority={priority}
        />
      </div>
      <ActionBar likes={likes} />
      <CommentForm />
    </article>
  );
}

export default PostListCard;
