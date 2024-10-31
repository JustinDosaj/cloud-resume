import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { TbBrandGithubFilled, TbBrandLinkedin, TbMail } from "react-icons/tb"
import Head from 'next/head'
import { headshotImage } from '@/components/Constants'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none transition" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="I am Justin Dosaj. I live in San Diego, where I create digital solutions"/>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={headshotImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              I&apos;m Justin Dosaj. I live in San Diego, where I create digital solutions.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600">
              <p>
                My journey in technology began at California State University San Marcos, 
                where I earned my B.S. in Computer Science in 2020. During my studies, 
                I discovered my passion for creating practical, user-focused web applications.
              </p>
              <p>
                After graduation, I spent two years as a freelance web developer, 
                working directly with clients to understand their needs and deliver custom solutions. 
                This experience honed my ability to manage projects independently and adapt to rapidly changing requirements and technologies.
              </p>
              <p>
                My recent projects showcase my growing technical expertise. 
                I developed Stormgate Tactics, a comprehensive gaming platform, and created Zesti.AI, 
                an innovative service that uses AI technology to transform cooking videos into detailed recipes. 
                Each project has strengthened my skills in full-stack development, API integration, and cloud architecture.
              </p>
              <p>
                In 2024, I earned my AWS Solutions Architect Associate certification, 
                marking my commitment to mastering cloud technologies. 
                This achievement reflects my dedication to continuous learning and staying current with industry best practices.
              </p>
              <p>
                Looking ahead, I&apos;m passionate about pursuing a career in cloud engineering, 
                combining my experience in web development with my growing expertise in AWS. 
                I&apos;m eager to work on projects that utilize cloud services to their fullest potential, 
                creating scalable and reliable solutions for complex problems
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/JustinDosaj" icon={TbBrandGithubFilled} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/justin-dosaj-8a5009221/" icon={TbBrandLinkedin} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:justindosaj@gmail.com"
                icon={TbMail}
                className="mt-8 border-t border-zinc-100 pt-8"
              >
                justindosaj@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
