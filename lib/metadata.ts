import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Abhijeet Kumar Patro - Senior Business Analyst | Cards & Payments Expert',
    template: '%s | Abhijeet Kumar Patro',
  },
  description: 'Senior Business Analyst specializing in Cards domain, Payments platforms, and Fraud analytics. Building LetsLearnBanking.com - A thought leadership platform on Banking technology.',
  keywords: [
    'Abhijeet Kumar Patro',
    'Business Analyst',
    'Cards Domain',
    'Payments',
    'Fraud Analytics',
    'Banking',
    'LetsLearnBanking',
    'Citi',
    'FIS Global',
    'Hexaware'
  ],
  authors: [{ name: 'Abhijeet Kumar Patro' }],
  creator: 'Abhijeet Kumar Patro',
  publisher: 'Abhijeet Kumar Patro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhijeetonline.com',
    siteName: 'Abhijeet Kumar Patro',
    title: 'Abhijeet Kumar Patro - Senior Business Analyst | Cards & Payments Expert',
    description: 'Senior Business Analyst specializing in Cards domain, Payments platforms, and Fraud analytics. Building LetsLearnBanking.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhijeet Kumar Patro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijeet Kumar Patro - Senior Business Analyst | Cards & Payments Expert',
    description: 'Senior Business Analyst specializing in Cards domain, Payments platforms, and Fraud analytics.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};