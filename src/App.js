import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['bappa', 'shakib khan', 'shanto', 'jashim', 'salman', 'bappi'] //array call kore o variable declare kore change kora jay

 const products = [
   {name: 'Photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$15.25'},
    {name: 'PDF reader', price: '$10.00'},
    {name: 'Premiar Ei', price: '$100.00'}
  ]


  // const productName = products.map(product => product.name)
  // console.log(productName);
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);
  return (
    
    <div className="App">
      <header className="App-header">
      <p>My First React Paragraph</p>
      {/* <ul>
        {
          nayoks.map(nayok => <li> {nayok}</li> )
        }
        {
          products.map(product => <li>{product.name}</li> )
        }
      </ul> */}
      {
        //dinamic vabe onek product eksathe call korte map use kore
      }

      <Counter > </Counter>
      <Users> </Users>

      {
        products.map(pd => <Product product = {pd}></Product> )
      }
     
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1)
 
  //  {
  //   //setCount(count + 1);
    
  // };
  return(
    <div>
      <h1>
        Counter: {count}
      </h1>
      <button onMouseMove = {() => setCount(count + 1)}>Increase</button>
      <button onMouseOver = {() => setCount (count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]); // state e onek gula data rakhar jonno blank rakha hoiche

  useEffect(() => { //data load korte
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []) // empty array dewar karon bar bar call na korar joono
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => 
          <li>
            <h3>Name:{user.name}</h3>
            <p>Phone:{user.phone}</p> 
            <p>Email:{user.email}</p>
          </li> 
          )
        }
      </ul>
    </div>
  )
}
//Dynamic Component creat!
//Function declare korte hobe 
//er vitore props hisabe variable declare korbe
//() er vitor dov er bhitor h1, p lekhte hobe.
//style add korar way Style = {{ Border: .. Margin}}
//props parameter declare korte use hoy.


function Product(props) {
  const productStyle = {
    border: '10px solid gray', 
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '250px',
    width : '250px',
    float : 'left'
  }
  console.log(props);
  const {name, price} = props.product; // evake call kore value define kora jay, look h3 
  return (
    <div style = {productStyle}>
      <h2>{name} </h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}


export default App;
