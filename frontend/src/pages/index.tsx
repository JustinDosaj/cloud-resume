import { Container } from "@/components/Container";
import { TbBrandGithubFilled, TbBrandLinkedin  } from "react-icons/tb"
import { SocialLink } from "@/components/Links/SocialLink";
import { Experience } from "@/components/Experience";
import { Article } from "@/components/Blog/Article";
import { getAllArticles, type ArticleWithSlug } from '@/lib/articles'
import { Certifications } from "@/components/Certifications";

interface HomeProps {
  articles: ArticleWithSlug[]
}

export default function Home({ articles }: HomeProps) {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Welcome to my incomplete website!
          </h1>
          <p className="mt-6 text-base text-zinc-600">
            Hello, I am Justin. I am in the process of finishing this web page, but it is not quite ready.
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
            <Experience/>
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

