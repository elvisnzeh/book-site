import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Blog from "./Blog";
import Contact from "./Contact";
import About from "./About";
import Provider from "./UserContext";

function App() {
  return (
    <div className="App">
      <Provider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
