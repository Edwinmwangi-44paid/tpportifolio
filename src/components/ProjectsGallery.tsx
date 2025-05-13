import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  details: string;
}

interface ProjectsGalleryProps {
  projects?: Project[];
}

const ProjectsGallery = ({
  projects = defaultProjects,
}: ProjectsGalleryProps) => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null,
  );

  const toggleProject = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore my recent work and the technologies I've been working with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjectId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart, checkout, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/example/ecommerce",
    details:
      "Built a responsive e-commerce platform with user authentication, product catalog, shopping cart functionality, and secure payment processing using Stripe. Implemented search and filtering options, user reviews, and an admin dashboard for inventory management.",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com/task-app",
    sourceUrl: "https://github.com/example/task-app",
    details:
      "Developed a task management application that allows teams to collaborate in real-time. Features include drag-and-drop task organization, deadline notifications, file attachments, and detailed progress tracking with analytics dashboards.",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather forecasting application with interactive maps and data visualization.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["React", "D3.js", "OpenWeather API"],
    demoUrl: "https://example.com/weather",
    sourceUrl: "https://github.com/example/weather-app",
    details:
      "Created an interactive weather dashboard that provides current conditions and 7-day forecasts for any location. Implemented data visualization using D3.js for temperature trends, precipitation probability, and wind patterns with an interactive map interface.",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media engagement and audience insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Angular", "Express", "PostgreSQL", "Chart.js"],
    demoUrl: "https://example.com/analytics",
    sourceUrl: "https://github.com/example/social-analytics",
    details:
      "Built a comprehensive analytics platform that integrates with multiple social media APIs to track engagement metrics, audience demographics, and content performance. Features include customizable dashboards, automated reporting, and AI-powered content recommendations.",
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description:
      "Mobile application for tracking workouts, nutrition, and fitness progress.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    technologies: ["React Native", "GraphQL", "MongoDB"],
    demoUrl: "https://example.com/fitness",
    sourceUrl: "https://github.com/example/fitness-app",
    details:
      "Developed a cross-platform mobile application for fitness enthusiasts to track workouts, log nutrition, and monitor progress over time. Implemented features like custom workout plans, barcode scanning for food logging, and social challenges to compete with friends.",
  },
  {
    id: "6",
    title: "Real Estate Marketplace",
    description:
      "Property listing platform with virtual tours and mortgage calculator.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: ["Next.js", "Supabase", "ThreeJS"],
    demoUrl: "https://example.com/realestate",
    sourceUrl: "https://github.com/example/real-estate",
    details:
      "Created a modern real estate marketplace that connects buyers, sellers, and agents. Implemented virtual 3D property tours, advanced search filters, mortgage calculators, and neighborhood analytics to help users make informed decisions.",
  },
];

export default ProjectsGallery;
