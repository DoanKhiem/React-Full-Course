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

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  // update ARRAY of OBJECTS in state
  const [members, setMembers] = useState([]);
  const [memberYear, setMemberYear] = useState(new Date().getFullYear());
  const [memberName, setMemberName] = useState("");
  const [memberAge, setMemberAge] = useState(0);

  function handleAddMember() {
    const newMember = {year: memberYear, name: memberName, age: memberAge};
    setMembers((m) => [...m, newMember]);
    setMemberYear(new Date().getFullYear());
    setMemberName("");
    setMemberAge(0);
  }
  function handleRemoveMember(index) {
    setMembers(m => m.filter((_, i) => i !== index));
  }
  function handleMemberYearChange(event) {
    setMemberYear(event.target.value);
  }
  function handleMemberNameChange(event) {
    setMemberName(event.target.value);
  }
  function handleMemberAgeChange(event) {
    setMemberAge(event.target.value);
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Incremnt Age</button>

      <p>Is empolyed: {isEmpolyed ? "Yes" : "No"}</p>
      <button onClick={updateIsEmpolyed}>Toggle status</button>

      {/* update OBJECTS in state */}
      <div>
        <p>
          You favorite car is: {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>

      {/* update ARRAYS in state */}
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          ))}
          <input type="text" id="foodInput" placeholder="Enter food name" />
          <button onClick={handleAddFood}>Add Food</button>
        </ul>
      </div>

      {/* update ARRAY of OBJECTS in state */}
      <div>
        <h2>List of Member Objects</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index} onClick={() => handleRemoveMember(index)}>
              {member. year} {member.name} {member.age}
            </li>
          ))}
        </ul>

        <input type="text" value={memberYear} onChange={handleMemberYearChange} placeholder="enter member year"/>
        <br />
        <input type="text" value={memberName} onChange={handleMemberNameChange} placeholder="enter member name"/>
        <br />
        <input type="number" value={memberAge} onChange={handleMemberAgeChange} placeholder="enter member age"/>
        <br />
        <button onClick={handleAddMember}>Add member</button>
      </div>
    </div>
  );
}

export default MyComponent;
