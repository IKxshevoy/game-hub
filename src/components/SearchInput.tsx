import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuerystore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuerystore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={ref}
        borderRadius={"10px"}
        placeholder="Search games"
        variant={"filled"}
        onChange={() => {
          if (ref.current) {
            setSearchText(ref.current.value);
            navigate("/");
          }
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
