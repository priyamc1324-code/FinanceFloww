"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, BarChart2 } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      let currentSection = 'home';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = link.href.substring(1);
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const headerBgClass = scrolled || (activeSection !== 'home' && !isMobile) ? "bg-white/80 shadow-md backdrop-blur-sm" : "bg-transparent";
  const headerTextClass = scrolled || (activeSection !== 'home' && !isMobile) ? "text-gray-900" : "text-white";


  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBgClass
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className={cn("flex items-center gap-2 font-headline text-xl font-bold", headerTextClass)}>
          <BarChart2 className={cn("h-6 w-6")} />
          <span>FinanceFlow</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
           {navLinks.map(({ href, label }) => (
            <Button
              key={label}
              asChild
              variant="link"
               className={cn(
                "transition-colors hover:underline",
                headerTextClass,
                activeSection === href.substring(1) && "font-bold underline"
              )}
            >
              <a href={href}>{label}</a>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={headerTextClass}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white text-black">
                <SheetHeader>
                  <SheetTitle className="font-headline text-2xl">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 pt-8">
                  {navLinks.map(({ href, label }) => (
                     <Link
                      key={label}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full justify-start text-lg text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
