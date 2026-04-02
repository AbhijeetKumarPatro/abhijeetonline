import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Projects - Abhijeet Kumar Patro',
  'Explore enterprise banking initiatives, platform building projects, and personal learning journeys in cards, payments, and fraud analytics.',
  '/projects'
);

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}