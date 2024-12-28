import React, { useContext } from "react";
import { cases } from "../data/options";
import { ConfigContext } from "../context/ConfigContext";
import '../components/CaseSelection.css'
import { Link } from "react-router-dom";

const CaseSelection = () => {
    const { config, updateConfig } = useContext(ConfigContext);

    return (
        <div className="case-selection">
            <h3>Select a Case</h3>
            <div className="case-options">
                {cases.map((watchCase) => (
                    <Link to={`/details/case/${watchCase.id}`} key={watchCase.id} className={`case-option ${config.case?.id === watchCase.id ? "selected" : ""}`}
                         onClick={() => updateConfig("case", watchCase)}>
                    <img src={watchCase.image} alt={watchCase.name} />
                        <p>{watchCase.name}</p>
                    </Link>
                    // <div
                    //     key={watchCase.id}
                    //     className={`case-option ${config.case?.id === watchCase.id ? "selected" : ""}`}
                    //     onClick={() => updateConfig("case", watchCase)}
                    // >
                    //     <img src={watchCase.image} alt={watchCase.name} />
                    //     <p>{watchCase.name}</p>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default CaseSelection;
