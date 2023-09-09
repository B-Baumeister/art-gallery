import FavoriteButton from "./FavoriteButton";
import Image from "next/image";

export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      {" "}
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        positionAbsolute={true}
      />
      <Image src={image} alt={artist} width={`${300}`} height={`${300}`} />
      <p>{artist}</p>
    </div>
  );
}
