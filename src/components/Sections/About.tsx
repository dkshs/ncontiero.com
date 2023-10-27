"use client";

import type { AboutMeSectionTypes } from "@/utils/types";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { AboutParagraph, Section } from "./components";
import { aboutAnimation as animation } from "./animationVariants";

interface AboutSectionProps extends AboutMeSectionTypes {
  btnSectionId: string;
}

export function AboutSection({
  title,
  description,
  content,
  id,
  btnSectionId,
}: AboutSectionProps) {
  const { getToKnowMe, mySkills } = content;

  return (
    <Section.Root id={id}>
      <motion.div
        variants={animation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Section.Container>
          <Section.Title>{title}</Section.Title>
          <Section.Description>{description}</Section.Description>
          <motion.div
            variants={animation.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-14 mdlg:grid-cols-2 mdlg:gap-40"
          >
            <div>
              <motion.h3
                variants={animation.item}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-8 text-2xl font-bold tracking-wide"
              >
                {getToKnowMe.title}
              </motion.h3>
              {getToKnowMe.content.map((text, i) => (
                <motion.div
                  key={i}
                  variants={animation.item}
                  transition={{
                    delay: i === 0 ? 1 : i === 1 ? 1.2 : i * 0.8,
                    duration: 0.5,
                  }}
                >
                  <AboutParagraph
                    key={i}
                    text={text}
                    i={i}
                    contentLength={getToKnowMe.content.length}
                  />
                </motion.div>
              ))}
              <motion.div
                variants={animation.item}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <Button size="xlg" asChild className="capitalize">
                  <NextLink href={`#${btnSectionId}`}>{btnSectionId}</NextLink>
                </Button>
              </motion.div>
            </div>
            <div>
              <motion.h3
                variants={animation.item}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-8 text-2xl font-bold tracking-wide"
              >
                {mySkills.title}
              </motion.h3>
              <div className="flex flex-wrap">
                {mySkills.content.map((skill, i) => (
                  <motion.div
                    variants={animation.item}
                    transition={{ delay: i * 0.5, duration: 0.5 }}
                    className="mb-4 mr-4 rounded-md bg-white/10 px-5 py-2.5 text-gray-300"
                    key={i}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section.Container>
      </motion.div>
    </Section.Root>
  );
}
