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
    period: 'Dec 2024 — Present',
    location: 'Bangalore, India',
    achievements: [
      'Led business analysis for SSRS to Microsoft Fabric & Power BI reporting migration, translating legacy report logic into modern semantic models and dashboards.',
      'Collaborated with stakeholders to define business metrics, data mappings, filters, and reporting transformations across Client Admin and Investment reporting suites.',
      'Prepared BRDs, functional documentation, KPI definitions, and report logic decomposition, enabling smooth alignment between business users, data engineers, and platform teams.',
      'Participated in proposal development, client solutioning, and capability articulation for BFSI-focused transformation programs.'
    ]
  },
  {
    company: 'The Math Company',
    role: 'Business Analyst - Senior Associate',
    period: 'Sep 2022 — Jun 2023',
    location: 'Bengaluru, India',
    achievements: [
      'Worked as a key member of the product team supporting Co.dx (Advanced Business Intelligence Low-Code Platform), enabling enterprises to accelerate decision intelligence through analytics-led applications.',
      'Led requirement gathering, stakeholder workshops, and solution articulation for banking and financial services analytics use cases, translating business needs into platform-ready functional workflows.',
      'Contributed to development of domain-aligned analytical solutions and reusable accelerators across risk, operations, and reporting use cases.',
      'Partnered with data engineers, visualization teams, and product stakeholders to define semantic logic, KPIs, and business transformation narratives for enterprise dashboards.',
      'Supported solution design for low-code analytics applications, enabling faster deployment of decision intelligence use cases across BFSI clients.'
    ]
  },
  {
    company: 'FIS Global',
    role: 'Business Analyst - Senior Analyst',
    period: 'Apr 2021 — Sep 2022',
    location: 'Chennai, India',
    achievements: [
      'As an Analyst for SecurLOCK Equip, a retail banking fraud management product, I oversaw the entire project life cycle, from inception to completion.',
      'Prepared structured documentation including BRDs, functional specifications, metric definitions, and workflow decomposition to streamline delivery execution.',
      'Coordinated Development and Testing teams to ensure seamless project execution aligned with objectives.',
      'Implemented agile processes to streamline project workflows, resulting in a notable 25% reduction in project overheads and a 15% increase in project throughput.',
      'Assisted customers with product inquiries by providing information on features and benefits of fraud and credit risk mitigation.',
      'Collaborated closely with product and engineering teams to identify areas for product enhancement based on customer feedback, ensuring continuous improvement.',
      'Enhanced project efficiency and customer satisfaction through targeted improvements, resulting in measurable gains in project outcomes and customer engagement.'
    ]
  },
  {
    company: 'Hexaware Technologies',
    role: 'Business Analyst - Software Engineer',
    period: 'Feb 2018 — Nov 2020',
    location: 'Chennai, India',
    achievements: [
      'As a Business Analyst at CITI bank Global, I led initiatives within the Commercial Cards-Payments domain, focusing on optimizing the Card Life Cycle, VisionPlus System, Enhancing Credit Card management, and integrating payment functionalities into the Citi Manager application.',
      'Collaborated cross-functionally to prioritize product features, aligning with customer needs and business objectives, ensuring maximum value delivery.',
      'Applied practical knowledge of KYC data collection procedures to enhance customer onboarding processes and ensure regulatory compliance.',
      'Developed and maintained functional and regression tests to uphold product quality standards, enhancing user satisfaction and reliability.',
      'Orchestrated user acceptance testing (UAT) sessions to validate product functionality and gather actionable feedback for continuous improvement.',
      'Executed enhancements in CitiManager that improved user experience.',
      'Spearheaded the development of statistical analysis models in the Advanced Fraud Early Warning System contributing to proactive fraud mitigation strategies.',
      'Established robust regression testing procedures, ensuring consistent product quality and reliability with each software release.'
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