// Portfolio React + TailwindCSS + Vite
// Modern Portfolio with Animations and Interactive Elements

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code2, ExternalLink, Download, ArrowRight, Star, Zap, Trophy, Users, Calendar, Phone, Building, FileText, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    name: "HomeSentry – AI Home Surveillance",
    description: "Face recognition with DeepFace, Django backend with restful APIs, OpenAI chatbot integration.",
    stack: ["Python", "Django", "PostgreSQL", "OpenAI API", "REST APIs, DeepFace"],
    github: "https://github.com/vip9888/flatguard-ai",
    featured: true,
    stars: 45,
    type: "Personal"
  },
  {
    name: "AI Research Analyzer",
    description: "Summarize and Recommend research papers using Hugging Face, FastAPI backend , Streamlit frontend.",
    stack: ["Python", "FastAPI", "Streamlit", "Docker"],
    github: "https://github.com/vip9888/ai-research-analyzer",
    featured: true,
    featured: true,
    stars: 32,
    type: "Personal"
  },
  {
    name: "Multi-Agent GenAI QA System",
    description: "Built dual-agent LLM workflow to generate and evaluate test cases for C++ code.",
    stack: ["Python", "FastAPI", "OpenAI", "JavaScript", "LLM"],
    github: null,
    featured: true,
    stars: 28,
    type: "Company"
  },
  {
    name: "Advanced Car Features - State Machine",
    description: "Implemented state machine code in C++ for advanced car features (AEB, LKA, LDW) using Skeleton design pattern. Deployed on x86 and QNX platforms.",
    stack: ["C++", "State Machine", "Google Test", "MATLAB", "QNX", "x86"],
    github: null,
    featured: true,
    stars: 35,
    type: "Company"
  },
];

const skills = [
  { name: "Python", color: "from-emerald-500 to-teal-500" },
  { name: "C++", color: "from-blue-500 to-indigo-500" },
  { name: "PostgreSQL", color: "from-sky-500 to-blue-500" },
  { name: "MySQL", color: "from-blue-600 to-indigo-600" },
  { name: "SQLite", color: "from-indigo-600 to-purple-600" },
  { name: "FastAPI", color: "from-violet-500 to-purple-500" },
  { name: "Django", color: "from-green-500 to-emerald-500" },
  { name: "React", color: "from-cyan-500 to-blue-500" },
  { name: "REST APIs", color: "from-purple-500 to-pink-500" },
  { name: "Git", color: "from-orange-500 to-red-500" },
  { name: "Docker", color: "from-teal-500 to-cyan-500" },
  { name: "GenAI", color: "from-pink-500 to-rose-500" },
  { name: "LLM", color: "from-rose-500 to-red-500" },
  { name: "Jira", color: "from-blue-500 to-cyan-500" },
  { name: "Agile", color: "from-green-500 to-emerald-500" },
  { name: "Scrum", color: "from-emerald-500 to-teal-500" },
  { name: "OOPS", color: "from-violet-500 to-purple-500" },
  { name: "Design Patterns", color: "from-purple-500 to-pink-500" },
  { name: "LLD", color: "from-pink-500 to-rose-500" },
];

const experience = [
  {
    company: "Tata Elxsi",
    role: "Software Engineer",
    duration: "Sep 2023 - Present",
    description: "Working on automotive software development with focus on safety-critical systems, AI/ML integration, and automated testing solutions.",
    technologies: ["C++", "Python", "FastAPI", "REST APIs", "React", "MySQL", "gtest", "QNX", "x86"],
    achievements: [
      "Developed state machine logic for AEB (Autonomous Emergency Braking) system in C++, deployed on QNX/x86, improving vehicle response accuracy by 30%",
      "Wrote unit tests with gtest/gcov, achieving 95% code coverage, reducing production bugs by 40%",
      "Built RESTful APIs using FastAPI for LLM-based automation pipelines, reducing manual test design time by 60%",
      "Designed a multi-agent GenAI system for C++ QA workflows, improving test case generation efficiency by 3x",
      "Led automation testing of safety-critical automotive features using Python and PyTest, increasing test efficiency by 40%",
      "Worked closely with cross-functional teams to triage bugs and deliver high-quality features under Agile processes"
    ]
  }
];

const achievements = [
  {
    title: "GenAI Hackathon Runner-up",
    description: "LLM-based test automation solution",
    icon: Trophy,
    color: "text-amber-400",
  },
  {
    title: "365 Days LeetCode Badge",
    description: "Consistent problem-solving dedication",
    icon: Star,
    color: "text-yellow-400",
  },
  {
    title: "500+ DSA Problems",
    description: "LeetCode, Codeforces, GFG",
    icon: Code2,
    color: "text-emerald-400",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-zinc-800/20 opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              VC
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-6"
            >
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-700/50"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#home"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Available for opportunities
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vipul Chaudhary
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Backend Engineer | GenAI Enthusiast | Problem Solver
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Passionate backend engineer with expertise in AI/ML, scalable systems, and problem-solving.
              I specialize in building intelligent solutions that drive business value and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chaudharyvipul7428@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-emerald-500/20 flex items-center"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1MZ3Uag-20ItjHL04cGVGiAmppzAN4kgt/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-slate-500/50 hover:border-slate-400 text-slate-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-slate-500/20 flex items-center"
            >
              <FileText className="mr-2 w-5 h-5" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mt-16"
          >
            <a
              href="https://github.com/vip9888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-emerald-500/50 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/vipul-chaudhary-82378b194"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-emerald-500/50 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="mailto:chaudharyvipul7428@gmail.com"
              aria-label="Email"
              className="group p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-emerald-500/50 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="https://leetcode.com/u/Vipul7428/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="group p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-emerald-500/50 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Code2 className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A passionate backend engineer with a strong foundation in software development and AI/ML technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a dedicated backend engineer with 1.5+ years of experience building scalable systems and AI-powered solutions.
                My journey in software development started with a passion for solving complex problems and has evolved into
                expertise in Python, Django, FastAPI, and modern AI technologies.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in designing and implementing robust backend architectures, optimizing database performance,
                and integrating AI/ML solutions into production systems. My experience includes working with LLMs,
                building RESTful APIs, and ensuring high code quality through best practices.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Beyond coding, I'm an active problem solver with 500+ DSA problems solved across various platforms.
                I believe in continuous learning and staying updated with the latest technologies and industry trends.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Animated Code Background */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Animated Code Lines */}
                <div className="space-y-3 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-emerald-400 mr-4">1</span>
                    <span className="text-blue-400">class</span>
                    <span className="text-white ml-2">VipulChaudhary</span>
                    <span className="text-gray-500">:</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center ml-4"
                  >
                    <span className="text-emerald-400 mr-4">2</span>
                    <span className="text-purple-400">def</span>
                    <span className="text-white ml-2">__init__</span>
                    <span className="text-gray-500">(</span>
                    <span className="text-white">self</span>
                    <span className="text-gray-500">):</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center ml-8"
                  >
                    <span className="text-emerald-400 mr-4">3</span>
                    <span className="text-white">self</span>
                    <span className="text-gray-500">.</span>
                    <span className="text-white">passion</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-yellow-400">"AI & Backend"</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center ml-8"
                  >
                    <span className="text-emerald-400 mr-4">4</span>
                    <span className="text-white">self</span>
                    <span className="text-gray-500">.</span>
                    <span className="text-white">skills</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-yellow-400">["Python", "AI/ML", "DSA"]</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center ml-8"
                  >
                    <span className="text-emerald-400 mr-4">5</span>
                    <span className="text-white">self</span>
                    <span className="text-gray-500">.</span>
                    <span className="text-white">goal</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-yellow-400">"Build Intelligent Systems"</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-emerald-400 mr-4">6</span>
                    <span className="text-gray-500">#</span>
                    <span className="text-gray-400 ml-2">Always learning, always coding</span>
                  </motion.div>
                </div>

                {/* Floating AI Elements */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-4xl"
                  >
                    🤖
                  </motion.div>
                </div>

                <div className="absolute bottom-4 left-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-2xl"
                  >
                    💻
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My journey in software development and AI engineering
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
                    <div className="flex items-center text-emerald-400 mb-2">
                      <Building className="w-5 h-5 mr-2" />
                      {job.company}
                    </div>
                    <div className="text-slate-400">{job.duration}</div>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{job.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start text-slate-300">
                        <span className="text-emerald-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-slate-300">DSA Problems Solved</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl">
              <div className="text-4xl font-bold text-blue-400 mb-2">1.5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl">
              <div className="text-4xl font-bold text-violet-400 mb-2">4+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing my latest work in AI, backend development, and innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors pr-4">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {project.type}
                    </span>
                    <div className="flex items-center text-amber-400 text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    View on GitHub
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <span className="text-slate-500 text-sm">Company Project - Private Repository</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-emerald-400" />
                  Programming & Databases
                </h3>
                <div className="space-y-2">
                  {skills.slice(0, 6).map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center group cursor-pointer"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-125 transition-transform`}></div>
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                  Frameworks & APIs
                </h3>
                <div className="space-y-2">
                  {skills.slice(6, 12).map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center group cursor-pointer"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-125 transition-transform`}></div>
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-amber-400" />
                  AI & Methodologies
                </h3>
                <div className="space-y-2">
                  {skills.slice(12).map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center group cursor-pointer"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-125 transition-transform`}></div>
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Recognition for my contributions and problem-solving skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl">
                <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-xl font-bold mb-2 text-center">Email</h3>
                <p className="text-slate-300 text-center break-all">chaudharyvipul7428@gmail.com</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl">
                <Users className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-slate-300">Bengaluru, India</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl">
                <Phone className="w-8 h-8 mx-auto mb-4 text-violet-400" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-slate-300">+91 9958454536</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/vipul-chaudhary-82378b194"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Vipul Chaudhary. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
