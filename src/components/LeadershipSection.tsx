import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  isInView: boolean;
}

const AnimatedCounter = ({ target, suffix = "", isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: [0.25, 0.4, 0.25, 1],
        onUpdate: (value) => setCount(Math.floor(value)),
      });

      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const LeadershipSection = () => {
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

  const stats = [
    { value: 2000, suffix: "+", label: "Community Members" },
    { value: 15, suffix: "+", label: "Events Organized" },
    { value: 5, suffix: "+", label: "Hackathons Led" },
    { value: 2, suffix: "", label: "Ventures Co-Founded" },
  ];

  const experiences = [
    {
      role: "Co-Founder",
      company: "TribexEsports.com",
      description: "Built and scaled a tech-driven esports platform. Led web systems, digital infrastructure, and community growth.",
      period: "2023 – Present",
    },
    {
      role: "Co-Founder",
      company: "Tech Tribex",
      description: "Created a student tech community with 2000+ members. Organized hackathons, workshops, and developer events at K.R. Mangalam University.",
      period: "2024 – Present",
    },
  ];

  return (
    <section id="leadership" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Leadership & Impact
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-px flex-1 bg-border origin-left"
            />
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-2 text-glow">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-3 h-3 bg-foreground rounded-full -translate-x-1 md:-translate-x-1.5 mt-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <h3 className="text-xl font-display font-semibold mt-1">{exp.role}</h3>
                    <p className="text-lg text-foreground/90 mb-2">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
