import { type Metadata } from 'next'
import { TbLink } from "react-icons/tb";
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/Blog/SimpleLayout'

const projects = [
  {
    name: 'Zesti AI',
    description:
      'Turn cooking videos into recipes in seconds with AI',
    link: { href: 'https://www.zesti.ai/', label: 'planetaria.tech' },
    logo: "https://s3.us-west-1.amazonaws.com/justindosaj.com/images/Zesti-Logo+(600+x+600+px).png",
  },
  {
    name: 'Stormgate Tactics',
    description:
      'Learn everything you need to know about Stormgate, the next-gen RTS game - builds, guides, news & more!',
    link: { href: 'https://stormgatetactics.com/', label: 'github.com' },
    logo: "https://s3.us-west-1.amazonaws.com/justindosaj.com/images/260x260-ST-Logo.png",
  },
  {
    name: 'Vurge.io',
    description:
      'Website designed and built for a freelance web development company.',
    link: { href: 'https://www.vurge.io/', label: 'github.com' },
    logo: "https://s3.us-west-1.amazonaws.com/justindosaj.com/images/vurge-logo.png",
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I have made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I have made trying to put my dent in the universe."
      intro="I have worked on tons of little projects over the years but these are the ones that I am most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
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
  )
}
