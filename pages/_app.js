import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const { data, isLoading } = useSWR(
  `https://example-apis.vercel.app/api/art`,
  fetcher
);
if (isLoading || !data) {
  return "Loading ...";
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
