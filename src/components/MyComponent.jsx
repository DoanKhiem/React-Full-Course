import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState('Khiêm');
    const [age, setAge] = useState(20);
    const [isEmpolyed, setIsEmpolyed] = useState(false);

    const updateName = () => {
        setName('Khiêm Đoàn');
    }
    const updateAge = () => {
        setAge(age + 1);
    }
    const updateIsEmpolyed = () => {
        setIsEmpolyed(!isEmpolyed);
    }
  return <div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={updateAge}>Incremnt Age</button>

    <p>Is empolyed: {isEmpolyed ? "Yes" : "No"}</p>
    <button onClick={updateIsEmpolyed}>Toggle status</button>
  </div>;
}

export default MyComponent;