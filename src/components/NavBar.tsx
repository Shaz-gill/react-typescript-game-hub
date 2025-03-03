import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLogo } from "../hooks/useThemeStyles";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack px={5} py={7}>
      <Link to="/">
        <Image {...useLogo()} width="300px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
