/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import pizzaData from '../public/data.js';
import { FlashCard } from './flashCard.jsx';


function flashCards(setShowFlashcard){
    setShowFlashcard(true);
}


export function App() {

    
    const [showFlashcard, setShowFlashcard] = useState(false);
    

    return (
        <div className="bg-yellow-100 flex flex-col min-h-screen">
            <Header />
            <SearchBar />
            <div className="flex-grow">
                <Menu />
            </div>
            <Footer setShowFlashcard={setShowFlashcard} />
            {showFlashcard && <FlashCard setShowFlashcard={setShowFlashcard} />}
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
                    <img className={"bg-gray-400 opacity-60"} src={pizza.photoName} alt={pizza.name} width="170px" />
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
                    <img src={pizza.photoName} alt={pizza.name} width="170px" />
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

export function SearchBar(){
    const [searchQuery, setSearchQuery] = useState('');
    console.log(searchQuery)

    return (<div className="text-center text-6xl text-white  pt-3 py-5 bg-gradient-to-b from-yellow-300 to-yellow-500">
        <form action="">
        <label htmlFor="search" className="mb-2 text-sm font-medium text-yellow-900 sr-only dark:text-white">Search</label>
    <div className="mx-10 relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-yellow-500 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    placeholder="Search for a pizza..." type="search" id="search" className="block w-full p-4 ps-10 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Search</button>
    </div>
        </form>
    </div>)
}

export function Header() {
    return (
        <header className="font-custom text-center text-6xl text-white  pt-3 py-5 bg-gradient-to-t from-yellow-300 to-yellow-500">
            Fusion Pizza Co.
        </header>
    );
}

export function Footer({ setShowFlashcard }) {
    const hour = new Date().getHours();
    const isOpen = hour >= 12 && hour <= 23;
    return (
        <footer className="text-center text-3xl text-white font-bold font-serif p-6 bg-gradient-to-b from-yellow-300 to-yellow-500">
            {new Date().toDateString()}.
            {isOpen ? (
                <>
                    <p className='font-custom text-5xl'>"We are currently open!"</p>
                    <button
                        type="button"
                        className="m-5 text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2 mb-2"
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
                        className=" m-5 text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => flashCards(setShowFlashcard)}
                    >
                        Book Now
                    </button>
                </>
            )}
        </footer>
    );
}
