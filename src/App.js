import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import GovtJobs from "./pages/GovtJobs";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import UniversityPage from "./pages/UniversityPage";
import Courses from "./pages/Courses";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndServices from "./pages/TermsAndServices";
import Module from "./pages/Module";
import NotFound from "./pages/NotFound";
import { ModalProvider } from "./contexts/ModalContext";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <ModalProvider>
            <BrowserRouter>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route
                  exact
                  path="/:university/:id"
                  element={<UniversityPage />}
                />
                <Route
                  exact
                  path="/:university/:id/:coursename/:courseid"
                  element={<Courses />}
                />
                <Route
                  exact
                  path="/:university/:id/:coursename/:courseid/:module/:moduleid/:layout"
                  element={<Module />}
                />
                <Route exact path="/joinus" element={<JoinUs />} />
                <Route exact path="/govt" element={<GovtJobs />} />
                <Route
                  exact
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route
                  exact
                  path="/terms-and-services"
                  element={<TermsAndServices />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ModalProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
