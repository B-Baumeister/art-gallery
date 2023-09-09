import FavoriteButton from "./FavoriteButton";
import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  //console.log(1, slug);
  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={artist} width={`${300}`} height={`${300}`} />
        <p>
          ”{title}” by {artist}
        </p>
      </Link>
    </>
  );
}
