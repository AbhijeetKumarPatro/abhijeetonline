import { generateSEO } from '@/lib/seo';
import Image from 'next/image';

export const metadata = generateSEO(
  'Travel - Abhijeet Kumar Patro',
  'Discover Abhijeet\'s spiritual travel experiences across India, from temple journeys to mountain reflections.',
  '/travel'
);

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

const travelPhotos = [
  {
    id: 1,
    src: '/travel1.svg',
    alt: 'Ancient temple in India',
    title: 'Sacred Temple Visit',
    description: 'A serene moment at one of India\'s ancient temples, where spirituality meets architectural beauty.'
  },
  {
    id: 2,
    src: '/travel2.svg',
    alt: 'Himalayan mountains',
    title: 'Himalayan Serenity',
    description: 'Finding peace in the majestic Himalayas, a place of reflection and spiritual renewal.'
  },
  {
    id: 3,
    src: '/travel3.svg',
    alt: 'Spiritual site in India',
    title: 'Spiritual Journey',
    description: 'Exploring sacred sites that have been centers of devotion for centuries.'
  },
  {
    id: 4,
    src: '/travel4.svg',
    alt: 'Cultural experience',
    title: 'Cultural Immersion',
    description: 'Connecting with local traditions and experiencing the rich cultural tapestry of India.'
  }
];

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Travel Experiences
        </h1>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Travel is not just about visiting places—it's about discovering oneself. My journeys across India have been deeply spiritual, offering moments of reflection, cultural immersion, and profound insights.
        </p>

        <div className="space-y-8">
          {travelExperiences.map((experience) => (
            <div
              key={experience.title}
              className="bg-[#0b1f41] p-8 rounded-lg shadow-sm border border-blue-500/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">{experience.title}</h2>
              <p className="text-sm text-blue-300 mb-4">{experience.location}</p>
              <p className="text-gray-300 leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Travel Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {travelPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-[#0b1f41] rounded-lg overflow-hidden shadow-sm border border-blue-500/20 hover:border-blue-400/40 transition-colors"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{photo.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#0b1f41] p-8 rounded-lg border border-blue-500/20">
          <h2 className="text-2xl font-semibold text-white mb-4">The Essence of Travel</h2>
          <p className="text-gray-300 leading-relaxed">
            In the sacred spaces of temples and the serene heights of mountains, I find parallels to my professional journey. Just as travel requires preparation, adaptability, and an open mind, so does navigating the complex world of banking technology and fraud prevention. Each destination teaches patience, cultural sensitivity, and the value of different perspectives—qualities essential for building inclusive financial systems.
          </p>
        </div>
      </div>
    </div>
  );
}