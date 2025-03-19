import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from '../../../../lib/news'

import { IDummyNewsItem } from '../../../../dummy-news'
import Link from 'next/link'
import { NewsList } from '../../../../components/news-list/news-list.component'

export default function FilteredNewsPage({ params }) {
  const filter = params.filter
  console.log({ filter })

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news: IDummyNewsItem[]
  let links = getAvailableNewsYears()
x
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  let newsContetn = <p>No news find for the selected period</p>

  if (news && news.length > 0) {
    newsContetn = <NewsList news={news} />
  }

  // const news = getNewsForYear(newsYear);

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((item) => {
              const href = selectedYear ? `/archive/${selectedYear}/${item}` : `/archive/${item}`
              return (
                <li key={item}>
                  <Link href={href}>{item}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <h1>Archive page</h1>
      </header>
      {newsContetn}
    </>
    // <NewsList news={news} />
  )
}
