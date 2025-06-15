import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ExperienceEducationSection = () => {
  const experiences = [
    {
      title: "Machine learning & AI engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led the development of responsive web applications using React, TypeScript, and Tailwind CSS. Implemented complex animations with Framer Motion and improved performance by 40%.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UI components.",
    },
    {
      title: "Data scientist",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description:
        "Assisted in building web applications and gained experience in frontend technologies including HTML, CSS, and JavaScript.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2019 - 2021",
      description:
        "Specialized in Web Technologies and User Interface Design. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Maths & Computer science",
      institution: "Kenyatta University",
      period: "2022 - 2026",
      description:
        "Focused on Software Development and data science. Completed capstone project on responsive web design.",
    },
    {
      degree: "Web Development Bootcamp",
      institution: "plp Academy",
      period: "2025",
      description:
        "Intensive 12-week program covering full-stack web development technologies.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="flex justify-between">
                      <span>{exp.company}</span>
                      <span className="text-sm">{exp.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="flex justify-between">
                      <span>{edu.institution}</span>
                      <span className="text-sm">{edu.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExperienceEducationSection;
