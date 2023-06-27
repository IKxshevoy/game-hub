import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQuerystore from "../store";

const GameHeading = () => {
  const genreId = useGameQuerystore((g) => g.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuerystore((p) => p.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h2"} marginBottom={"15px"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
