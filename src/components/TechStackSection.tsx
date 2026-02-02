import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Unity", category: "Game Dev" },
  { name: "C#", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "Figma", category: "Design" },
  { name: "Blender", category: "3D" },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="stack" className="py-32 relative">
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
              Tech Stack
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-px flex-1 bg-border origin-left"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-12 max-w-2xl"
          >
            Tools and technologies I use to bring ideas to life.
          </motion.p>

          {/* Tech grid */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative p-6 border border-border rounded-lg bg-card/30 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/50 hover:border-muted-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Tech name */}
                <p className="font-medium text-foreground mb-1 group-hover:text-foreground transition-colors">
                  {tech.name}
                </p>

                {/* Category */}
                <p className="text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity">
                  {tech.category}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, hsl(var(--foreground) / 0.03), transparent 70%)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills bars */}
          <motion.div variants={itemVariants} className="mt-16 space-y-6">
            <h3 className="text-lg font-display font-medium text-foreground mb-8">Core Competencies</h3>
            
            {[
              { skill: "Full-Stack Web Development", level: 90 },
              { skill: "Unity Game Development", level: 85 },
              { skill: "Startup MVP Development", level: 88 },
              { skill: "Community & Event Management", level: 92 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.skill}</span>
                  <span className="text-foreground font-medium">{item.level}%</span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-foreground rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{
                      delay: index * 0.15 + 0.6,
                      duration: 1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
