import { useData } from "@/hooks/useData";

import { Meta } from "@/components/Meta";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projectsContainer = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const projectsItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ProjectsPage() {
  const { getProjects } = useData();
  const projects = getProjects();

  return (
    <>
      <Meta
        path="/projects"
        title="Projects"
        description="Here you will find some of the personal projects I created."
      />
      <motion.div
        variants={projectsContainer}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto mb-28 min-h-screen max-w-7xl space-y-8 px-4 pt-16 md:space-y-16 md:px-6 md:pt-24 lg:px-8 lg:pt-32"
      >
        <div className="mx-auto mt-10 max-w-2xl md:mx-0">
          <motion.h1
            variants={projectsItem}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={projectsItem}
            transition={{ duration: 0.5 }}
            className="mt-4 text-zinc-300"
          >
            Here you will find some of the personal projects I created.
          </motion.p>
        </div>
        <div className="h-px w-full bg-zinc-700" />
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 0)
              .map(([key, value]) => (
                <motion.div
                  key={key}
                  variants={projectsItem}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard hFit {...value} />
                </motion.div>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 1)
              .map(([key, value]) => (
                <motion.div
                  key={key}
                  variants={projectsItem}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard hFit {...value} />
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
