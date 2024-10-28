import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/Blog/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { Article } from '@/components/Blog/Article'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

interface ArticlesProps {
  articles: ArticleWithSlug[]
}

export default function ArticlesIndex( { articles }: ArticlesProps ) {

  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

export async function getStaticProps() {

  const articles = (await getAllArticles()).slice(0, 4)

  return { props: { articles } }
}
