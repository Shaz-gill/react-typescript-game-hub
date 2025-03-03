import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        size="md"
      />
    </HStack>
  );
};

export default ColorModeSwitch;
