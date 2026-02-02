import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TribexEsports",
    description: "A tech-driven esports platform built to scale competitive gaming. Features tournament management, team registrations, and real-time leaderboards.",
    category: "Startup Platform",
    tech: ["React", "Node.js", "MongoDB", "WebSocket"],
    link: "https://tribexesports.com",
  },
  {
    id: 2,
    title: "Tech Tribex Platform",
    description: "Community management platform for 2000+ student developers. Event organization, resource sharing, and hackathon management.",
    category: "Web Application",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Unity Survival Game",
    description: "Open-world survival game with procedural terrain generation, inventory systems, and multiplayer support.",
    category: "Unity Game",
    tech: ["Unity", "C#", "Photon", "Blender"],
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "CLI tool that generates developer portfolios from GitHub profiles. Automated deployment and custom theming.",
    category: "Developer Tool",
    tech: ["Node.js", "GitHub API", "CLI"],
    github: "https://github.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <section id="projects" className="py-32 relative">
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
              Projects
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-px flex-1 bg-border origin-left"
            />
          </motion.div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative p-8 border border-border rounded-xl bg-card/30 backdrop-blur-sm cursor-pointer card-glow"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
                }}
              >
                {/* Category badge */}
                <div className="inline-block px-3 py-1 text-xs font-medium text-muted-foreground border border-border rounded-full mb-4">
                  {project.category}
                </div>

                {/* Project title */}
                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>

                {/* Description preview */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-text-secondary bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover border animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative max-w-2xl w-full bg-card border border-border rounded-2xl p-8 z-10"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category */}
            <div className="inline-block px-3 py-1 text-xs font-medium text-muted-foreground border border-border rounded-full mb-4">
              {selectedProject.category}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-display font-bold mb-4">
              {selectedProject.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm text-foreground bg-secondary rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg transition-smooth hover:opacity-90"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-smooth hover:bg-secondary"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
