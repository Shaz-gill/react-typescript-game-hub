import { useColorMode } from "@chakra-ui/react";
import darkLogo from "../assets/gameVerseDark.webp";
import lightLogo from "../assets/gameVerseLight.webp";

const useThemeMode = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return { isDark, colorMode };
};

export const useLogo = () => {
  const { isDark } = useThemeMode();
  return { src: isDark ? lightLogo : darkLogo };
};
