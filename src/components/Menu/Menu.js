import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <button onClick={() => {
                const favoriteBurgers = document.querySelector('.favorite-burgers');
                favoriteBurgers.classList.remove('show');
            }}>
                <img src={`${process.env.PUBLIC_URL}/images/home.svg`} alt="Home"/>
            </button>

            {/* Add .favorite-burgers class show */}
            <button onClick={() => {
                const favoriteBurgers = document.querySelector('.favorite-burgers');
                favoriteBurgers.classList.add('show');
            }}>
                <img src={`${process.env.PUBLIC_URL}/images/fav.svg`} alt="Favorite"/>
            </button>
        </div>
    );
}

export default Menu;
