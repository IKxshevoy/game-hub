import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={"10px"}
        placeholder="Search games"
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;