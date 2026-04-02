import BlogList from '@/components/BlogList';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Blog - Abhijeet Kumar Patro',
  'Explore blog posts on cards, payments, core banking, fraud prevention, and AI in banking.',
  '/blog'
);

export default function BlogPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = (searchParams?.category as 'All' | 'Banking' | 'Travel' | 'General' | undefined) || 'All';

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Blog</h1>
        <p className="text-lg text-gray-300 mb-10 text-center">
          Latest insights from cards, payments, core banking foundations, fraud prevention, and banking AI.
        </p>

        <BlogList initialPosts={[]} initialCategory={category} />
      </div>
    </div>
  );
}

