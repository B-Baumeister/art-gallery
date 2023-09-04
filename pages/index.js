import Spotlight from "../components/Spotlight";

export default function OverviewPage() {
  const length = data.length;
  console.log(length);

  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  return (
    <div>
      <Spotlight
        image={data[getRandomPiece(length)].imageSource}
        artist={data[getRandomPiece(length)].artist}
      />
    </div>
  );
}
