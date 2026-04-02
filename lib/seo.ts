import { Metadata } from 'next';

export function generateSEO(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const url = `https://abhijeetonline.com${path}`;
  const defaultImage = '/og-image.svg'; // Open Graph image for social sharing

  return {
    title,
    description,
    keywords: [
      'Abhijeet Kumar Patro',
      'Business Analyst',
      'Cards Domain',
      'Payments',
      'Fraud Analytics',
      'Banking',
      'LetsLearnBanking'
    ],
    authors: [{ name: 'Abhijeet Kumar Patro' }],
    creator: 'Abhijeet Kumar Patro',
    publisher: 'Abhijeet Kumar Patro',
    openGraph: {
      title,
      description,
      url,
      siteName: 'Abhijeet Kumar Patro',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || defaultImage],
      creator: '@abhijeetpatro', // Update if has Twitter
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
      // Add Google Search Console verification if needed
    },
  };
}

export function generateJSONLD(type: 'Person' | 'Website' | 'BreadcrumbList', data: any) {
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(base);
}