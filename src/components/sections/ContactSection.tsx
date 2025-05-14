import Section from "../layout/Section";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="flex flex-col items-center max-w-lg mx-auto">
        <p className="text-muted-foreground text-center mb-8">
        Open to new opportunities and conversations. Reach out anytime! 
        </p>

        <div className="space-y-6 w-full">
          <a
            href="mailto:shaikh.usa786@hotmail.com"
            className="flex items-center gap-4 text-muted-foreground hover:text-[#00A6ED] transition-standard group w-full bg-secondary/10 p-4 rounded-lg border border-secondary/20 hover:border-[#00A6ED]/20"
          >
            <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <span>shaikh.usa786@hotmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/umershaikhswe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-muted-foreground hover:text-[#00A6ED] transition-standard group w-full bg-secondary/10 p-4 rounded-lg border border-secondary/20 hover:border-[#00A6ED]/20"
          >
            <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="h-5 w-5" />
            </div>
            <span>linkedin.com/in/umershaikhswe</span>
          </a>

          <a
            href="https://github.com/TAShaikhh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-muted-foreground hover:text-[#00A6ED] transition-standard group w-full bg-secondary/10 p-4 rounded-lg border border-secondary/20 hover:border-[#00A6ED]/20"
          >
            <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Github className="h-5 w-5" />
            </div>
            <span>github.com/TAShaikhh</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
