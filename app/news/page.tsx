import { DUMMY_NEWS } from '../../dummy-news'
import Image from 'next/image'
import Link from 'next/link'
import { NewsList } from '../../components/news-list/news-list.component'

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  )
}
