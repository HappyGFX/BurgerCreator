import React from 'react';
import './Ingredient.css';

const Ingredient = ({ name, addIngredient }) => {
    return (
        <div className="ingredient" onClick={() => addIngredient(name)}>
            <p>{name}</p>
        </div>
    );
};

export default Ingredient;
