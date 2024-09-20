import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <ChakraProvider>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <TestimonialCard />
      </div>
    </ChakraProvider>
  );
}

export default App;
