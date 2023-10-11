import Image from 'next/image';
import background from '../../public/images/background.png';
import { Button } from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';

export default function LandingPage() {
  return (
    <section className="flex items-center flex-col justify-center text-center h-screen gap-y-12">
      <h1 className="text-4xl sm:text-5xl text-neutral">
        {`WHAT'S YOUR `}
        <span className="bg-secondary text-4xl text-neutral px-4 py-2 rounded-3xl shadow-md shadow-neutral font-delta">
          TMI
        </span>
      </h1>
      <Image src={background} alt="Background Image" priority />
      <Button
        href="/home"
        text="Get Started"
        size={'lg'}
        className="mt-8 flex gap-x-2 items-center text-neutral shadow-neutral shadow-md"
      >
        <ArrowIcon />
      </Button>
    </section>
  );
}
