import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      {" "}
      <Image src={image} alt={artist} />
      <p>{artist}</p>
    </div>
  );
}
