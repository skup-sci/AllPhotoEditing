"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  RiRobot2Line,
  RiTimeLine,
  RiPaletteLine,
  RiTeamLine,
  RiDashboardLine,
  RiLightbulbFlashLine
} from "react-icons/ri";

const features = [
  {
    icon: RiRobot2Line,
    title: "AI-Powered Editing",
    description: "Our advanced AI algorithms analyze and enhance your photos automatically, delivering consistent, high-quality results every time.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: RiTimeLine,
    title: "Real-Time Preview",
    description: "See changes instantly with our real-time preview system. Make adjustments and see the results immediately.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: RiPaletteLine,
    title: "Style Presets",
    description: "Choose from dozens of professional style presets or create your own custom styles to maintain brand consistency.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: RiTeamLine,
    title: "Collaborative Workflow",
    description: "Work seamlessly with your team. Share projects, provide feedback, and manage revisions in one place.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: RiDashboardLine,
    title: "Centralized Dashboard",
    description: "Manage all your projects from a single, intuitive dashboard. Track progress, review edits, and access analytics.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: RiLightbulbFlashLine,
    title: "Smart Suggestions",
    description: "Receive intelligent enhancement suggestions based on your image content and industry best practices.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent z-10" />

            <Image
              src="/images/ai-dashboard-preview.jpg"
              alt="AI-powered photo editing dashboard"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              crossOrigin="anonymous"
            />

            {/* Floating UI elements for visual appeal */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <span className="text-xs font-medium">AI Processing</span>
              </div>
              <div className="w-32 bg-slate-100 h-2 rounded-full mt-2">
                <div className="bg-violet-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 z-20"
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500">Enhancement Score</span>
                <span className="text-lg font-bold text-violet-600">98%</span>
                <div className="flex space-x-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Features List */}
          <div>
            <div className="mb-8 max-w-3xl">
              <h2 className="flex flex-wrap items-center gap-2 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                  AI-Powered Features That Set Us Apart
                </span>
                <span className="text-lg text-violet-600 font-semibold animate-pulse inline-flex items-center">
                  Coming Soon!
                </span>
              </h2>
              <p className="text-xl text-slate-600">
                Our cutting-edge technology delivers faster, more consistent results while giving you complete creative control.
              </p>
            </div>

            <motion.div
              ref={ref}
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${feature.color} flex-shrink-0`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
