"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  RiFacebookCircleFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill
} from "react-icons/ri";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about/team" },
  { name: "Careers", href: "/careers" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Photo Editing", href: "/services/photo-editing" },
  { name: "Virtual Staging", href: "/services/virtual-staging" },
  { name: "Virtual Twilight", href: "/services/virtual-twilight" },
  { name: "Decluttering", href: "/services/decluttering" },
  { name: "Lawn Replacement", href: "/services/lawn-replacement" },
  { name: "Video Editing", href: "/services/video-editing" },
  { name: "AI Enhancement", href: "/services/ai-enhancement" },
];

const resourceLinks = [
  { name: "Help Center", href: "/help" },
  { name: "Blog", href: "/blog" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "FAQ", href: "/faq" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: RiFacebookCircleFill },
  { name: "Twitter", href: "https://twitter.com", icon: RiTwitterXFill },
  { name: "Instagram", href: "https://instagram.com", icon: RiInstagramFill },
  { name: "LinkedIn", href: "https://linkedin.com", icon: RiLinkedinBoxFill },
  { name: "YouTube", href: "https://youtube.com", icon: RiYoutubeFill },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Newsletter */}
        <div className="bg-violet-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-violet-900 mb-3">
              Join our newsletter
            </h3>
            <p className="text-violet-700 mb-6 max-w-2xl mx-auto">
              Stay up to date with the latest photo editing tips, trends, and special offers
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                AllPhotoEditing
              </span>
            </Link>
            <p className="text-slate-600 mb-6">
              AI-powered photo editing and enhancement for real estate, professional photographers, and businesses.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-slate-500 hover:text-violet-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links (Only visible on larger screens) */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Address */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2025 AllPhotoEditing. All rights reserved.
          </p>
          <address className="text-slate-500 text-sm not-italic">
            123 Photo Lane, Suite 400, San Francisco, CA 94103
          </address>
        </div>
      </div>
    </footer>
  );
}
