import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/util";

export const ContactSection = () => {

    const handleSubmit =(e)=>{
        e.preventDefault()
        setTimeout(()=>{
            
        },15000)
    }
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am a motivated Software Engineering undergraduate seeking an
          internship to gain industry experience and contribute to real
          projects. I would be grateful for the opportunity to learn and grow
          with your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"></Mail>
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
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"></Phone>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94 711520980"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 711520980
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"></MapPin>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Panadura,Sri Lanka
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h4 className="font-medium mb-4">Connect With Me!!!</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/senith-dakshina/"
                  target="_blannk"
                >
                  <Linkedin></Linkedin>
                </a>
                <a href="https://github.com/senithdakshina" target="_blannk">
                  <Github></Github>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                  placeholder="eg: senith dakshina"
                />
              </div>
               <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                  placeholder="eg: senithdakshina@gmail.com"
                />
              </div>
               <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
                <input
                  type="message"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none"
                  placeholder="Yor message here"
                />
              </div>
              <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

              )}>Send Message <Send size={16}></Send></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
