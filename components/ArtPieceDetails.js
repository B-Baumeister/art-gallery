import FavoriteButton from "./FavoriteButton";
import Image from "next/image";

// Create the component ArtPieceDetails
//  ArtPieceDetails props: image, title, artist, year, genre

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBack,
}) {
  return (
    <>
      <button type="button" onClick={onBack} aria-label="navigate back">
        ←
      </button>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image src={image} alt={artist} width={`${300}`} height={`${300}`} />

      <ul>
        <li>
          {title} by: {artist}
        </li>
        <li>Year: {year}</li>
        <li> Genre: {genre}</li>
      </ul>
    </>
  );
}
