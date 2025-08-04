
import { JSX } from "react";
import { FaHeart, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { RiShipFill } from "react-icons/ri";

export default function WhySection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold md:font-extrabold md:text-center mb-4">Why Choose Belitong Adventure</h2>
        <p className="md:text-center text-gray-700 mb-4">
          We are dedicated to provide the best experience around Belitong Island.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 md:py-16 md:mt-8">
          {whyData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg">
              <div className="p-6 w-full h-full rounded-lg border border-primary hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300">
                <span className="bg-primary/30 p-3 rounded-full inline-flex items-center justify-center">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2 font-bold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type WhyDataItem = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

export const whyData: WhyDataItem[] = [
  {
    id: 1,
    icon: <RiShipFill className="w-10 h-10 text-primary" />,
    title: "Modern Fleet",
    description: "Our boats are well-maintained and equipped with safety features for a comfortable journey."
  },
  {
    id: 2,
    icon: <FaUserTie className="w-10 h-10 text-primary" />,
    title: "Expert Guides",
    description: "Our experienced local guides know all the best spots and will ensure you have an amazing time."
  },
  {
    id: 3,
    icon: <FaShieldAlt className="w-10 h-10 text-primary" />,
    title: "Safety First",
    description: "We prioritize your safety with trained staff and well-equipped boats."
  },
  {
    id: 4,
    icon: <FaHeart className="w-10 h-10 text-primary" />,
    title: "Personalized Service",
    description: "We tailor each trip to meet your preferences and ensure a memorable experience."
  }
];