import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
          <div className='flex flex-col md:items-start'>
            <div className="max-w-xs">
            <h2 className="text-xl font-bold mb-4">Belitong Adventure</h2>
            <p className="mb-4 font-medium leading-relaxed">
              Experience unforgettable boat voyages around the beautiful Belitong Island.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className='flex flex-col md:items-center'>
          <div className="max-w-xs">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Voyages</a></li>
              <li><a href="#" className="hover:underline">Jage Laut</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col md:items-end'>
          <div className="max-w-xs">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaMapMarkerAlt /> Location
          </h2>
          <p className='leading-relaxed'>Jl. Hayati Mahim No. 07, Pangkal Lalang, Kec. Tanjung Pandan, Kabupaten Belitung, Kepulauan Bangka Belitung</p>
        </div>
      </div>
      </div>

      {/* Bottom Copyright */}
      <div className='container'>
        <div className="border-t border-white border-opacity-20 mt-20 pt-4 text-center text-sm">
          &copy; 2025 Belitong Adventure. All rights reserved
        </div>
      </div>
    </footer>
  );
}
