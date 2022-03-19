import { h, FunctionalComponent } from "preact";
import classed from "pclc";
import Scaffold from "./scaffold";

const Container = classed.div`flex flex-col justify-start items-center`;

const App: FunctionalComponent = () => {
  return (
    <Container>
      <Scaffold>App</Scaffold>
    </Container>
  );
};

export default App;
