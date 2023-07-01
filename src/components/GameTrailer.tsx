import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const url = data?.results[0];

  return url ? (
    <video src={url.data[480]} poster={url.preview} controls />
  ) : null;
};

export default GameTrailer;
