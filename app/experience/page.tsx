import { generateSEO } from '@/lib/seo';
import { Experience } from '@/types';

export const metadata = generateSEO(
  'Experience - Abhijeet Kumar Patro',
  'Professional experience in Banking and Financial Services, specializing in Cards domain, payments platforms, and fraud analytics.',
  '/experience'
);

const experiences: Experience[] = [
  {
    company: 'Happiest Minds',
    role: 'Senior Business Analyst',
    period: '2023 - Present',
    achievements: [
      'BFSI presales initiatives supporting strategic business development',
      'Solution strategy creation for enterprise banking clients',
      'Arttha banking platform exposure and implementation support',
      'Domain training delivery for banking technology solutions'
    ]
  },
  {
    company: 'The Math Company (Citi Engagement)',
    role: 'Senior Associate Business Analyst',
    period: '2021 - 2023',
    achievements: [
      'Commercial cards lifecycle optimization across Citi ecosystem',
      'VisionPlus ecosystem enhancements and integration support',
      'CitiManager improvements for operational efficiency',
      'Credit risk workflow alignment and process optimization',
      'KYC onboarding improvements for enhanced compliance',
      'Fraud Early Warning System statistical modeling and implementation',
      'UAT leadership for critical banking system releases'
    ]
  },
  {
    company: 'FIS Global',
    role: 'Senior Analyst',
    period: '2020 - 2021',
    achievements: [
      'SecurLOCK Equip fraud platform lifecycle ownership',
      'Agile delivery coordination for fraud prevention solutions',
      '25% overhead reduction through process optimization',
      '15% throughput improvement in fraud detection systems'
    ]
  },
  {
    company: 'Hexaware Technologies (Citi Engagement)',
    role: 'Business Analyst',
    period: '2019 - 2020',
    achievements: [
      'Commercial cards ecosystem enhancements',
      'SWIFT and SEPA payment system exposure',
      'Customer onboarding workflow improvements',
      'Regression testing framework development and implementation',
      'Fraud analytics contributions and system enhancements'
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Professional Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-white p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-200">{exp.company}</h2>
                  <h3 className="text-lg text-blue-300 font-medium">{exp.role}</h3>
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Commercial Cards Lifecycle',
              'Cards Platform Enhancements',
              'Payment Systems Knowledge',
              'Fraud Analytics Platforms',
              'Credit Risk Workflow Optimization',
              'Customer Onboarding (KYC)',
              'VisionPlus Exposure',
              'CitiManager Enhancements',
              'Retail Banking Fraud Prevention',
              'Agile Delivery Support',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-[#0c1f44] p-4 rounded-lg text-center"
              >
                <span className="text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}