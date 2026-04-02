import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Music - Abhijeet Kumar Patro',
  'Explore Abhijeet\'s journey in music learning and teaching, focusing on guitar and the discipline of musical thinking.',
  '/music'
);

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Music Journey
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">Guitar Learning Journey</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My musical journey began with the guitar, a instrument that has taught me patience, precision, and the beauty of structured creativity. Through self-learning and dedicated practice, I've developed skills in acoustic guitar playing, focusing on fingerstyle techniques and music theory.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Music has become more than a hobby—it's a discipline that enhances my analytical thinking and problem-solving abilities, qualities that translate directly to my work in banking technology and system design.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">Teaching Experience</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sharing musical knowledge with others has been incredibly rewarding. I've had the opportunity to teach guitar basics to beginners, helping them understand music theory, develop proper technique, and build confidence in their musical abilities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">Music as Structured Thinking</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Music represents structured thinking in its purest form. Every note, chord progression, and rhythm follows mathematical precision and emotional logic. This discipline has profoundly influenced how I approach complex banking systems, fraud analytics, and platform design—always seeking harmony between technical requirements and user experience.
          </p>
          <div className="bg-[#0b1f41] p-6 rounded-lg border border-blue-500/20">
            <p className="text-blue-200 font-medium">
              "Just as a musical composition requires balance between melody, harmony, and rhythm, successful banking platforms demand equilibrium between security, usability, and performance."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}