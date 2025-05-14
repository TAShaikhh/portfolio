"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "../layout/Section";
import Link from "next/link";
import { ExternalLink, Github, Code, Lightbulb, Calendar } from "lucide-react";
import { AnimatedCard } from "@/components/animations/animated-section";
import { motion } from "framer-motion";
import { useState } from "react";

// Projects data
const projects = [
  {
    title: "FotoFinder",
    description: "Built a full-stack web platform using NextJS and Leaflet allowing photographers to pin, browse, and share scenic locations on an interactive map.",
    technologies: ["NextJS", "React", "FirebaseDB", "ExpressJS"],
    github: "https://github.com/TAShaikhh/FotoFinder",
    demo: null,
    image: "/images/companies/lfs.png",
    year: "2025",
    category: "Web App",
  },
  {
    title: "ReflexRush",
    description: "Designed an FPGA-based reaction time game on DE10-Lite using Verilog and LFSR-driven pseudo-random LED patterns with finite state machines for game logic.",
    technologies: ["Verilog", "Quartus Prime", "ModelSim", "FPGA"],
    github: "https://github.com/TAShaikhh/ReflexRush",
    demo: null,
    image: "/images/companies/replexrush.png",
    year: "2025",
    category: "Hardware",
  },
  {
    title: "OpportuNext",
    description: "Created Opportunest, a freelance marketplace for university students, and pitched the Minimum Viable Product within 3 days for the B.E.S.T. Startup Experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: null,
    demo: null,
    image: "/images/companies/linear.png",
    year: "2024",
    category: "Web App",
  },
  {
    title: "Automated Plant Watering System",
    description: "Developed a smart irrigation system with Arduino and C++ to monitor soil moisture and trigger water delivery, with Java-based UI for monitoring.",
    technologies: ["Java", "C++", "Arduino", "IoT"],
    github: "https://github.com/TAShaikhh/PlantWatering",
    demo: null,
    image: "/images/companies/global.png",
    year: "2022",
    category: "IoT",
  },
  {
    title: "Firefighter Bot",
    description: "Designed a custom PCB via FreePCB for seamless integration of IR sensors, flame detectors, and motor drivers in an autonomous maze-solving robot.",
    technologies: ["PICBasicPro", "AutoCAD", "PCB Design", "Embedded Systems"],
    github: null,
    demo: null,
    image: "/images/companies/vlendid.png",
    year: "2021",
    category: "Robotics",
  },
  {
    title: "Portfolio Website",
    description: "A responsive, dark-themed personal portfolio website using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/TAShaikhh/portfolio",
    demo: "https://umershaikh.dev",
    image: "/images/companies/stonebridge.png",
    year: "2023",
    category: "Web App",
  },
];

// Get all unique categories
const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-gray-700 hover:border-blue-500 text-muted-foreground"
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
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="bg-secondary/10 border border-secondary/20 hover:border-blue-500/20 transition-all duration-300 h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-blue-900/10">
                {/* Project image area (with gradient overlay) */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-purple-500/10 z-10"></div>
                  <div
                    className="h-full w-full bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Project title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center text-xs text-white/80 mt-1 space-x-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {project.year}
                      </span>
                      <span className="flex items-center">
                        <Lightbulb className="mr-1 h-3.5 w-3.5" />
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="px-4 sm:px-6 py-4 flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-blue-300 border border-blue-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-4 sm:px-6 pb-4 pt-0 flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1 border-gray-700 hover:border-blue-500 hover:bg-blue-500/10">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="flex-1 border-gray-700 hover:border-blue-500 hover:bg-blue-500/10">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <Button variant="outline" size="sm" className="flex-1 opacity-50 cursor-not-allowed border-gray-700" disabled>
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
