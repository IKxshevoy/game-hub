import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQuerystore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQuerystore((p) => p.gameQuery.platformId);
  const setPlatformId = useGameQuerystore((p) => p.setPlatformId);

  const platform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        fontWeight={platform?.name ? "bold" : "normal"}
      >
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
