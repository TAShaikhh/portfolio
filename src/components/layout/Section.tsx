"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection, AnimatedText } from "@/components/animations/animated-section";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section scroll-mt-20",
        className
      )}
    >
      <AnimatedSection className="container-custom" delay={0.1}>
        <div className="flex items-center gap-3 mb-6">
          <AnimatedText delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{title}</h2>
          </AnimatedText>
          <Separator className="flex-grow" />
        </div>
        {children}
      </AnimatedSection>
    </section>
  );
}
