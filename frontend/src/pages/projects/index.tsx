import { TbLink } from "react-icons/tb";
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/Blog/SimpleLayout'
import { vurgeUrl, vurgeLogo, zestiLogo, zestiUrl, stormgateLogo, stormgateUrl, aiDetectionUrl, githubLogo } from "@/components/Constants";
import Head from 'next/head';

const projects = [
  {
    name: 'AI Soccer Offside Detection System',
    description: 'Used Python, YOLOv8 and OpenCV to detect players, ball, referees and players in offside positions',
    link: { href: aiDetectionUrl, label: 'www.github.com' },
    logo: githubLogo,
  },
  {
    name: 'Zesti AI',
    description: 'Turn cooking videos into recipes in seconds with AI',
    link: { href: zestiUrl, label: 'www.zesti.ai' },
    logo: zestiLogo,
  },
  {
    name: 'Stormgate Tactics',
    description: 'Learn everything you need to know about Stormgate, the next-gen RTS game!',
    link: { href: stormgateUrl, label: 'www.stormgatetactics.com' },
    logo: stormgateLogo,
  },
  {
    name: 'Vurge.io',
    description: 'Website designed and built for a freelance web development company.',
    link: { href: vurgeUrl, label: 'www.vurge.io' },
    logo: vurgeLogo,
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Throughout my journey as a developer and entrepreneur, I've brought numerous projects from concept to completion" />
      </Head>
      <SimpleLayout
        title="Applications built to solve real-world challenges"
        intro="Throughout my journey as a developer and entrepreneur, I&apos;ve brought numerous projects from concept to completion. These represent my most significant achievements, showcasing my ability to identify problems and create effective solutions."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                <img
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 items-center">
                <TbLink  className="h-4 w-4 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
