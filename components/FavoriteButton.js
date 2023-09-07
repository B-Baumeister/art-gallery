import Heart from "/assets/heart.svg";
import Image from "next/image";

const Button = styled.button`
  position: ${({ $positionAbsolute }) =>
    $positionAbsolute ? "absolute" : "static"};
  right: 1rem;
  top: 1.5rem;
  z-index: 1;
  background-color: ${({ $isFavorite }) =>
    $isFavorite ? "lightcoral" : "white"};
  border: 3px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  positionAbsolute,
}) {
  return (
    <Button
      className="favorite-button"
      type="button"
      $isFavorite={isFavorite}
      onClick={onToggleFavorite}
      $positionAbsolute={positionAbsolute}
      aria-label={isFavorite ? "like" : "unlike"}
    >
      <Image src="/assets/heart.svg" width={30} height={30} alt="" />
    </Button>
  );
}
