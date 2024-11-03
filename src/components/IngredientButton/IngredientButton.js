import React from 'react';
import './IngredientButton.css';

const IngredientButton = ({ ingredient, name, quantity, addIngredient, removeIngredient }) => {
    return (
        <div className="ingredient-button">
            <div className="ingredient-counter">
                <button onClick={removeIngredient}>-</button>
                <p className="ingredient-quantity">{quantity}</p>
                <button className='increase' onClick={addIngredient}>+</button>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/${ingredient}.png`} alt={name} className="ingredient-image"/>
            <p className="ingredient-name">{name}</p>
        </div>
    );
};

export default IngredientButton;
