import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={"7px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
