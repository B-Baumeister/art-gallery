import Spotlight from "../components/Spotlight";

export default function OverviewPage({ pieces }) {
  function getRandomPiece() {
    return Math.floor(Math.random() * pieces.length);
  }

  const randomPiece = pieces[getRandomPiece()];

  return (
    <div>
      {randomPiece && (
        <Spotlight
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
        />
      )}
    </div>
  );
}
