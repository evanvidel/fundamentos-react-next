import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'React & Next',
  description: 'Formação dev Express',
};

const font = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
