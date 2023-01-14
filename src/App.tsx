import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Room from "./pages/Room";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Container from "./components/layout/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "fixed",
          color: "red",
          height: window.innerHeight,
          backgroundColor: "blue",
        }}
      >
        <p>innerHeight: {window.innerHeight}</p>
        <p>innerWidth: {window.innerWidth}</p>
      </div>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
