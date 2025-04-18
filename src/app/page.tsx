'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, ChevronRight, ArrowRight, ExternalLink, Code, Database, Terminal, Cpu, Zap, Award, BookOpen } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 w-full bg-white shadow-md z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhishek Teli
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-left py-2 text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Abhishek Teli
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Artificial Intelligence & Machine Learning Engineer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Passionate about developing AI-driven solutions that solve real-world challenges. 
              Expert in Machine Learning, Deep Learning, NLP, and Generative AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Contact Me <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-medium flex items-center gap-2 hover:bg-purple-50 transition-colors"
              >
                View Projects <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image 
                  src="/images/abhi.png" 
                  alt="Abhishek Teli" 
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am an Artificial Intelligence & Machine Learning Engineer with expertise in Machine Learning, 
              Deep Learning, NLP, and Generative AI. I have a strong background in Python, Node.js, Next.js, 
              and SQL.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I&apos;m passionate about developing AI-driven solutions that solve real-world challenges. 
              My experience includes working with LLMs, AI-powered analytics, and building scalable 
              AI solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently, I&apos;m pursuing my Bachelor of Engineering in Artificial Intelligence & Machine 
              Learning at Alva&apos;s Institute of Engineering & Technology, Mangaluru, with an expected 
              graduation in May 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Python (Advanced)</li>
                <li>JavaScript (Intermediate)</li>
                <li>Node.js (Intermediate)</li>
                <li>SQL (Intermediate)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Cpu className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Machine Learning & AI</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Generative AI</li>
                <li>Computer Vision</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="text-pink-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Data Science & Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Pandas, NumPy</li>
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>OpenAI API, Stable Diffusion XL</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Terminal className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Next.js</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <Zap className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">AI-Powered Voice Clone Detection</h3>
                <p className="text-gray-600 mb-4">
                  Developed an AI system that detects AI-cloned voices vs. human voices.
                  Used Deep Learning & NLP to analyze speech patterns, improving detection accuracy by 94%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Deep Learning</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">NLP</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">PostgreSQL</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                <Cpu className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Generative AI for Sustainable Art & Home Decor</h3>
                <p className="text-gray-600 mb-4">
                  Built a Generative AI model that converts waste materials into art/home decor.
                  Utilized Stable Diffusion XL for high-resolution product visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">Generative AI</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">Stable Diffusion XL</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Computer Vision</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <Database className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Automated SGPA Calculation from Marksheet PDFs</h3>
                <p className="text-gray-600 mb-4">
                  Developed an AI-powered tool to extract and process marks from 2,000+ PDFs in seconds.
                  Implemented OCR & NLP for high-accuracy data extraction.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">OCR</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">NLP</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Automation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                <Terminal className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">AI-Powered Personalized Ad Content Generator</h3>
                <p className="text-gray-600 mb-4">
                  Created an AI model that generates personalized ad content based on market trends.
                  Applied Stable Diffusion & GPT models to optimize digital marketing campaigns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">NLP</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">GPT Models</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Stable Diffusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Frontend Developer (Intern)</h3>
                  <p className="text-purple-600 font-medium">Veda AI</p>
                </div>
                <span className="text-gray-500 text-sm">March 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Designed a clean, responsive, and user-friendly UI using React.js, Next.js, and Tailwind CSS.</li>
                <li>Built personalized views for learners to access courses, notes, and recommendations.</li>
                <li>Integrated frontend components with backend via API calls, improving overall user satisfaction.</li>
                <li>Created an intuitive dashboard for real-time analytics and course management.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">AI/ML Developer</h3>
                  <p className="text-purple-600 font-medium">Veda AI</p>
                </div>
                <span className="text-gray-500 text-sm">March 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Developed an integrated NLP-based chatbot to answer user queries contextually, generate summarized notes, and recommend relevant YouTube videos dynamically.</li>
                <li>Used SQL for logging user queries and responses, enabling model tuning and insights generation.</li>
                <li>Utilized chatbot logs and usage patterns stored in SQL databases to fine-tune recommendations.</li>
                <li>Collaborated with the frontend team to create a seamless user experience for AI features.</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-12 mb-6 text-center text-gray-800">Internships & Training</h3>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Machine Learning & Soft Skills Trainee</h3>
                  <p className="text-purple-600 font-medium">Rooman Technologies</p>
                </div>
                <span className="text-gray-500 text-sm">September 2024 - March 2025</span>
              </div>
              <h4 className="font-semibold text-gray-800 mt-4 mb-2">IBM - AI & Machine Learning Engineer</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Completed project-based learning in Machine Learning, Deep Learning, and Data Science.</li>
                <li>Built and trained ML models using Python, Scikit-learn, and TensorFlow.</li>
                <li>Gained hands-on experience in SQL for data preprocessing and model integration.</li>
              </ul>
              <h4 className="font-semibold text-gray-800 mt-4 mb-2">Wadhwani Foundation - Soft Skills Development Program</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Improved core soft skills including communication, teamwork, and leadership.</li>
                <li>Participated in mock interviews, presentations, and resume workshops.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Other Internships</h3>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-medium">COMEDKARES:</span> Innovation & Design Thinking Internship</li>
                <li><span className="font-medium">Salesforce:</span> Virtual Internship - Administrator Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Bachelor of Engineering</h3>
              </div>
              <p className="text-purple-600 font-medium mb-2">Artificial Intelligence & Machine Learning</p>
              <p className="text-gray-700 mb-1">Alva&apos;s Institute of Engineering & Technology, Mangaluru</p>
              <p className="text-gray-600 mb-2">Graduation: May 2025</p>
              <p className="font-medium text-gray-800">CGPA: 8.00</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <BookOpen className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Higher Secondary Education</h3>
              </div>
              <p className="text-purple-600 font-medium mb-2">Science - PCM & Computer Science</p>
              <p className="text-gray-700 mb-1">Reva University, Bengaluru</p>
              <p className="text-gray-600 mb-2">Completed: July 2021</p>
              <p className="font-medium text-gray-800">Percentage: 92%</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <BookOpen className="text-pink-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Secondary Education</h3>
              </div>
              <p className="text-purple-600 font-medium mb-2">10th Grade</p>
              <p className="text-gray-700 mb-1">Pius Memorial High School, Pune</p>
              <p className="text-gray-600 mb-2">Completed: March 2019</p>
              <p className="font-medium text-gray-800">Percentage: 83.2%</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center space-x-4">
              <Award className="text-blue-500 flex-shrink-0" size={24} />
              <p className="text-gray-700">NPTEL - Joy of Computing Using Python</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center space-x-4">
              <Award className="text-purple-500 flex-shrink-0" size={24} />
              <p className="text-gray-700">NASSCOM - Artificial Intelligence Certification</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center space-x-4">
              <Award className="text-pink-500 flex-shrink-0" size={24} />
              <p className="text-gray-700">Salesforce - Certified Administrator</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mt-12 mb-6 text-center text-gray-800">Awards & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start space-x-4">
                <Award className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Hackathon Finalist</h4>
                  <p className="text-gray-700">EG Software & InUnity | COMEDKARES | National Hackathon at VVCE</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start space-x-4">
                <Award className="text-purple-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Mentoring Experience</h4>
                  <p className="text-gray-700">Guided students in Python Hackathons & AI/ML sessions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 md:col-span-2">
              <div className="flex items-start space-x-4">
                <Award className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Performing Arts</h4>
                  <p className="text-gray-700">Represented India in Dollu Kunita at Bharat Scouts & Guides International Jamboree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-purple-500 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:abhishekashokteli1972@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                        abhishekashokteli1972@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-blue-500 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/abhishek-teli" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                        Connect on LinkedIn <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                      <span className="text-purple-600 text-xs">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-gray-700">Chakan (410501), Pune, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Open to Opportunities</h3>
                <p className="mb-4">
                  I&apos;m currently looking for AI/ML Research, Data Science, and AI-powered Software Development roles.
                </p>
                <p>
                  Passionate about AI for social impact, automation, and ethical AI solutions.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhishek Teli
            </p>
            <p className="text-gray-600 text-sm">AI & ML Engineer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:abhishekashokteli1972@gmail.com"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-teli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Abhishek Teli. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}