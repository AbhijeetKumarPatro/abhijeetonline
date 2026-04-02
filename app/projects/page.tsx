'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/types';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from localStorage
    const saved = localStorage.getItem('abhijeetonline_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setProjects(parsed);
        }
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    }
  }, []);

  const categories = [
    { id: 'enterprise', title: 'Enterprise Banking Initiatives', description: 'Large-scale banking technology projects and platform enhancements' },
    { id: 'platform', title: 'Platform Building Initiatives', description: 'Digital platforms and tools I\'ve built or contributed to' },
    { id: 'personal', title: 'Personal Learning Initiatives', description: 'Self-directed learning projects and knowledge sharing' }
  ];

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Projects & Initiatives
        </h1>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          A showcase of my work across enterprise banking solutions, platform development, and personal learning journeys. Each project represents a unique challenge and learning opportunity in the evolving landscape of financial technology.
        </p>

        {projects.length > 0 ? (
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryProjects = getProjectsByCategory(category.title);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category.id}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                    <p className="text-gray-400">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryProjects.map((project, index) => (
                      <div key={index} className="bg-[#0b1f41] rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                        {project.technologies && project.technologies.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-600 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Project →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Projects will be displayed here once added through the admin panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}