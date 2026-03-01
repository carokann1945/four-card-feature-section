import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['200', '400', '600'], // extra light, regular, semibold
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'four-card-feature-section',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased min-h-[1405px] md:min-h-[1206px] xl:min-h-[1029px] flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
