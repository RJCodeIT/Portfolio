'use client';

import { services } from '../const/services';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const captions = ["Web Applications", "Websites", "Progressive Web Apps", "API Integrations"];

export default function ServicesContainer() {
  return (
    <section id="services" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our range of professional services, tailored to bring your ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={<Image src={service.icon} alt={service.title} width={40} height={40} className="dark:invert" />}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              caption={captions[index]}
            />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Have a project in mind? Let&apos;s bring it to life!
          </h3>
          <Link href="#contact">
            <Button variant="primary" size="lg" className="font-medium">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
