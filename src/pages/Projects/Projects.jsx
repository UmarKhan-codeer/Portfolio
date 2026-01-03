import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReactLenis } from "lenis/react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Scrapify – AI Web Scraper (Beta)",
    description:
      "Built and deployed a production-ready web scraping platform capable of handling both static and dynamic JavaScript-heavy websites. Implemented secure authentication, persistent data storage, and AI-driven pipelines for content summarization, keyword extraction, and categorization. Serving as a baseline for an enterprise-scale scraping solution.",
    src: "Scrapify.jpg",
    link: "https://i.postimg.cc/PfCDmQQf/20-12-2025-22-55-28-REC.png",
    link2: "https://i.postimg.cc/0yR75Km8/03-01-2026-21-52-59-REC.png",
    color: "#00b894",
    liveLink: "https://scrapify-rho.vercel.app/",
    tags: [
      "Puppeteer",
      "AI",
      "Web Scraping",
      "Next.js",
      "NextAuth.js",
      "Automation",
      "MongoDB",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    title: "Umer's Portfolio Website",
    description:
      "My personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.",
    src: "portfolio.jpg",
    link: "https://i.postimg.cc/L6JZYyW6/porfolio.png",
    color: "#6c5ce7",
    githubLink: "https://github.com/UmarKhan-codeer/Portfolio.git",
    liveLink: "https://portfolio-umer-pro.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Draftly — Write, Share, Inspire",
    description:
      "A modern, full-stack web application built with React for creating, editing, and sharing blog posts.Draftly offers a smooth writing experience with an elegant UI, secure authentication, and Appwrite-powered backend — all wrapped in a refreshing emerald theme.",
    src: "draftly.jpg",
    link: "https://i.postimg.cc/43syqfgh/draftly.png",
    color: "#ff7675",
    githubLink: "https://github.com/UmarKhan-codeer/Draftly.git",
    liveLink: "https://draftly-sigma.vercel.app/",
    tags: ["React 19", "Appwrite", "Tailwind CSS"],
  },
  {
    title: "Next-Gen RBAC System",
    description:
      "The RBAC System is a comprehensive reference implementation for managing user identities, roles, and permissions in a secure web environment. Built on the cutting-edge Next.js 15 framework, it leverages Server Actions, MongoDB, and NextAuth.js to deliver a robust and type-safe experience.",
    src: "rbac.jpg",
    link: "https://i.postimg.cc/zXQPxvTy/Rbac.png",
    color: "#22c55e",
    githubLink: "https://github.com/UmarKhan-codeer/Rbac-system.git",
    liveLink: "https://rbac-system-seven.vercel.app/",
    tags: ["Next.js", "MongoDB", "NextAuth.js"],
  },
  {
    title: "Recrutify – AI Resume Builder",
    description:
      "An AI-powered resume builder that helps users create professional resumes based on their input and job requirements.",
    src: "airesumebuilder.jpg",
    link: "https://i.postimg.cc/mkpBGWWx/resume-builder.png",
    color: "#9b59b6",
    githubLink:
      "https://github.com/UmarKhan-codeer/Ai-Resume-Builder-Frontend.git",
    liveLink: "https://ai-resume-builder-nine-pi.vercel.app/",
    tags: ["AI", "React", "PDF Generation"],
  },
  {
    title: "PassOP – Password Manager",
    description:
      "A secure, elegant, and fully client-side password manager built with React and Web Crypto API.",
    src: "passop.jpg",
    link: "https://i.postimg.cc/gJH486rJ/passop.png",
    color: "#22c55e",
    githubLink: "https://github.com/UmarKhan-codeer/PasswordManager.git",
    liveLink: "https://password-manager-six-dusky.vercel.app",
    tags: ["Security", "Web Crypto API", "React"],
  },
  {
    title: "GrillOut – Food Ordering",
    description:
      "A modern and responsive food ordering website built with React, Tailwind CSS, and Firebase for real-time menu updates and order management.",
    src: "grillout.jpg",
    link: "https://i.postimg.cc/GpFD3H5F/preview.png",
    color: "#ff7675",
    githubLink: "https://github.com/UmarKhan-codeer/GrillOut-website.git",
    liveLink: "https://grillout-resturant-website-t71v.vercel.app/",
    tags: ["React", "Firebase", "Real-time"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
          {/* Header */}
          <div className="mb-16 md:mb-24 space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            >
              Selected Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl"
            >
              A collection of projects exploring AI, web development, and user
              interface design.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Featured Project */}
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <FeaturedProjectCard key={index} project={project} />
              ))}

            {/* Grid Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </motion.div>
        </div>
      </main>
    </ReactLenis>
  );
}

function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors duration-500"
    >
      <div className="grid lg:grid-cols-5 gap-0 h-full">
        {/* Image Section */}
        <div className="lg:col-span-3 relative h-64 md:h-96 lg:h-auto overflow-hidden group/image">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-20 opacity-60 lg:opacity-30" />

          {project.link2 ? (
            <div className="w-full h-full flex flex-col">
              {/* Top Image - Hero */}
              <div className="flex-1 relative overflow-hidden">
                <motion.img
                  src={project.link}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {/* Bottom Image - Dashboard */}
              <div className="flex-1 relative overflow-hidden border-t border-white/10">
                <motion.img
                  src={project.link2}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          ) : (
            <>
              {/* Blurred Background */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.link}
                  alt=""
                  className="w-full h-full object-cover blur-xl scale-110 opacity-50"
                />
              </motion.div>

              {/* Main Image */}
              <motion.img
                src={project.link}
                alt={project.title}
                className="relative z-10 w-full h-full object-contain p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-between h-full bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                Featured Project
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/5 hover:bg-white/10 text-gray-300 border-white/5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8 md:mt-12">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group/link"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

FeaturedProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    link2: PropTypes.string,
    color: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <motion.img
          src={project.link}
          alt={project.title}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        {/* Hover Overlay with Quick Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
            title="View Live"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform"
              title="View Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 font-medium uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
          {project.description}
        </p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            View Project <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
