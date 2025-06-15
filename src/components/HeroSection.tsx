import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Code, Database, Server } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  onScrollToProjects?: () => void;
}

const HeroSection = ({
  name = "AI & ML engineer",
  title = "Software Developer",
  description = "I build modern, responsive,scalable web applications and also specialize on artificial intelligence and machine learning.",
  onScrollToProjects = () => {},
}: HeroSectionProps) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = `${name} | ${title}`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const techIcons = [
    { icon: <Code size={24} />, name: "Frontend", color: "bg-blue-500" },
    { icon: <Server size={24} />, name: "Backend", color: "bg-green-500" },
    { icon: <Database size={24} />, name: "Database", color: "bg-purple-500" },
    { icon: <Code size={24} />, name: "React", color: "bg-cyan-500" },
    { icon: <Code size={24} />, name: "Node.js", color: "bg-yellow-500" },
    { icon: <Code size={24} />, name: "TypeScript", color: "bg-blue-400" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-background relative overflow-hidden">
      {/* Floating tech icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full p-3 ${tech.color} text-white shadow-lg`}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 500 - 250,
            opacity: 0,
          }}
          animate={{
            x: Math.sin((index + 1) * 0.5) * 150,
            y: Math.cos((index + 1) * 0.5) * 150,
            opacity: 0.8,
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + index * 2,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      {/* Profile image/avatar */}
      <motion.div
        className="relative mb-8 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-primary/10 to-transparent">
          <img
            src="./profile.jpg"
            alt="Developer Profile"
            className="w-full h-full object-cover object-center opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://api.dicebear.com/7.x/avataaars/svg?seed=developer";
            }}
            loading="eager"
          />
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Animated text introduction */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="inline-block">{typedText}</span>
        <span className="inline-block animate-blink">|</span>
      </motion.h1>

      <motion.p
        className="text-xl text-center max-w-2xl mb-10 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {description}
      </motion.p>

      {/* Call-to-action button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Button onClick={onScrollToProjects} size="lg" className="group">
          View My Projects
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
