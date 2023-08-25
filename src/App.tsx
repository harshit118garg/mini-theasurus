import "./App.scss";
import { Article } from "./components/article/Article";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div className="container flex justify-center flex-col w-screen">
        <Header />
        <Article />
      </div>
    </div>
  );
}

export default App;
