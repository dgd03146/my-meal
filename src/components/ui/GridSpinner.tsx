import dynamic from 'next/dynamic';

// dynamic
const GridLoader = dynamic(() => import('react-spinners').then((lib) => lib.GridLoader), {
  ssr: false,
});

type Props = {
  color?: string;
};

export default function GridSpinner({ color = '#121063' }: Props) {
  return <GridLoader color={color} />;
}
