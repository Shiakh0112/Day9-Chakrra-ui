// App.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ProfileCard from "./Componenets/ProfileCard";

function App() {
  return (
    <ChakraProvider>
      <ProfileCard />
    </ChakraProvider>
  );
}

export default App;
