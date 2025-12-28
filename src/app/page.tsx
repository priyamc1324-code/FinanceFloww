
"use client";

import Image from "next/image";
import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Code,
  Database,
  FileText,
  Linkedin,
  Mail,
  Phone,
  Table,
  TrendingUp,
  Trophy,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import FinancialBackground from "@/components/financial-background";
import { useIsMobile } from "@/hooks/use-mobile";

const aboutImage = PlaceHolderImages.find((img) => img.id === 'profile-about');
const contactImage = PlaceHolderImages.find((img) => img.id === 'profile-contact');

const projects = [
  {
    title: "A Three Statement Financial Model",
    description: "• Foundational interconnected model of Income Statement, Balance Sheet, and Cash Flow.",
    link: "https://docs.google.com/spreadsheets/d/1kwMfAqfVWhnHLtKcYRn7V2D7jBS-OZ3ACCVTRIEYOjs/edit?usp=sharing",
  },
  {
    title: "Basic Comparable Comps Model",
    description: "• Relative valuation using market multiples. • Industry benchmarking.",
    link: "https://docs.google.com/spreadsheets/d/1kDff1Gp9vKbPg18E8a3tj67rOhiLmIfuvepsyMv5I5U/edit?usp=sharing",
  },
  {
    title: "Discounted Cash flow Valuation ( DCF )",
    description: "• Intrinsic value estimation. • Future cash flow forecasting. • Present value discounting.",
    link: "https://docs.google.com/spreadsheets/d/1r40DyjRoooLnMTJgE2V9f-7ap2KqdwnWGwsefzsv1Fo/edit?usp=sharing",
  },
  {
    title: "Advanced Trading Comps Model",
    description: "• Benchmarks Tesco & Sainsbury’s. • Uses LTM financials & normalized income. • Sector-relevant multiples for accuracy.",
    link: "https://docs.google.com/spreadsheets/d/1oVlCkSajWWbvtoAKD4ewbBdEYf_oLtyTfIgY7wSZQ90/edit?usp=sharing",
  },
  {
    title: "Equity Research Report",
    description: "• Waaree Renewables • Ratio Analysis • Dupont Analysis • ROE Vs ROCE • Financial Dashboard",
    link: "/Equity_Research_Report.pdf",
  },
  {
    title: "Profit forecast calculator using regression",
    description: "An analysis using regression to calculate and forecast profit.",
    link: "https://priyam709.github.io/Profit-Calculator-Using-Regression/",
  },
];

const skills = [
  "Financial Modelling",
  "Valuation",
  "Equity Research",
  "Advanced Excel",
  "Python For Finance",
  "Machine Learning",
  "Statistics",
  "Prompt Engineering",
];

const tools = [
  { name: "Python", icon: Code },
  { name: "Excel", icon: Table },
  { name: "SQL", icon: Database },
  { name: "Tableau", icon: TrendingUp },
];

const certifications = [
  { name: "Microsoft Advanced Excel", issuer: "Microsoft" },
  { name: "CFI - FMVA (Financial Modeling & Valuation Analyst)", issuer: "Corporate Finance Institute" },
  { name: "Head of Finance", issuer: "Analyiate" },
  { name: "Internship Completion", issuer: "Lernx" },
];

const education = [
    { name: "BBA Decision Science", institution: "Christ University" }
];

const awards = [
  { name: "B-Plan Pitch Finalist", event: "IIM Indore" },
  { name: "Case Study Challenge Participant", event: "IIM Rohtak" },
  { name: "Featured in Times of India", event: "Academic Achievement" },
];

const workExperience = [
  {
    company: "Mu Sigma",
    role: "Full-Time Intern",
    duration: "2025 – Present",
    description: [
      "Delivered data-driven analytics for a Fortune 500 client on asset reliability, cost, and ROIC.",
      "Developed a Python-based predictive maintenance model to forecast equipment failures.",
      "Analyzed maintenance cycles to identify a potential 15-20% reduction in operating costs.",
      "Guided capital allocation and improved efficiency by 10-15% through asset performance analysis.",
    ],
  },
];

const learningJourney = [
    {
      icon: FileText,
      title: "A Three Statement FinancialModel",
      description: "The foundational interconnected model of the Income Statement, Balance Sheet, and Cash Flow Statement.",
      link: "/A Three - Statement Financial Model.pdf",
    },
    {
      icon: TrendingUp,
      title: "Understanding Valuation Multiples",
      description: "Learn how to select and apply valuation multiples based on business models, ensuring consistency and avoiding common pitfalls for accurate valuation.",
      link: "/Understanding Valuation Multiples.pdf",
    },
    {
      icon: BookOpen,
      title: "Understanding How to Value Banks",
      description: "Explore why traditional DCF fails for banks and how equity-based models like DDM and residual income provide a more accurate valuation.",
      link: "/Understanding How To Value Banks.pdf",
    },
    {
      icon: FileText,
      title: "Profit Calculator Using Regression - Waaree Renewables",
      description: "An analysis using regression to calculate and forecast profit for Waaree Renewables.",
      link: "/Profit Calculator Using Regression.pdf",
    },
    {
      icon: TrendingUp,
      title: "Monte Carlo Simulation - Amazon Stock",
      description: "A simulation model to forecast Amazon’s stock price by modeling uncertainty and analyzing probable outcomes.",
      link: "/Monte_Carlo_Amazon.pdf",
    },
];

const SkillsCircle = ({ items, open }: { items: string[]; open: boolean }) => {
  const angleStep = 180 / (items.length - 1);
  return (
    <div className={`absolute w-full h-full transition-transform duration-500 ${open ? 'scale-100' : 'scale-0'}`}>
      {items.map((item, index) => {
        const angle = - (angleStep * index);
        return (
          <div
            key={item}
            className="absolute top-1/2 left-1/2 w-48 h-12 origin-[0_50%]"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-2 rounded-lg text-center" style={{ transform: `rotate(${-angle}deg)`}}>
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ToolsCircle = ({ items, open }: { items: { name: string; icon: React.ElementType }[], open: boolean }) => {
  const angleStep = 180 / (items.length - 1);
  return (
    <div className={`absolute w-full h-full transition-transform duration-500 ${open ? 'scale-100' : 'scale-0'}`}>
      {items.map((item, index) => {
        const angle = - (angleStep * index);
        const Icon = item.icon;
        return (
          <div
            key={item.name}
            className="absolute top-1/2 left-1/2 w-48 h-12 origin-[0_50%]"
            style={{ transform: `rotate(${angle}deg)` }}
          >
             <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-2 rounded-lg" style={{ transform: `rotate(${-angle}deg)`}}>
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default function Home() {
  const isMobile = useIsMobile();
  const [skillsOpen, setSkillsOpen] = React.useState(false);
  const [toolsOpen, setToolsOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative h-screen w-full">
          <FinancialBackground />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Priyam Chandan
            </h1>
            <p className="mt-4 font-body text-sm uppercase tracking-widest text-gray-300 md:text-base">
              Finance &amp; Analytics | Valuation | Equity Research | Financial Modelling | Python For Financial Analysis
            </p>
            
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Link href="#projects" passHref>
                <Button size="lg" className="w-48 bg-primary text-primary-foreground hover:bg-primary/90">
                  View Projects
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="w-48 border-white bg-transparent text-white hover:bg-white hover:text-black">
                    Contact Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white text-black">
                  <DialogHeader className="text-center">
                    <DialogTitle className="font-bold">Get in Touch</DialogTitle>
                    <DialogDescription className="text-black font-bold">
                      I&apos;d love to hear from you!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center space-y-4 py-4">
                    <a href="mailto:priyamc1324@gmail.com" className="flex items-center gap-4 text-lg font-bold text-black hover:text-gray-700 transition-colors">
                      <Mail className="h-6 w-6"/>
                      <span>priyamc1324@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/priyam-chandan-568835285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-bold text-black hover:text-gray-700 transition-colors">
                      <Linkedin className="h-6 w-6"/>
                      <span>Connect on LinkedIn</span>
                    </a>
                    <a href="tel:+916360840120" className="flex items-center gap-4 text-lg font-bold text-black hover:text-gray-700 transition-colors">
                      <Phone className="h-6 w-6"/>
                      <span>+91 6360840120</span>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <Image
                src="/priyam_profile_photo.jpeg"
                width={400}
                height={400}
                alt="About Me"
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                About Me
              </h2>
              <p className="text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold text-justify">
                I am a passionate and driven finance student with a strong quantitative background and a keen interest in the intersection of finance and technology. My journey has equipped me with a solid foundation in financial modeling, valuation, and data analysis using Python. I thrive on dissecting complex financial problems and building models that provide clear, actionable insights. What sets me apart is my ability to bridge the gap between traditional finance principles and modern analytical techniques. This portfolio showcases my key projects, skills, and the continuous learning journey that shapes my professional growth.
              </p>
            </div>
          </div>
        </section>

        <section id="journey" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Learning Journey
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {learningJourney.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full bg-gray-200 text-black transform transition-transform duration-300 hover:scale-105">
                        <CardHeader className="items-center text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground mb-4">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="font-bold">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow">
                          <p>{item.description}</p>
                        </CardContent>
                        <CardFooter className="justify-center mt-auto">
                          <Button asChild variant="link" className="p-0 h-auto text-black font-bold">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white text-black border-white hover:bg-gray-200 hover:text-black sm:-left-12 -left-4" />
              <CarouselNext className="bg-white text-black border-white hover:bg-gray-200 hover:text-black sm:-right-12 -right-4" />
            </Carousel>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <Card key={index} className="flex flex-col h-full bg-background text-foreground">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                          <Button asChild variant="link" className="p-0 h-auto text-white">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white text-black border-white hover:bg-gray-200 hover:text-black sm:-left-12 -left-4" />
              <CarouselNext className="bg-white text-black border-white hover:bg-gray-200 hover:text-black sm:-right-12 -right-4" />
            </Carousel>
          </div>
        </section>

        <section id="skills" className="relative w-full py-12 md:py-24 lg:py-32 text-foreground overflow-hidden">
          <Image
              src="/new_background.png"
              alt="Skills and Tools background"
              fill
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 flex flex-col items-center justify-center space-y-12 h-96 md:h-auto">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Skills & Tools
              </h2>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
              <div
                className="relative flex items-center justify-center w-64 h-32 md:w-96 md:h-48 cursor-pointer"
                onClick={() => { setSkillsOpen(!skillsOpen); setToolsOpen(false); }}
              >
                <div className={`absolute transition-opacity duration-300 ${skillsOpen ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="font-headline text-2xl font-bold text-white text-center">Skills</h3>
                </div>
                <SkillsCircle items={skills} open={skillsOpen} />
              </div>
              <div
                className="relative flex items-center justify-center w-64 h-32 md:w-96 md:h-48 cursor-pointer"
                onClick={() => { setToolsOpen(!toolsOpen); setSkillsOpen(false); }}
              >
                <div className={`absolute transition-opacity duration-300 ${toolsOpen ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="font-headline text-2xl font-bold text-white text-center">Tools I Use</h3>
                </div>
                <ToolsCircle items={tools} open={toolsOpen} />
              </div>
            </div>
          </div>
        </section>


        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6">
             <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education &amp; Achievements
            </h2>
            {isMobile ? (
              <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                <AccordionItem value="work-experience">
                  <AccordionTrigger className="text-black hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-semibold">Work Experience</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {workExperience.length > 0 ? (
                      <ul className="space-y-4 pt-4">
                        {workExperience.map((exp, i) => (
                          <li key={i} className="flex flex-col items-start rounded-lg bg-background p-4 text-white">
                            <div className="w-full flex justify-between items-start">
                              <div>
                                <p className="font-bold">{exp.company}</p>
                                <p className="text-sm text-muted-foreground">{exp.role}</p>
                              </div>
                              <p className="text-xs text-muted-foreground">{exp.duration}</p>
                            </div>
                            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                              {exp.description.map((point, j) => (
                                <li key={j}>{point}</li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex items-center justify-center rounded-lg bg-background p-4 text-white mt-4">
                        <p className="text-muted-foreground">Your work experiences will appear here.</p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="certifications">
                  <AccordionTrigger className="text-black hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-semibold">Certifications</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 pt-4">
                      {certifications.map((cert, i) => (
                        <li key={i} className="flex items-center justify-between rounded-lg bg-background p-4 text-white">
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            </div>
                            <Button variant="ghost" size="icon" asChild><a href="#"><ArrowUpRight/></a></Button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="education">
                  <AccordionTrigger className="text-black hover:no-underline">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      <span className="font-semibold">Education</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 pt-4">
                      {education.map((edu, i) => (
                        <li key={i} className="flex items-center rounded-lg bg-background p-4 text-white">
                            <p className="font-medium">{edu.name} - <span className="text-muted-foreground">{edu.institution}</span></p>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="awards">
                  <AccordionTrigger className="text-black hover:no-underline border-b-0">
                     <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      <span className="font-semibold">Awards</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 pt-4">
                      {awards.map((award, i) => (
                        <li key={i} className="flex items-center rounded-lg bg-background p-4 text-white">
                            <p className="font-medium">{award.name} - <span className="text-muted-foreground">{award.event}</span></p>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Tabs defaultValue="work-experience" className="mx-auto max-w-4xl">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 bg-muted text-muted-foreground h-auto md:h-10">
                  <TabsTrigger value="work-experience"><Briefcase className="mr-2 h-4 w-4"/>Work Experience</TabsTrigger>
                  <TabsTrigger value="certifications"><Briefcase className="mr-2 h-4 w-4"/>Certifications</TabsTrigger>
                  <TabsTrigger value="education"><BookOpen className="mr-2 h-4 w-4"/>Education</TabsTrigger>
                  <TabsTrigger value="awards"><Trophy className="mr-2 h-4 w-4"/>Awards</TabsTrigger>
                </TabsList>
                <TabsContent value="work-experience" className="mt-6">
                  {workExperience.length > 0 ? (
                    <ul className="space-y-4">
                      {workExperience.map((exp, i) => (
                        <li key={i} className="flex flex-col items-start rounded-lg bg-background p-4 text-white">
                          <div className="w-full flex justify-between items-start">
                            <div>
                              <p className="font-bold text-lg">{exp.company}</p>
                              <p className="text-md text-muted-foreground">{exp.role}</p>
                            </div>
                            <p className="text-sm text-muted-foreground">{exp.duration}</p>
                          </div>
                          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-300">
                            {exp.description.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex items-center justify-center rounded-lg bg-background p-4 text-white">
                      <p className="text-muted-foreground">Your work experiences will appear here.</p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="certifications" className="mt-6">
                  <ul className="space-y-4">
                    {certifications.map((cert, i) => (
                      <li key={i} className="flex items-center justify-between rounded-lg bg-background p-4 text-white">
                          <div>
                            <p className="font-medium">{cert.name}</p>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                          <Button variant="ghost" size="icon" asChild><a href="#"><ArrowUpRight/></a></Button>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="education" className="mt-6">
                  <ul className="space-y-4">
                    {education.map((edu, i) => (
                      <li key={i} className="flex items-center rounded-lg bg-background p-4 text-white">
                          <p className="font-medium">{edu.name} - <span className="text-muted-foreground">{edu.institution}</span></p>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="awards" className="mt-6">
                  <ul className="space-y-4">
                    {awards.map((award, i) => (
                      <li key={i} className="flex items-center rounded-lg bg-background p-4 text-white">
                          <p className="font-medium">{award.name} - <span className="text-muted-foreground">{award.event}</span></p>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </section>

        <section id="resume" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Resume</h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Interested in a more detailed look at my experience? Download my full resume.
                </p>
                <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/Priyam_Cv.pdf" download>Download CV / Resume</a>
                </Button>
            </div>
        </section>


        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-2">
                 {contactImage && <Image
                    src={contactImage.imageUrl}
                    width={100}
                    height={100}
                    alt="Contact"
                    className="rounded-full"
                    data-ai-hint={contactImage.imageHint}
                  />}
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="text-muted-foreground">I’d love to hear from you! Whether you have a question or just want to connect.</p>
              </div>
              <div className="space-y-4">
                <a href="mailto:priyamc1324@gmail.com" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <Mail className="h-6 w-6"/>
                  <span>priyamc1324@gmail.com</span>
                </a>
                 <a href="https://www.linkedin.com/in/priyam-chandan-568835285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6"/>
                  <span>Connect on LinkedIn</span>
                </a>
                 <a href="tel:+916360840120" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <Phone className="h-6 w-6"/>
                  <span>+91 6360840120</span>
                </a>
              </div>
            </div>
            <div className="w-full">
              <ContactForm/>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6 bg-background text-foreground">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} FinanceFlow Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

    