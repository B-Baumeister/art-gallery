import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { id } = router.query;

  return <ArtPieceDetails pieces={pieces} />;
}
