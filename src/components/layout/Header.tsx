"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  RiMenu3Fill,
  RiArrowRightSLine,
  RiArrowDownSLine
} from "react-icons/ri";

const navigationLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Photo Editing", href: "/services/photo-editing" },
      { name: "Virtual Staging", href: "/services/virtual-staging" },
      { name: "Virtual Twilight", href: "/services/virtual-twilight" },
      { name: "Decluttering", href: "/services/decluttering" },
      { name: "Lawn Replacement", href: "/services/lawn-replacement" },
      { name: "Video Editing", href: "/services/video-editing" },
      { name: "AI Enhancement", href: "/services/ai-enhancement" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            AllPhotoEditing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigationLinks.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-3 py-2 text-sm flex items-center gap-1 ${
                      pathname.includes(item.href)
                        ? "text-violet-600"
                        : "text-slate-700 hover:text-violet-600"
                    }`}
                  >
                    {item.name}
                    <RiArrowDownSLine className="text-lg" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {item.submenu.map((subitem) => (
                    <DropdownMenuItem key={subitem.name} asChild>
                      <Link
                        href={subitem.href}
                        className="flex items-center justify-between w-full cursor-pointer"
                      >
                        {subitem.name}
                        <RiArrowRightSLine />
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={item.href}
                key={item.name}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === item.href
                    ? "text-violet-600 font-medium"
                    : "text-slate-700 hover:text-violet-600"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign up free</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <RiMenu3Fill className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigationLinks.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="flex flex-col">
                      <div className="font-medium mb-2">{item.name}</div>
                      <div className="pl-4 flex flex-col gap-2 border-l border-slate-200">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="text-slate-600 hover:text-violet-600 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium ${
                        pathname === item.href
                          ? "text-violet-600"
                          : "text-slate-700 hover:text-violet-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign up free</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
