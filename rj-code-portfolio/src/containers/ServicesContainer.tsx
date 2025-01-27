'use client';

import { FaReact, FaCode, FaMobile, FaPlug } from 'react-icons/fa';
import { services } from '../const/services';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import Link from 'next/link';

const iconMap = {
  FaReact: <FaReact />,
  FaCode: <FaCode />,
  FaMobile: <FaMobile />,
  FaPlug: <FaPlug />,
};

const colors = ['bg-green-500', 'bg-blue-500', 'bg-red-500', 'bg-yellow-500'];

export default function ServicesContainer() {
  return (
    <section id="services" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our range of professional services, tailored to bring your ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={iconMap[service.icon as keyof typeof iconMap]}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Have a project in mind? Let&apos;s bring it to life!
          </h3>
          <Link href="#contact">
            <Button variant="primary" size="lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
