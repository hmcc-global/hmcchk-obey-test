import { Center, Container, Text } from "@chakra-ui/react";

const LayoutContainer = ({ children, title, subtitle }) => (
  <Container maxW="container.md" pb={10}>
    <Container pb="1em">
      <Center pt="5em">
        <Text fontSize={["2xl", "4xl", "5xl"]} textAlign="center" letterSpacing="1px">
          {title}
        </Text>
      </Center>
      {subtitle}
    </Container>
    {children}
  </Container>
);

export default LayoutContainer;
