import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Beglz from "../assets/images/olova.png";
import vitaeImage from "../assets/images/VitaE.png"; 
import Gemini from "../assets/images/Gemini.png";
import image from "../assets/images/image.png";
import preview from "../assets/images/Preview.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "BEGLZ! An AI-Powered Meal Scanning App",
      description:
        "BEGLZ is an innovative AI-based mobile application that scans ingredients, provides nutritional information, and assigns a meal quality score. Leveraging cutting-edge machine learning models, BEGLZ offers personalized health recommendations and fosters community-driven diet comparisons for a healthier lifestyle.",
      tags: ["AI", "Machine Learning", "Mobile App", "Health Tech"],
      links: {
        github: "https://github.com/utsav-1730/Beglz.git",
        demo: "https://www.beglz.com/",
      },
      image: Beglz,
      featured: true,
    },
    {
      title: "Ingestrax - AI-Powered Calorie & Nutrition Tracker",
      description:
        "Ingestrax is an AI-powered calorie and nutrition-tracking application that leverages machine learning and food recognition to provide personalized meal recommendations, detailed macro/micronutrient breakdowns, and health insights.",
      tags: ["AI", "NLP", "Health Tech", "Calorie Tracker"],
      links: {
        github: "https://github.com/utsav-1730/Ingestrax.git",
      },
      image: preview, 
      featured: true,
    },
    {
      title: "VitaE! AI-Powered Resume & Cover Letter Generator",
      description:
        "VitaE is an AI-powered tool that uses fine-tuned language models and NLP to generate customized resumes and cover letters, ensuring precise alignment with job descriptions and boosting application success rates.",
      tags: ["AI", "NLP", "Resume Builder", "Career Tech"],
      links: {
        github: "https://github.com/Chand-d/VitaE.git",
      },
      image: vitaeImage, 
      featured: true,
    },
    {
      title: "Research: Artificial Consciousness in LLMs",
      description:
        "This research explores whether large language models (LLMs) can exhibit emergent consciousness-like behaviors through recursive self-reflection and dynamic memory integration, hinting at the potential for artificial self-awareness.",
      tags: ["AI Research", "NLP", "Consciousness", "Self-Reflection"],
      links: {
        github: "#",
        demo: "https://www.kaggle.com/code/chandgoti/simulated-counsiousness-a-small-step-towards-agi?scriptVersionId=209139333", // Replace with actual demo link if applicable
      },
      image: Gemini, // Replace with image for this project if available
      featured: false,
    },
    {
      title: "Predicting Problematic Internet Usage - Kaggle Project",
      description:
        "This machine learning-based research aimed to develop a predictive model for identifying problematic internet usage patterns and their potential mental health impacts. Using advanced feature selection and class balancing, it enhanced the predictive accuracy.",
      tags: ["Machine Learning", "Predictive Modeling", "Kaggle", "Mental Health"],
      links: {
        demo: "https://www.kaggle.com/code/utsavchangani/new-approach",
      },
      image: image, 
      featured: false,
    },
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    {project.featured && (
                      <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                        Featured Project
                      </div>
                    )}
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
