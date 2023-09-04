export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview />
      ))}
    </ul>
  );
}
