import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} alt={artist} width={`${300}`} height={`${300}`} />
      <p>
        ”{title}” by {artist}
      </p>
    </li>
  );
}
