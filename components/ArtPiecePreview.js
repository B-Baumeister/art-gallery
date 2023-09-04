import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  <li>
    <Image scr={image} alt={title} />
    <p>
      ”{title}” by {artist}
    </p>
  </li>;
}
