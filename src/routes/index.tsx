import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { GithubIcon, LinkedinIcon, LucideIcon, MailIcon } from 'lucide-react'
import { ComponentPropsWithoutRef } from 'react'

type SocialsBtnProps = {
  name: string
  icon: LucideIcon
  variant: ComponentPropsWithoutRef<typeof Button>['variant']
}

export const Route = createFileRoute('/')({ component: App })

function App() {
  const skills: string[] = ['React', 'TypeScript', 'Next.js', '.NET']

  const socials: SocialsBtnProps[] = [
    { name: 'Github', icon: GithubIcon, variant: 'outline' },
    { name: 'LinkedIn', icon: LinkedinIcon, variant: 'outline' },
    { name: 'Contact', icon: MailIcon, variant: 'default' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className=" bg-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row md:gap-16">
          <img
            className="rounded-full bg-slate-50 p-1 shadow-md"
            src="/thorfinn.png"
            height={300}
            width={300}
            alt="Profile picture"
          />

          <div className="space-y-6">
            {/* <h2>
              My name is <span className="">Daniel</span>
            </h2> */}
            <h1 className="text-5xl font-bold">Software Developer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Building digital experiences with modern web technologies.
              Passionate about clean code and elegant solutions.
            </p>
            <div className="flex gap-3">
              {skills.map((skill, index) => (
                <p
                  className="text-sm px-3 py-1 bg-secondary rounded-md border"
                  key={index}
                >
                  {skill}
                </p>
              ))}
            </div>
            <div className="space-x-3">
              {socials.map((social, index) => (
                <Button variant={social.variant} key={index}>
                  <Link to="/" className="flex items-center gap-2">
                    <social.icon /> {social.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className=" bg-slate-50">
        <div className="container mx-auto px-6 py-20">
          <div className=''>
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className='mt-4 border-b-4 border-black w-20'></div>
          </div>
        </div>
      </section>
    </div>
  )
}
