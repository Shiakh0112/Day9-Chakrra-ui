// MyComponent.js
import React from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  Text,
  Stack,
} from "@chakra-ui/react";

const MyComponent = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>My Chakra UI Application</Heading>

      <Stack spacing={4}>
        <Input placeholder="Enter some text" />
        <Button colorScheme="teal">Click Me</Button>

        <Card>
          <CardBody>
            <Text>This is a Chakra UI Card.</Text>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
};

export default MyComponent;
