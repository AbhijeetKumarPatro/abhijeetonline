'use client';

import { useEffect, useState } from 'react';
import { Experience } from '@/types';

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // Load experiences from localStorage
    const saved = localStorage.getItem('abhijeetonline_experiences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setExperiences(parsed);
        }
      } catch (error) {
        console.error('Failed to load experiences:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Professional Experience
        </h1>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Over 4+ years in Banking and Financial Services, specializing in Cards domain, payments platforms, and fraud analytics. My journey spans from business analysis to platform building, with a focus on driving digital transformation in the BFSI sector.
        </p>

        {experiences.length > 0 ? (
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-[#0b1f41] rounded-lg p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{experience.role}</h2>
                    <h3 className="text-xl text-blue-300 mb-2">{experience.company}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-medium">{experience.period}</p>
                    {experience.location && (
                      <p className="text-gray-400 text-sm">{experience.location}</p>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Professional experiences will be displayed here once added through the admin panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}