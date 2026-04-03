export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <p>&copy; 2026 Abhijeet Kumar Patro. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/abhijeetpatro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              LinkedIn
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
