"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "react-icons/ri";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Photos?
              </h2>
              <p className="text-xl text-violet-100 mb-8 max-w-lg">
                Join thousands of photographers and real estate professionals who trust
                AllPhotoEditing for stunning, AI-powered photo enhancements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup" className="flex items-center gap-2">
                    Get started for free
                    <RiArrowRightLine className="text-lg" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="/contact">Contact sales</Link>
                </Button>
              </div>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 grid gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-violet-100">No credit card required to start</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-violet-100">10 free edits on signup</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-violet-100">Cancel anytime</p>
              </div>
            </motion.div>
          </div>

          {/* Right content: Pricing overview */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Simple, Transparent Pricing</h3>

            <div className="space-y-6">
              {/* Basic Plan */}
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-lg">Starter</h4>
                    <p className="text-violet-200 text-sm">For individual photographers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$29</div>
                    <div className="text-violet-200 text-sm">per month</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100 photos per month
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24-hour turnaround
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic AI enhancement
                  </li>
                </ul>
              </div>

              {/* Pro Plan */}
              <div className="bg-white/20 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-20 w-20 bg-violet-400 rotate-45"></div>
                <div className="absolute top-0 right-0 bg-violet-500 text-xs px-3 py-1">Popular</div>

                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-lg">Professional</h4>
                    <p className="text-violet-200 text-sm">For growing businesses</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$79</div>
                    <div className="text-violet-200 text-sm">per month</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    500 photos per month
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    12-hour turnaround
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced AI features
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Team collaboration
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link
                  href="/pricing"
                  className="text-sm inline-flex items-center gap-1 hover:underline"
                >
                  View all pricing plans
                  <RiArrowRightLine />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
