'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TravelPhoto } from '@/types';

const travelExperiences = [
  {
    title: 'Temple Journeys Across India',
    description: 'Embarking on sacred pilgrimages to ancient temples, seeking spiritual wisdom and cultural understanding. Each temple visit offers insights into India\'s rich spiritual heritage and architectural marvels.',
    location: 'Various locations across India'
  },
  {
    title: 'Mountain Reflections',
    description: 'Finding peace and perspective in the Himalayas, where the majesty of nature provides clarity and inspiration. These journeys remind me of the importance of mindfulness and presence.',
    location: 'Himalayan regions'
  },
  {
    title: 'Spiritual Travel Experiences',
    description: 'Connecting with sacred sites and holy places that have shaped India\'s spiritual landscape for millennia. These experiences deepen my understanding of inner peace and universal truths.',
    location: 'Sacred sites throughout India'
  }
];

export default function TravelPage() {
  const [travelPhotos, setTravelPhotos] = useState<TravelPhoto[]>([]);

  useEffect(() => {
    // Load travel photos from localStorage
    const saved = localStorage.getItem('abhijeetonline_travel_photos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setTravelPhotos(parsed);
        }
      } catch (error) {
        console.error('Failed to load travel photos:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Spiritual Travel Experiences
        </h1>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          My journey through India's sacred landscapes has been a profound exploration of spirituality, culture, and inner peace. Each destination carries stories of devotion, wisdom, and the eternal quest for meaning.
        </p>

        {/* Travel Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {travelExperiences.map((experience, index) => (
            <div key={index} className="bg-[#0b1f41] rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{experience.title}</h3>
              <p className="text-blue-300 text-sm mb-2">{experience.location}</p>
              <p className="text-gray-300 leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>

        {/* Travel Photos Gallery */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Travel Gallery</h2>
        {travelPhotos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelPhotos.map((photo) => (
              <div key={photo.id} className="bg-[#0b1f41] rounded-lg overflow-hidden shadow-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="relative h-64 bg-[#041d3b]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020a1f]/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{photo.title}</h3>
                  <p className="text-blue-300 text-sm mb-2">{photo.alt}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Travel photos will be displayed here once added through the admin panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}