'use client';

import { useEffect, useState } from 'react';
import { Experience, Project, TravelPhoto, Certification, BlogPost } from '@/types';

const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

function getLocalData<T>(key: string): T[] {
  if (typeof window === 'undefined') return [];
  const saved = window.localStorage.getItem(`abhijeetonline_${key}`);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    return [];
  }
  return [];
}

function saveLocalData<T>(key: string, data: T[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(`abhijeetonline_${key}`, JSON.stringify(data));
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('blog');

  // Blog Posts State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newBlogPost, setNewBlogPost] = useState<BlogPost>({
    title: '',
    date: new Date().toISOString().slice(0, 10),
    slug: '',
    category: 'General',
    summary: '',
    image: '',
    content: '',
  });

  // Experiences State
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [newExperience, setNewExperience] = useState<Experience>({
    company: '',
    role: '',
    period: '',
    location: '',
    achievements: [],
  });
  const [achievementInput, setAchievementInput] = useState('');

  // Projects State
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({
    title: '',
    description: '',
    category: 'Enterprise Banking Initiatives',
    technologies: [],
    link: '',
  });
  const [techInput, setTechInput] = useState('');

  // Travel Photos State
  const [travelPhotos, setTravelPhotos] = useState<TravelPhoto[]>([]);
  const [newTravelPhoto, setNewTravelPhoto] = useState<TravelPhoto>({
    id: '',
    src: '',
    alt: '',
    title: '',
    description: '',
    uploadedAt: '',
  });

  // Certifications State
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [newCertification, setNewCertification] = useState<Certification>({
    id: '',
    title: '',
    issuer: '',
    date: '',
    thumbnail: '',
    fullImage: '',
    description: '',
    uploadedAt: '',
  });

  useEffect(() => {
    if (loggedIn) {
      setBlogPosts(getLocalData<BlogPost>('blog_posts'));
      setExperiences(getLocalData<Experience>('experiences'));
      setProjects(getLocalData<Project>('projects'));
      setTravelPhotos(getLocalData<TravelPhoto>('travel_photos'));
      setCertifications(getLocalData<Certification>('certifications'));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      saveLocalData('blog_posts', blogPosts);
    }
  }, [blogPosts, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      saveLocalData('experiences', experiences);
    }
  }, [experiences, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      saveLocalData('projects', projects);
    }
  }, [projects, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      saveLocalData('travel_photos', travelPhotos);
    }
  }, [travelPhotos, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      saveLocalData('certifications', certifications);
    }
  }, [certifications, loggedIn]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === adminPassword) {
      setLoggedIn(true);
    } else {
      alert('Incorrect password.');
    }
  }

  // Image upload helper
  function handleImageUpload(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Blog Post Handlers
  function handleAddBlogPost(e: React.FormEvent) {
    e.preventDefault();
    if (!newBlogPost.title || !newBlogPost.slug) {
      alert('Title and slug are required.');
      return;
    }

    setBlogPosts((prev) => [newBlogPost, ...prev]);
    setNewBlogPost({
      title: '',
      date: new Date().toISOString().slice(0, 10),
      slug: '',
      category: 'General',
      summary: '',
      image: '',
      content: '',
    });
  }

  function handleDeleteBlogPost(slug: string) {
    setBlogPosts((prev) => prev.filter((post) => post.slug !== slug));
  }

  // Experience Handlers
  function handleAddExperience(e: React.FormEvent) {
    e.preventDefault();
    if (!newExperience.company || !newExperience.role || !newExperience.period) {
      alert('Company, role, and period are required.');
      return;
    }

    setExperiences((prev) => [newExperience, ...prev]);
    setNewExperience({
      company: '',
      role: '',
      period: '',
      location: '',
      achievements: [],
    });
  }

  function handleAddAchievement() {
    if (achievementInput.trim()) {
      setNewExperience(prev => ({
        ...prev,
        achievements: [...prev.achievements, achievementInput.trim()]
      }));
      setAchievementInput('');
    }
  }

  function handleRemoveAchievement(index: number) {
    setNewExperience(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  }

  function handleDeleteExperience(index: number) {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  }

  // Project Handlers
  function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    if (!newProject.title || !newProject.description) {
      alert('Title and description are required.');
      return;
    }

    setProjects((prev) => [newProject, ...prev]);
    setNewProject({
      title: '',
      description: '',
      category: 'Enterprise Banking Initiatives',
      technologies: [],
      link: '',
    });
  }

  function handleAddTechnology() {
    if (techInput.trim()) {
      setNewProject(prev => ({
        ...prev,
        technologies: [...(prev.technologies || []), techInput.trim()]
      }));
      setTechInput('');
    }
  }

  function handleRemoveTechnology(index: number) {
    setNewProject(prev => ({
      ...prev,
      technologies: (prev.technologies || []).filter((_, i) => i !== index)
    }));
  }

  function handleDeleteProject(index: number) {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  }

  // Travel Photo Handlers
  async function handleAddTravelPhoto(e: React.FormEvent) {
    e.preventDefault();
    if (!newTravelPhoto.title || !newTravelPhoto.description) {
      alert('Title and description are required.');
      return;
    }

    const photo: TravelPhoto = {
      ...newTravelPhoto,
      id: Date.now().toString(),
      uploadedAt: new Date().toISOString(),
    };

    setTravelPhotos((prev) => [photo, ...prev]);
    setNewTravelPhoto({
      id: '',
      src: '',
      alt: '',
      title: '',
      description: '',
      uploadedAt: '',
    });
  }

  async function handleTravelPhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await handleImageUpload(file);
        setNewTravelPhoto(prev => ({ ...prev, src: base64, alt: file.name }));
      } catch (error) {
        alert('Failed to upload image');
      }
    }
  }

  function handleDeleteTravelPhoto(id: string) {
    setTravelPhotos((prev) => prev.filter((photo) => photo.id !== id));
  }

  // Certification Handlers
  async function handleAddCertification(e: React.FormEvent) {
    e.preventDefault();
    if (!newCertification.title || !newCertification.issuer || !newCertification.date) {
      alert('Title, issuer, and date are required.');
      return;
    }

    const cert: Certification = {
      ...newCertification,
      id: Date.now().toString(),
      uploadedAt: new Date().toISOString(),
    };

    setCertifications((prev) => [cert, ...prev]);
    setNewCertification({
      id: '',
      title: '',
      issuer: '',
      date: '',
      thumbnail: '',
      fullImage: '',
      description: '',
      uploadedAt: '',
    });
  }

  async function handleThumbnailUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await handleImageUpload(file);
        setNewCertification(prev => ({ ...prev, thumbnail: base64 }));
      } catch (error) {
        alert('Failed to upload thumbnail');
      }
    }
  }

  async function handleFullImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await handleImageUpload(file);
        setNewCertification(prev => ({ ...prev, fullImage: base64 }));
      } catch (error) {
        alert('Failed to upload full image');
      }
    }
  }

  function handleDeleteCertification(id: string) {
    setCertifications((prev) => prev.filter((cert) => cert.id !== id));
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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Content Management System</h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-blue-500/20 pb-4">
          {[
            { id: 'blog', label: 'Blog Posts' },
            { id: 'experiences', label: 'Experiences' },
            { id: 'projects', label: 'Projects' },
            { id: 'travel', label: 'Travel Photos' },
            { id: 'certifications', label: 'Certifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#0b1f41] text-gray-300 hover:bg-[#0f274b]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Tab */}
        {activeTab === 'blog' && (
          <div className="space-y-8">
            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Add New Blog Post</h2>
              <form onSubmit={handleAddBlogPost} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Blog Title"
                    value={newBlogPost.title}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Slug (blog-post-slug)"
                    value={newBlogPost.slug}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, slug: e.target.value.replace(/\s+/g, '-').toLowerCase() })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={newBlogPost.date}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, date: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                  <select
                    value={newBlogPost.category}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, category: e.target.value as BlogPost['category'] })}
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
                  value={newBlogPost.summary}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, summary: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Image URL (optional)"
                  value={newBlogPost.image}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, image: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                />
                <textarea
                  placeholder="Content"
                  value={newBlogPost.content}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 h-36"
                />
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">Save Blog Post</button>
              </form>
            </div>

            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Existing Blog Posts ({blogPosts.length})</h2>
              <ul className="space-y-3">
                {blogPosts.length === 0 && <li className="text-gray-400">No posts yet.</li>}
                {blogPosts.map((post) => (
                  <li key={post.slug} className="p-4 bg-[#0f274b] rounded-lg flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-white">{post.title}</p>
                      <p className="text-xs text-gray-300">{post.date} • {post.category}</p>
                    </div>
                    <button onClick={() => handleDeleteBlogPost(post.slug)} className="text-red-400 hover:text-red-200">Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Experiences Tab */}
        {activeTab === 'experiences' && (
          <div className="space-y-8">
            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Add New Experience</h2>
              <form onSubmit={handleAddExperience} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newExperience.role}
                    onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Period (e.g., Jan 2023 — Present)"
                    value={newExperience.period}
                    onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Location (optional)"
                    value={newExperience.location}
                    onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add achievement"
                      value={achievementInput}
                      onChange={(e) => setAchievementInput(e.target.value)}
                      className="flex-1 p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                    />
                    <button type="button" onClick={handleAddAchievement} className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg">Add</button>
                  </div>
                  <div className="space-y-1">
                    {newExperience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-[#0f274b] rounded">
                        <span className="flex-1 text-sm">{achievement}</span>
                        <button type="button" onClick={() => handleRemoveAchievement(index)} className="text-red-400 hover:text-red-200">×</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">Save Experience</button>
              </form>
            </div>

            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Existing Experiences ({experiences.length})</h2>
              <ul className="space-y-3">
                {experiences.length === 0 && <li className="text-gray-400">No experiences yet.</li>}
                {experiences.map((exp, index) => (
                  <li key={index} className="p-4 bg-[#0f274b] rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-white">{exp.role} at {exp.company}</p>
                        <p className="text-xs text-gray-300">{exp.period} • {exp.location}</p>
                      </div>
                      <button onClick={() => handleDeleteExperience(index)} className="text-red-400 hover:text-red-200">Delete</button>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
              <form onSubmit={handleAddProject} className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                />
                <textarea
                  placeholder="Description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 h-24"
                />
                <select
                  value={newProject.category}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value as Project['category'] })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                >
                  <option value="Enterprise Banking Initiatives">Enterprise Banking Initiatives</option>
                  <option value="Platform Building Initiatives">Platform Building Initiatives</option>
                  <option value="Personal Learning Initiatives">Personal Learning Initiatives</option>
                </select>
                <input
                  type="text"
                  placeholder="Project Link (optional)"
                  value={newProject.link}
                  onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                />
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add technology"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      className="flex-1 p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                    />
                    <button type="button" onClick={handleAddTechnology} className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {newProject.technologies?.map((tech, index) => (
                      <span key={index} className="flex items-center gap-1 px-2 py-1 bg-blue-600 rounded text-sm">
                        {tech}
                        <button type="button" onClick={() => handleRemoveTechnology(index)} className="text-red-200 hover:text-red-100">×</button>
                      </span>
                    ))}
                  </div>
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">Save Project</button>
              </form>
            </div>

            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Existing Projects ({projects.length})</h2>
              <ul className="space-y-3">
                {projects.length === 0 && <li className="text-gray-400">No projects yet.</li>}
                {projects.map((project, index) => (
                  <li key={index} className="p-4 bg-[#0f274b] rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-white">{project.title}</p>
                        <p className="text-xs text-blue-300">{project.category}</p>
                      </div>
                      <button onClick={() => handleDeleteProject(index)} className="text-red-400 hover:text-red-200">Delete</button>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-600 rounded text-xs">{tech}</span>
                        ))}
                      </div>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        View Project →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Travel Photos Tab */}
        {activeTab === 'travel' && (
          <div className="space-y-8">
            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Add New Travel Photo</h2>
              <form onSubmit={handleAddTravelPhoto} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Photo Title"
                    value={newTravelPhoto.title}
                    onChange={(e) => setNewTravelPhoto({ ...newTravelPhoto, title: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={newTravelPhoto.alt}
                    onChange={(e) => setNewTravelPhoto({ ...newTravelPhoto, alt: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  value={newTravelPhoto.description}
                  onChange={(e) => setNewTravelPhoto({ ...newTravelPhoto, description: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 h-24"
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Upload Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleTravelPhotoUpload}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                  />
                  {newTravelPhoto.src && (
                    <div className="mt-2">
                      <img src={newTravelPhoto.src} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                    </div>
                  )}
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">Save Travel Photo</button>
              </form>
            </div>

            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Existing Travel Photos ({travelPhotos.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelPhotos.length === 0 && <p className="text-gray-400 col-span-full">No photos yet.</p>}
                {travelPhotos.map((photo) => (
                  <div key={photo.id} className="p-4 bg-[#0f274b] rounded-lg">
                    <img src={photo.src} alt={photo.alt} className="w-full h-32 object-cover rounded-lg mb-2" />
                    <h3 className="font-semibold text-white mb-1">{photo.title}</h3>
                    <p className="text-xs text-gray-300 mb-2">{photo.alt}</p>
                    <p className="text-sm text-gray-400 mb-2">{photo.description}</p>
                    <button onClick={() => handleDeleteTravelPhoto(photo.id)} className="text-red-400 hover:text-red-200 text-sm">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="space-y-8">
            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Add New Certification</h2>
              <form onSubmit={handleAddCertification} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Certification Title"
                    value={newCertification.title}
                    onChange={(e) => setNewCertification({ ...newCertification, title: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Issuing Organization"
                    value={newCertification.issuer}
                    onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Date (e.g., 2023)"
                    value={newCertification.date}
                    onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  value={newCertification.description}
                  onChange={(e) => setNewCertification({ ...newCertification, description: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 h-24"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Thumbnail Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                      className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                    {newCertification.thumbnail && (
                      <img src={newCertification.thumbnail} alt="Thumbnail preview" className="w-16 h-16 object-cover rounded" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Full Certificate Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFullImageUpload}
                      className="w-full p-3 rounded-lg bg-[#0f274b] border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                    {newCertification.fullImage && (
                      <img src={newCertification.fullImage} alt="Full image preview" className="w-32 h-16 object-cover rounded" />
                    )}
                  </div>
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg">Save Certification</button>
              </form>
            </div>

            <div className="bg-[#0b1f41] p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold mb-4">Existing Certifications ({certifications.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.length === 0 && <p className="text-gray-400 col-span-full">No certifications yet.</p>}
                {certifications.map((cert) => (
                  <div key={cert.id} className="p-4 bg-[#0f274b] rounded-lg">
                    {cert.thumbnail && (
                      <img src={cert.thumbnail} alt={cert.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                    )}
                    <h3 className="font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-xs text-blue-300 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 mb-2">{cert.date}</p>
                    <p className="text-sm text-gray-300 mb-2">{cert.description}</p>
                    <button onClick={() => handleDeleteCertification(cert.id)} className="text-red-400 hover:text-red-200 text-sm">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Content Management System</h1>
        <p className="text-gray-300 mb-6">Manage all your website content from here.</p>
      </div>
    </div>
  );
}
