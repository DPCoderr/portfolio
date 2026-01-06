type AboutSkillsProps = {
  type: string
  amount: number
}

export default function About() {
  const aboutSkills: AboutSkillsProps[] = [
    { type: 'Years Experience', amount: 2 },
    { type: 'Projects', amount: 5 },
    { type: 'Clients', amount: 3 },
    { type: 'Internships', amount: 2 },
  ]

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 space-y-10 md:max-w-4xl">
        <div className="">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="mt-4 border-b-4 border-black w-20"></div>
        </div>

        <div className="flex flex-col">
          <div className="space-y-6 text-muted-foreground">
            <p>
              I am a <span className="text-primary font-bold">full-stack</span>{' '}
              software developer from the Netherlands, focused on building
              modern web and mobile applications. I enjoy working across the
              stack and turning ideas into reliable, user-friendly products.
            </p>
            <p>
              On the <span className="text-primary font-bold">frontend</span>, I
              mainly work with{' '}
              <span className="text-primary font-bold">
                React, Next.js, and TypeScript,
              </span>{' '}
              while on the{' '}
              <span className="text-primary font-bold">backend</span> I build
              APIs and services using{' '}
              <span className="text-primary font-bold">.NET</span>. I value
              clean architecture, maintainable code, and performance-driven
              solutions.
            </p>
            <p>
              Outside of work, I like experimenting with new tools and
              technologies to stay sharp and curious. When I’m not coding,
              you’ll usually find me at the gym lifting weights.
            </p>
          </div>
        </div>
        <div className="h-px bg-gray-300"></div>
        <div className="flex justify-between">
          {aboutSkills.map((about, index) => (
            <div key={index} className="space-y-1">
              <p className="text-3xl font-semibold">{about.amount}+</p>
              <p className="text-sm text-muted-foreground">{about.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
