import { NewsList } from "../../../components/news-list/news-list.component";
import { getLatestNews } from "../../../lib/news";

export default function LatestNewsPage () {
  const latestNews = getLatestNews()

  return (
    <>
    <h2>Latest news page</h2>
    <NewsList news={latestNews} />
    </>
  );
}