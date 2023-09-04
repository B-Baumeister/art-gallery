import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="pages/index.js">Spotlight</Link>
      </li>
      <li>
        <Link href="pages/art-pieces/index.js">Art Pieces</Link>
      </li>
      <li>
        <Link>Favorites</Link>
      </li>
    </ul>
  );
}
