import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'About - Abhijeet Kumar Patro',
  'Learn about Abhijeet Kumar Patro\'s professional background in Banking and Financial Services, specializing in Cards domain, payments, and fraud analytics.',
  '/about'
);

export default function About() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About Me
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">Professional Summary</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Abhijeet Kumar Patro is a Senior Business Analyst with 5+ years of experience in Banking and Financial Services specializing in the Cards domain with strong working knowledge of payment platforms and fraud analytics systems. He has contributed to enterprise banking initiatives across Citi, FIS Global, Hexaware, and Happiest Minds supporting card lifecycle optimization, onboarding workflows, credit risk processes, and fraud prevention platforms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-200 mb-6">Personal Identity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Traveler', description: 'Exploring spiritual destinations and cultural experiences across India' },
              { title: 'Music Learner & Teacher', description: 'Passionate about guitar and sharing musical knowledge' },
              { title: 'Platform Builder', description: 'Creating educational platforms like LetsLearnBanking.com' },
              { title: 'Knowledge-Sharing Mindset', description: 'Committed to democratizing banking education and insights' },
              { title: 'Technology-Driven Banking Enthusiast', description: 'Bridging traditional banking with modern technology solutions' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0b1f41] p-6 rounded-lg shadow-sm border border-blue-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}