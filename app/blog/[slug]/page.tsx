import { notFound } from 'next/navigation';
import { generateSEO } from '@/lib/seo';

type BlogPost = {
  title: string;
  date: string;
  slug: string;
  category: 'Banking' | 'Travel' | 'General';
  summary: string;
  image?: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  { title: 'Card Issuance Optimization in Modern Banking', date: '2026-03-20', slug: 'card-issuance-optimization', category: 'Banking', summary: 'Optimization techniques and strategy for enterprise card issuance flows.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=900&q=80', content: 'Detailed article content goes here. Use this section to describe problem, solution and lessons learned.' },
  { title: 'Fraud Detection Models That Actually Work', date: '2026-02-15', slug: 'fraud-detection-models', category: 'Banking', summary: 'How to design and maintain fraud detection models in payments platforms.', image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3b?fit=crop&w=900&q=80', content: 'Detailed article content goes here.' },
  { title: 'Spiritual Travel and Learning Across India', date: '2025-10-04', slug: 'spiritual-travel-india', category: 'Travel', summary: 'Stories from spiritual journeys and takeaways for work-life balance.', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?fit=crop&w=900&q=80', content: 'Detailed article content goes here.' },
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post does not exist.',
    };
  }

  return generateSEO(`${post.title} - AbhijeetOnline`, post.summary, `/blog/${post.slug}`);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-8">{post.date} • {post.category} Blog</p>

        {post.image && (
          <img className="w-full rounded-xl mb-8" src={post.image} alt={post.title} />
        )}

        <p className="text-gray-300 leading-relaxed text-lg">{post.content}</p>
      </div>
    </div>
  );
}
