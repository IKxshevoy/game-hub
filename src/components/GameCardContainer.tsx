import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={"10px"}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.03)",
        cursor: "pointer",
        transition: "0.2s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
