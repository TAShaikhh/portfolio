import { useState, FormEvent } from "react";
import Section from "../layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

// Replace with your own EmailJS service, template, and user IDs
const EMAILJS_SERVICE_ID = "service_id"; // You'll need to replace this
const EMAILJS_TEMPLATE_ID = "template_id"; // You'll need to replace this
const EMAILJS_USER_ID = "user_id"; // You'll need to replace this

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_USER_ID
      );

      // Success handling
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Error handling
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-medium mb-3">Get in touch</h3>
          <p className="text-muted-foreground mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:shaikh.usa786@hotmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-white transition-standard"
            >
              <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <span>shaikh.usa786@hotmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/umershaikhswe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-white transition-standard"
            >
              <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </div>
              <span>linkedin.com/in/umershaikhswe</span>
            </a>

            <a
              href="https://github.com/TAShaikhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-white transition-standard"
            >
              <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center">
                <Github className="h-5 w-5" />
              </div>
              <span>github.com/TAShaikhh</span>
            </a>
          </div>
        </div>

        <div>
          <Card className="bg-secondary/10 border border-secondary/20">
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-secondary/20 border-secondary/30 focus:border-blue-500 mobile-touch-target"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-secondary/20 border-secondary/30 focus:border-blue-500 mobile-touch-target"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="bg-secondary/20 border-secondary/30 focus:border-blue-500 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
