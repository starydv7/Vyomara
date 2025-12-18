import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata = {
  metadataBase: new URL('https://vyomara.app'),
  title: {
    default: 'Vyomara - Production Ready Next.js App',
    template: '%s | Vyomara',
  },
  description: 'A production-ready Next.js application with Tailwind CSS and modern best practices.',
  keywords: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Production'],
  authors: [{ name: 'Vyomara Team' }],
  creator: 'Vyomara',
  publisher: 'Vyomara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vyomara.app',
    siteName: 'Vyomara',
    title: 'Vyomara - Production Ready Next.js App',
    description: 'A production-ready Next.js application with Tailwind CSS and modern best practices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyomara - Production Ready Next.js App',
    description: 'A production-ready Next.js application with Tailwind CSS and modern best practices.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable} suppressHydrationWarning>
        <body className="antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-white" suppressHydrationWarning={true}>
          <Navbar />
          <div id="root">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}


