import BlogList from '@/components/BlogList';
import { generateSEO } from '@/lib/seo';

type BlogPost = {
  title: string;
  date: string;
  slug: string;
  category: 'Banking' | 'Travel' | 'General';
  summary: string;
  image?: string;
};

const defaultBlogPosts: BlogPost[] = [
  { title: 'Card Issuance Optimization in Modern Banking', date: '2026-03-20', slug: 'card-issuance-optimization', category: 'Banking', summary: 'Optimization techniques and strategy for enterprise card issuance flows.' },
  { title: 'Fraud Detection Models That Actually Work', date: '2026-02-15', slug: 'fraud-detection-models', category: 'Banking', summary: 'How to design and maintain fraud detection models in payments platforms.' },
  { title: 'Core Banking Foundations: Key Concepts', date: '2026-01-10', slug: 'core-banking-foundations', category: 'General', summary: 'Essential core banking concepts for product and technology teams.' },
  { title: 'Future of Payments: Tokenization and APIs', date: '2025-12-05', slug: 'payments-tokenization-apis', category: 'Banking', summary: 'Tokenization architecture and API strategies for modern payment solutions.' },
  { title: 'AI in Banking: Practical Use Cases', date: '2025-11-18', slug: 'ai-in-banking-use-cases', category: 'General', summary: 'Real-world AI applications in banking operations and risk management.' },
  { title: 'Spiritual Travel and Learning Across India', date: '2025-10-04', slug: 'spiritual-travel-india', category: 'Travel', summary: 'Stories from spiritual journeys and takeaways for work-life balance.' },
];

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

        <BlogList initialPosts={defaultBlogPosts} initialCategory={category} />
      </div>
    </div>
  );
}

