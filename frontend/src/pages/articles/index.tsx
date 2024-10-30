import { SimpleLayout } from '@/components/Blog/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { Article } from '@/components/Blog/Article'
import Head from 'next/head'

interface ArticlesProps {
  articles: ArticleWithSlug[]
}

export default function Articles( { articles }: ArticlesProps ) {

  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="A collection of my experiences and thoughts on software development, cloud technologies, and navigating the path of an independent developer" />
      </Head>
      <SimpleLayout
        title="Insights on web development, cloud technologies, and more"
        intro="A collection of my experiences and thoughts on software development, cloud technologies, and navigating the path of an independent developer. These articles chronicle my journey and the lessons learned along the way."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {

  const articles = (await getAllArticles()).slice(0, 4)

  return { props: { articles } }
}
