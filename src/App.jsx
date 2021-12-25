import Container from "./components/Container";
import Body from "./components/Body";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider>
      <Body>
        <Container>
          <Header />
          <Content />
        </Container>
      </Body>
    </ThemeProvider>
  );
}

export default App;
