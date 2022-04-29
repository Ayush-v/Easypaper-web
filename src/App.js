import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";
import Contact from "./pages/Contact";
import GovtExam from "./pages/GovtExam";
import Home from "./pages/Home";
import Login from "./pages/Login";
import University from "./pages/University";

import Logo from "./assets/Logo.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" type="image/x-icon" href={Logo}></link>
        </Helmet>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/university" element={<University />} />
            <Route path="/board" element={<Board />} />
            <Route path="/govt" element={<GovtExam />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
