import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { useCreatePostMutation } from "../generated/graphql";
import { useisAuth } from "../utils/useisAuth";
import { withApollo } from "../utils/withApollo";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  useisAuth();
  const [createPost] = useCreatePostMutation();

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          const { errors } = await createPost({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: "posts:{}" });
            },
          });
          if (!errors) router.push("/");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              />
            </Box>
            <Button
              mt={2}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreatePost);
