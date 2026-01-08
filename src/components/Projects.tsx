import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'

type ProjectProps = {
  id: number
  title: string
  description: string
  stack: string[]
  codeUrl: string
  liveUrl: string
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
      stack: ['React', 'Typescript', '.NET', 'PostgreSQL'],
      codeUrl: 'https://github.com/DPCoderr',
      liveUrl: 'https://github.com/DPCoderr',
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description:
        'Data visualization dashboard with interactive charts, real-time metrics, and custom reporting. Helps businesses make data-driven decisions.',
      stack: ['React', 'Typescript', '.NET', 'PostgreSQL'],
      codeUrl: 'https://github.com/DPCoderr',
      liveUrl: 'https://github.com/DPCoderr',
    },
  ]

  return (
    <section className="bg-secondary/30">
      <div className="container mx-auto px-6 py-20 space-y-6 md:max-w-4xl">
        <div>
          <h1 className="text-4xl font-bold">My Projects</h1>
          <div className="mt-4 border-b-4 border-black w-20"></div>
        </div>

        <h2 className="text-muted-foreground md:max-w-2xl">
          A selection of recent projects that showcase my skills and experience
          in building modern web applications.
        </h2>

        <div className="flex flex-col mt-10">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-x-3">
                  {project.stack.map((s, index) => (
                    <Button
                      variant={'secondary'}
                      size={'sm'}
                      className="border"
                      key={index}
                    >
                      {s}
                    </Button>
                  ))}
                </CardContent>
                <CardFooter className="space-x-3">
                  <Button size={'lg'} variant={'outline'} asChild>
                    <Link
                      to={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon /> Code
                    </Link>
                  </Button>
                  <Button size={'lg'} asChild>
                    <Link
                      to={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
