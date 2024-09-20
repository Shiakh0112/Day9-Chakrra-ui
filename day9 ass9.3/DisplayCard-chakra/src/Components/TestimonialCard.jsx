import { Box, Text, Avatar, Heading, VStack, Grid } from "@chakra-ui/react";

// Single Testimonial Card Component
const TestimonialCard = () => {
  return (
    <Box
      bg="#f4f8fc"
      w="350px"
      borderRadius="lg"
      p={6}
      textAlign="center"
      boxShadow="lg"
      position="relative"
    >
      {/* Main testimonial box with bottom arrow */}
      <Box
        bg="white"
        p={4}
        borderRadius="lg"
        boxShadow="sm"
        mb={8}
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          bottom: "-20px" /* Adjust the position of the arrow */,
          left: "50%",
          transform: "translateX(-50%)" /* Center the arrow */,
          borderWidth:
            "20px 20px 0 20px" /* Creates a downward pointing arrow */,
          borderStyle: "solid",
          borderColor:
            "white transparent transparent transparent" /* Arrow color */,
        }}
      >
        <Heading fontSize="xl" mb={2}>
          Mindblowing Service
        </Heading>
        <Text color="gray.500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque
          sed imperdiet nibh lectus feugiat nunc sem.
        </Text>
      </Box>

      {/* Author details */}
      <VStack spacing={2}>
        <Avatar
          src="https://bit.ly/sage-adebayo"
          name="Jane Cooper"
          size="lg"
          mb={4}
        />
        <Heading fontSize="md">Jane Cooper</Heading>
        <Text fontSize="sm" color="gray.500">
          CEO at ABC Corporation
        </Text>
      </VStack>
    </Box>
  );
};

// Testimonial Grid with 8 Cards
const TestimonialGrid = () => {
  return (
    <Box textAlign="center">
      <Box>
        <Heading as="h2" size="lg" mb={1}>
          Our Client Speak
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={10}>
          We have been working with client around the world
        </Text>
      </Box>
      <Grid
        style={{ margin: "auto" }}
        templateColumns={{
          base: "1fr", // 1 column on small screens
          md: "repeat(3, 1fr)", // 2 columns on medium screens
          lg: "repeat(4, 1fr)", // 4 columns on large screens
        }}
        gap={6}
        p={4}
      >
        {/* Render 8 cards */}
        {Array(8)
          .fill("")
          .map((_, index) => (
            <TestimonialCard key={index} />
          ))}
      </Grid>
    </Box>
  );
};

export default TestimonialGrid;
