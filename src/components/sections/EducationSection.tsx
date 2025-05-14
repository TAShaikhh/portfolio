import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import { GraduationCap } from "lucide-react";

// Education data
const education = [
  {
    school: "Lassonde School of Engineering",
    degree: "Honours B.Eng. in Software Engineering (3rd Year)",
    duration: "In Progress",
    description:
      "Related Coursework: Data Structures & Algorithms, Computer Organization & Programming, Object-Oriented Programming, Statistics, Database Systems, Embedded Systems, Digital Logic Design, Software Development",
  },
  {
    school: "Sir John A. Macdonald",
    degree: "High School Diploma, Information and Communication Technology",
    duration: "Sep 2017 - 2021",
    description: "Completed high school education with focus on Information and Communication Technology.",
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="bg-secondary/20 border-0 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,166,237,0.2)] shadow-[0_0_15px_rgba(0,166,237,0.1)]"
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg flex items-center justify-center shrink-0 bg-[#00A6ED]/20 shadow-[0_0_10px_rgba(0,166,237,0.2)] transition-transform duration-300 hover:scale-105">
                    <GraduationCap className="h-8 w-8 text-[#00A6ED]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl text-[#00A6ED]">{edu.school}</CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-1">
                      {edu.degree}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                  {edu.duration}
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
              <p className="text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
