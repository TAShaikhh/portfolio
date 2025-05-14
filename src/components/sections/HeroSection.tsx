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
      className="min-h-screen flex flex-col justify-center pb-10 pt-24 relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lake-mountains.jpg"
          alt="Mountain Lake Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/95 z-10"></div>
      </div>

      {/* Animated Particles (simplified with CSS) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-2 w-2 rounded-full bg-blue-500/30 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-purple-500/30 top-1/3 right-1/4 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-indigo-500/30 bottom-1/3 left-1/3 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-cyan-500/30 bottom-1/4 right-1/3 animate-pulse"></div>
      </div>

      <div className="container-custom relative z-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              Hey, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
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
                  'Full-Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                I enjoy building minimalist, user-friendly digital experiences and finding creative ways to solve real problems.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button
                asChild
                size="default"
                className="h-10 sm:h-11 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <Link href="#about" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Learn more about me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 sm:h-11 text-sm sm:text-base border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
              >
                <Link href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get in touch
                </Link>
              </Button>
            </div>
          </AnimatedText>

          {/* Floating elements */}
          <div className="absolute -top-10 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <span className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2 opacity-70 sm:opacity-80">
            Scroll down
          </span>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping"></div>
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 z-10" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
