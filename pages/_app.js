import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={isLoading || !data ? [] : data} />
    </>
  );
}
