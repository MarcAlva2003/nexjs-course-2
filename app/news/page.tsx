import { DUMMY_NEWS, IDummyNewsItem } from '../dummy-news'

import Image from 'next/image'
import Link from 'next/link'

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem: IDummyNewsItem) => (
          <li key={`${newsItem.id}`}>
            <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            {/* <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill /> */}
            <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
