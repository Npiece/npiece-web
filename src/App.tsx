import "./App.scss";
import Nav from "./components/navbar/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {IntroPage} from "./pages/Intro";
import {Npunks} from "./pages/Npunks";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/npunks" element={<Npunks />} />
      </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;
