import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        console.log(piece);
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              slug={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        );
      })}
    </ul>
  );
}
