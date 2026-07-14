import { Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const contactLinks = [
  {
    label: "Email",
    value: "senithdakshina@gmail.com",
    href: "mailto:senithdakshina@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+94 71 152 0980",
    href: "tel:+94711520980",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Panadura, Sri Lanka",
    href: "https://www.google.com/maps/search/?api=1&query=Panadura%2C%20Sri%20Lanka",
    icon: MapPin,
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast({
        title: "Contact form is not configured",
        description: "Add VITE_WEB3FORMS_ACCESS_KEY to your .env file to enable direct email sending.",
      });
      setIsSubmitting(false);
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `Portfolio inquiry from ${name}`,
      from_name: "Senith Dakshina Portfolio",
      name,
      email,
      message,
      replyto: email,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      toast({
        title: "Message sent successfully",
        description: "Thank you. I will get back to you as soon as possible.",
      });
      form.reset();
    } catch {
      toast({
        title: "Message was not sent",
        description: "Please try again in a moment or email senithdakshina@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative px-4 py-24" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="premium-panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-border p-6 text-left md:p-8 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-black text-primary">
                <Sparkles size={16} />
                Ready for the next opportunity
              </div>
              <h2 className="mt-6 text-balance text-3xl font-black md:text-5xl">
                Let&apos;s build something useful together.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                I am looking for an internship where I can contribute to real software,
                learn from a strong team, and grow into a dependable software engineer.
              </p>

              <div className="mt-8 space-y-4">
                {contactLinks.map((item) => {
                  const ContactIcon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 rounded-lg border border-border bg-background/70 p-4 text-left transition-colors hover:border-primary"
                    >
                      <div className="rounded-md bg-primary/10 p-3 text-primary">
                        <ContactIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.label}</h3>
                        <p className="mt-1 text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/senith-dakshina/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/senithdakshina"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="GitHub profile"
                >
                  <Github />
                </a>
              </div>
            </div>

            <div className="p-6 text-left md:p-8">
              <h3 className="text-2xl font-black">Send a focused message</h3>
              <p className="mt-2 text-muted-foreground">
                Send a message directly from this portfolio without opening an email app.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  <label htmlFor="name" className="mb-2 block text-sm font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Tell me about the internship, project, or opportunity."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="cosmic-button w-full">
                  {isSubmitting ? "Opening Email..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
