import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { slug, isFavorite } = artPieceInfo;
  console.log(slug);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={isLoading || !data ? [] : data}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
