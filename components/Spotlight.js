import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      {" "}
      <Image src={image} alt={artist} width={`${300}`} height={`${300}`} />
      <p>{artist}</p>
    </div>
  );
}
