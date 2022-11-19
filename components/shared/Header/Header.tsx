import {Box, Heading} from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Box as="header" p={4}>
      <Heading
        fontStyle="italic"
        shadow="2xl"
        bg="gray.700"
        p={4}
        borderRadius="xl"
      >
        Split by Ether 💸
      </Heading>
    </Box>
  );
};
