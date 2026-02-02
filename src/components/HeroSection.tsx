import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
      
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div
          variants={lineVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
          <span className="text-sm text-muted-foreground">Open to opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={lineVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-glow"
        >
          Divyansh Singh
        </motion.h1>

        {/* Role description */}
        <motion.p
          variants={lineVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-4"
        >
          <span className="text-foreground">Full-Stack Developer</span>
          <span className="mx-3 opacity-40">•</span>
          <span className="text-foreground">Unity Engineer</span>
          <span className="mx-3 opacity-40">•</span>
          <span className="text-foreground">Tech Founder</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={lineVariants}
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-12"
        >
          Building products, games, and communities with code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg overflow-hidden transition-smooth"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <motion.div
              className="absolute inset-0 bg-muted-foreground"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg transition-smooth hover:bg-secondary hover:border-muted-foreground"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
