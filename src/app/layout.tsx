// src/app/layout.tsx
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
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || 
                    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className='bg-background text-foreground'>
        <Header />
        {children}
      </body>
    </html>
  );
}
