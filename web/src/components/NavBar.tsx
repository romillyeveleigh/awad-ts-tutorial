import { Box, Button, Link, Flex, Heading } from "@chakra-ui/react";
interface NavBarProps {}
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useApolloClient } from "@apollo/client";

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const { data, loading } = useMeQuery({ skip: isServer() });

  let body = null;

  // data is loading
  if (loading) {
    // user not logged in
  } else if (!data?.me) {
    console.log(`data.me`, data?.me);
    body = (
      <>
        <Flex align="center" alignItems="center">
          <NextLink href="/login">
            <Link mr={4} mt="auto">
              login
            </Link>
          </NextLink>
          <NextLink href="/register">
            <Link>register</Link>
          </NextLink>
        </Flex>
      </>
    );
  }
  // user is logged in
  else {
    body = (
      <Flex align="center">
        <NextLink href="/create-post">
          <Button as={Link} mr={4}>
            create post
          </Button>
        </NextLink>

        <Box mr={2}>{data.me.username}</Box>
        <Button
          variant="link"
          isLoading={logoutFetching}
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex zIndex={1} bg="tan" p={4} position="sticky" top={0} align="center">
      <Flex flex={1} margin="auto" maxW={800} alignItems="center">
        <NextLink href="/">
          <Link>
            <Heading>LiReddit</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
