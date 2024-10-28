import { Card } from "../Card";
import { formatDate } from "@/lib/formateDate";
import { type ArticleWithSlug } from '@/lib/articles'

export function Article({ article }: { article: ArticleWithSlug }) {

  console.log(article.slug)

    return (
      <Card as="article">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    )
  }