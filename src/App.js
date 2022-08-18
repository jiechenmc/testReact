import logo from "./logo.svg";
import "./App.css";
import data from "./data";
function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + data.src}></img>
    </div>
  );
}

export default App;
