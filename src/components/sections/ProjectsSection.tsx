"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "../layout/Section";
import Link from "next/link";
import { ExternalLink, Github, Code, Lightbulb, Calendar, Globe, Cpu, Bot, Wrench, MonitorSmartphone, ChevronDown } from "lucide-react";
import { AnimatedCard } from "@/components/animations/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Project type definition
interface Project {
  title: string;
  description: string;
  summary?: string;
  achievements?: string[];
  technologies: string[];
  github: string | null;
  demo: string | null;
  year: string;
  category: string;
}

// Get icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web App":
      return <Globe className="h-8 w-8" />;
    case "Hardware":
      return <Cpu className="h-8 w-8" />;
    case "IoT":
      return <MonitorSmartphone className="h-8 w-8" />;
    case "Robotics":
      return <Bot className="h-8 w-8" />;
    default:
      return <Wrench className="h-8 w-8" />;
  }
};

// Projects data
const projects: Project[] = [
  {
    title: "FotoFinder",
    description: "Built a full-stack web platform using NextJS and Leaflet allowing photographers to pin, browse, and share scenic locations on an interactive map",
    summary: "Built a location-sharing platform for photographers.",
    achievements: [
      "Developed RESTful APIs using Express.js and FirebaseDB to support secure user authentication, image uploads, and location-based queries",
      "Enabled real-time synchronization of pins and comments via Firebase listeners, enhancing social engagement and interactivity",
      "Designed a fully responsive UI with React, leveraging Context API and React Router for seamless user navigation across devices"
    ],
    technologies: ["NextJS", "React", "FirebaseDB", "ExpressJS"],
    github: "https://github.com/DRusetsk/FotoFinder",
    demo: null,
    year: "2025",
    category: "Web App",
  },
  {
    title: "ReflexRush",
    description: "Designed an FPGA-based reaction time game on DE10-Lite using Verilog and LFSR-driven pseudo-random LED patterns",
    summary: "Developed a Verilog-based reaction time game on FPGA.",
    achievements: [
      "Implemented finite state machines to manage game logic, including input detection, timing analysis, and score tracking",
      "Validated signal flow and game logic through waveform simulation in ModelSim, ensuring correct FPGA behavior pre-deployment",
      "Programmed onboard switches and HEX displays for real-time player interaction and visual output on the FPGA"
    ],
    technologies: ["Verilog", "Quartus Prime", "ModelSim", "FPGA"],
    github: "https://github.com/TAShaikhh/ReflexRush",
    demo: null,
    year: "2025",
    category: "Hardware",
  },
  {
    title: "Portfolio Website",
    description: "Developed a modern, responsive portfolio website using Next.js and Tailwind CSS, featuring interactive sections, smooth animations, and a dark theme with consistent design patterns",
    summary: "Created a personal portfolio with modern UI and smooth animations.",
    achievements: [
      "Implemented custom animations and transitions using Framer Motion for enhanced user experience and visual feedback",
      "Designed a responsive layout with Tailwind CSS, ensuring optimal viewing across desktop, tablet, and mobile devices",
      "Created reusable React components and custom hooks for maintainable and scalable code structure",
      "Integrated dynamic content loading and optimized performance with Next.js server-side rendering"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: null,
    demo: null,
    year: "2024-2025",
    category: "Web App",
  },
  {
    title: "Automated Plant Watering System",
    description: "Developed a smart irrigation system with Arduino and C++ to monitor soil moisture and trigger water delivery, with Java-based UI for monitoring",
    summary: "Created a smart irrigation system with Arduino and Java UI.",
    achievements: [
      "Programmed Arduino to trigger water pumps when soil moisture dropped below defined thresholds, improving irrigation efficiency",
      "Created a Java interface for real-time data monitoring, enhancing system usability and testing",
      "Integrated analog moisture sensors to continuously capture soil data and support automated decision-making"
    ],
    technologies: ["Java", "C++", "Arduino", "IoT"],
    github: null,
    demo: null,
    year: "2022",
    category: "IoT",
  },
  {
    title: "Firefighter Bot",
    description: "Designed a custom PCB via FreePCB for seamless integration of IR sensors, flame detectors, and motor drivers in a maze-solving robot",
    summary: "Engineered an autonomous robot for fire suppression and maze solving.",
    achievements: [
      "Modeled robot structure in AutoCAD to ensure optimal layout and balance for maze navigation",
      "Wrote embedded control logic in PICBasic Pro to manage real-time sensor feedback and motor control",
      "Integrated fan module and IR sensing for realistic fire suppression in simulated environments"
    ],
    technologies: ["PICBasicPro", "AutoCAD", "PCB Design", "Embedded Systems"],
    github: null,
    demo: null,
    year: "2021",
    category: "Robotics",
  },
];

// Get all unique categories
const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Section id="projects" title="Projects">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "bg-secondary hover:bg-secondary/80"
                : "hover:bg-secondary/50 text-muted-foreground"
            } rounded-full px-4`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <AnimatedCard key={index} delay={0.2 + index * 0.1}>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={() => toggleExpand(index)}
              className="cursor-pointer"
            >
              <Card className="bg-secondary/20 border-0 transition-all duration-300 h-full flex flex-col overflow-hidden hover:shadow-[0_0_20px_rgba(0,166,237,0.2)] hover:bg-secondary/30 shadow-[0_0_15px_rgba(0,166,237,0.1)]">
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#00A6ED]/20 flex items-center justify-center shrink-0 text-[#00A6ED] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,166,237,0.2)]">
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[#00A6ED]">{project.title}</h3>
                        <motion.div
                          animate={{ rotate: expandedProject === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-muted-foreground"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                      <div className="flex items-center text-xs mt-2 space-x-3">
                      <span className="flex items-center text-foreground/70">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {project.year}
                      </span>
                      <span className="flex items-center font-semibold text-[#00A6ED]">
                        <Lightbulb className="mr-1 h-3.5 w-3.5" />
                        {project.category}
                      </span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="px-6 pt-2 pb-4 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground font-medium mb-4">
                    {project.summary || project.description}
                  </p>
                  
                  <AnimatePresence>
                    {expandedProject === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED] mt-1.5 shrink-0"></span>
                            <span>{project.description}</span>
                          </div>
                          {project.achievements && project.achievements.length > 0 && (
                            <ul className="space-y-2">
                              {project.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED] mt-1.5 shrink-0"></span>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-background text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-background hover:bg-[#00A6ED]/20 hover:text-[#00A6ED] transition-colors">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-background hover:bg-[#00A6ED]/20 hover:text-[#00A6ED] transition-colors">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <Button variant="outline" size="sm" className="flex-1 opacity-50 cursor-not-allowed bg-background" disabled>
                      <Code className="mr-2 h-4 w-4" />
                      Private Project
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatedCard>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </Section>
  );
}
