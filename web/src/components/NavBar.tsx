import { Box, Link, Flex } from "@chakra-ui/react";
interface NavBarProps {}
import NextLink from "next/link";

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="silver" p={4}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Link mr={4}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
