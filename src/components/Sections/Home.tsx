import type { HomeSectionProps } from "@/utils/types";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { Section } from "./components";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function HomeSection({
  data: { title, description },
}: HomeSectionProps) {
  return (
    <Section.Root className="relative h-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Section.Container className="absolute left-1/2 top-[35%] w-[92%] max-w-[90rem] -translate-x-1/2 -translate-y-1/2 md:top-[40%]">
          <motion.div variants={item} transition={{ duration: 0.5 }}>
            <Section.Title
              asChild
              className="text-center text-6xl font-extrabold tracking-wide"
            >
              <h1>{title}</h1>
            </Section.Title>
          </motion.div>
          <motion.div
            variants={item}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto mt-10 max-w-4xl"
          >
            <Section.Description className="mb-0 text-center text-xl tracking-wide text-inherit">
              {description}
            </Section.Description>
          </motion.div>
          <motion.div
            variants={item}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-14 text-center md:mt-16"
          >
            <Button size="xlg" asChild>
              <NextLink href="#projects">Projects</NextLink>
            </Button>
          </motion.div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}
