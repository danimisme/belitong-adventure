'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../Forms/ContactForm';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER 
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS

export default function ContactUs() {
  return (
    <section className=" py-16 bg-gray-100" id="contact">
      <div className='container mx-auto'>
              <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-2">Contact Us</h2>
        <p className="text-lg text-gray-600">Have questions or need more information? Get in touch with our team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Send Message Form */}
        <div className="border border-primary rounded-lg p-8">
          <h3 className="text-xl font-extrabold mb-6">Send us a Message</h3>
          <ContactForm />
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
                <p>{PHONE_NUMBER ? `+${PHONE_NUMBER}` : 'Unavailable'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary w-12 h-12 p-3 bg-[#4D918F]/35 rounded-full" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p>{EMAIL_ADDRESS}</p>
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
      </div>
    </section>
  );
}
