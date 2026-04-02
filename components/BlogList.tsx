'use client';

import { useEffect, useMemo, useState } from 'react';

type BlogPost = {
  title: string;
  date: string;
  slug: string;
  category: 'Banking' | 'Travel' | 'General';
  summary: string;
  image?: string;
};

interface BlogListProps {
  initialPosts: BlogPost[];
  initialCategory: 'All' | 'Banking' | 'Travel' | 'General';
}

const STORAGE_KEY = 'abhijeetonline_blog_posts';

function getSavedPosts(defaultPosts: BlogPost[]): BlogPost[] {
  if (typeof window === 'undefined') return defaultPosts;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultPosts;

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    return defaultPosts;
  }

  return defaultPosts;
}

export default function BlogList({ initialPosts, initialCategory }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [category, setCategory] = useState<'All' | 'Banking' | 'Travel' | 'General'>(initialCategory);

  useEffect(() => {
    setPosts(getSavedPosts(initialPosts));
  }, [initialPosts]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts]);

  const shownPosts = useMemo(() => {
    if (category === 'All') return posts;
    return posts.filter((post) => post.category === category);
  }, [category, posts]);

  return (
    <>
      <div className="flex justify-center gap-3 mb-8">
        {(['All', 'Banking', 'Travel', 'General'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setCategory(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              category === type ? 'bg-blue-600 text-white' : 'bg-[#0b1f41] text-gray-300 hover:bg-blue-500/50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {shownPosts.map((post) => (
          <article key={post.slug} className="bg-[#0b1f41] rounded-xl border border-blue-500/20 p-4 hover:border-blue-300 transition-all">
            <h2 className="text-lg font-semibold text-white mb-2 leading-snug">{post.title}</h2>
            <p className="text-sm text-blue-200 mb-1">{post.date}</p>
            <p className="text-xs text-gray-400 mb-3">{post.category} Blog</p>
            <p className="text-sm text-gray-300">{post.summary}</p>
          </article>
        ))}
      </div>
    </>
  );
}
