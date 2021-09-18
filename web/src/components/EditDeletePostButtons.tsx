import React from "react";
import NextLink from "next/link";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          mr={2}
          aria-label="edit"
          icon={<EditIcon />}
          size="xs"
        />
      </NextLink>
      <IconButton
        ml="auto"
        aria-label="delete"
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({ id });
        }}
        size="xs"
      />
    </Box>
  );
};
