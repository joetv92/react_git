import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Navbar from "./components/nav";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;