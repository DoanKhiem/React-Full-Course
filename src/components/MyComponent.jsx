import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Khiêm");
  const [age, setAge] = useState(20);
  const [isEmpolyed, setIsEmpolyed] = useState(false);

  const updateName = () => {
    setName("Khiêm Đoàn");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const updateIsEmpolyed = () => {
    setIsEmpolyed(!isEmpolyed);
  };

  // update OBJECTS in state
  const [car, setCar] = useState({ year: 2020, make: "Ford", model: "F16" });
  function handleYearChange(event) {
    setCar({ ...car, year: event.target.value });
  }
  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value });
  }
  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value });
  }

  // update ARRAYS in state
  const [foods, setFoods] = useState(["apple", "banana", "cherry"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Incremnt Age</button>

      <p>Is empolyed: {isEmpolyed ? "Yes" : "No"}</p>
      <button onClick={updateIsEmpolyed}>Toggle status</button>

      <div>
        <p>
          You favorite car is: {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>

      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
          ))}
          <input type="text" id="foodInput" placeholder="Enter food name" />
          <button onClick={handleAddFood}>Add Food</button>
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;
