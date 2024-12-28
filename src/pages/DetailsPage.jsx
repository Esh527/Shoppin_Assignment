import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetailsPage.css';
import { cases, bands } from '../data/options'; // Import data


const DetailsPage = () => {
    const navigate = useNavigate();
    const { type, id } = useParams(); // Get type (case/band) and id from URL params

    // Fetch the correct item based on type and id
    const item =
        type === 'case'
            ? cases.find((c) => c.id === parseInt(id, 10))
            : bands.find((b) => b.id === parseInt(id, 10));

    if (!item) {
        return <p className="details-error">Item not found!</p>;
    }
const backtohome=()=>{
    navigate("/customize")
}
    return (
        <div className="details-page">
            <h1 className="details-title">{item.name}</h1>
            <img src={item.image} alt={item.name} className="details-image" />
            <p className="details-description">{item.description}</p>
            <p className="details-price">Price: ${item.price}</p>
            <button onClick={backtohome} className="back-to-home">Back</button>
        </div>
    );
};

export default DetailsPage;
