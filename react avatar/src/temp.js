// Pizza Dataset
// const pizzas = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "./focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "./margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "./spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "./funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "./salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "./prosciutto.jpg",
//     soldOut: false,
//   },
// ];
// function Header(){

//   return <header className='header'>
//           <h1>Fast React Pizza Co.</h1>
//           </header>
// }
// function Menu() {

//  return <main className='menu'>
//   <h2>Our Menu</h2>


//     <ul className="pizzas">
//     {
//       pizzas.map((pizza,idx) => <Pizza key={idx} pizzaObjs={pizza}/> )
//     }
//   </ul>
//  </main>
  

// }
// function Footer () {

//   const hour = 22;
//   const openingHour = 5
//   const closingHour = 22
//   const isOpen = hour >= openingHour && hour <= closingHour;

//   return <footer className='footer'>
//     {
//        new Date().getHours()}  we're currently { isOpen  ? 'open' : "closed"
//     }
  
//   </footer>

// }

// // Pizza Component
// function Pizza({pizzaObjs}) {
//   // Logic Destructuring the Prop 
// const {name,ingredients,price,photoName, soldOut} = pizzaObjs;
// // Appereance
// return(
// <div className={`pizza ${soldOut ? 'sold-out' : ""}`}>
// <img src={photoName} alt="photo of a type of pizza" />
//   <h3>{name}</h3>
//   <p>{ingredients}</p>
//   <span> {soldOut ? 'SOLD OUT' : `Price: ${+price}$`}</span>
//  <button className={soldOut ? 'btn btn__red' : 'btn btn__green'}>{soldOut ? "pizza is sold out sorry" : "pizza is available"}</button>
// </div>
// ) 
// }


    {/* <Header/>
        <Menu/>
        <Footer/> */}