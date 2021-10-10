import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
