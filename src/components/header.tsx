"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
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
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const getLinkClass = (section: string) => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return 'text-white';
    const bg = window.getComputedStyle(sectionEl).backgroundColor;
    const isDark = bg === 'rgb(0, 0, 0)';
    
    if (activeSection === section) {
      return isDark ? 'text-white font-bold' : 'text-black font-bold';
    }
    return isDark ? 'text-gray-300' : 'text-gray-600';
  };

  const NavLinks = ({ isMobile = false }) => (
    <>
      {navLinks.map(({ href, label }) => (
        <Button
          key={label}
          asChild
          variant="link"
          className={cn(
            "transition-colors",
             scrolled || activeSection !== 'home' 
              ? (activeSection === href.substring(1) ? 'text-black font-bold underline' : 'text-gray-600')
              : 'text-white',
            isMobile && "w-full justify-start text-black"
          )}
          onClick={() => isMobile && setMobileMenuOpen(false)}
        >
          <a href={href}>{label}</a>
        </Button>
      ))}
    </>
  );

  const headerBgClass = scrolled ? "bg-white/80 shadow-md backdrop-blur-sm" : "bg-transparent";
  const headerTextClass = scrolled || activeSection !== 'home' ? "text-black" : "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBgClass
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className={cn("flex items-center gap-2 font-headline text-xl font-bold", headerTextClass)}>
          <BarChart2 className={cn("h-6 w-6", scrolled || activeSection !== 'home' ? 'text-black' : 'text-white')} />
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
         {isClient && (
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={headerTextClass}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 pt-8">
                  <NavLinks isMobile />
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
