import { ThemeProvider } from "styled-components";
import { MovieDataModal } from "./components/MovieDataModal";
import { Routes } from "./routes";
import { GlobalStyles } from "./styles/global";
import dark from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
