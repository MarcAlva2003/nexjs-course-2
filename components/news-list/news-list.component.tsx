import { IDummyNewsItem } from '../../dummy-news'
import Link from 'next/link'

interface INewsList {
  news: IDummyNewsItem[]
}

export const NewsList: React.FC<INewsList> = (props) => {
  const { news } = props
  return (
    <ul className="news-list">
      {news.map((newsItem: IDummyNewsItem) => (
        <li key={`${newsItem.id}`}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            {/* <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill /> */}
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
