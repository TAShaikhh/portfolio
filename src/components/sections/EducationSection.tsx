import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../layout/Section";
import Image from "next/image";

// Education data
const education = [
  {
    school: "Lassonde School of Engineering",
    degree: "Honours B.Eng. in Software Engineering (3rd Year)",
    duration: "In Progress",
    description:
      "Related Coursework: Data Structures & Algorithms, Computer Organization & Programming, Object-Oriented Programming, Statistics, Database Systems, Embedded Systems, Digital Logic Design, Software Development",
    logo: "/images/companies/holy-heart.png",
  },
  {
    school: "Sir John A. Macdonald",
    degree: "High School Diploma, Information and Communication Technology",
    duration: "Sep 2017 - 2021",
    description: "Completed high school education with focus on Information and Communication Technology.",
    logo: "/images/companies/global.png",
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-standard"
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded flex items-center justify-center shrink-0 overflow-hidden bg-white p-1">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{edu.school}</CardTitle>
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
