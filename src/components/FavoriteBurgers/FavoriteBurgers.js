import React from 'react';
import BurgerDisplay from "../BurgerDisplay/BurgerDisplay";
import './FavoriteBurgers.css';

const FavoriteBurgers = ({ favorites, setFavorites, ingredients, setIngredients }) => {
    return (
        <div className="favorite-burgers">
            <div className="burger-info">
                <h1>Favourites<br/>Burgers</h1>
                {Object.entries(favorites).length <= 0 && (
                    <p className='color-blue'>You don’t have any<br/>favourites burgers</p>
                )}
            </div>

            <div className="favorite-burgers-list">
                {Object.entries(favorites).map(([burgerName, ingredients], index) => (
                        <div>
                            <BurgerDisplay
                                ingredients={ingredients}
                                onClick={() => {
                                    setIngredients(ingredients);

                                    const favoriteBurgers = document.querySelector('.favorite-burgers');
                                    favoriteBurgers.classList.remove('show');
                                }}
                            />
                            <div className='favorite-burgers-info'>
                                <p>{burgerName}</p>
                                <button className="remove-button" onClick={() => {
                                    const newFavorites = {...favorites};
                                    delete newFavorites[burgerName];
                                    setFavorites(newFavorites);
                                }}>
                                    <img src={`${process.env.PUBLIC_URL}/images/remove.svg`} alt="Remove"/>
                                    Remove
                                </button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteBurgers;
