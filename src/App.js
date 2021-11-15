import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <GlobalStyle />
      <Menu />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
