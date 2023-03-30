import React, { useState } from "react";

export default function UseState() {
  const [name, setName] = useState("John");
  const [color, setColor] = useState("white");

  const [car, setCar] = useState({
    brand: "Land Rover",
    model: "Range Rover",
    year: 2020,
    color: "white",
  });

  function changeName() {
    const arr = [
      "Hadley Outlaw",
      "Desire Aparicio",
      "Dylon Cantu",
      "Stewart Kimball",
      "Justice McIntyre",
      "Shaelyn Rosas",
      "Barry Swain",
      "Anissa Navarro",
      "Janell Shapiro",
      "Landon Barlow",
      "Laney Helton",
      "Andrew Prescott",
      "Donald Dorsey",
      "Quinten Coker",
      "Savanna Cowan",
      "Nathanael Rao",
      "Alecia Quinonez",
      "Yahaira Gaddis",
      "Harris Maynard",
      "Emilia Jean",
    ];
    setName(arr[Math.floor(Math.random() * arr.length)]);
  }

  function changeColor() {
    const arr = [
      "white",
      "black",
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "purple",
      "pink",
      "brown",
      "grey",
    ];
    setCar({ ...car, color: arr[Math.floor(Math.random() * arr.length)] });
  }

  function changeModel() {
    const arr = [
      "Chevrolet",
      "Toyota",
      "Honda",
      "Land Rover",
      "Nissan",
      "Lexus",
      "Ford",
      "Porsche",
      "Fiat",
      "Bugatti",
      "Jeep",
      "Bentley",
      "Volkswagen",
      "Rolls Royce",
      "Volvo",
      "BMW",
      "Jaguar",
      "Tesla",
      "Audi",
      "Mercedes- Benz",
    ];

    setCar({
      ...car,
      model: arr[Math.floor(Math.random() * arr.length)],
    });
  }

  function capitalize(element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
  }

  const [name1,setName1] = useState('');

  const [fruits,setFruits] = useState(['Apple', 'Banana' , 'Orange' , 'Mango' , 'Pineapple' ])

 function handleDelete(item){
  let newFruits = fruits.filter( (e)=>{ return e != item } )
  setFruits(newFruits);
 }

  return (
    <div>
      <h1 style={{ backgroundColor: color, textAlign: "center" }}>UseState</h1>
      <p> {name} </p>
      <p>
        {" "}
        My favorite color is{" "}
        <span style={{ color: color }}>{capitalize(color)}</span>{" "}
      </p>
      <button onClick={changeName}>Change Name</button>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          setColor("orange");
        }}
      >
        Orange
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
      <p>
        This is a {capitalize(car.color)} {car.model}{" "}
      </p>
      <button onClick={changeColor}>Change color</button>
      <button onClick={changeModel}>Change Model</button>

      <hr />

      <h1>Name : {name1} </h1>
      <input type="text" placeholder="Enter here" onChange={(e)=>{ setName1(e.target.value) }} />

        <table>
          <thead>
            <th>Sl.No</th>
            <th>Fruit Name</th>
            <th>Action</th>
          </thead>
          <tbody>
            { fruits.map( (e , index)=>{
              return (
                <tr>
                  <td> { index + 1 } </td>
                  <td> { e } </td>
                  <td><button onClick={ ()=>{handleDelete(e)} } >Delete</button> </td>

                </tr>
              )
            } ) }
          </tbody>
        </table>
    </div>
  );
}
