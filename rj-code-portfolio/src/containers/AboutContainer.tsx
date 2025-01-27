'use client';
import React, { JSX } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';
import { Tooltip } from '../components/ui/Tooltip';
import Button from "../components/ui/Button";

interface TechItem {
  name: string;
  icon: JSX.Element;
  description: string;
}

export default function AboutContainer() {
  const technologies: TechItem[] = [
    { name: 'React', icon: <FaReact className="text-4xl text-[#61DAFB]" />, description: 'A library for building user interfaces' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" />, description: 'The React Framework for Production' },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />, description: 'The language of the web' },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-[#3178C6]" />, description: 'Typed JavaScript at Any Scale' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-[#339933]" />, description: 'JavaScript runtime built on Chrome\'s V8 engine' },
    { name: 'Express', icon: <SiExpress className="text-4xl text-black" />, description: 'Fast, unopinionated web framework for Node.js' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-[#47A248]" />, description: 'The most popular NoSQL database' },
    { name: 'MS SQL Server', icon: <FaDatabase className="text-4xl text-[#CC2927]" />, description: 'Enterprise-grade relational database management system' },
  ];

  return (
    <section id="about" className="relative min-h-screen py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative space-y-20">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Who We Are
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get to know RJ Code IT – a team dedicated to building innovative web solutions tailored to your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-20">
          <div className="backdrop-blur-sm rounded-3xl p-10 border border-white/10 bg-white/5 h-full">
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-6 text-white">Your Trusted Partner in Web Development</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                At RJ Code IT, we specialize in crafting high-quality web applications and websites. 
                Our goal is to empower businesses with tailored solutions built using modern technologies. 
                We value innovation, collaboration, and delivering results that exceed expectations.
              </p>
            </div>
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-white">Why Work With Us?</h3>
              <ul className="space-y-8">
                {[
                  { title: 'Experienced Team', desc: 'Years of expertise in building scalable and efficient web solutions.' },
                  { title: 'Modern Tools', desc: 'We leverage the latest technologies to deliver cutting-edge products.' },
                  { title: 'Customer-Centric Approach', desc: 'We listen, adapt, and create solutions that fit your unique needs.' },
                  { title: 'End-to-End Services', desc: 'From design to deployment – we&apos;ve got you covered.' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-xl text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-lg">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="backdrop-blur-sm rounded-3xl p-10 border border-white/10 bg-white/5 h-full">
            <h3 className="text-3xl font-bold mb-6 text-white">Our Tools & Technologies</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We rely on a robust tech stack to deliver reliable and efficient solutions for our clients. 
              Here&apos;s what we work with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group"
                >
                  <Tooltip content={tech.description}>
                    <div className="flex flex-col items-center p-6 backdrop-blur-sm rounded-2xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:scale-105 hover:-translate-y-1">
                      <div className="mb-4">
                        {tech.icon}
                      </div>
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl mb-8 text-gray-400">
            Want to work with a team you can trust? Let&apos;s make your vision a reality!
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}