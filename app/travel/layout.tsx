import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Travel - Abhijeet Kumar Patro',
  'Discover Abhijeet\'s spiritual travel experiences across India, from temple journeys to mountain reflections.',
  '/travel'
);

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}