"use client";
import Button from '@/components/ui/Button';

export default function HeroContainer() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-white px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Building Future-Ready Web Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We create modern web applications, PWA, Full Stack Apps and seamless API integrations to help your business grow.
        </p>
        <Button variant="primary" size="lg" onClick={scrollToAbout}>
          See Our Work
        </Button>
      </div>
    </section>
  );
};
