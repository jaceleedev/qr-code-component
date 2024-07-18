import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | QR Code Component',
  description:
    'A simple QR Code component built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'QR Code Component',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'QR code Component',
    'Next.js',
    'Tailwind CSS',
    'CSS Module',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/qr-code-component',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://qr-code-component-ten-pink.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | QR Code Component',
    description:
      'A simple QR Code component built for a Frontend Mentor challenge.',
    url: 'https://qr-code-component-ten-pink.vercel.app/',
    siteName: 'Frontend Mentor | QR Code Component',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1721232044/Challenges/zkde5jqnoqf9xnvftyzl.jpg',
        width: 1440,
        height: 960,
        alt: 'QR Code component desktop size',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1721232044/Challenges/ybid5kc5ubeoyfwkd72s.jpg',
        width: 375,
        height: 812,
        alt: 'QR Code component mobile size',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | QR Code Component',
    description:
      'A simple QR Code component built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1721232044/Challenges/zkde5jqnoqf9xnvftyzl.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>{children}</body>
    </html>
  );
}
