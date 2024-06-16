import { Navbar } from "./Components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";

import { Pokemones } from "./Pages/Pokemones.jsx";
import { Detalles } from "./Pages/Detalles.jsx";
import { Home } from "./Pages/Home.jsx";

import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
