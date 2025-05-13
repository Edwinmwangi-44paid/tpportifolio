import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const SkillsSection = ({ skills = defaultSkills }: SkillsSectionProps) => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const categories = [...new Set(skills.map((skill) => skill.category))];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed expertise in various technologies across the full
            stack. Here's a breakdown of my technical proficiency.
          </p>
        </motion.div>

        <Tabs defaultValue={categories[0]} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={animateSkills ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">{skill.name}</h3>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            value={animateSkills ? skill.level : 0}
                            className="h-2"
                            // Animate the progress bar when it comes into view
                            style={{
                              transition: "all 1s ease-out",
                            }}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const defaultSkills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 75, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "GraphQL", level: 65, category: "Backend" },
  { name: "REST API Design", level: 85, category: "Backend" },

  // DevOps
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "CI/CD", level: 65, category: "DevOps" },
  { name: "AWS", level: 60, category: "DevOps" },
  { name: "Git", level: 90, category: "DevOps" },
  { name: "GitHub Actions", level: 75, category: "DevOps" },
  { name: "Vercel/Netlify", level: 85, category: "DevOps" },
];

export default SkillsSection;
