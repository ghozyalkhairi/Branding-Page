import { ThemeProvider } from "./context/ThemeContext";
import Body from "./components/Body";
import Header from "./components/Header";
import Container from "./components/Container";
import BlueContainer from "./components/BlueContainer";
import Content from "./components/Content";
import Kontak from "./components/Kontak";
import SectionSatu from "./components/sections/SectionSatu";
import SectionDua from "./components/sections/SectionDua";
import SectionTiga from "./components/sections/SectionTiga";
import Blog from "./components/sections/Blog";
import Teknologi from "./components/sections/Teknologi";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Body>
        <Container>
          <Header />
          <Content>
            <SectionSatu />
            <SectionDua />
            <SectionTiga />
          </Content>
        </Container>
        <BlueContainer>
          <Kontak />
        </BlueContainer>
        <Container>
          <Blog />
          <Teknologi />
        </Container>
        <BlueContainer>
          <Footer />
        </BlueContainer>
      </Body>
    </ThemeProvider>
  );
}

export default App;
