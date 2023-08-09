import MainContainer from "./components/MainContainer";
import ScrollToTop from "./components/ScrollToTop";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.md" minHeight="100vh">
      <BrowserRouter basename="/hmcchk-obey-test">
        <ScrollToTop />
        <MainContainer />
        <Box pb="2em">© Harvest Mission Community Church</Box>
      </BrowserRouter>
    </Container>
  </ChakraProvider>
);

export default App;
