import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Experience - Abhijeet Kumar Patro',
  'Professional experience in Banking and Financial Services, specializing in Cards domain, payments platforms, and fraud analytics.',
  '/experience'
);

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}