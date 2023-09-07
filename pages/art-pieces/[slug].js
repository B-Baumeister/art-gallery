import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <>
      <ArtPieceDetails
        image={selectedArtPiece.imageSource}
        title={selectedArtPiece.title}
        artist={selectedArtPiece.artist}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
      />
      ;
    </>
  );
}

// Create the page pages/art-pieces/[slug] that renders ArtPieceDetails
//  Read the query parameter slug from next/router
//  Use the slug to find the art piece to display
