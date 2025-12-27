import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Github,
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
import FinancialBackground from "@/components/financial-background";
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutImage = PlaceHolderImages.find((img) => img.id === 'profile-about');
const contactImage = PlaceHolderImages.find((img) => img.id === 'profile-contact');

const projects = [
  {
    title: "DCF Valuation",
    description: "In-depth discounted cash flow analysis for various public companies.",
    link: "#",
  },
  {
    title: "Comparable Comps Valuation",
    description: "Relative valuation using market multiples for industry benchmarking.",
    link: "#",
  },
  {
    title: "Startup Valuation",
    description: "Valuation models tailored for early-stage and high-growth startups.",
    link: "#",
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

const tools = ["Python", "Microsoft Excel", "SQL", "Tableau", "Power BI"];

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


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative h-screen w-full bg-black text-white">
          <FinancialBackground />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Name Here
            </h1>
            <p className="mt-4 font-headline text-lg text-primary md:text-xl">
              Finance & Analytics | Valuation, Equity Research, Financial
              Modeling
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              BBA Decision Science student at Christ University with hands-on
              experience in financial modeling, valuation, and equity research,
              supported by Python-based analytics.
            </p>
            <a href="#about" className="absolute bottom-10 animate-bounce">
              <ArrowDown className="h-8 w-8 text-primary" />
            </a>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              {aboutImage && <Image
                src={aboutImage.imageUrl}
                width={300}
                height={300}
                alt="About Me"
                className="rounded-full object-cover"
                data-ai-hint={aboutImage.imageHint}
              />}
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a passionate and driven finance student with a strong
                quantitative background and a keen interest in the intersection
                of finance and technology. My journey has equipped me with a
                solid foundation in financial modeling, valuation, and data
                analysis using Python. I thrive on dissecting complex financial
                problems and building models that provide clear, actionable
                insights.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What sets me apart is my ability to bridge the gap between
                traditional finance principles and modern analytical techniques.
                This portfolio showcases my key projects, skills, and the
                continuous learning journey that shapes my professional growth.
              </p>
            </div>
          </div>
        </section>

        <section id="journey" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Learning Journey
            </h2>
            <Accordion type="single" collapsible className="mx-auto max-w-3xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>WACC vs. Cost of Equity</AccordionTrigger>
                <AccordionContent>
                  Understanding the critical difference between Weighted Average Cost of Capital (WACC) and Cost of Equity, and mastering the appropriate contexts for using each in valuation and investment appraisal. WACC is used for valuing the entire firm, while Cost of Equity is for valuing the equity portion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why Python for Financial Analysis?</AccordionTrigger>
                <AccordionContent>
                  While Excel is powerful, I use Python for its scalability, automation capabilities, and access to advanced statistical and machine learning libraries. It allows for more complex modeling, backtesting strategies, and handling large datasets efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Linking 3 Statement Models</AccordionTrigger>
                <AccordionContent>
                  Mastering the art of dynamically linking the Income Statement, Balance Sheet, and Cash Flow Statement. This is the bedrock of robust financial modeling, ensuring that the model is integrated and reflects the true financial position of a company.
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

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col bg-gray-100">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-black">
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

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container grid items-start gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Tools I Use
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index}>{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container px-4 md:px-6">
             <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education & Achievements
            </h2>
            <Tabs defaultValue="certifications" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-3 bg-gray-200 text-black">
                <TabsTrigger value="certifications"><Briefcase className="mr-2 h-4 w-4"/>Certifications</TabsTrigger>
                <TabsTrigger value="education"><BookOpen className="mr-2 h-4 w-4"/>Education</TabsTrigger>
                <TabsTrigger value="awards"><Trophy className="mr-2 h-4 w-4"/>Awards</TabsTrigger>
              </TabsList>
              <TabsContent value="certifications" className="mt-6">
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                     <li key={i} className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
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
                     <li key={i} className="flex items-center rounded-lg bg-gray-100 p-4">
                        <p className="font-medium">{edu.name} - <span className="text-muted-foreground">{edu.institution}</span></p>
                     </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="awards" className="mt-6">
                <ul className="space-y-4">
                  {awards.map((award, i) => (
                     <li key={i} className="flex items-center rounded-lg bg-gray-100 p-4">
                        <p className="font-medium">{award.name} - <span className="text-muted-foreground">{award.event}</span></p>
                     </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="resume" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Resume</h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Interested in a more detailed look at my experience? Download my full resume.
                </p>
                <Button asChild size="lg" className="mt-6 bg-white text-black hover:bg-gray-200">
                    <a href="/resume.pdf" download>Download CV / Resume</a>
                </Button>
            </div>
        </section>


        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
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
                <a href="mailto:your.email@gmail.com" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <Mail className="h-6 w-6"/>
                  <span>your.email@gmail.com</span>
                </a>
                 <a href="#" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6"/>
                  <span>Connect on LinkedIn</span>
                </a>
                 <a href="#" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <Phone className="h-6 w-6"/>
                  <span>+91 12345 67890</span>
                </a>
              </div>
            </div>
            <div className="w-full">
              <ContactForm/>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6 bg-black text-white">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} FinanceFlow Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
