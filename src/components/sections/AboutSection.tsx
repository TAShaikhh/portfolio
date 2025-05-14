"use client";

import Section from "../layout/Section";
import { AnimatedImage, AnimatedText } from "@/components/animations/animated-section";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
        <AnimatedImage delay={0.3}>
          <div className="flex justify-center md:justify-start">
            <div className="h-40 w-40 sm:h-60 sm:w-60 rounded-md border-3 sm:border-4 border-[#00A6ED]/30 shadow-[0_0_20px_rgba(0,166,237,0.2)] overflow-hidden">
              <img
                src="/PFP.jpg"
                alt="Umer Shaikh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedImage>

        <div className="md:col-span-2 space-y-3 sm:space-y-4 mt-4 md:mt-0">
          <AnimatedText delay={0.4}>
            <p className="text-base sm:text-lg leading-relaxed">
              Hey, I'm Umer. I enjoy building minimalist, user-friendly digital experiences and finding creative ways to solve real
              problems. I'm pursuing a B.Eng. in Software Engineering at Lassonde School of Engineering.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.5}>
            <p className="text-base sm:text-lg leading-relaxed">
              I love pitch competitions, coming up with ideas, refining them, and sharing them with the world. I'm passionate about creating impactful software solutions and exploring innovative technologies.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:mt-8">
            <AnimatedText delay={0.6}>
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-[#00A6ED]">Skills</h3>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    JavaScript/TypeScript/React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    Python, Java, C++
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    SQL, MongoDB, UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    Embedded Systems, Digital Logic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    Figma, Tableau, Git
                  </li>
                </ul>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.7}>
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-[#00A6ED]">Education</h3>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    B.Eng. Software Engineering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED]"></span>
                    Lassonde School of Engineering
                  </li>
                </ul>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </Section>
  );
}
