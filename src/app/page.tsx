import Image from 'next/image';
import background from '../../public/images/background.png';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <section className="flex items-center h-full flex-col justify-center gap-y-12 font-libre">
      <h1 className="text-5xl">
        {`What's your `}
        <span className=" bg-secondary py-2 px-2 rounded-2xl border-neutral border-r-4 border-b-4">TMI</span>
      </h1>
      <div className="flex flex-col">
        <h3>Write down your too much information</h3>
        <h3>Whatever it is, whenever it is!</h3>
      </div>
      <Image src={background} alt="Background Image" priority />
      <Button href="/home" text="Get Started" className="mt-4 rounded-3xl" />
    </section>
  );
}
