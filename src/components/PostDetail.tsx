import { FullPost, SimplePost } from '@/model/post';
import useSWR from 'swr';
import Image from 'next/image';
import PostUserAvatar from './PostUserAvatar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import Avatar from './Avatar';
import { parseDate } from '@/utils/date';

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, likes, createdAt } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <div className="p-2 flex justify-between items-center">
          <PostUserAvatar image={userImage} username={username} />
          <p className=" text-neutral">•{parseDate(createdAt)}</p>
        </div>
        <ul className="border-t border-black h-full overflow-y-auto p-4">
          {comments &&
            comments.map(
              ({ image, comment, username: commentUsername }, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Avatar
                    image={image}
                    size="small"
                    highlight={commentUsername === username}
                  />
                  <div className="ml-2">
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              ),
            )}
        </ul>
        <ActionBar post={post} />
        <div className="border-b" />
        <CommentForm />
      </div>
    </section>
  );
}
