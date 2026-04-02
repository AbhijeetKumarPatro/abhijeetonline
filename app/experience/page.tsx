import { generateSEO } from '@/lib/seo';
import { Experience } from '@/types';

export const metadata = generateSEO(
  'Experience - Abhijeet Kumar Patro',
  'Professional experience in Banking and Financial Services, specializing in Cards domain, payments platforms, and fraud analytics.',
  '/experience'
);

const experiences: Experience[] = [
  {
    company: 'The Math Company',
    role: 'Product Manager - Senior Associate',
    period: 'Sep 2022 — Jun 2023',
    location: 'Bangalore',
    achievements: [
      'Led product initiatives for Co.dx platform in Banking & Financial Services (Low Code BI platform).',
      'Enhanced UI/UX, feature functionality and enterprise banking capabilities with minimal coding workflow.',
      'Collected and analyzed stakeholder requirements, and owned BRD/FRD/PRD and user story documentation.',
      'Managed and mentored a 15-member team; improved delivery practices and reduced development cycles by 15%.',
      'Built payment analytics and NER-based insight chatbot solutions for transaction pattern analysis and fraud detection.',
      'Coordinated product launches with sales, onboarding, marketing and support for end-to-end banking solutions.'
    ]
  },
  {
    company: 'FIS Global',
    role: 'Product Manager - Senior Analyst',
    period: 'Apr 2021 — Sep 2022',
    location: 'Chennai',
    achievements: [
      'Owned SecurLOCK Equip retail banking fraud management product from concept to delivery.',
      'Improved agile processes, resulting in 25% reduction in project overhead and 15% throughput gain.',
      'Facilitated cross-functional coordination between development, QA, support and product teams.',
      'Drove customer-facing product enhancements for fraud and credit risk mitigation based on user feedback.',
      'Supported customer inquiries with deep domain knowledge in retail banking fraud prevention.',
      'Ensured consistent delivery of product objectives and high-quality release execution.'
    ]
  },
  {
    company: 'Hexaware Technologies',
    role: 'Software Engineer (Citi bank Global)',
    period: 'Feb 2018 — Nov 2020',
    location: 'Chennai',
    achievements: [
      'Worked on Commercial Cards and Payments domain focusing on Card Life Cycle and Credit Risk management.',
      'Led improvements to CitiManager application, ensuring SWIFT/SEPA compliance and onboarding efficiency.',
      'Collaborated with cross-functional teams, managed sprint backlogs and conducted regression testing.',
      'Implemented UAT processes and created product enhancements to optimize operational efficiency.',
      'Developed advanced statistical models for fraud early warning and improved customer onboarding compliance.'
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
              className="bg-[#0b1f41] p-8 rounded-lg shadow-sm border border-blue-500/20"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-200">{exp.company}</h2>
                  <h3 className="text-lg text-blue-300 font-medium">{exp.role}</h3>
                  {exp.location && <p className="text-sm text-gray-500 mt-1">{exp.location}</p>}
                </div>
                <span className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.period}</span>
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