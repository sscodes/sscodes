import Header from '@/components/Header/Header';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'sscodes',
    template: '%s | sscodes',
  },
  description: 'Portfolio website of Sanket Sarkar (sscodes)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-stone-100'>
        <Header />
        {children}
      </body>
    </html>
  );
}
