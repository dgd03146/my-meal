import Carousel from 'react-multi-carousel';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';

export default function ScrollableBar({ children }: { children: React.ReactNode }) {
  const responsive = {
    desk: {
      breakpoint: { max: 4000, min: 576 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 4,
    },
  };

  return (
    <Carousel containerClass="flex gap-2 w-full" responsive={responsive}>
      {children}
    </Carousel>
  );
}
