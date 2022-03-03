import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App;
