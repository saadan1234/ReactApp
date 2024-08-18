/* eslint-disable react/prop-types */
import { useState } from 'react';
import pizzaData from '../public/data';


export function FlashCard({setShowFlashcard}){

    const [pizzaState, setPizzaState] = useState(0);

    return(
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg z-50">
            <div className="flex m-4 p-1 align-middle">
            <button className="px-2 mx-5 text-gray-900 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-lg  text-center" onClick={() => setPizzaState((pizzaState - 1 + pizzaData.length) % pizzaData.length)}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
    <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
</svg>
</button>
                
                    <img className={"bg-yellow-400"} src={pizzaData[pizzaState].photoName} alt={pizzaData[pizzaState].name} width="150px" />
                    <span className="content-center ml-4 p-6 rounded bg-yellow-300 w-64">
                        <h6 className="font-bold font-serif text-2xl bg-gradient-to-t from-yellow-300 to-yellow-400">
                            {pizzaData[pizzaState].name}
                        </h6>
                        <h6 className="font-serif">Ingredients: {pizzaData[pizzaState].ingredients}</h6>
                        <h6 className="font-serif bg-gradient-to-b from-yellow-300 to-yellow-400">
                            Price: {pizzaData[pizzaState].price}
                        </h6>
                    </span>
                    <button className="px-2 mx-5 text-gray-900 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-lg  text-center" onClick={() => setPizzaState((pizzaState+1)%5)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
                    </svg></button>
                </div>
                <button className="py-2 px-4 mx-28 text-gray-900 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-lg  text-center" onClick={() => setShowFlashcard(false)}>Close</button>
                <button className="py-2 px-4 mx-32 absolute right-0  text-gray-900 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200 hover:bg-gradient-to-b focus:ring-10 focus:outline-2 focus:ring-yellow-950 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-lg  text-center " onClick={() => alert("Your pizza party will arrive soon!")}>Add to Cart</button>
            </div>
        </div>
    )
}