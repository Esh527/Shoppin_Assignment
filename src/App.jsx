import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "./context/ConfigContext";
import LandingPage from "./pages/LandingPage";
import CustomizationPage from "./pages/CustomizationPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsPage from "./pages/DetailsPage";
import About from "./components/About";
import Contact from "./components/Contact";





const App = () => {
    return (
        <ConfigProvider>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/customize" element={<CustomizationPage />} />
                    <Route path="/details/:type/:id" element={<DetailsPage />} /> 
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
            <Footer />
        </ConfigProvider>
    );
};

export default App;
