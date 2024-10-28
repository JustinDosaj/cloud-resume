interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../pages/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  
  if (typeof window !== 'undefined') {
    return []; // Ensure this only runs server-side
  }

  const glob = (await import('fast-glob')).default;
  const articleFilenames = await glob('*/index.mdx', {
    cwd: './src/pages/articles',
  });

  const articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
