import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Instagram, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  const socials = [
    {
      name: "Email",
      value: "divyanshsingh3243@gmail.com",
      href: "mailto:divyanshsingh3243@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      value: "myselfdivyanshsingh",
      href: "https://www.linkedin.com/in/myselfdivyanshsingh",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      value: "@justtdivyanshh",
      href: "https://www.instagram.com/justtdivyanshh",
      icon: Instagram,
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Contact
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-px flex-1 bg-border origin-left"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left side - Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                  Let's build something together.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Open to internships, collaborations, startups, and meaningful tech work.
                </p>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 border border-border rounded-lg transition-all duration-300 hover:bg-secondary hover:border-muted-foreground"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-accent transition-colors">
                      <social.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{social.name}</p>
                      <p className="text-foreground font-medium">{social.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div variants={itemVariants}>
              {isSubmitted ? (
                <motion.div
                  className="h-full flex flex-col items-center justify-center text-center p-8 border border-border rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Send className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-foreground text-background font-medium rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
