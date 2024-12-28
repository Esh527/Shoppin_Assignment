import React from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <h1>Apple Watch Studio</h1>
            <button onClick={() => navigate("/customize")}>Customize Now</button>
        </div>
    );
};

export default LandingPage;
