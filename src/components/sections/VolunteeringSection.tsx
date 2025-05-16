"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { AnimatedCard } from "@/components/animations/animated-section";
import { CalendarDays, Heart, MapPin, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Volunteering data
const volunteering = [
  {
    role: "First Year Student Representative",
    organization: "Lassonde Engineering Society",
    duration: "Sep 2022 - Sep 2023 | 1 year 1 month",
    location: "York University, Toronto",
    description:
      "Represented first-year engineering students by organizing events, advocating for student needs, and fostering a supportive community for new students as they transitioned to university life.",
    achievements: [
      "Organized 5 networking events connecting students with industry professionals",
      "Advocated for additional study resources leading to 20% increase in available materials",
      "Helped plan and execute orientation activities for 200+ incoming students",
    ],
    logo: "LES", // Placeholder for organization logo
  },
];

export default function VolunteeringSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <Section id="volunteering" title="Volunteering">
      <div className="flex justify-center">
        {volunteering.map((volunteer, index) => (
          <AnimatedCard key={index} delay={0.2 + index * 0.1} className="w-full max-w-2xl">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={() => toggleExpand(index)}
              className="cursor-pointer"
            >
              <Card className="bg-secondary/20 border-0 transition-all duration-300 h-full hover:shadow-[0_0_20px_rgba(0,166,237,0.2)] hover:bg-secondary/30 shadow-[0_0_15px_rgba(0,166,237,0.1)]">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#00A6ED]/20 flex items-center justify-center shrink-0 text-[#00A6ED] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,166,237,0.2)]">
                      <Heart className="h-6 w-6" />
                  </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg sm:text-xl text-[#00A6ED]">
                      {volunteer.role}
                    </CardTitle>
                        <motion.div
                          animate={{ rotate: expandedItem === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-muted-foreground"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    <CardDescription className="text-base mt-1 flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                      {volunteer.organization}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
                    <span>{volunteer.duration}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1.5" />
                    <span>{volunteer.location}</span>
                  </div>
                </div>

                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {volunteer.description}
                  </p>

                {volunteer.achievements && (
                            <div className="pt-3 border-t border-secondary/20">
                              <h4 className="text-sm font-medium mb-2 text-foreground">Key Contributions</h4>
                              <ul className="space-y-2">
                      {volunteer.achievements.map((achievement, i) => (
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
                  </div>
                )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </CardContent>
            </Card>
            </motion.div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}
