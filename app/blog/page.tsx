import { generateSEO } from '@/lib/seo';

type BlogPost = {
  title: string;
  date: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  { title: 'Card Issuance Optimization in Modern Banking', date: '2026-03-20', slug: 'card-issuance-optimization' },
  { title: 'Fraud Detection Models That Actually Work', date: '2026-02-15', slug: 'fraud-detection-models' },
  { title: 'Core Banking Foundations: Key Concepts', date: '2026-01-10', slug: 'core-banking-foundations' },
  { title: 'Future of Payments: Tokenization and APIs', date: '2025-12-05', slug: 'payments-tokenization-apis' },
  { title: 'AI in Banking: Practical Use Cases', date: '2025-11-18', slug: 'ai-in-banking-use-cases' },
  { title: 'Anti-money Laundering with Data Analytics', date: '2025-10-04', slug: 'aml-data-analytics' },
  { title: 'Digital Wallet UX Best Practices', date: '2025-09-12', slug: 'digital-wallet-ux' },
  { title: 'Journey from Business Requirements to Delivery', date: '2025-08-22', slug: 'brd-to-delivery' },
  { title: 'Scaling Payment Platforms for Enterprises', date: '2025-07-30', slug: 'scaling-payment-platforms' },
  { title: 'Building a Knowledge-sharing Platform in BFSI', date: '2025-06-14', slug: 'building-knowledge-platform' },
];

export const metadata = generateSEO(
  'Blog - Abhijeet Kumar Patro',
  'Explore blog posts on cards, payments, core banking, fraud prevention, and AI in banking.',
  '/blog'
);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Blog</h1>
        <p className="text-lg text-gray-300 mb-10 text-center">
          Latest insights from cards, payments, core banking foundations, fraud prevention, and banking AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0b1f41] rounded-xl border border-blue-500/20 p-4 hover:border-blue-300 transition-all"
            >
              <h2 className="text-lg font-semibold text-white leading-snug mb-2">{post.title}</h2>
              <p className="text-sm text-blue-200">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
