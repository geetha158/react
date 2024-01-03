import "./App.css";
import { Home } from "./components/JS/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Searchpage } from "./components/JS/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Searchpage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
