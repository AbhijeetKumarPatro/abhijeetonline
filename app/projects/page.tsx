import { generateSEO } from '@/lib/seo';
import { Project } from '@/types';

export const metadata = generateSEO(
  'Projects - Abhijeet Kumar Patro',
  'Explore enterprise banking initiatives, platform building projects, and personal learning journeys in cards, payments, and fraud analytics.',
  '/projects'
);

const projects: Project[] = [
  // Enterprise Banking Initiatives
  {
    title: 'Commercial Cards Lifecycle Improvements',
    description: 'Led optimization of commercial card issuance, management, and lifecycle processes across Citi ecosystem, resulting in improved operational efficiency and customer experience.',
    category: 'Enterprise Banking Initiatives'
  },
  {
    title: 'Fraud Analytics Modeling',
    description: 'Developed statistical models for Fraud Early Warning System, implementing advanced analytics to detect and prevent fraudulent activities in real-time.',
    category: 'Enterprise Banking Initiatives'
  },
  {
    title: 'VisionPlus Integrations',
    description: 'Enhanced VisionPlus ecosystem with new integrations and workflow improvements, supporting seamless card processing and management.',
    category: 'Enterprise Banking Initiatives'
  },
  {
    title: 'CitiManager Enhancements',
    description: 'Implemented key improvements to CitiManager platform, focusing on user experience, performance optimization, and feature enhancements.',
    category: 'Enterprise Banking Initiatives'
  },
  // Platform Building Initiatives
  {
    title: 'LetsLearnBanking.com',
    description: 'Building a comprehensive thought leadership platform covering Cards, Payments, Core Banking Foundations, Fraud Prevention, and AI in Banking. A gateway for banking professionals and enthusiasts.',
    category: 'Platform Building Initiatives',
    link: process.env.NEXT_PUBLIC_LETSLEARNBANKING_URL
  },
  // Personal Learning Initiatives
  {
    title: 'Guitar Learning Journey',
    description: 'Self-taught guitarist focusing on acoustic and fingerstyle techniques, with emphasis on music theory and composition.',
    category: 'Personal Learning Initiatives'
  },
  {
    title: 'Knowledge Sharing Platform',
    description: 'Creating educational content and platforms to democratize banking knowledge and share industry insights with the community.',
    category: 'Personal Learning Initiatives'
  }
];

export default function ProjectsPage() {
  const categories = ['Enterprise Banking Initiatives', 'Platform Building Initiatives', 'Personal Learning Initiatives'];

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Projects & Initiatives
        </h1>

        {categories.map((category) => (
          <section
            key={category}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-blue-200 mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .filter(project => project.category === category)
                .map((project) => (
                  <div
                    key={project.title}
                    className="bg-[#0c1f44] p-6 rounded-lg shadow-sm border border-blue-500/20 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 font-medium"
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}