import React, { useState } from 'react';
import BurgerDisplay from '../BurgerDisplay/BurgerDisplay';
import FavoriteBurgerForm from '../FavoriteBurgerForm/FavoriteBurgerForm';
import Notification from '../Notification/Notification';
import IngredientButton from "../IngredientButton/IngredientButton";
import FavoriteBurgers from "../FavoriteBurgers/FavoriteBurgers";
import './BurgerBuilder.css';

const BurgerBuilder = () => {
    const [burgerName, setBurgerName] = useState('');
    const [favorites, setFavorites] = useState({});
    const [notification, setNotification] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    const [availableIngredients] = useState({
        top_bun: 'Top Bun',
        bottom_bun: 'Bottom Bun',
        tomato: 'Tomato',
        ingredient_burger: 'Meat',
        ingredient_fish: 'Fish',
        lettuce: 'Lettuce',
        ingredient_cheese: 'Cheese',
    });

    const addIngredient = (ingredient) => {
        // Sprawdź, czy pierwszym składnikiem jest dolna bułka
        if (ingredients.length === 0 && ingredient !== 'bottom_bun') {
            setNotification({ message: 'First item must be bottom bun.', type: 'error' });
            return;
        }

        // Zabezpieczenie przed dodaniem więcej niż jednej dolnej lub górnej bułki
        if (ingredient === 'bottom_bun' && ingredients.includes('bottom_bun')) {
            setNotification({ message: 'You can add only one bottom bun.', type: 'error' });
            return;
        }
        if (ingredient === 'top_bun' && ingredients.includes('top_bun')) {
            setNotification({ message: 'You can add only one top bun.', type: 'error' });
            return;
        }

        // Sprawdź limit składników i upewnij się, że ostatnim składnikiem jest górna bułka
        if (ingredients.length >= 8 && ingredient !== 'top_bun') {
            setNotification({ message: 'The maximum number of ingredients is 9, including top bun.', type: 'error' });
            return;
        }

        // Zabezpieczenie przed dodaniem składnika po górnej bułce
        if (ingredients.includes('top_bun')) {
            setNotification({ message: 'You can\'t add ingredients after top bun.', type: 'error' });
            return;
        }

        // Dodaj składnik od góry jeśli nia ma błędów
        setIngredients((prev) => [ingredient, ...prev]);
        setNotification(null);
    };
    const removeIngredient = (ingredient) => {
        // Blokada usuwania dolnej bułki gdy są inne składniki
        if (ingredient === 'bottom_bun' && ingredients.length > 1) {
            setNotification({ message: 'You can\'t remove bottom bun if there are other ingredients.', type: 'error' });
            return;
        }

        // Usuwanie jednego pasującego składnika od góry
        const index = ingredients.indexOf(ingredient);
        if (index === -1) {
            setNotification({ message: 'This ingredient is not on the list.', type: 'error' });
            return;
        }

        setIngredients((prev) => prev.filter((item, i) => i !== index));
        setNotification(null);
    };
    const saveBurger = () => {
        // Walidacja nazwy burgera
        if (!burgerName.trim()) {
            setNotification({ message: 'Name of the burger can\'t be empty.', type: 'error' });
            return;
        }
        if (favorites[burgerName]) {
            setNotification({ message: 'Burger with this name already exists.', type: 'error' });
            return;
        }

        // Zapis burgera do ulubionych
        setFavorites((prev) => ({
            ...prev,
            [burgerName]: [...ingredients],
        }));
        setIngredients([]); // Reset składników
        setBurgerName(''); // Reset nazwy
        setNotification({ message: 'Burger saved successfully. ✓', type: 'success' });
    };

    return (
        <div className="root-content">
            <h1>Burger<br/>Creator</h1>

            <div className="container">
                <div className="box ingredients-box">
                    {Object.keys(availableIngredients).map((ingredient) => (
                        <IngredientButton
                            ingredient={ingredient}
                            name={availableIngredients[ingredient]}
                            quantity={ingredients.filter((item) => item === ingredient).length}
                            addIngredient={() => addIngredient(ingredient)}
                            removeIngredient={() => removeIngredient(ingredient)}
                        />
                    ))}
                </div>
                <div className="box burger-box">
                    <div className="burger-info">
                        <h1>Your<br/>Burger</h1>
                        {ingredients.length === 0 && (
                            <p className='color-blue'>Add items to create your burger. First item<br/>must be bottom
                                bun. To finish your burger<br/>choose top bun</p>
                        )}
                        {notification && <Notification message={notification}/>}
                    </div>
                    <BurgerDisplay ingredients={ingredients}/>

                    {ingredients.includes("top_bun") && (
                        <FavoriteBurgerForm
                            burgerName={burgerName}
                            setBurgerName={setBurgerName}
                            saveBurger={saveBurger}
                        />
                    )}
                </div>
            </div>

            <FavoriteBurgers favorites={favorites} setFavorites={setFavorites} ingredients={ingredients} setIngredients={setIngredients}/>
        </div>
    );
};

export default BurgerBuilder;
