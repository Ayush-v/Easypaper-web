import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import GovtJobs from "./pages/GovtJobs";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import Logo from "./assets/Logo.svg";
import Footer from "./components/Footer";
import UniversityPage from "./pages/UniversityPage";
import Courses from "./pages/Courses";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndServices from "./pages/TermsAndServices";
import Module from "./pages/Module";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" type="image/x-icon" href={Logo}></link>
        </Helmet>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/:university/:id" element={<UniversityPage />} />
            <Route
              exact
              path="/:university/:id/:coursename/:courseid"
              element={<Courses />}
            />
            <Route
              exact
              path="/:university/:id/:coursename/:courseid/:module/:moduleid"
              element={<Module />}
            />
            <Route exact path="/joinus" element={<JoinUs />} />
            <Route exact path="/govt" element={<GovtJobs />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              exact
              path="/terms-and-services"
              element={<TermsAndServices />}
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
