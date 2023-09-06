import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <ul>
      {pieces.map(({ id, image, title, artist, year, genre }) => (
        <li key={id}>
          <Image src={image} alt={artist} width={`${300}`} height={`${300}`} />
          <p>
            ”{title}” by {artist}, Year: {year}, Genre: {genre},
          </p>
        </li>
      ))}
    </ul>
  );
}
