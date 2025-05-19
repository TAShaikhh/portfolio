"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animations/animated-section";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
 <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/95 z-10"></div>

      {/* Animated Particles (simplified with CSS) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-2 w-2 rounded-full bg-[#00A6ED]/30 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-[#00A6ED]/30 top-1/3 right-1/4 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-[#00A6ED]/30 bottom-1/3 left-1/3 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-[#00A6ED]/30 bottom-1/4 right-1/3 animate-pulse"></div>
      </div>

      <div className="container-custom relative z-20 flex-1 flex flex-col justify-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              Hey, I&apos;m{" "}
              <span className="text-[#00A6ED]">
                Umer Shaikh
              </span>
            </h1>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 sm:mb-6 h-[40px] sm:h-[48px]">
              <TypeAnimation
                sequence={[
                  'Software Engineering Student',
                  2000,
                  'Frontend Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                I enjoy building minimalist, user-friendly digital experiences and finding creative ways to solve real problems.
              </p>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="flex flex-wrap gap-3 sm:gap-4 relative">
              <Button
                asChild
                size="default"
                className="h-10 sm:h-11 text-sm sm:text-base bg-[#00A6ED] hover:bg-[#00A6ED]/80 transition-all duration-300"
              >
                <Link href="#experience">
 Experience
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 sm:h-11 text-sm sm:text-base border-[#00A6ED]/20 hover:bg-[#00A6ED]/10 hover:border-[#00A6ED]/30 transition-all duration-300"
              >
                <Link href="#projects">
                  Projects
                </Link>
              </Button>
            </div>
          </AnimatedText>

          {/* Floating elements */}
          <div className="absolute -top-10 right-0 w-64 h-64 bg-[#00A6ED]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -left-10 w-72 h-72 bg-[#00A6ED]/5 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>

 {/* Scroll indicator */}
      <div className="w-full flex justify-center items-center pb-6 sm:pb-8 z-20">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
 onClick={() => {
            document.getElementById('about')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300"
        >
            <span className="text-muted-foreground text-sm sm:text-base opacity-70 sm:opacity-80 hover:opacity-100">Scroll down</span>
          <div className="relative flex items-center justify-center">
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#00A6ED] icon-glow z-10" />
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
