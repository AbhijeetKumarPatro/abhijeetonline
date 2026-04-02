import { motion } from 'framer-motion';
import { generateSEO } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';

export const metadata = generateSEO(
  'Contact - Abhijeet Kumar Patro',
  'Get in touch with Abhijeet Kumar Patro for discussions on cards, payments, fraud analytics, and banking technology.',
  '/contact'
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#0b1f41] p-8 rounded-lg shadow-sm border border-blue-500/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Other Ways to Connect</h2>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#0b1f41] rounded-lg hover:bg-[#0f2549] transition-colors border border-green-500/20"
                >
                  <div className="text-green-400 text-2xl mr-4">💬</div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <p className="text-gray-300">Quick chat and discussions</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/abhijeetpatro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#0b1f41] rounded-lg hover:bg-[#0f2549] transition-colors border border-blue-500/20"
                >
                  <div className="text-blue-400 text-2xl mr-4">💼</div>
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-300">Professional networking</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <p className="text-gray-300 mb-4">
                Connect with me on social media for updates, insights, and discussions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://twitter.com/abhijeetpatro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-[#0b1f41] rounded-lg hover:bg-[#0f2549] transition-colors border border-gray-600/20"
                >
                  <div className="text-blue-400 text-xl mr-3">🐦</div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Twitter</h4>
                    <p className="text-gray-400 text-xs">@abhijeetpatro</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/abhijeetpatro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-[#0b1f41] rounded-lg hover:bg-[#0f2549] transition-colors border border-gray-600/20"
                >
                  <div className="text-pink-400 text-xl mr-3">📷</div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Instagram</h4>
                    <p className="text-gray-400 text-xs">@abhijeetpatro</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@abhijeetpatro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-[#0b1f41] rounded-lg hover:bg-[#0f2549] transition-colors border border-gray-600/20"
                >
                  <div className="text-red-500 text-xl mr-3">📺</div>
                  <div>
                    <h4 className="font-medium text-white text-sm">YouTube</h4>
                    <p className="text-gray-400 text-xs">@abhijeetpatro</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with insights on cards, payments, fraud prevention, and banking technology.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#0b1f41] text-white placeholder-gray-400"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}