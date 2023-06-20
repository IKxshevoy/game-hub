import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface searchText {
  onSearch(text: string): void;
}

const SearchInput = ({ onSearch }: searchText) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={ref}
        borderRadius={"10px"}
        placeholder="Search games"
        variant={"filled"}
        onChange={() => {
          if (ref.current) onSearch(ref.current.value);
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
