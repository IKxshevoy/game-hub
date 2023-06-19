import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";


interface Props{ 
  onSelectGenre: (genre:Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

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
            <Button
              fontSize="lg"
              variant="ghost"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={()=> onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
