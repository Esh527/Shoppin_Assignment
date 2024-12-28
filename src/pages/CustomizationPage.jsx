import React from "react";
import CaseSelection from "../components/CaseSelection";
import SizeSelection from "../components/SizeSelection";
import BandSelection from "../components/BandSelection";
import './CustomizationPage.css'

const CustomizationPage = () => {
    return (
        <div className="customization-page">
            <h1>Customize Your Watch</h1>
            <CaseSelection />
            <SizeSelection />
            <BandSelection />
        </div>
    );
};

export default CustomizationPage;
