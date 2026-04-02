import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Certifications - Abhijeet Kumar Patro',
  'Professional certifications in Business Analysis, Agile methodologies, and banking technology. View detailed certification credentials.',
  '/certifications'
);

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}