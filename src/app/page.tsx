import Image from 'next/image';
import background from '../../public/images/background.png';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <section className="flex items-center h-full flex-col justify-center gap-y-8 font-libre">
      <h1 className="text-4xl">
        {`WHAT'S YOUR `}
        <span className=" bg-secondary py-2 px-2 rounded-2xl border-neutral border-r-4 border-b-4">TMI</span>
      </h1>
      <div className="flex flex-col text-lg">
        <p>Write down your too much information</p>
        <p>Whatever it is, whenever it is!</p>
      </div>
      <Image src={background} alt="Background Image" priority />
      <Button href="/home" text="Get Started" className="mt-4 rounded-3xl" />
    </section>
  );
}
