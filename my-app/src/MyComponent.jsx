import { useState } from 'react';

function MyComponent (){

    let [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = ()=>{
        const input = document.getElementById("input-name");
        setName(input.value)
    }
    const incrementAge = ()=>{
        setAge(age + 2);
    }
    const toggleEmployStatus = ()=>{
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
        <p>Enter your name</p>
        <input id="input-name" type="text" />
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        
        <p>Is employed: {isEmployed ? "Yes" : "No"} </p>
        <button onClick={toggleEmployStatus}>Toggle status</button>

        </div>
    );

}

export default MyComponent;