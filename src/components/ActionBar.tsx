import { Button } from './ui/Button';
import { BookmarkIcon, HeartIcon } from './ui/icons';

type Props = { likes: string[] };

export default function ActionBar({ likes }: Props) {
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <p className="text-sm font-bold px-2 py-1 bg-white rounded-xl shadow-neutral shadow-md">{`${
          likes?.length ?? 0
        } ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <div className="flex items-center gap-x-4">
          <Button className="p-1 bg-white rounded-[50%] hover:bg-secondary">
            <HeartIcon />
          </Button>
          <Button className="p-1 bg-white rounded-[50%] hover:bg-secondary">
            <BookmarkIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
