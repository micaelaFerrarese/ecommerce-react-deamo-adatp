import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Image, LinkBox, Text, VStack } from "@chakra-ui/react";

const CardItem = ({ producto }) => {
  return (
    <Link to={`/producto/${producto.id}`}>
      <LinkBox as="article" maxW="xs" role="group">
        <Box
          position="relative"
          overflow="hidden"
          roundedTop="lg"
          bg="secondary"
        >
          <Image src={producto.attributes.image.data.attributes.url} />
        </Box>

        <VStack align="flex-start" p={1}>
          <Heading size="md" my="2">
            {producto.attributes.title}
          </Heading>
          <Text color="brand" fontSize="xl" fontWeight="bold">
            $ {producto.attributes.price} args.
          </Text>
        </VStack>
      </LinkBox>
    </Link>
  );
};

export default CardItem;
