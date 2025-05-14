"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { AnimatedCard } from "@/components/animations/animated-section";
import { Trophy, Award, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

// Honors data
const honors = [
  {
    title: "York Engineering Competition (YEC) - Communication | 2nd Place",
    organization: "Lassonde Engineering Society",
    date: "Oct 2024",
    description:
      "Presented on the social, economic, and technological impacts of engineering solutions, earning 2nd place among faculty-wide competitors. Selected to represent Lassonde School Of Engineering at a provincial level at the Ontario Engineering Competition.",
    icon: "trophy",
    color: "amber",
  },
  {
    title: "B.E.S.T. Startup Experience | 3rd Place",
    organization: "BEST Program",
    date: "Mar 2024",
    description:
      "Created Opportunest, a freelance marketplace for university students, and pitched the Minimum Viable Product within 3 days. Placed 3rd among teams including graduate-level capstone projects and was invited by BEST Labs to explore campus implementation.",
    icon: "award",
    color: "emerald",
  },
  {
    title: "Creativity Award | NASA Space Apps Challenge",
    organization: "NASA Space Apps",
    date: "Oct 2023",
    description:
      "Designed and developed a space travel agency in Unity during a NASA hackathon, blending immersive storytelling with interactive design. Project was featured on NebulaNasa.co and awarded for outstanding creativity among provincial participants.",
    icon: "trophy",
    color: "purple",
  },
];

const colorMap = {
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    hover: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/10",
    ring: "ring-amber-400/30",
    deco: "bg-amber-500",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    hover: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-emerald-500/10",
    ring: "ring-emerald-400/30",
    deco: "bg-emerald-500",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    hover: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/10",
    ring: "ring-blue-400/30",
    deco: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    hover: "group-hover:border-purple-500/50",
    shadow: "group-hover:shadow-purple-500/10",
    ring: "ring-purple-400/30",
    deco: "bg-purple-500",
  },
};

export default function HonorsSection() {
  return (
    <Section id="honors" title="Honors & Awards">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {honors.map((honor, index) => {
          const IconComponent = honor.icon === "trophy" ? Trophy : Award;
          const colors = colorMap[honor.color as keyof typeof colorMap] || colorMap.amber;

          return (
            <AnimatedCard key={index} delay={0.2 + index * 0.1}>
              <Card
                className={`relative bg-secondary/10 border ${colors.border} transition-all duration-300 h-full hover:shadow-lg ${colors.shadow} ${colors.hover} group overflow-hidden`}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-12 w-12 rounded-full ${colors.bg} flex items-center justify-center shrink-0 border ${colors.border} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <CardTitle className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${colors.text}`}>
                        {honor.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Building2 className="h-3.5 w-3.5 mr-1.5" />
                          {honor.organization}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          {honor.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <motion.p
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0.8, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {honor.description}
                  </motion.p>
                  <div
                    className={`pointer-events-none absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl overflow-hidden opacity-10 ${colors.deco}`}
                  ></div>
                </CardContent>
              </Card>
            </AnimatedCard>
          );
        })}
      </div>
    </Section>
  );
}
