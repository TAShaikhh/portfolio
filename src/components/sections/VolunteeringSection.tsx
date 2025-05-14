"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { AnimatedCard } from "@/components/animations/animated-section";
import { CalendarDays, Heart, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <Section id="volunteering" title="Volunteering">
      <div className="flex justify-center">
        {volunteering.map((volunteer, index) => (
          <AnimatedCard key={index} delay={0.2 + index * 0.1} className="w-full max-w-2xl">
            <Card className="bg-secondary/20 border-0 transition-all duration-300 h-full hover:shadow-[0_0_20px_rgba(0,166,237,0.2)] hover:bg-secondary/30 shadow-[0_0_15px_rgba(0,166,237,0.1)]">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#00A6ED]/20 flex items-center justify-center shrink-0 text-[#00A6ED] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,166,237,0.2)]">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl text-[#00A6ED]">
                      {volunteer.role}
                    </CardTitle>
                    <CardDescription className="text-base mt-1 flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                      {volunteer.organization}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
                    <span>{volunteer.duration}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1.5" />
                    <span>{volunteer.location}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {volunteer.description}
                  </p>
                </div>

                {volunteer.achievements && (
                  <div className="mt-3 pt-3 border-t border-secondary/20">
                    <h4 className="text-sm font-medium mb-2 text-foreground">Key Contributions</h4>
                    <ul className="space-y-1.5">
                      {volunteer.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground/50 mt-1.5 shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}
