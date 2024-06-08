import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";

import About from "./pages/About";

import Providers from "@/components/providers";

import Terms from "./pages/Terms"

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />}/>
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
