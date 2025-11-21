import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/util";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    toast({
      title: "Sending message...",
      description: "Your message is being sending....",
    });

    setTimeout(() => {
      toast({
        title: "Oops something whent wrong...!!!",
        description: "Could you please send the message to senithdakshina@gmail.com",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am a motivated Software Engineering undergraduate seeking an internship to gain industry
          experience and contribute to real projects. I would be grateful for the opportunity to learn
          and grow with your team.
        </p>

        {/* ALIGN BOTH COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6  ">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:senithdakshina@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    senithdakshina@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94711520980"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 71 152 0980
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Panadura, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/senith-dakshina/" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/senithdakshina" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Start the Conversation</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-primary"
                  placeholder="eg: Senith Dakshina"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-primary"
                  placeholder="eg: senithdakshina@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-primary resize-none"
                  placeholder="Your message here"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
