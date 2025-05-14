"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { AnimatedCard } from "@/components/animations/animated-section";
import { CalendarDays, Building2, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

// Experience data
const experiences = [
  {
    title: "Software Engineering Intern",
    company: "U'Thumim Diagnostics",
    duration: "May 2025 - Present",
    location: "Saskatoon, SK",
    description: "Supporting full-stack webpage development, including responsive front-end design and back-end functionality enhancements.",
    logoUrl: "/images/companies/holy-heart.png",
    color: "blue",
  },
  {
    title: "Software Engineering Intern",
    company: "Stonebridge Imports",
    duration: "Apr 2025 - Present",
    location: "Kitchener, ON",
    description: "Designed interactive Figma prototypes for AI-powered e-commerce features, streamlining user navigation and contributing to a 15% increase in customer engagement.",
    logoUrl: "/images/companies/stonebridge.png",
    color: "amber",
  },
  {
    title: "Software Engineering Intern",
    company: "Leivaire Inc.",
    duration: "Feb 2025 - Present",
    location: "Toronto, ON",
    description: "Developed detailed user stories and designed Figma UI prototypes for an internal admin dashboard, reducing average task completion time by 20% based on usability testing.",
    logoUrl: "/images/companies/linear.png",
    color: "cyan",
  },
  {
    title: "Software Developer",
    company: "Dingo Development",
    duration: "Jan 2025 - Apr 2025",
    location: "Toronto, ON",
    description: "Designed and developed full-stack websites for small business clients using React and Node.js, resulting in a 30% increase in web traffic post-launch.",
    logoUrl: "/images/companies/lfs.png",
    color: "purple",
  },
  {
    title: "Business Analyst Intern",
    company: "Vistii",
    duration: "Nov 2024 - Dec 2024",
    location: "Toronto, ON",
    description: "Built an interactive Tableau dashboard covering 100+ VC firms, enabling the strategy team to identify key fundraising trends and prioritize investor outreach.",
    logoUrl: "/images/companies/vlendid.png",
    color: "green",
  },
  {
    title: "Business Development Intern",
    company: "MekTek Engineering and Equipment Ltd.",
    duration: "Sep 2024 - Nov 2024",
    location: "Saskatoon, SK",
    description: "Created and refined 100+ technical screening questions to improve candidate filtering, increasing technical interview success rate by 20%.",
    logoUrl: "/images/companies/global.png",
    color: "amber",
  },
  {
    title: "Data Analyst Intern",
    company: "elerGreen Industry",
    duration: "Sep 2023 - Dec 2023",
    location: "Toronto, ON",
    description: "Led pricing analysis on polymers, metals, and feedstocks using Python & Excel, identifying cost savings and increasing revenue by 10%.",
    logoUrl: "/images/companies/replexrush.png",
    color: "green",
  },
];

// Get the corresponding color classes based on the color prop
const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string, border: string, text: string, hover: string }> = {
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      hover: "group-hover:border-blue-500/50"
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400",
      hover: "group-hover:border-purple-500/50"
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      hover: "group-hover:border-cyan-500/50"
    },
    green: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      hover: "group-hover:border-emerald-500/50"
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      hover: "group-hover:border-amber-500/50"
    },
  };

  return colorMap[color] || colorMap.blue;
};

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Featured Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 z-0 hidden sm:block"></div>

        <div className="space-y-12 relative">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            const colorClasses = getColorClasses(experience.color);

            return (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <div className={`sm:flex ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-4 md:gap-8`}>
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-2 border-blue-500 z-10 hidden sm:block"></div>

                  <div className={`sm:w-1/2 ${isEven ? 'sm:pr-10 md:pr-16' : 'sm:pl-10 md:pl-16'}`}>
                    <Card className={`bg-secondary/10 border ${colorClasses.border} transition-all duration-300 h-full hover:shadow-lg ${colorClasses.hover} group`}>
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className={`h-12 w-12 rounded-md ${colorClasses.bg} flex items-center justify-center shrink-0 overflow-hidden border ${colorClasses.border} group-hover:scale-110 transition-transform duration-300`}>
                            {experience.logoUrl ? (
                              <Image
                                src={experience.logoUrl}
                                alt={experience.company}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            ) : (
                              <div className={`text-xl font-bold text-center ${colorClasses.text}`}>
                                {experience.company.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <CardTitle className={`text-lg sm:text-xl transition-colors duration-300 ${colorClasses.text}`}>
                              {experience.title}
                            </CardTitle>
                            <CardDescription className="text-base mt-1 flex items-center">
                              <Building2 className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
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
                        <p className="text-sm text-muted-foreground pt-2">
                          {experience.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow pointing to next item - only for the first n-1 items */}
                  {index < experiences.length - 1 && (
                    <div className={`hidden sm:block absolute left-1/2 transform -translate-x-1/2 ${
                      index % 2 === 0 ? 'rotate-90' : '-rotate-90'
                    }`} style={{ top: 'calc(100% - 20px)' }}>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
