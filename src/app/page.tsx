'use client';

import Image from "next/image"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { ThemeToggle } from "~/components/ui/themeToggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { LinkedIn, Github } from "~/components/ui/icon"
import { Mail, ExternalLink, ArrowDown, Leaf } from "lucide-react"

export default function Portfolio() {
  function handleButtonClick(buttonName: String): void {
   switch(buttonName) {
     case "github": {
       window.open("https://github.com/LeonardoM011");
       break;
     }
     case "linkedin": {
       window.open("https://www.linkedin.com/in/leonardo-marinovic/");
       break;
     }
     case "contact": {
       window.location.href = "#contact";
       break;
     }
   }
  }

  return (
    <div className="min-h-screen min-w-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between min-w-screen max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="font-bold text-xl">Leonardo Marinović</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-muted-foreground font-bold hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-muted-foreground font-bold hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground font-bold hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-muted-foreground font-bold hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground font-bold hover:text-foreground transition-colors">
              Projects
            </Link>
          </nav>
          <div className="flex gap-3">
            <ThemeToggle className="hover:text-muted-foreground"></ThemeToggle>
            <Button className="hover:text-muted-foreground transition-colors" onClick={() => handleButtonClick("contact")}>
              <Mail className="h-4 w-4"/><span className="text-muted-background max-md:hidden">Contact Me</span>
            </Button>
          </div>
        </div>
      </header>

      <main id="home" className="container py-10 min-w-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/profile-pic.jpg?height=128&width=128" alt="Leonardo Marinović" fill className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Leonardo Marinović</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
          <p className="max-w-2xl text-muted-foreground mb-8">
            I build accessible, responsive, and performant web applications with modern technologies.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" onClick={() => handleButtonClick('github')}>
              <Github className="h-5 w-5 text-muted-foreground"/>
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleButtonClick('linkedin')}>
              <LinkedIn className="h-5 w-5 text-muted-foreground"/>
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleButtonClick('contact')}>
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <Link href="#about" className="mt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-16 ml-6 mr-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/leonardo-sunglasses.jpeg?height=400&width=600" alt="Leonardo with sunglasses" fill className="object-cover" />
            </div>
            <div>
              <p className="mb-4">
                Hello, my name is Leonardo Marinović, developer and tech enthusiast based in Croatia.

              </p>
              <p className="mb-4">
                I specialize in Java Spring and modern web technologies.
              </p>
              <p>
                My other passion is music, and I love playing electric guitar in my free time.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16 ml-6 mr-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-6 bg-muted rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 text-primary">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-16 ml-6 mr-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 lg:flex lg:flex-row gap-6 lg:justify-center">
            {experiences.map((exp) => (
                <Card key={exp.title} className="overflow-hidden lg:w-1/3">
                  <div className="relative h-48 rounded-lg overflow-hidden ml-6 mr-6">
                    <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-scale-down" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-end mb-1">
                      <Badge variant="outline">
                        {exp.duration || "2025"}
                      </Badge>
                    </div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button size="sm" className="ml-auto hover:text-muted-foreground transition-colours" asChild>
                      <Link href={exp.href} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />Navigate
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-16 ml-6 mr-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="relative h-48 ml-6 mr-6 rounded-lg overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" disabled >
                    <Link href={project.demo} target="_blank">
                      <div className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />Demo
                      </div>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-16 ml-6 mr-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Netlify */}
              <form name="contact" method="POST" data-netlify="true">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Send me a message..."
                    />
                  </div>
                  <Button className="w-full" type="submit">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-10 min-w-screen">
        <div className="container flex flex-col md:flex-row justify-between items-center min-w-screen">
          <div className="text-center md:text-left mb-4 md:mb-0 ml-6">
            <p className="text-sm text-muted-foreground">© 2025 Leonardo Marinović. All rights reserved.</p>
          </div>
          <div className="flex gap-4 mr-6">
            <Button variant="outline" size="icon" onClick={() => handleButtonClick("github")}>
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleButtonClick("linkedin")}>
              <LinkedIn className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleButtonClick("contact")}>
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Mock Data
const skills = [
  { name: "C/C++", icon: <div className="text-2xl">🇨</div> },
  { name: "Java", icon: <div className="text-2xl">☕</div> },
  { name: "Spring", icon: <div className="text-2xl"><Leaf style={{color: '#6CB23F'}}/></div> },
  { name: "Python", icon: <div className="text-2xl">🐍</div> },
  { name: "GNU/Linux", icon: <div className="text-2xl">🐧</div> },
  { name: "Git", icon: <div className="text-2xl">🔄</div> },
  { name: "Docker", icon: <div className="text-2xl">🐋</div> },
  { name: "Kotlin", icon: <div className="text-2xl font-extrabold text-purple-700">K</div> },
  { name: "React", icon: <div className="text-2xl">⚛️</div> },
  { name: "Next.js", icon: <div className="text-2xl">▲</div> },
  { name: "TypeScript", icon: <div className="text-2xl">TS</div> },
  { name: "Node.js", icon: <div className="text-2xl">🟢</div> },
  { name: "Tailwind CSS", icon: <div className="text-2xl">🌊</div> },
  { name: "JavaScript", icon: <div className="text-2xl">JS</div> },
  { name: "PostgreSQL", icon: <div className="text-2xl">🐘</div> },
  { name: "AWS", icon: <div className="text-2xl">☁️</div> },
]

const experiences = [
  {
    title: "LAQO Java Developer",
    description: "Student Intern at LAQO (by Croatia Osiguranje)",
    technologies: ["Backend", "Java", "Spring", "Oracle SQL"],
    image: "/laqo-logo.png?height=300&width=500",
    duration: "2023-2025",
    location: "Zagreb, Croatia",
    href: "https://www.laqo.hr/",
  },
  {
    title: "KSET Web Dev Team",
    description: "Student volunteer at KSET (Klub Studenata Elektrotehnike)",
    technologies: ["Backend", "Frontend", "NextJS", "Typescript"],
    image: "/kset-logo.svg?height=300&width=500",
    duration: "2024-2025",
    location: "Zagreb, Croatia",
    href: "https://www.kset.org/"
  },
  {
    title: "MC2 TVZ Student Competition",
    description: "Competitor at Student Competition for students of TVZ",
    technologies: ["Backend", "Java", "Spring", "Frontend", "NextJS", "Typescript"],
    image: "/logo-tvzmc2.svg?height=300&width=500",
    duration: "2022-2023",
    location: "Zagreb, Croatia",
    href: "https://mc2.tvz.hr/"
  }
]

const projects = [
  {
    title: "Spot A Spot",
    description: "Online platform for creating and managing events made for MC2 competition.",
    image: "/spotaspot.png?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/LeonardoM011/SpotASpot",
    demo: "https://example.com",
  },
  {
    title: "Dungeon Coder Game",
    description: "Programming game where players solve coding challenges to progress through a dungeon.",
    image: "/dungeon-crawler.png?height=300&width=500",
    technologies: ["TypeScript", "Pixi.js", "Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/LeonardoM011/dungeon-mc2-natjecanje",
    demo: "https://example.com",
  },
  {
    title: "Matematicar",
  description: "Puzzle creation game made in my own game engine made in 8th grade in C++.",
    image: "/matematicar.jpg?height=300&width=500",
    technologies: ["C++", "OpenGL", "SDL2"],
    github: "https://github.com/LeonardoM011/matematicar",
    demo: "https://example.com",
  },
  {
    title: "KobeGE",
    description: "Game engine written in C++.",
    image: "/teapot-kobege.png?height=300&width=500",
    technologies: ["C++", "OpenGL", "SDL2"],
    github: "https://github.com/LeonardoM011/kobege",
    demo: "https://example.com",
  },
  {
    title: "My portfolio site",
    description: "Portfolio site i made in Next.js.",
    image: "/portfolio-ss.jpg?height=300&width=500",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
    github: "https://github.com/LeonardoM011/leonardom011-portfolio",
    demo: "https://example.com",
  },
  {
    title: "Leca Calculator",
    description: "Web calculator made for kids.",
    image: "/leca-calc.png?height=300&width=500",
    technologies: ["Javascript", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com/LeonardoM011/leca-calculator",
    demo: "https://example.com",
  },
]

