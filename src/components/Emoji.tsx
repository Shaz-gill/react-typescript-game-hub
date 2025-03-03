import { ImageProps, Img } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // [key: number] is index signature. Means any number of keys of type number
  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: meh,
      alt: "meh",
      boxSize: "20px",
    },
    4: {
      src: thumbsUp,
      alt: "recommended",
      boxSize: "20px",
    },
    5: {
      src: bullsEye,
      alt: "exceptional",
      boxSize: "30px",
    },
  };
  return (
    <div>
      <Img {...emojiMap[rating]} marginTop={1} />
    </div>
  );
};

export default Emoji;
