import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

import logo from "@assets/cropped-adrian-350-×-100-px-4-1_1768493893017.png";
import pixelwaveImg from "@assets/pixelwave-logo.webp";
import nimbusImg from "@assets/Nimbus-network.webp";
import igniteImg from "@assets/ignite-digitals.webp";
import eminenceImg from "@assets/emmi-logo.png";
import brewakeningImg from "@assets/brewakening.png";

// --- Components ----

const NavLink = ({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) => (
  <a
    href={href}
    className={`group flex items-center py-2 text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap hover:text-primary ${active ? "text-primary" : "text-muted-foreground"}`}
  >
    <span
      className={`mr-2 h-px bg-current transition-all ${active ? "w-8" : "w-4"} group-hover:w-8`}
    ></span>
    {children}
  </a>
);

const ExperienceCard = ({
  date,
  title,
  company,
  description,
  skills,
  link,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
  >
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
      {date}
    </header>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-serif font-medium leading-snug text-foreground">
        <div>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-lg"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title} ·{" "}
              <span className="inline-block">
                {company}{" "}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </span>
          </a>
        </div>
      </h3>
      <p className="mt-2 text-sm leading-normal text-muted-foreground">
        {description}
      </p>
      <ul className="mt-2 flex flex-wrap">
        {skills.map((skill: string) => (
          <li key={skill} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, image, skills, link }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
  >
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <div className="z-10 sm:col-span-2 order-2 sm:order-1 mt-4 sm:mt-0">
      <div className="rounded border-2 border-primary/20 bg-muted/50 transition group-hover:border-primary/50 overflow-hidden aspect-video sm:aspect-[4/3] flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-muted/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <Code2 className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
          </div>
        )}
      </div>
    </div>
    <div className="z-10 sm:col-span-6 order-1 sm:order-2">
      <h3 className="font-serif font-medium leading-snug text-foreground">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-lg"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>
            {title}{" "}
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
          </span>
        </a>
      </h3>
      <p className="mt-2 text-sm leading-normal text-muted-foreground">
        {description}
      </p>
      <ul className="mt-2 flex flex-wrap">
        {skills.map((skill: string) => (
          <li key={skill} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// --- Main Page ---

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeProjectTab, setActiveProjectTab] = useState<
    "wordpress" | "webapp"
  >("wordpress");

  // Robust IntersectionObserver-based Scroll Spy
  useEffect(() => {
    const sections = ["about", "experience", "technologies", "projects"];
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Find the section closest to the top of the viewport
        if (visibleSections.size > 0) {
          let closestSection = "";
          let closestDistance = Infinity;

          visibleSections.forEach((top, id) => {
            const distance = Math.abs(top);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = id;
            }
          });

          if (closestSection) {
            setActiveSection(closestSection);
          }
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0, 0.1, 0.5],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Track scroll position for hiding logo on mobile
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Spotlight effect (desktop only, throttled with rAF)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isMobile) return;

    let rafId: number;
    const updateMousePosition = (ev: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      {/* Universal Sticky Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10 px-4 py-3 md:px-6 md:py-4 transition-all duration-300 lg:dark:bg-background/80 lg:dark:backdrop-blur-md">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div
            className={`flex justify-between items-center transition-all duration-300 overflow-hidden ${hasScrolled ? "max-h-0 opacity-0 mb-0 md:max-h-20 md:opacity-100" : "max-h-20 opacity-100 mb-2 md:mb-0"}`}
          >
            <img
              src={logo}
              alt="Adrian Diaz"
              className="h-10 w-auto dark:invert transition-all duration-300"
            />
          </div>

          <nav className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap md:gap-6">
            <NavLink href="#about" active={activeSection === "about"}>
              About
            </NavLink>
            <NavLink href="#experience" active={activeSection === "experience"}>
              Experience
            </NavLink>
            <NavLink
              href="#technologies"
              active={activeSection === "technologies"}
            >
              Skills
            </NavLink>
            <NavLink href="#projects" active={activeSection === "projects"}>
              Portfolio
            </NavLink>
            <div className="flex-shrink-0">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(238, 191, 29, 0.08), transparent 80%)`,
        }}
      />

      {/* Main Layout - Single Column Centered */}
      <div className="mx-auto min-h-screen max-w-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:py-0 mt-40 md:mt-32">
        {/* Intro / Hero Section (Previously in Sidebar) */}
        <section className="mb-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif text-glow mb-4">
            Adrian Diaz
          </h1>
          <h2 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl mb-6">
            Web Developer & Digital Innovator
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-lg">
            I turn complex digital problems into beautiful, effective solutions.
            Your partner in digital innovation.
          </p>

          <ul className="flex items-center gap-6" aria-label="Social media">
            <li>
              <a
                href="https://github.com/darkapocalypse58"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/diaz-al/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@iandiazcode.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mb-24 scroll-mt-32"
          aria-label="About me"
        >
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              About
            </h2>
          </div>
          <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
            <p>
              Hello, I’m{" "}
              <strong className="text-primary font-medium">Adrian Diaz</strong>,
              a passionate web developer with six years of professional
              experience under my belt. I’ve dedicated myself to mastering the
              art of web development, making me your go-to expert for turning
              your projects into resounding successes.
            </p>
            <p>
              With my skillset and knowledge, I can handle all the maintenance
              needs for your existing website, freeing up your time to focus on
              growing your business. Let’s work together to create a captivating
              online presence that’ll leave a lasting impression on your
              audience.
            </p>
            <p>
              Excited to collaborate and bring your digital vision to life!
              Reach out, and let’s get started!
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="mb-24 scroll-mt-32"
          aria-label="Work experience"
        >
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Work Experience
            </h2>
          </div>
          <div className="group/list space-y-12">
  <ExperienceCard
    date="2025 — Present"
    title="WordPress Developer (Part-time)"
    company="Imagine If Institute"
    link="#"
    description="Building and maintaining their online learning platform — Divi on the front end, Masteriyo LMS handling course delivery. WooCommerce manages subscriptions through Stripe, works for both solo learners and group cohorts. Set up GA4 and GSC from scratch so they have real visibility into what's performing."
    skills={["WordPress", "Divi", "Masteriyo LMS", "WooCommerce", "Stripe", "GA4"]}
  />
  <ExperienceCard
    date="2025 — Present"
    title="Shopify Theme Developer"
    company="Sports Apparel & Team Uniform Retailer"
    link="#"
    description="Sole developer for a Shopify-based sports apparel retailer serving schools, athletic departments, and coaches. Built a custom Collection List page with 60+ Customizer settings, live search, and filterable tabs. Developed a custom landing page and standardized 13 product category pages into one consistent layout system. Wrote fully scoped, mobile responsive Liquid code with zero hardcoded values, every setting editable through the Shopify Customizer. Defined the site's brand style guide covering typography, color, and component standards."
    skills={["Shopify", "Liquid", "Customizer", "Responsive Design"]}
  />

            
            <ExperienceCard
              date="2024 — 2025"
              title="WordPress Support"
              company="Lemonade IT"
              link="#"
              description="Contributed to managing and maintaining over 30 client websites, providing ongoing WordPress support. Handled routine tasks such as backups, plugin updates, and troubleshooting broken sites. Customized and redesigned websites using Divi, Elementor, and Astra, and worked with fully custom-built WordPress themes."
              skills={[
                "WordPress",
                "Divi",
                "Elementor",
                "WPMU",
                "Troubleshooting",
              ]}
            />
            <ExperienceCard
              date="2023 — 2024"
              title="Shopify, WordPress & Node.js Developer"
              company="Strategiert"
              link="#"
              description="Responsible for maintaining existing websites and platforms built on Shopify and WordPress. Developed a custom AI chatbot application involved building a chatbot feature that could intelligently assist users by showcasing and responding to queries about their products."
              skills={["Shopify", "WordPress", "Node.js", "AI Integration"]}
            />
            <ExperienceCard
              date="2021 — 2023"
              title="WordPress Developer"
              company="Ultimate WP Help"
              link="#"
              description="Managed and maintained over 50 WordPress websites using MainWP. Handled the Help Desk, providing timely support and solutions. Responsible for building new websites and setting up themes using Divi and Thrive Architect, including eCommerce stores and online course platforms."
              skills={["WordPress", "MainWP", "eCommerce", "Divi"]}
            />
            <ExperienceCard
              date="2020 — 2021"
              title="WordPress & Shopify Dev"
              company="Geeky Pandas"
              link="#"
              description="Built and customized WordPress and Shopify sites, from product pages to course platforms. Handled theme tweaks, plugin setups, and app integrations, often stepping in to solve problems and streamline user experiences."
              skills={[
                "WordPress",
                "Shopify",
                "HTML/CSS",
                "Theme Customization",
              ]}
            />
            <ExperienceCard
              date="2019"
              title="Front-end Developer – Intern"
              company="Ignitron Digitals"
              link="#"
              description="Designed and developed multiple responsive web pages from scratch using modern web technologies including HTML5, CSS3, and jQuery. Utilized the Bootstrap front-end framework to ensure consistency in layout and mobile responsiveness."
              skills={["HTML5", "CSS3", "jQuery", "Bootstrap"]}
            />
          </div>
          <div className="mt-6">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
              href="https://drive.google.com/file/d/1YCAURSnd_CzTORUlD8asg4vFeIiRCBDg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                View Resume{" "}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </a>
          </div>

          <div className="mt-6">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
              href="https://drive.google.com/file/d/1SjOtMGr7tENbsmtCutlGnLULRj0m78Lm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                View Portfolio{" "}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </a>
          </div>
        </section>

        {/* Technologies Section */}
        <section
          id="technologies"
          className="mb-24 scroll-mt-32"
          aria-label="Technologies"
        >
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Technologies
            </h2>
          </div>
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Skills
            </h3>
            <div className="grid grid-cols-4 gap-6">
              {/* HTML5 */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path
                      fill="#E44D26"
                      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    ></path>
                    <path
                      fill="#F16529"
                      d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  HTML5
                </span>
              </div>

              {/* CSS3 */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path
                      fill="#1572B6"
                      d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"
                    ></path>
                    <path
                      fill="#33A9DC"
                      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  CSS3
                </span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path
                      fill="#F0DB4F"
                      d="M1.408 1.408h125.184v125.184H1.408z"
                    ></path>
                    <path
                      fill="#323330"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  JavaScript
                </span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <g fill="#61DAFB">
                      <circle cx="64" cy="64" r="11.4"></circle>
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  React
                </span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path
                      fill="#83CD29"
                      d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.129 1.24 1.129h5.754c.354 0 .692-.286.94-.534.24-.249.423-.493.423-.869-.429-10.184-7.358-14.792-21.2-14.792-12.68 0-20.378 5.989-20.378 14.582 0 9.885 7.693 12.606 20.144 13.798 14.944 1.374 15.109 3.494 15.109 6.062 0 4.758-4.227 6.959-12.095 6.04z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  Node.js
                </span>
              </div>

              {/* MongoDB */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#47A248">
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  MongoDB
                </span>
              </div>

              {/* PHP */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle cx="16" cy="16" r="14" fill="#8892BF" />
                    <path
                      d="M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  PHP
                </span>
              </div>

              {/* MySQL */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="-18.458 -22.75 191.151 191.151"
                  >
                    <path
                      d="M-18.458 6.58h191.151v132.49H-18.458V6.58z"
                      fill="none"
                    />
                    <path
                      d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
                      fill="#5d87a1"
                    />
                    <path
                      d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
                      fill="#f8981d"
                    />
                    <path
                      d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
                      fill="#5d87a1"
                    />
                    <path
                      d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z"
                      fill="#f8981d"
                    />
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  MySQL
                </span>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Platforms
            </h3>
            <div className="grid grid-cols-4 gap-6">
              {/* WordPress */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path
                      fill="#21759B"
                      d="M64.09 127.96c-35.17 0-63.77-28.59-63.77-63.87 0-35.21 28.6-63.79 63.77-63.79 35.16 0 63.75 28.58 63.75 63.79 0 35.28-28.59 63.87-63.75 63.87zM11.18 64.09c0 22.5 13.03 41.93 31.91 51.22L15.31 46.4a53.765 53.765 0 00-4.13 17.69zm82.62-2.49c0-7.01-2.56-11.9-4.67-15.62-2.87-4.67-5.53-8.58-5.53-13.26 0-5.21 3.94-10.06 9.48-10.06.24 0 .48.03.72.05-10.05-9.21-23.45-14.86-38.15-14.86-19.77 0-37.17 10.14-47.32 25.51 1.34.04 2.59.07 3.66.07 5.93 0 15.11-.72 15.11-.72 3.06-.17 3.42 4.33.36 4.67 0 0-3.08.36-6.5.54l20.67 61.46 12.43-37.26-8.85-24.2c-3.06-.18-5.95-.54-5.95-.54-3.07-.19-2.7-4.85.36-4.67 0 0 9.36.72 14.93.72 5.94 0 15.12-.72 15.12-.72 3.06-.17 3.42 4.33.36 4.67 0 0-3.08.36-6.5.54l20.51 60.97 5.66-18.93c2.46-7.85 4.35-13.5 4.35-18.36zm-31.27 6.56l-17.02 49.46c5.08 1.49 10.44 2.32 16.01 2.32 6.6 0 12.92-1.14 18.8-3.21-.15-.24-.29-.5-.39-.78L62.53 68.16zm46.55-27.12c.24 1.76.37 3.65.37 5.67 0 5.59-1.04 11.87-4.19 19.73l-16.81 48.6c16.36-9.53 27.35-27.32 27.35-47.72 0-9.59-2.45-18.6-6.72-26.28z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  WordPress
                </span>
              </div>

              {/* Shopify */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path
                      fill="#95BF46"
                      d="M101.664 31.615c-.072-.547-.547-.874-1.020-.874-.473 0-9.555-.182-9.555-.182s-7.579-7.349-8.391-8.162c-.812-.812-2.375-.583-2.978-.364-.073 0-1.604.510-4.270 1.385-.803-2.326-2.227-4.505-4.702-6.083-3.270-2.183-7.379-2.619-11.415-1.313-4.617-5.671-10.361-7.647-14.995-6.953-7.306 1.093-12.287 8.297-14.324 16.825-5.125 1.604-8.901 2.763-9.336 2.909-.875.255-3.197.985-3.562 3.343C16.46 35.193 3.56 127.166 3.56 127.166l76.058 12.8 39.28-9.773s-17.16-97.975-17.234-98.578zM71.906 25.75l-6.867 2.11s.073-5.964-1.458-8.72c4.396.474 5.89 5.453 6.647 6.684-.109.034-.218.068-.322.108v-.182zm-11.633 3.562l-14.398 4.43c1.385-5.38 4.064-10.87 9.19-12.872 2.01 2.91 5.208 6.72 5.208 8.442zm-9.19-22.233c.985-.073 1.896.11 2.763.474-6.793 3.197-11.925 12.068-13.31 21.149l-10.87 3.344c2.618-12.945 11.342-24.457 21.417-24.967z"
                    ></path>
                    <path
                      fill="#5E8E3E"
                      d="M100.644 30.741c-.473 0-9.555-.182-9.555-.182s-7.579-7.349-8.391-8.162c-.291-.29-.656-.473-1.02-.583l-2.836 127.352 39.28-9.773S101.11 31.87 101.036 31.324c-.073-.109-.255-.437-.392-.583z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M62.788 47.166l-4.504 13.403s-3.999-2.146-8.866-2.146c-7.088 0-7.452 4.469-7.452 5.599 0 6.135 15.944 8.499 15.944 22.868 0 11.342-7.161 18.648-16.825 18.648-11.597 0-17.524-7.234-17.524-7.234l3.124-10.325s6.1 5.234 11.233 5.234c3.343 0 4.694-2.654 4.694-4.612 0-8.062-13.093-8.39-13.093-21.55 0-11.086 7.962-21.84 24.021-21.84 6.172 0 9.248 1.955 9.248 1.955z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  Shopify
                </span>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                      ></path>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663z"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </div>

              {/* Bootstrap */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-primary/10 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#7952B3">
                    <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  Bootstrap
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="mb-24 scroll-mt-32"
          aria-label="Selected projects"
        >
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Portfolio
            </h2>
          </div>

          {/* Project Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveProjectTab("wordpress")}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-full border-2 transition-all duration-300 ${
                activeProjectTab === "wordpress"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-primary/30 hover:border-primary hover:text-primary"
              }`}
              data-testid="tab-wordpress"
            >
              WordPress Showcase
            </button>
            <button
              onClick={() => setActiveProjectTab("webapp")}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-full border-2 transition-all duration-300 ${
                activeProjectTab === "webapp"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-primary/30 hover:border-primary hover:text-primary"
              }`}
              data-testid="tab-webapp"
            >
              Web App
            </button>
          </div>

          {/* WordPress Projects */}
          {activeProjectTab === "wordpress" && (
            <div className="group/list space-y-12">
              <ProjectCard
                title="PixelWave"
                description="A creative agency website showcasing digital design and development services. Built with a focus on modern aesthetics and responsive performance."
                image={pixelwaveImg}
                skills={["Web Design", "Development", "Agency", "Divi"]}
                link="https://royalblue-rhinoceros-744037.hostingersite.com/pixel-wave-agency/"
              />
              <ProjectCard
                title="Nimbus Networks"
                description="Technology solutions provider website. Features a clean, tech-focused design that highlights network infrastructure and IT services."
                image={nimbusImg}
                skills={["Technology", "Infrastructure", "Corporate", "Divi"]}
                link="https://royalblue-rhinoceros-744037.hostingersite.com/nimbus-network/"
              />
              <ProjectCard
                title="Ignite Digitals"
                description="Digital marketing agency platform. Designed to convert visitors with strong calls to action and a vibrant, energetic visual style."
                image={igniteImg}
                skills={["Marketing", "SEO", "Conversion", "Divi"]}
                link="https://royalblue-rhinoceros-744037.hostingersite.com/ignite-digitals/"
              />
              <ProjectCard
                title="Eminence Real Estate"
                description="Real estate portfolio and listing platform. Provides a luxury feel for high-end property listings and agent services."
                image={eminenceImg}
                skills={["Real Estate", "Listings", "Luxury", "Divi"]}
                link="https://royalblue-rhinoceros-744037.hostingersite.com/eminence-real-estates/"
              />
              <ProjectCard
                title="Brewakening"
                description="A specialized coffee brand website. Focuses on brand storytelling and product showcasing for coffee enthusiasts."
                image={brewakeningImg}
                skills={["eCommerce", "Brand", "Retail", "Divi"]}
                link="https://royalblue-rhinoceros-744037.hostingersite.com/12281-2/"
              />
            </div>
          )}

          {/* Web App Projects */}
          {activeProjectTab === "webapp" && (
            <div className="group/list space-y-12">
              <div className="text-center py-12 text-muted-foreground">
                <Code2 className="w-12 h-12 mx-auto mb-4 text-primary/30" />
                <p className="text-lg">Web App projects coming soon...</p>
                {/* <p className="text-sm mt-2">Add your web app projects here</p> */}
              </div>
            </div>
          )}
        </section>

        <footer className="flex justify-center max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
          <p>COPYRIGHT © 2026 Adrian Diaz. All Right Reserved</p>
        </footer>
      </div>
    </div>
  );
}
