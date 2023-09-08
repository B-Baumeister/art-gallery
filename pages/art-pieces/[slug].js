import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(pieces);
  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) {
    return null;
  }

  return (
    <ArtPieceDetails
      onBack={() => router.back()}
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.title}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    />
  );
}

// Create the page pages/art-pieces/[slug] that renders ArtPieceDetails
//  Read the query parameter slug from next/router
//  Use the slug to find the art piece to display
