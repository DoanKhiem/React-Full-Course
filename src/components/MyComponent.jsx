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

  const [car, setCar] = useState({ year: 2020, make: 'Ford', model: "F16" });
  function handleYearChange(event) {
    setCar({ ...car, year: event.target.value });
  }
  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value });
  }
  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value });
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
        <p>You favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>
    </div>
  );
}

export default MyComponent;
