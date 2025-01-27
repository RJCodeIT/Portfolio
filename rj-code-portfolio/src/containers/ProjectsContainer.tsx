"use client";

import Image from "next/image";
import { projects } from "../const/projects";
import { PinContainer } from "../components/ui/Pin";
import Button from "../components/ui/Button";

export default function ProjectsContainer() {
  return (
    <section id="projects">
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold mb-4">Our Latest Work</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the projects we&apos;ve built to empower businesses with cutting-edge web solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90%] mx-auto">
        {projects.map((item) => (
          <div
            className="min-h-[32rem] w-full"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
              className="w-full"
              containerClassName="w-full"
            >
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[25vh] lg:h-[35vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl flex items-center justify-center"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image 
                    src="/bg.png" 
                    alt="bgimg"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={400}
                  height={300}
                  className="z-10 absolute bottom-0"
                  priority
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
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
                      <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center aspect-square">
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

                <div className="flex items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <Image
                    src="/LocationArrow.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="ml-2"
                  />
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