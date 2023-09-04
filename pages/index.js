import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ pieces }) {
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
        />
      )}
    </>
  );
}
