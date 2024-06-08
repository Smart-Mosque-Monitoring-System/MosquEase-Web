import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar";

import Providers from "@/components/providers";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
