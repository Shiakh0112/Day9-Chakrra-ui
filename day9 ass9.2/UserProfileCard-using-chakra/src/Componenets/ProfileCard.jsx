import {
  Box,
  Avatar,
  Text,
  Button,
  Tag,
  Stack,
  Badge,
  Center,
  Link,
} from "@chakra-ui/react";
import { MdMessage } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

const ProfileCard = () => {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={"white"}
        boxShadow={"lg"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={"https://bit.ly/dan-abramov"} // Replace this with the actual image URL
          alt={"Avatar"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Text fontWeight={600} fontSize={"xl"}>
          Lindsey James
        </Text>
        <Text fontSize={"sm"} color={"gray.500"} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text textAlign={"center"} color={"gray.700"} px={3}>
          Actress, musician, songwriter, and artist. PM for work inquiries or{" "}
          <Link color={"blue.400"} href="#">
            #tag
          </Link>{" "}
          me in your posts.
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
            #ART
          </Badge>
          <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
            #PHOTOGRAPHY
          </Badge>
          <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
            #MUSIC
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            leftIcon={<MdMessage />}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            leftIcon={<IoIosAdd />}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProfileCard;
