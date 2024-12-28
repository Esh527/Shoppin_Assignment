import React, { useContext } from "react";
import { sizes } from "../data/options";
import { ConfigContext } from "../context/ConfigContext";
import '../components/SizeSelection.css'

const SizeSelection = () => {
    const { config, updateConfig } = useContext(ConfigContext);

    return (
        <div className="size-selection">
            <h3>Select a Size</h3>
            <div className="size-options">
                {sizes.map((size) => (
                    <div
                        key={size.id}
                        className={`size-option ${config.size?.id === size.id ? "selected" : ""}`}
                        onClick={() => updateConfig("size", size)}
                    >
                        {size.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SizeSelection;
