import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import SkillsSection from "./SkillsSection";
import { Button } from "./ui/button";

const Home = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrollY, setScrollY] = useState(0);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen w-full bg-background ${theme === "dark" ? "dark" : ""}`}
    >
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
          Portfolio
        </motion.div>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" onClick={() => scrollToSection("hero")}>
                Home
              </Button>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" onClick={() => scrollToSection("skills")}>
                Skills
              </Button>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </motion.li>
          </ul>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="min-h-screen py-20 px-6"
          style={{
            backgroundPositionY: `${scrollY * 0.1}px`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h2>
            <ProjectsGallery />
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="min-h-screen py-20 px-6 bg-muted/30"
          style={{
            backgroundPositionY: `${-scrollY * 0.05}px`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Skills
            </motion.h2>
            <SkillsSection />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="min-h-screen py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h2>
            <div className="max-w-md mx-auto p-6 bg-card rounded-xl shadow-lg">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-muted/20 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground hover:text-foreground"
            >
              Twitter
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
