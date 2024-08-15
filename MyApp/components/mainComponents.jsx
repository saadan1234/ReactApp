
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

export function Pizza(){
    
    return <div>
        <h4>Pizza</h4>
        <img src="../pizzas/funghi.jpg" alt="Pizza Funghi" width="200px"/>
    </div> 
}


export function Header(){
    return <h3>
        Fusion Pizza Co.
    </h3>
}

export function Menu(){
    return (
    <div>
       <h3>Our Menu</h3>
        <Pizza />
        <Pizza />
        <Pizza />
    </div>
    )

    
}

export function Footer(){
    return <footer>{new Date().toLocaleDateString() }. We are currently open. </footer>
}
