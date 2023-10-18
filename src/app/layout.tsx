import AuthContext from '@/context/AuthContext';
import type { Metadata } from 'next';
import { Inter, Libre_Baskerville, IBM_Plex_Mono, Dela_Gothic_One } from 'next/font/google';
import '@/styles/global.css';

import Layout from '@/components/Layout';
import SWRConfigContext from '@/context/SWRConfigContext';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const libre = Libre_Baskerville({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre',
});
const ibm = IBM_Plex_Mono({ weight: '400', subsets: ['latin'], variable: '--font-ibm' });
const delta = Dela_Gothic_One({ weight: '400', subsets: ['latin'], variable: '--font-delta' });

export const metadata: Metadata = {
  title: {
    default: 'Instantgram',
    template: 'Instantgram | %s',
  },
  description: 'Instantgram Photos',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibm.className} ${libre.variable} ${inter.variable} ${delta.variable}`}>
        <AuthContext>
          <Layout>
            <SWRConfigContext>{children} </SWRConfigContext>
          </Layout>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
