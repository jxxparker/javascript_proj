import {
  Box,
  //   Button,
  //   Heading,
  //   HStack,
  //   IconButton,
  //   Image,
  //   Input,
  //   Modal,
  //   ModalBody,
  //   ModalCloseButton,
  //   ModalContent,
  //   ModalFooter,
  //   ModalHeader,
  //   ModalOverlay,
  //   Text,
  //   useColorModeValue,
  //   useDisclosure,
  //   useToast,
  //   VStack,
} from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      {" "}
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
    </Box>
  );
};

export default ProductCard;
