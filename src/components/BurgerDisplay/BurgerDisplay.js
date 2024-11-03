import React from 'react';
import './BurgerDisplay.css';

const BurgerDisplay = ({ ingredients }) => {
    return (
        <div className="burger-display">
            {ingredients.map((ingredient, index) => (
                <div key={index} className={`ingredient ${ingredient.replaceAll("ingredient_", "")}`} style={{zIndex: ingredients.length - index}}>
                    <img src={`${process.env.PUBLIC_URL}/images/${ingredient.replaceAll("ingredient_", "")}.png`} alt={ingredient} />
                </div>
            ))}
        </div>
    );
};

export default BurgerDisplay;
