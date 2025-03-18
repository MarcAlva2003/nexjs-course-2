import { DUMMY_NEWS, IDummyNewsItem } from "../../../dummy-news"

import { notFound } from "next/navigation";

export default function NewDetailPage({ params }) {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find((newsItem: IDummyNewsItem) => newsItem.slug === newsSlug);
  
  if (!newsItem) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt="News Image Title" />
      <h1>{newsItem.title}</h1>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}
