'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
export default function ContactUs() {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-2">Contact Us</h2>
        <p className="text-lg text-gray-600">Have questions or need more information? Get in touch with our team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Send Message Form */}
        <div className="border border-primary rounded-lg p-8">
          <h3 className="text-xl font-extrabold mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input type="email" className="w-full border rounded px-3 py-2 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea rows={5} className="w-full border rounded px-3 py-2 focus:outline-none"></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-primary hover:bg-teal-700 text-white px-6 py-2 rounded"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="border border-primary rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary w-12 h-12 p-3 bg-[#4D918F]/35 rounded-full" />
              <div className='max-w-md'>
                <h4 className="font-bold">Address</h4>
                <p>Jl. Hayati Mahim No. 07, Pangkal Lalang, Kec. Tanjung Pandan, Kabupaten Belitung, Kepulauan Bangka Belitung</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary w-12 h-12 p-3 bg-[#4D918F]/35 rounded-full" />
              <div>
                <h4 className="font-bold">Phone</h4>
                <p>+62 821 7832 4818</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary w-12 h-12 p-3 bg-[#4D918F]/35 rounded-full" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p>zahfir1000@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-primary w-12 h-12 p-3 bg-[#4D918F]/35 rounded-full" />
              <div>
                <h4 className="font-bold">Office Hours</h4>
                <p>Monday - Friday: 08.00 - 18.00 <br /> Saturday - Sunday: 09.00 - 16.00</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
