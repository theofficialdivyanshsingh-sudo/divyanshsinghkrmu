import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              About
            </span>
            <motion.div
              variants={lineVariants}
              className="h-px flex-1 bg-border origin-left"
            />
          </motion.div>

          {/* Main content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium leading-relaxed tracking-tight">
              I'm a{" "}
              <span className="text-foreground animated-underline">technology builder</span>{" "}focused on crafting scalable systems, immersive experiences, and communities that last
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science at K.R. Mangalam University
              (2024–2028), I've already co-founded two ventures:{" "}
              <span className="text-foreground">Tribex Esports</span> and{" "}
              <span className="text-foreground">Tech Tribex</span>{" "}a 2000+ member student
              tech community.
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I believe in{" "}
              <span className="text-foreground">execution over ideas</span>, shipping over
              perfecting, and building in public. My work spans full-stack development,
              Unity game development, and leading hackathons that bring developers together.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          >
            {[
              { label: "Mindset", value: "I build because I enjoy solving problems" },
              { label: "Focus", value: "Ship & Iterate" },
              { label: "Approach", value: "Execution Driven" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm"
                whileHover={{ y: -4, borderColor: "hsl(var(--muted-foreground))" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg font-display font-medium">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
