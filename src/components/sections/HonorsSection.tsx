"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { AnimatedCard } from "@/components/animations/animated-section";
import { Trophy, Award, Calendar, Building2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
      "Built and pitched Opportunest, a freelance marketplace for university students, in just 3 days. Placed 3rd out of over 200 participants, including graduate-level capstone teams, and was invited by BEST Labs to explore campus-wide implementation.",
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
    bg: "bg-[#00A6ED]/20",
    border: "border-[#00A6ED]/20",
    text: "text-[#00A6ED]",
    hover: "group-hover:border-[#00A6ED]/50",
    shadow: "group-hover:shadow-[#00A6ED]/10",
    ring: "ring-[#00A6ED]/30",
    deco: "bg-[#00A6ED]",
  },
  emerald: {
    bg: "bg-[#00A6ED]/20",
    border: "border-[#00A6ED]/20",
    text: "text-[#00A6ED]",
    hover: "group-hover:border-[#00A6ED]/50",
    shadow: "group-hover:shadow-[#00A6ED]/10",
    ring: "ring-[#00A6ED]/30",
    deco: "bg-[#00A6ED]",
  },
  blue: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    text: "text-teal-400",
    hover: "group-hover:border-teal-500/50",
    shadow: "group-hover:shadow-teal-500/10",
    ring: "ring-teal-400/30",
    deco: "bg-teal-500",
  },
  purple: {
    bg: "bg-[#00A6ED]/20",
    border: "border-[#00A6ED]/20",
    text: "text-[#00A6ED]",
    hover: "group-hover:border-[#00A6ED]/50",
    shadow: "group-hover:shadow-[#00A6ED]/10",
    ring: "ring-[#00A6ED]/30",
    deco: "bg-[#00A6ED]",
  },
};

export default function HonorsSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <Section id="honors" title="Awards">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {honors.map((honor, index) => {
          const IconComponent = honor.icon === "trophy" ? Trophy : Award;

          return (
            <AnimatedCard key={index} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onClick={() => toggleExpand(index)}
                className="cursor-pointer"
              >
                <Card className="relative bg-secondary/20 border-0 transition-all duration-300 h-full hover:shadow-[0_0_20px_rgba(0,166,237,0.2)] hover:bg-secondary/30 overflow-hidden shadow-[0_0_15px_rgba(0,166,237,0.1)]">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#00A6ED]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,166,237,0.2)]">
                        <IconComponent className="h-6 w-6 text-[#00A6ED]" />
                    </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg sm:text-xl font-semibold transition-colors duration-300 text-[#00A6ED]">
                        {honor.title}
                      </CardTitle>
                          <motion.div
                            animate={{ rotate: expandedItem === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-muted-foreground"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </div>
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
                    <AnimatePresence>
                      {expandedItem === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2">
                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00A6ED] mt-1.5 shrink-0"></span>
                              <span>{honor.description}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </CardContent>
              </Card>
              </motion.div>
            </AnimatedCard>
          );
        })}
      </div>
    </Section>
  );
}
