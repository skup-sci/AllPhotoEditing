"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RiArrowRightLine,
  RiImageEditLine,
  RiHomeGearLine,
  RiSunLine,
  RiScissorsCutLine,
  RiPlantLine,
  RiVideoLine,
  RiRobot2Line
} from "react-icons/ri";

const services = [
  {
    id: "photo-editing",
    title: "Photo Editing",
    description: "Professional enhancement for real estate photos with color correction, exposure adjustment, and sky replacement.",
    icon: RiImageEditLine,
    link: "/services/photo-editing",
    image: "/images/service-photo-editing.jpg",
    color: "from-blue-500 to-violet-500",
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    description: "Transform empty rooms with beautiful, realistic furniture and decor to help buyers visualize the space.",
    icon: RiHomeGearLine,
    link: "/services/virtual-staging",
    image: "/images/service-virtual-staging.jpg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "virtual-twilight",
    title: "Virtual Twilight",
    description: "Convert daytime exterior photos into stunning twilight scenes with warm glowing windows and dramatic skies.",
    icon: RiSunLine,
    link: "/services/virtual-twilight",
    image: "/images/service-virtual-twilight.jpg",
    color: "from-orange-500 to-pink-500",
  },
  {
    id: "decluttering",
    title: "Decluttering",
    description: "Remove unwanted items and distractions from your photos to create clean, appealing spaces.",
    icon: RiScissorsCutLine,
    link: "/services/decluttering",
    image: "/images/service-decluttering.jpg",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "lawn-replacement",
    title: "Lawn Replacement",
    description: "Replace patchy, brown lawns with lush, green grass to enhance curb appeal and property value.",
    icon: RiPlantLine,
    link: "/services/lawn-replacement",
    image: "/images/service-lawn-replacement.jpg",
    color: "from-green-500 to-lime-500",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional video enhancement with color grading, stabilization, and transitions for property tours.",
    icon: RiVideoLine,
    link: "/services/video-editing",
    image: "/images/service-video-editing.jpg",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "ai-enhancement",
    title: "AI Enhancement",
    description: "Leverage AI technology for automated photo improvements, smart object removal, and intelligent sky replacement.",
    icon: RiRobot2Line,
    link: "/services/ai-enhancement",
    image: "/images/service-ai-enhancement.jpg",
    color: "from-indigo-500 to-violet-500",
  },
];

// Animation variants for staggered animations - simplified for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1 for faster animations
      duration: 0.3,        // Reduced duration
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" } // Faster, with optimized easing
  },
};

// Preload images before rendering for better performance
const preloadImages = (): Promise<void[]> => {
  return Promise.all(
    services.map(service => {
      return new Promise<void>((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = service.image;
      });
    })
  );
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Current view status:', { isInView, imagesPreloaded });
    setLoading(true);
    preloadImages()
      .then(() => {
        setImagesPreloaded(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to preload images:', err);
        setError('Failed to load images');
        setLoading(false);
        // Still show content even if preload fails
        setImagesPreloaded(true);
      });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Photo Editing Services
          </h2>
          <p className="text-xl text-slate-600">
            Transform your property photos with our comprehensive range of professional editing services.
          </p>
        </div>

        {/* Services grid - using LazyMotion for performance */}
        <LazyMotion features={domAnimation}>
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            // Remove the imagesPreloaded condition to ensure content shows
            animate={isInView ? "visible" : "hidden"}
          >
            {loading && <div>Loading services...</div>}
            {error && <div>Error: {error}</div>}
            {services.map((service) => (
              <m.div key={service.id} variants={itemVariants}>
                <Card className="group h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80 z-10`} />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      crossOrigin="anonymous"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <service.icon className="h-6 w-6 text-slate-900" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" asChild className="group/btn">
                      <Link href={service.link} className="flex items-center gap-2">
                        Learn more
                        <RiArrowRightLine className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </m.div>
            ))}
          </m.div>
        </LazyMotion>

        {/* All services CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
