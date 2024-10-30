import { Container } from "@/components/Container";
import { TbBrandGithubFilled, TbBrandLinkedin  } from "react-icons/tb"
import { SocialLink } from "@/components/Links/SocialLink";
import { Projects } from "@/components/Projects";
import { Article } from "@/components/Blog/Article";
import { getAllArticles, type ArticleWithSlug } from '@/lib/articles'
import { Certifications } from "@/components/Certifications";
import Head from "next/head";

interface HomeProps {
  articles: ArticleWithSlug[]
}

export default function Home({ articles }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="I am Justin Dosaj. I live in San Diego, where I create digital solutions." />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Software developer, cloud architect, and digital innovator.
          </h1>
          <p className="mt-6 text-base text-zinc-600">
          Hello, I&apos;m Justin, a software developer based in San Diego. I have been building web applications for over 5 years and recently began exploring cloud technologies. I&apos;m passionate about creating efficient and scalable solutions to solve complex problems.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/JustinDosaj"
              aria-label="Follow on GitHub"
              icon={TbBrandGithubFilled}
            />
            <SocialLink
              href="https://www.linkedin.com/in/justin-dosaj-8a5009221/"
              aria-label="Follow on LinkedIn"
              icon={TbBrandLinkedin}
            />
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Certifications/>
            <Projects/>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {

  const articles = (await getAllArticles()).slice(0, 4)

  return { props: { articles} }
}

