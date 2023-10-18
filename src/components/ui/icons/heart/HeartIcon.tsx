import { AiOutlineHeart } from 'react-icons/ai';

type Props = {
  className?: string;
};
export function HeartIcon({ className }: Props) {
  return <AiOutlineHeart className={className || 'w-7 h-7'} />;
}
