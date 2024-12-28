import React, { createContext, useState } from "react";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState({
        case: null,
        size: null,
        band: null,
        price: 0,
    });

    const updateConfig = (key, value) => {
        setConfig((prev) => ({
            ...prev,
            [key]: value,
            price: calculatePrice({ ...prev, [key]: value }),
        }));
    };

    const calculatePrice = (config) => {
        const casePrice = config.case?.price || 0;
        const sizePrice = config.size?.price || 0;
        const bandPrice = config.band?.price || 0;
        return casePrice + sizePrice + bandPrice;
    };

    return (
        <ConfigContext.Provider value={{ config, updateConfig }}>
            {children}
        </ConfigContext.Provider>
    );
};
