"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { AnimatedCard } from "@/components/animations/animated-section";
import { CalendarDays, Building2, MapPin, ArrowRight, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

// Experience data
const experiences = [
  {
    title: "Software Engineering Intern",
    company: "U'Thumim Diagnostics",
    location: "Saskatoon, SK",
    duration: "May 2025 - Present",
    summary: "Supporting full-stack web development for diagnostic tools.",
    description: "Scheduled to support full-stack webpage development, including responsive front-end design and back-end functionality enhancements",
    achievements: [],
    color: "blue",
  },
  {
    title: "Software Engineering Intern",
    company: "Stonebridge Imports",
    location: "Kitchener, ON",
    duration: "Apr 2025 - Present",
    summary: "Designed AI-powered e-commerce features to enhance engagement.",
    description: "Designed interactive Figma prototypes for AI-powered e-commerce features, streamlining user navigation and contributing to a 15% increase in customer engagement",
    achievements: [
      "Partnered with cross-functional teams to iterate on feature designs using feedback from user surveys and Google Analytics, enhancing usability and conversion rates",
    ],
    color: "blue",
  },
  {
    title: "Software Engineering Intern",
    company: "Leivaire Inc.",
    location: "Toronto, ON",
    duration: "Feb 2025 - May 2025",
    summary: "Built admin dashboard UI and backend services to boost efficiency.",
    description: "Developed detailed user stories and designed Figma UI prototypes for an internal admin dashboard, reducing average task completion time by 20% based on usability testing",
    achievements: [
      "Implemented backend services in Kotlin using Kotlin DSL (Gradle) to dynamically update real-time values in the admin dashboard, enabling faster monitoring and data accuracy",
    ],
    color: "blue",
  },
  {
    title: "Software Developer",
    company: "Dingo Development",
    location: "Toronto, ON",
    duration: "Jan 2025 - Apr 2025",
    summary: "Delivered full-stack websites for business clients to increase web traffic.",
    description: "Designed and developed full-stack websites for small business clients using React and Node.js, resulting in a 30% increase in web traffic post-launch",
    achievements: [
      "Collaborated with product teams using Close CRM to gather client feedback, translating insights into user-focused technical features that improved customer satisfaction",
    ],
    color: "blue",
  },
  {
    title: "Business Analyst Intern",
    company: "Vistii",
    location: "Toronto, ON",
    duration: "Nov 2024 - Dec 2024",
    summary: "Created dashboards and strategic briefs to support fundraising and growth.",
    description: "Built an interactive Tableau dashboard covering 100+ VC firms, enabling the strategy team to identify key fundraising trends and prioritize investor outreach",
    achievements: [
      "Processed user and market data in Excel to uncover customer segmentation patterns, supporting growth strategy recommendations for new product lines",
      "Synthesized findings from VC trend analysis and user data into a strategic brief, helping leadership align product roadmap with market opportunities",
    ],
    color: "blue",
  },
  {
    title: "Business Development Intern",
    company: "MekTek Engineering and Equipment Ltd.",
    location: "Saskatoon, SK",
    duration: "Sep 2024 - Nov 2024",
    summary: "Enhanced recruitment content and analytics to optimize hiring.",
    description: "Created and refined 100+ technical screening questions to improve candidate filtering, increasing technical interview success rate by 20%",
    achievements: [
      "Wrote and published SEO-optimized blog content targeting engineering talent, leading to a 25% increase in career page traffic as tracked via Google Analytics",
      "Analyzed recruitment funnel performance using Google Analytics and Excel, identifying drop-off stages and reducing time-to-hire by 15% through workflow optimizations",
    ],
    color: "blue",
  },
  {
    title: "Data Analyst Intern",
    company: "elerGreen Industry",
    location: "Toronto, ON",
    duration: "Sep 2023 - Dec 2023",
    summary: "Conducted pricing and logistics analysis to optimize costs.",
    description: "Led pricing analysis on polymers, metals, and feedstocks using Python & Excel, identifying cost savings and increasing revenue by 10%",
    achievements: [
      "Created Tableau dashboards on chemical cost trends, informing procurement strategy and guiding vendor selection decisions for the operations team",
      "Reduced international shipping costs by 10% by conducting supplier benchmarking and freight cost analysis in Excel, boosting logistics efficiency",
    ],
    color: "blue",
  },
];

// Get the corresponding color classes based on the color prop
const getColorClasses = (color: string) => {
  return {
    bg: "bg-[#00A6ED]/20",
    text: "text-[#00A6ED]",
    hover: "group-hover:scale-105"
  };
};

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = useCallback((index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }, [expandedIndex]);

  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line with enhanced glow */}
        <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 h-[calc(100%-2rem)] w-0.5 z-0 hidden sm:block overflow-hidden">
          <div className="absolute inset-0 bg-[#00A6ED]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A6ED]/30 to-transparent opacity-30 hidden md:block animate-flow-down"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="space-y-8 relative">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            const colorClasses = getColorClasses(experience.color);
            const isExpanded = expandedIndex === index;

            return (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer"
                >
                  <div className={`sm:flex ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-4 md:gap-8`}>
                    {/* Timeline dot with reduced glow */}
                    <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-2 border-[#00A6ED]/50 z-10 hidden sm:block"></div>

                    <div className={`sm:w-1/2 ${isEven ? 'sm:pr-10 md:pr-16' : 'sm:pl-10 md:pl-16'}`}>
                      <Card 
                        className={`bg-secondary/20 border-0 transition-all duration-300 cursor-pointer h-full transform-gpu
 ${isExpanded ? 'shadow-[0_0_25px_rgba(0,166,237,0.25)]' : 'shadow-[0_0_15px_rgba(0,166,237,0.1)]'} hover:shadow-[0_0_20px_rgba(0,166,237,0.2)]
                          hover:bg-secondary/30 group overflow-hidden`}
                      >
                        <CardHeader className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className={`h-12 w-12 rounded-md ${colorClasses.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,166,237,0.2)]`}>
                              <Briefcase className={`h-6 w-6 ${colorClasses.text}`} />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between">
                                <CardTitle className={`text-lg sm:text-xl ${colorClasses.text}`}>
                                  {experience.title}
                                </CardTitle>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-muted-foreground"
                                >
                                  <ChevronDown className="h-4 w-4" />
                                </motion.div>
                              </div>
                              <CardDescription className="text-base mt-1 flex items-center">
                                <Building2 className="h-4 w-4 mr-1 text-muted-foreground" />
                                {experience.company}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 space-y-3">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <CalendarDays className="h-3.5 w-3.5 mr-1" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            <span>{experience.location}</span>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">
                            {experience.summary}
                          </p>
                          
                          <AnimatePresence>
                            {isExpanded && (
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
                                    <span>{experience.description}</span>
                                  </div>
                                  {experience.achievements.length > 0 && (
                                    <ul className="space-y-2">
                                      {experience.achievements.map((achievement, i) => (
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
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
