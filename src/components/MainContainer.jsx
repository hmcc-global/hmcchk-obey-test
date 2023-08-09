import { Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import LayoutContainer from "./LayoutContainer";
import TestContainer from "./TestContainer";

const MainContainer = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutContainer
            title="HMCC HK Obey Test"
            footer="© Harvest Mission Community Church"
          >
            <TestContainer />
          </LayoutContainer>
        }
      />
    </Routes>
  );
};

export default MainContainer;
