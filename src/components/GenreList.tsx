import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";
import useGameQuerystore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const genreId = useGameQuerystore((g) => g.gameQuery.genreId);
  const setGenreId = useGameQuerystore((g) => g.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Box padding={"15px"}>
      <Heading as={"h3"} fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginBottom={"8px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={"8px"}
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="ghost"
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
