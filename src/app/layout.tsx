import MenuBar from '@/components/Menubar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <AuthContext>
          <div className="h-full flex flex-col items-center mx-auto bg-primary max-w-[480px] overflow-y-auto">
            <header className="w-full pt-4 sticky top-0">
              <Navbar />
            </header>
            <main className="max-w-[480px] flex-[1]">{children}</main>
            <footer className="h-[48px] w-full border-t">
              <MenuBar />
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
