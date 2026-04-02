'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Certification } from '@/types';

const certifications: Certification[] = [];

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    // Load certifications from localStorage
    const saved = localStorage.getItem('abhijeetonline_certifications');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCertifications(parsed);
        }
      } catch (error) {
        console.error('Failed to load certifications:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Professional Certifications
        </h1>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Continuous learning and professional development are key to staying ahead in the rapidly evolving field of banking technology and business analysis. Here are my key certifications that validate my expertise.
        </p>

        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#0b1f41] rounded-lg overflow-hidden shadow-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48 bg-[#041d3b] flex items-center justify-center">
                  {cert.thumbnail ? (
                    <Image
                      src={cert.thumbnail}
                      alt={cert.title}
                      width={200}
                      height={120}
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">No thumbnail</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020a1f]/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    Click to view full certificate →
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Certifications will be displayed here once added through the admin panel.</p>
          </div>
        )}

        {/* Modal for full certificate view */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
            <div className="relative max-w-4xl max-h-[90vh] bg-[#0b1f41] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b border-blue-500/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedCert.title}</h2>
                    <p className="text-blue-300 mt-1">{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-white text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6 flex justify-center">
                {selectedCert.fullImage ? (
                  <Image
                    src={selectedCert.fullImage}
                    alt={`${selectedCert.title} - Full Certificate`}
                    width={800}
                    height={600}
                    className="object-contain max-w-full max-h-[60vh]"
                  />
                ) : (
                  <div className="text-gray-500">No full image available</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
    <div className="min-h-screen bg-[#020a1f] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Professional Certifications
        </h1>

        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Continuous learning and professional development are key to staying ahead in the rapidly evolving field of banking technology and business analysis. Here are my key certifications that validate my expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0b1f41] rounded-lg overflow-hidden shadow-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48 bg-[#041d3b] flex items-center justify-center">
                <Image
                  src={cert.thumbnail}
                  alt={cert.title}
                  width={200}
                  height={120}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020a1f]/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-300 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Click to view full certificate →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full certificate view */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
            <div className="relative max-w-4xl max-h-[90vh] bg-[#0b1f41] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b border-blue-500/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedCert.title}</h2>
                    <p className="text-blue-300 mt-1">{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-white text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6 flex justify-center">
                <Image
                  src={selectedCert.fullImage}
                  alt={`${selectedCert.title} - Full Certificate`}
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-[60vh]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
