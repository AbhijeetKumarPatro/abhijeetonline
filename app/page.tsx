import Link from 'next/link';
import Image from 'next/image';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO(
  'Abhijeet Kumar Patro - Senior Business Analyst | Cards & Payments Expert',
  'Senior Business Analyst specializing in Cards domain, Payments platforms, and Fraud analytics. Helping organizations design smarter card lifecycle solutions.',
  '/'
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white">
      {/* LetsLearnBanking Banner */}
      <div className="bg-gradient-to-r from-[#04386c] to-[#0f5b98] text-white text-center py-3">
        <p className="text-lg font-semibold">
          🚀 Building{' '}
          <a
            href={process.env.NEXT_PUBLIC_LETSLEARNBANKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#ffd966]"
          >
            LetsLearnBanking.com
          </a>
        </p>
        <p className="text-sm mt-1 text-gray-200">
          Thought leadership platform on Cards, Payments, Core Banking Foundations, Fraud Prevention, AI in Banking
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(60,_161,_252,_0.4),_transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto gap-10 grid lg:grid-cols-2 items-center">
          <div>
  
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="text-[#62c7ff]">Abhijeet Kumar Patro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Senior Business Analyst | Cards Domain Specialist | Payments Professional | Product Thinker
            </p>
            <p className="text-gray-200 leading-relaxed mb-8 max-w-xl">
              Helping organizations design smarter card lifecycle solutions, strengthen fraud prevention strategies, and enhance payment platform experiences across enterprise banking ecosystems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
              <Link
                href="/experience"
                className="text-center border border-blue-500 text-blue-300 px-5 py-3 rounded-xl hover:bg-blue-500/20 transition"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="text-center border border-blue-500 text-blue-300 px-5 py-3 rounded-xl hover:bg-blue-500/20 transition"
              >
                Projects
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_LETSLEARNBANKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#00b4ff] text-slate-950 px-5 py-3 rounded-xl font-bold hover:bg-[#00c2ff] transition"
              >
                LetsLearnBanking
              </a>
            </div>
          </div>

          <div className="hidden lg:block p-6 rounded-2xl border border-blue-400/30 bg-[#071a37] shadow-lg">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-blue-400/20 bg-[#041d3b]">
              <Image
                src="/profile.jpg"
                alt="Abhijeet Kumar Patro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020a1f]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((expertise) => (
              <article key={expertise} className="bg-[#0c1f44] border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{expertise}</h3>
                <p className="text-sm text-gray-300">Focused on delivering measurable outcomes and scalable solutions for enterprise banking challenges.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
