import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { searchText } from "./SearchInput";

const NavBar = ({ onSearch }: searchText) => {
  return (
    <HStack padding={"15px"}>
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
