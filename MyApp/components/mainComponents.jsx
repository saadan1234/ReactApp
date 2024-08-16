/* eslint-disable react/prop-types */
import pizzaData from '../public/data.js';

export function App() {
    return (
    <div>
        <h1>
            <Header />
            <Menu />
            <Footer />
        </h1>
    </div> 
    )
}

export function Menu(){
    return (
    <div>
       <h3>Our Menu</h3>
       {pizzaData.map((pizzaData)=> {
            // eslint-disable-next-line react/jsx-key
            return <Pizza name={pizzaData.name} ingredients={pizzaData.ingredients} photoName={pizzaData.photoName}/>
       })}
       
    </div>
    )
}

export function Pizza(props){
    console.log(props)
    return <div style={{backgroundColor: "lightyellow"}}>
        <img src={props.photoName} alt={props.name} width="200px"/>
        <h6>{props.name}</h6>
        <h6>{props.ingredients}</h6>
    </div> 
}


export function Header(){
    return <header className="text-3xl font-bold underline">
        Fusion Pizza Co.
    </header>
}



export function Footer(){
    // const hour = new Date().getHours();
    // const openHour = 12;
    // const closeHour = 23 ;
    // const isOpen = hour>= openHour && hour<= closeHour
    // isOpen? alert("We are currently open!") : alert("Sorry we are closed!");
    return <footer  style={{color:"red", fontSize:"32px", backgroundColor: "black"}}> {new Date().toLocaleDateString() }. We are currently open. </footer>
}
