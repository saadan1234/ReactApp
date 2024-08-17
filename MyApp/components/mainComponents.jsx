/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import pizzaData from '../public/data.js';
import '../public/Flashcard.css';

function flashCards(setShowFlashcard) {
    setShowFlashcard(true);
}

export function App() {
    const [showFlashcard, setShowFlashcard] = useState(false);

    return (
        <div className="bg-yellow-100 flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Menu />
            </div>
            <Footer setShowFlashcard={setShowFlashcard} />
            {showFlashcard && (
                <div className="overlay">
                    <div className="flashcard">
                        <h2>Order Now</h2>
                        <p>This is the content of the flashcard.</p>
                        <button onClick={() => setShowFlashcard(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export function Menu() {
    return (
        <div className="flex flex-wrap justify-center">
            {pizzaData.map((pizzaData) => {
                return (
                    <Pizza
                        key={pizzaData.name}
                        pizza={pizzaData}
                    />
                );
            })}
        </div>
    );
}

export function Pizza({ pizza }) {
    return (
        <>
            {pizza.soldOut ? (
                <div className="flex m-4 p-4 align-middle">
                    <img className={"bg-gray-400 opacity-60"} src={pizza.photoName} alt={pizza.name} width="150px" />
                    <span className="content-center ml-4 p-6 rounded bg-gray-300 w-64">
                        <h6 className="font-bold font-serif text-2xl bg-gradient-to-t from-gray-300 to-gray-400">
                            {pizza.name}
                        </h6>
                        <h6 className="font-serif">Ingredients: {pizza.ingredients}</h6>
                        <h6 className="font-serif bg-gradient-to-b from-gray-300 to-gray-400">
                            Price: {"Sold Out"}
                        </h6>
                    </span>
                </div>
            ) : (
                <div className="flex m-4 p-4 align-middle">
                    <img src={pizza.photoName} alt={pizza.name} width="150px" />
                    <span className="content-center ml-4 p-6 rounded bg-yellow-300 w-64">
                        <h6 className="font-bold font-serif text-2xl bg-gradient-to-t from-yellow-300 to-yellow-400">
                            {pizza.name}
                        </h6>
                        <h6 className="font-serif">Ingredients: {pizza.ingredients}</h6>
                        <h6 className="font-serif bg-gradient-to-b from-yellow-300 to-yellow-400">
                            Price: {pizza.price + "$"}
                        </h6>
                    </span>
                </div>
            )}
        </>
    );
}

export function Header() {
    return (
        <header className="text-center text-3xl text-white font-bold font-serif rounded-full p-6 bg-gradient-to-t from-yellow-300 to-yellow-500">
            Fusion Pizza Co.
        </header>
    );
}

export function Footer({ setShowFlashcard }) {
    const hour = new Date().getHours();
    const isOpen = hour >= 12 && hour <= 23;
    return (
        <footer className="text-center text-3xl text-white font-bold font-serif p-6 bg-gradient-to-b from-yellow-300 to-yellow-500">
            {new Date().toLocaleDateString()}.
            {isOpen ? (
                <>
                    <p>"We are currently open!"</p>
                    <button
                        type="button"
                        className="m-5 text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => flashCards(setShowFlashcard)}
                    >
                        Order Now
                    </button>
                </>
            ) : (
                <>
                    <p>"Sorry we are closed!"</p>
                    <button
                        type="button"
                        className="m-5 text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => flashCards(setShowFlashcard)}
                    >
                        Book Now
                    </button>
                </>
            )}
        </footer>
    );
}
