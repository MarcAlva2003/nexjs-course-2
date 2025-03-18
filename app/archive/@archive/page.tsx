import Link from "next/link";
import { getAvailableNewsYears } from "../../../lib/news";

export default function ArchivePage () {

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((item) => (
            <li key={item}>
              <Link href={`/archive/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    <h1>Archive page</h1>
    </header>
  );
}