"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Linkedin,
  Mail,
  Phone,
  Trophy,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import FinancialBackground from "@/components/financial-background";

const aboutImage = PlaceHolderImages.find((img) => img.id === 'profile-about');
const contactImage = PlaceHolderImages.find((img) => img.id === 'profile-contact');

const projects = [
  {
    title: "A Three Statement Financial Model",
    description: "The foundational interconnected model of the Income Statement, Balance Sheet, and Cash Flow Statement.",
    link: "https://docs.google.com/spreadsheets/d/1kwMfAqfVWhnHLtKcYRn7V2D7jBS-OZ3ACCVTRIEYOjs/edit?usp=sharing",
  },
  {
    title: "Basic Comparable Comps Model",
    description: "Relative valuation using market multiples for industry benchmarking.",
    link: "https://docs.google.com/spreadsheets/d/1kDff1Gp9vKbPg18E8a3tj67rOhiLmIfuvepsyMv5I5U/edit?usp=sharing",
  },
  {
    title: "Discounted Cash flow Valuation ( DCF )",
    description: "This DCF valuation model estimates a company’s intrinsic value by forecasting future cash flows and discounting them to the present, capturing the true economic worth of the business beyond short-term market noise.",
    link: "https://docs.google.com/spreadsheets/d/1r40DyjRoooLnMTJgE2V9f-7ap2KqdwnWGwsefzsv1Fo/edit?usp=sharing",
  },
  {
    title: "Equity Research Report",
    description: "Comprehensive reports on publicly traded companies with buy/hold/sell recommendations.",
    link: "#",
  },
  {
    title: "Forecast Calculator using Regression",
    description: "Python-based tool for financial forecasting using statistical regression.",
    link: "#",
  },
  {
    title: "Prospera - Risk & Portfolio Recommendation",
    description: "A system for analyzing investment risk and providing portfolio recommendations.",
    link: "#",
  },
];

const skills = [
  "Financial Modelling",
  "Valuation",
  "Equity Research",
  "Advanced Microsoft Excel",
  "Python for Financial Analysis",
  "Machine Learning for Predictive Analytics",
];

const tools = ["Python", "Microsoft Excel", "SQL", "Tableau"];

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

const workExperience: { name: string, issuer: string }[] = [
  // Add your work experience here
];


export default function Home() {
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
              Finance & Analytics | Valuation | Equity Research | Financial Modelling | Python For Financial Analysis
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
              <p className="text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold">
                I am a passionate and driven finance student with a strong
                quantitative background and a keen interest in the intersection
                of finance and technology. My journey has equipped me with a
                solid foundation in financial modeling, valuation, and data
                analysis using Python. I thrive on dissecting complex financial
                problems and building models that provide clear, actionable
                insights.
              </p>
              <p className="text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold">
                What sets me apart is my ability to bridge the gap between
                traditional finance principles and modern analytical techniques.
                This portfolio showcases my key projects, skills, and the
                continuous learning journey that shapes my professional growth.
              </p>
            </div>
          </div>
        </section>

        <section id="journey" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Learning Journey
            </h2>
            <Accordion type="single" collapsible className="mx-auto max-w-3xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>A Three Statement Financial Model</AccordionTrigger>
                <AccordionContent>
                  <p>The foundational interconnected model of the Income Statement, Balance Sheet, and Cash Flow Statement.</p>
                  <Button asChild variant="link" className="p-0 h-auto text-white mt-2">
                      <a href="/A Three - Statement Financial Model.pdf" target="_blank" rel="noopener noreferrer">
                        View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Understanding Valuation Multiples</AccordionTrigger>
                <AccordionContent>
                  <p>Valuation multiples must be selected based on a company’s business model, capital structure, and stage of profitability, as no single multiple applies universally across firms or sectors. Ensuring strict numerator–denominator consistency is critical, as misalignment between value measures and financial drivers can lead to distorted and misleading valuation conclusions.</p>
                  <Button asChild variant="link" className="p-0 h-auto text-white mt-2">
                      <a href="/Understanding Valuation Multiples.pdf" target="_blank" rel="noopener noreferrer">
                        View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Understanding How to Value Banks</AccordionTrigger>
                <AccordionContent>
                  <p>Banks don’t follow the usual valuation playbook—what looks like “debt” is actually their fuel, and growth is governed by regulation, not reinvestment. This shift makes traditional DCFs fail and opens the door to powerful equity-based models like DDM and residual income—click to explore why bank valuation is a world of its own.</p>
                   <Button asChild variant="link" className="p-0 h-auto text-white mt-2">
                      <a href="https://9000-firebase-studio-1766827174250.cluster-cd3bsnf6r5bemwki2bxljme5as.cloudworkstations.dev/Understanding%20How%20To%20Value%20Banks.pdf" target="_blank" rel="noopener noreferrer">
                        View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Valuation Multiples Explained</AccordionTrigger>
                <AccordionContent>
                  Developing a nuanced understanding of various valuation multiples and their applications. For example, using P/E for mature, profitable companies, EV/EBITDA for comparing companies with different capital structures, and P/TBV for financial institutions.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger>Understanding Statistical Concepts</AccordionTrigger>
                <AccordionContent>
                  Applying key statistical concepts in finance, such as using regression analysis for forecasting, interpreting R-squared to understand model fit, and using p-value to determine the statistical significance of results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col bg-background text-foreground">
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
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  Tools I Use
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-black bg-white">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6">
             <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education & Achievements
            </h2>
            <Tabs defaultValue="work-experience" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-4 bg-muted text-muted-foreground">
                <TabsTrigger value="work-experience"><Briefcase className="mr-2 h-4 w-4"/>Work Experience</TabsTrigger>
                <TabsTrigger value="certifications"><Briefcase className="mr-2 h-4 w-4"/>Certifications</TabsTrigger>
                <TabsTrigger value="education"><BookOpen className="mr-2 h-4 w-4"/>Education</TabsTrigger>
                <TabsTrigger value="awards"><Trophy className="mr-2 h-4 w-4"/>Awards</TabsTrigger>
              </TabsList>
              <TabsContent value="work-experience" className="mt-6">
                 {workExperience.length > 0 ? (
                  <ul className="space-y-4">
                    {workExperience.map((exp, i) => (
                      <li key={i} className="flex items-center justify-between rounded-lg bg-background p-4 text-white">
                        <div>
                          <p className="font-medium">{exp.name}</p>
                          <p className="text-sm text-muted-foreground">{exp.issuer}</p>
                        </div>
                        <Button variant="ghost" size="icon" asChild><a href="#"><ArrowUpRight/></a></Button>
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
