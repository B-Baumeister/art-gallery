import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
      <li>
        <Link href="#">Favorites</Link>
      </li>
    </ul>
  );
}
