import React, { useContext } from "react";
import { bands } from "../data/options";
import { ConfigContext } from "../context/ConfigContext";
import '../components/BandSelection.css'
import { Link } from "react-router-dom";

const BandSelection = () => {
    const { config, updateConfig } = useContext(ConfigContext);

    return (
        <div className="band-selection">
            <h3>Select a Band</h3>
            <div className="band-options">
                {bands.map((band) => (
                    <Link to={`/details/band/${band.id}`} key={band.id}
                         className={`band-option ${config.band?.id === band.id ? "selected" : ""}`}
                        onClick={() => updateConfig("band", band)}>
                            <img src={band.image} alt={band.name} />
                                 <p>{band.name}</p>
                    </Link>
                    // <div
                    //     key={band.id}
                    //     className={`band-option ${config.band?.id === band.id ? "selected" : ""}`}
                    //     onClick={() => updateConfig("band", band)}
                    // >
                    //     <img src={band.image} alt={band.name} />
                    //     <p>{band.name}</p>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default BandSelection;
