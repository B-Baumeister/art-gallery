import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function OverviewPage() {
  const { data, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  if (isLoading || !data) {
    return "Loading ...";
  }

  const length = data.length;
  console.log(length);

  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  return <div></div>;
}
