import Avatar from './Avatar';
import Image from 'next/image';

import { BookmarkIcon, HeartIcon, SmileIcon } from './ui/icons';
import { parseDate } from '@/utils/date';
import { SimplePost } from '@/model/post';
import { Button } from './ui/Button';

type Props = {
  post: SimplePost;
};

function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className="border-b">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <Avatar image={userImage} size="medium" />
          <span className="font-semibold ml-4">{username}</span>
        </div>
        <p className=" text-neutral">•{parseDate(createdAt)}</p>
      </div>
      <p className="font-bold py-4 font-libre">
        {text} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi explicabo, nihil natus omnis accusantium
        odit molestiae laudantium quidem non cupiditate hic illo ad expedita, iusto esse. Consectetur hic eius deleniti!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatibus, dolorum facere, sequi expedita
        esse mollitia nemo, ut vel fugit adipisci necessitatibus eaque labore ullam? Magni excepturi dolore qui magnam?
      </p>
      <Image
        className="w-full object-cover aspect-square rounded-[32px] border-neutral shadow-neutral shadow-md"
        src={image}
        alt={`photo by ${username}`}
        width={400}
        height={500}
      />
      <div className="flex justify-between items-center my-4 px-4">
        <p className="text-sm font-bold">{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <div className="flex items-center gap-x-4">
          <HeartIcon />
          <BookmarkIcon />
        </div>
      </div>
      <div className="px-4">
        <form className="flex items-center py-2">
          <SmileIcon />
          <input
            className="w-full ml-2 border-none outline-none p-3 bg-primary"
            type="text"
            placeholder="Add a comment.."
          />
          <Button text="Post" className="rounded-[48px] text-sm text-neutral" />
        </form>
      </div>
    </article>
  );
}

export default PostListCard;
