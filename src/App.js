import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";
import Contact from "./pages/Contact";
import GovtExam from "./pages/GovtExam";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import University from "./pages/University";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/university" element={<University />} />
            <Route path="/board" element={<Board />} />
            <Route path="/govt" element={<GovtExam />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
