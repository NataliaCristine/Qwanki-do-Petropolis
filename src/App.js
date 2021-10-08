import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
    </div>
  );
}

export default App;
