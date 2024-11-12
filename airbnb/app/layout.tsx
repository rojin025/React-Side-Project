import Header from '@/app/_components/Header';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';

export const metadata = {
  title: {
    template: '%s | AirBnB',
    default: 'AirBnB | For you',
  },
  description: 'Where home are rented! This is for SEO.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />

        <div className='grid flex-1 px-8 py-12'>
          <main className='mx-auto w-full max-w-7xl'>{children}</main>
        </div>

        <footer>Copyright by the AirBnB</footer>
      </body>
    </html>
  );
}
