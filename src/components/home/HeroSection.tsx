"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button"; // Corrected relative path

// Define the photo slides to showcase our work
const photoSlides = [
  {
    id: 1,
    title: "Real Estate Photography",
    before: "/images/real-estate-before.jpg",
    after: "/images/real-estate-after.jpg",
    alt: "Real estate photo enhancement",
  },
  {
    id: 2,
    title: "Virtual Staging",
    before: "/images/virtual-staging-before.jpg",
    after: "/images/virtual-staging-after.jpg",
    alt: "Virtual staging transformation",
  },
  {
    id: 3,
    title: "Virtual Twilight",
    before: "/images/twilight-before.jpg",
    after: "/images/twilight-after.jpg",
    alt: "Day to twilight transformation",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pre-load all images for smoother transitions
  useEffect(() => {
    const imagePromises: Promise<HTMLImageElement>[] = [];

    // Create image loading promises for all slides
    photoSlides.forEach(slide => {
const beforeImg = document.createElement('img');
beforeImg.src = slide.before;

      imagePromises.push(new Promise<HTMLImageElement>((resolve) => { beforeImg.onload = () => resolve(beforeImg); }));

const afterImg = document.createElement('img');
afterImg.src = slide.after;

      imagePromises.push(new Promise<HTMLImageElement>((resolve) => { afterImg.onload = () => resolve(afterImg); }));
    });

    // When all images are loaded, set loaded state to true
    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Auto-toggle between before/after states
    const toggleInterval = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 2500);

    // Auto-advance slides
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % photoSlides.length);
      setShowAfter(false);
    }, 5000);

    return () => {
      clearInterval(toggleInterval);
      clearInterval(slideInterval);
    };
  }, [isLoaded]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Background decorative elements - use will-change for better GPU acceleration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-200/50 blur-3xl will-change-transform" />
        <div className="absolute top-[20%] -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/30 blur-3xl will-change-transform" />
        <div className="absolute bottom-0 right-[20%] h-[250px] w-[250px] rounded-full bg-blue-200/40 blur-3xl will-change-transform" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column: Text content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Transform Your Photos with{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Editing
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg md:mx-0 mx-auto">
                Professional photo enhancement for real estate, photographers, and businesses.
                Our AI technology delivers stunning results in record time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                  <Link href="/signup">Try for free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">24h</p>
                <p className="text-sm text-slate-600">Turnaround</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">50k+</p>
                <p className="text-sm text-slate-600">Photos Edited</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600">99%</p>
                <p className="text-sm text-slate-600">Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right column: Before/After showcase */}
          <motion.div
            className="relative rounded-2xl shadow-xl overflow-hidden aspect-w-16 aspect-h-12 md:aspect-h-9"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="absolute inset-0 bg-slate-900/20 z-10 pointer-events-none" />

            {/* Skeleton loader for images */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
            )}

            {/* Before image */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${showAfter ? 'opacity-0' : 'opacity-100'}`}
              style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
            >
              <Image
                src={photoSlides[activeSlide].before}
                alt={`Before: ${photoSlides[activeSlide].alt}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                crossOrigin="anonymous"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white py-1 px-3 rounded-md text-sm backdrop-blur-sm">
                Before
              </div>
            </div>

            {/* After image */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${showAfter ? 'opacity-100' : 'opacity-0'}`}
              style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
            >
              <Image
                src={photoSlides[activeSlide].after}
                alt={`After: ${photoSlides[activeSlide].alt}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                crossOrigin="anonymous"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute bottom-4 right-4 bg-violet-600/70 text-white py-1 px-3 rounded-md text-sm backdrop-blur-sm">
                After
              </div>
            </div>

            {/* Slide title */}
            <div className="absolute top-4 left-4 right-4 text-center">
              <span className="bg-white/70 backdrop-blur-sm text-slate-900 py-1 px-3 rounded-md text-sm font-medium">
                {photoSlides[activeSlide].title}
              </span>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {photoSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSlide(index);
                    setShowAfter(false);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    activeSlide === index
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
