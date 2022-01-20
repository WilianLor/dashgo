import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4">
          <Text>Wilian Lorencetto</Text>
          <Text color="gray.300" fontSize="small">
            wilian.lorencetto1@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Wilian Lorencetto"
        src="https://github.com/WilianLor.png"
      />
    </Flex>
  );
}
