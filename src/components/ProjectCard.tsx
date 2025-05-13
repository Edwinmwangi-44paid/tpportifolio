import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing the main features and technologies used.",
  longDescription = "This is a more detailed description of the project that explains the problem it solves, the approach taken, challenges faced, and solutions implemented. It provides more context about the project's purpose and technical details.",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  liveUrl = "https://example.com",
  githubUrl = "https://github.com/username/project",
  featured = false,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-background"
    >
      <Card
        className={`overflow-hidden transition-all duration-300 ${featured ? "border-primary" : ""}`}
      >
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
          {featured && (
            <Badge className="absolute top-2 right-2" variant="default">
              Featured
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <motion.div
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mb-4">
              {longDescription}
            </p>
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-1 h-4 w-4" /> Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-1 h-4 w-4" /> More
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
