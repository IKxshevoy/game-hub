import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"xl"}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((platform) => platform.platform)
                : []
            }
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
