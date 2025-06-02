import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className={"container"}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={"header"}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  return (
    <main className={"menu"}>
      <h2>Our Menu.</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className={"pizzas"}>
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>Sorry we are still working on Menu! Soon You will enjoy ;)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="Pizza photo" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = currentHour > openHour && currentHour < closeHour;
  console.log(isOpen);

  return (
    <footer className={"footer"}>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <div className={"order"}>
          <p>
            We are happy to welcome you from {openHour}:00 till {closeHour}:00.
          </p>
        </div>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className={"order"}>
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className={"btn"}>Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
