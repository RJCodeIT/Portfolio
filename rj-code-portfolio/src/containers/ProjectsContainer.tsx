"use client";

import Image from "next/image";
import { projects } from "../const/projects";
import { PinContainer } from "../components/ui/Pin";
import Button from "../components/ui/Button";

export default function ProjectsContainer() {
  return (
    <section id="projects">
      <div className="relative py-32 container mx-auto px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="text-center mb-32">
          <h2 className="text-5xl font-bold mb-6 text-white">Our Latest Work</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the projects we&apos;ve built to empower businesses with cutting-edge web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[95%] mx-auto">
          {projects.map((item) => (
            <div
              className="min-h-[35rem] w-full transform transition-all duration-300 hover:scale-[1.02]"
              key={item.id}
            >
              <PinContainer
                title={item.title}
                href={item.link}
                className="w-full backdrop-blur-sm bg-opacity-10"
                containerClassName="w-full"
              >
                <div className="relative flex items-center justify-center w-full overflow-hidden h-[28vh] lg:h-[38vh] mb-12">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl flex items-center justify-center bg-[#0B0F1D]"
                  >
                    <Image 
                      src="/bg.png" 
                      alt="bgimg"
                      fill
                      className="object-cover opacity-40"
                      priority
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    width={400}
                    height={300}
                    className="z-10 absolute bottom-0 drop-shadow-2xl"
                    priority
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        style={{
                          zIndex: item.iconLists.length - index,
                          marginLeft: index > 0 ? '-12px' : '0',
                        }}
                      >
                        <div className="w-14 h-14 rounded-full bg-[#0B0F1D] flex items-center justify-center aspect-square border border-white/5">
                          <Image 
                            src={icon} 
                            alt={`technology-${index}`}
                            width={35}
                            height={35}
                            className="p-1"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center group">
                    <p className="flex lg:text-xl md:text-xs text-sm text-white group-hover:text-cyan-400 transition-colors">
                      Check Live Site
                    </p>
                    <div className="relative ml-2 w-6 h-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="url(#arrow-gradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="arrow-gradient" x1="7" y1="7" x2="17" y2="17" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F46E5" />
                            <stop offset="1" stopColor="#22D3EE" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-400 mb-6">
            Want to collaborate with us? Let&apos;s bring your ideas to life!
          </p>
          <Button variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};