'use client';

import { useEffect, useState } from 'react';

type BlogPost = {
  title: string;
  date: string;
  slug: string;
  category: 'Banking' | 'Travel' | 'General';
  summary: string;
  image?: string;
  content: string;
};

const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

function getLocalBlogAdminData(): BlogPost[] {
  if (typeof window === 'undefined') return [];
  const saved = window.localStorage.getItem('abhijeetonline_blog_posts');
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    return [];
  }
  return [];
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState<BlogPost>({
    title: '',
    date: new Date().toISOString().slice(0, 10),
    slug: '',
    category: 'General',
    summary: '',
    image: '',
    content: '',
  });

  useEffect(() => {
    const saved = getLocalBlogAdminData();
    if (saved.length) setPosts(saved);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      window.localStorage.setItem('abhijeetonline_blog_posts', JSON.stringify(posts));
    }
  }, [posts, loggedIn]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === adminPassword) {
      setLoggedIn(true);
    } else {
      alert('Incorrect password.');
    }
  }

  function handleAddPost(e: React.FormEvent) {
    e.preventDefault();
    if (!newPost.title || !newPost.slug) {
      alert('Title and slug are required.');
      return;
    }

    setPosts((prev) => [newPost, ...prev]);
    setNewPost({
      title: '',
      date: new Date().toISOString().slice(0, 10),
      slug: '',
      category: 'General',
      summary: '',
      image: '',
      content: '',
    });
  }

  function handleDelete(slug: string) {
    setPosts((prev) => prev.filter((post) => post.slug !== slug));
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#020a1f] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-[#0b1f41] p-8 rounded-xl shadow-xl border border-blue-500/20">
          <h1 className="text-2xl font-bold mb-5">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 focus:outline-none"
            />
            <button type="submit" className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
          <h1 className="text-3xl font-bold mb-4">Blog Admin Panel</h1>
          <p className="text-gray-300 mb-4">Add, edit, and delete blog posts. These are stored in local storage for now.</p>
          <form onSubmit={handleAddPost} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
              />
              <input
                type="text"
                placeholder="Slug (blog-post-slug)"
                value={newPost.slug}
                onChange={(e) => setNewPost({ ...newPost, slug: e.target.value.replace(/\s+/g, '-').toLowerCase() })}
                className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                value={newPost.date}
                onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
              />
              <select
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value as BlogPost['category'] })}
                className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
              >
                <option value="Banking">Banking</option>
                <option value="Travel">Travel</option>
                <option value="General">General</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Summary"
              value={newPost.summary}
              onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
            />
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 h-36"
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">Save Blog Post</button>
          </form>
        </div>

        <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
          <h2 className="text-2xl font-semibold mb-4">Existing Blog Posts</h2>
          <ul className="space-y-3">
            {posts.length === 0 && <li className="text-gray-400">No posts yet.</li>}
            {posts.map((post) => (
              <li key={post.slug} className="p-4 bg-[#0f274b] rounded-lg flex justify-between items-start">
                <div>
                  <p className="font-semibold text-white">{post.title}</p>
                  <p className="text-xs text-gray-300">{post.date} • {post.category}</p>
                </div>
                <button onClick={() => handleDelete(post.slug)} className="text-red-400 hover:text-red-200">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
