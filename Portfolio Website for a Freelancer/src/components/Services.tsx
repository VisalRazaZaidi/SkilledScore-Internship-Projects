import React, { type JSX } from "react";
import { FaPaintBrush, FaMobileAlt, FaBoxOpen, FaPenNib, FaPhotoVideo, FaLayerGroup } from "react-icons/fa";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaPaintBrush size={32} />,
    title: "Brand Identity Design",
    description: "Creating unique brand visuals including logo, color palette, and brand guidelines.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful interfaces for web and mobile apps.",
  },
  {
    icon: <FaBoxOpen size={32} />,
    title: "Packaging Design",
    description: "Designing creative and appealing product packaging that stands out.",
  },
  {
    icon: <FaPenNib size={32} />,
    title: "Print Design",
    description: "Flyers, posters, brochures, and all kinds of high-quality print media.",
  },
  {
    icon: <FaPhotoVideo size={32} />,
    title: "Social Media Graphics",
    description: "Designing engaging visuals for social media platforms and digital marketing.",
  },
  {
    icon: <FaLayerGroup size={32} />,
    title: "Illustration & Icon Design",
    description: "Custom vector illustrations and icon sets for brands or apps.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">My Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
