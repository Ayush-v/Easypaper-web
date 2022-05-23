import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import GovtJobs from "./pages/GovtJobs";
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
import PrivateRoute from "./components/PrivateRoute";
const LazyHome = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <ModalProvider>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Suspense>
                      <LazyHome />
                    </Suspense>
                  }
                />
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
                {/* <Route
                  exact
                  path="/:university/:id/:coursename/:courseid/:module/:moduleid/:layout"
                  element={
                    <PrivateRoute>
                      <Module />
                    </PrivateRoute>
                  }
                /> */}
                <Route
                  exact
                  path="/:university/:id/:coursename/:courseid/:module/:moduleid/:layout"
                  element={<PrivateRoute />}
                >
                  <Route path="" element={<Module />} />
                </Route>
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
            </ModalProvider>
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
