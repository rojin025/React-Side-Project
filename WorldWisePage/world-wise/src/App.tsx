import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Add from "./pages/Add";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="Add" element={<Add />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
