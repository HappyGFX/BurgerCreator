import React, { useState } from 'react';
import './FavoriteBurgerForm.css';

const FavoriteBurgerForm = ({ burgerName, setBurgerName, saveBurger }) => {
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setBurgerName(e.target.value);
        setError(null); // Resetuje błąd przy każdym wprowadzeniu tekstu
    };

    const handleSave = () => {
        if (!burgerName.trim()) {
            setError('Burger name cannot be empty');
            return;
        }
        saveBurger();
    };

    return (
        <div className="favorite-burger-form">
            <input
                type="text"
                value={burgerName}
                onChange={handleInputChange}
                placeholder="Input space"
                className={`burger-name-input ${error ? 'input-error' : ''}`}
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSave} className="save-button">
                Save
            </button>
        </div>
    );
};

export default FavoriteBurgerForm;
