/* eslint-disable react/prop-types */
import pizzaData from '../public/data.js';

export function App() {
    return (
        <div className="bg-yellow-100 flex flex-col min-h-screen">
            <Header />
            {/* Flex-grow ensures Menu takes up the remaining space */}
            <div className="flex-grow">
                <Menu />
            </div>
            <Footer />
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
                        name={pizzaData.name}
                        ingredients={pizzaData.ingredients}
                        photoName={pizzaData.photoName}
                        price={pizzaData.price}
                        soldOut={pizzaData.soldOut}
                    />
                );
            })}
        </div>
    );
}

export function Pizza(props) {
    return (
        <div className="flex m-4 p-4 align-middle">
            <img src={props.photoName} alt={props.name} width="150px" />
            <span className="content-center ml-4 p-6 rounded bg-yellow-300 w-64">
                <h6 className="font-bold font-serif text-2xl bg-gradient-to-t from-yellow-300 to-yellow-400">
                    {props.name}
                </h6>
                <h6 className="font-serif">Ingredients: {props.ingredients}</h6>
                <h6 className="font-serif bg-gradient-to-b from-yellow-300 to-yellow-400">
                    Price: {props.price} $
                </h6>
            </span>
        </div>
    );
}

export function Header() {
    return (
        <header className="text-center text-3xl text-white font-bold font-serif rounded-full p-6 bg-gradient-to-t from-yellow-300 to-yellow-500">
            Fusion Pizza Co.
        </header>
    );
}

export function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="text-center text-3xl text-white font-bold font-serif p-6 bg-gradient-to-b from-yellow-300 to-yellow-500">
            {new Date().toLocaleDateString()}. {isOpen ? "We are currently open!" : "Sorry we are closed!"}
        </footer>
    );
}
