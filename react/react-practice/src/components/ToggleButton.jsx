import React, { useState } from 'react';

function ToggleButton() {
    // State to track if light is ON or OFF
    const [isOn, setIsOn] = useState(false);
    // State to hold the name from input
    const [name, setName] = useState('');

    const toggleLight = () => {
        // Flip the boolean value
        setIsOn((prevState) => !prevState);
    };
    // Function to update the name state when user types in input box
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            {/* Display current light status */}
            <h2>Light is {isOn ? 'ON' : 'OFF'}</h2>
            <button onClick={toggleLight}>Toggle Light</button>
            <br />
            <br />
            <input type="text" placeholder="Type your name" onChange={handleNameChange} />
            {/* Only show the greeting if name is not empty */}
            {name && <h3>Hello, {name}!</h3>}
        </div>
    );
}

export default ToggleButton;
