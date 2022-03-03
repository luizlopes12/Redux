import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import history from "./services/history";
import Rotas from "./routes";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalStyle/>
      <Header/>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App;
