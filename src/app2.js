import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['bappa', 'shakib khan', 'shanto', 'jashim', 'salman'] //array call kore o variable declare kore change kora jay

 const products = [
   {name: 'Photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$15.25'},
    {name: 'PDF reader', price: '$10.00'}
  ]

  return (
    
    <div className="App">
      <header className="App-header">
      <p>My First React Paragraph</p>
        {/* <Product name = {products[0].name} price = {products[0].price}> </Product> */}
        <Product product = {products[0]} ></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
         {/* <Person name = {nayoks[0]} nayika = " Onjona" food = "Alu vorta"></Person>
         <Person name = "Alomogir" nayika = " Shabana" food = "Birinyani"></Person>
         <Person name = {nayoks[1]} nayika = " Purnima" food = "Faluda"></Person>
         <Person name = "BappaRaaz"></Person> */}
      </header>
    </div>
  );
}

//Dynamic Component creat!
//Function declare korte hobe 
//er vitore props hisabe variable declare korbe
//() er vitor dov er bhitor h1, p lekhte hobe.
//style add korar way Style = {{ Border: .. Margin}}
//props parameter declare korte use hoy.

function Product(props) {
  const productStyle = {
    border: '1px solid gray', 
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width : '200px',
    float : 'left'
  }
  console.log(props);
  const {price} = props.product; // evake call kore value define kora jay, look h3 
  return (
    <div style = {productStyle}>
      <h2>{props.product.name} </h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}

// function Person(props){
//   const personStyle={
//     border: '2px solid red',
//     margin :  '10px',
//     width: '500px'
//   }


//   console.log(props);
//   return (
// <div style = {personStyle}> 
//   <h1>Name: {props.name} </h1>
//   <h2> Nayika: {props.nayika}</h2>
//   <h3>Food: {props.food}</h3>
// </div>
//   )
// }
export default App;
