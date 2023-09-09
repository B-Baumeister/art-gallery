import Spotlight from "../components/Spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  function getRandomPiece() {
    return Math.floor(Math.random() * pieces.length);
  }

  const randomPiece = pieces[getRandomPiece()];

  return (
    <>
      {randomPiece && (
        <Spotlight
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
          isFavorite={
            artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)
              ?.isFavorite
          }
          onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
        />
      )}
    </>
  );
}
