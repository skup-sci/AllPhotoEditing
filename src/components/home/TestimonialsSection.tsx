"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Real Estate Photographer",
    company: "Elite Properties",
    avatar: "/images/testimonial-avatar-1.jpg",
    rating: 5,
    quote: "AllPhotoEditing has completely transformed our workflow. The AI-powered enhancements are incredibly accurate, and the turnaround time is faster than any service we've used before.",
  },
  {
    id: 2,
    name: "Michael Reynolds",
    role: "Marketing Director",
    company: "Luxury Homes Group",
    avatar: "/images/testimonial-avatar-2.jpg",
    rating: 5,
    quote: "The quality of their virtual staging is remarkable. Our clients can't believe the rooms were empty to begin with. The collaborative tools have also made it easy for our team to provide feedback and manage projects.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Independent Photographer",
    company: "Chen Photography",
    avatar: "/images/testimonial-avatar-3.jpg",
    rating: 4,
    quote: "As a solo photographer, the AI enhancement features have been a game-changer. I can deliver professional edits to my clients in a fraction of the time it used to take me to edit manually.",
  },
  {
    id: 4,
    name: "David Patel",
    role: "CTO",
    company: "PropertyTech Solutions",
    avatar: "/images/testimonial-avatar-4.jpg",
    rating: 5,
    quote: "We integrated AllPhotoEditing with our property management platform, and the API was straightforward to work with. Our users are thrilled with the editing capabilities now available directly in our app.",
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Realtor",
    company: "Coastal Realty",
    avatar: "/images/testimonial-avatar-5.jpg",
    rating: 5,
    quote: "The twilight conversions look so natural, you'd never know they weren't taken at dusk. My listings get significantly more engagement when I use their editing services.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            We've helped thousands of photographers and real estate professionals
            enhance their images with our AI-powered editing tools.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="border-none shadow-none">
                      <CardContent className="p-6 text-center">
                        {/* Quote */}
                        <div className="mb-8 relative">
                          <div className="absolute -top-8 left-0 text-6xl text-violet-200">
                            "
                          </div>
                          <div className="absolute -bottom-8 right-0 text-6xl text-violet-200">
                            "
                          </div>
                          <p className="text-xl md:text-2xl text-slate-700 italic relative z-10 px-8">
                            {testimonial.quote}
                          </p>
                        </div>

                        {/* Author info */}
                        <div className="flex flex-col items-center">
                          <Avatar className="w-16 h-16 mb-3 border-2 border-violet-100">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} crossOrigin="anonymous" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <StarRating rating={testimonial.rating} />
                          <h4 className="font-semibold text-lg mt-2">{testimonial.name}</h4>
                          <p className="text-slate-600">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative inset-0 translate-y-0 rounded-full" />
              <CarouselNext className="relative inset-0 translate-y-0 rounded-full" />
            </div>
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              1k+
            </p>
            <p className="text-slate-600">Photos Edited Daily</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              98%
            </p>
            <p className="text-slate-600">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              100+
            </p>
            <p className="text-slate-600">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              24h
            </p>
            <p className="text-slate-600">Turnaround Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
