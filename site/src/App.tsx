import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Chef } from "./pages/Chef";
import { Reserve } from "./pages/Reserve";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="chef" element={<Chef />} />
          <Route path="reserve" element={<Reserve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
