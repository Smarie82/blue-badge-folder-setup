// State is information that the component stores and keeps track of. State changs over time. 
// State can be primitive(Booleans, numbers, strings) or it can complex data types (arrays, objects, functions).

import { useState } from "react";

const State = () => {
    // const [stateVariable, setStateVariable] = useState(<initial state value>)
    //      //variable, //function (our way of changing our state)
    const [button, setButton] = useState("Hi there!");
    console.log(button);
    console.log(setButton);
    return (
        <div>
            <button onClick={(e) => setButton("Oh, hi!")}>Click ME!</button>
            <span>{button}</span>
            <h1>Hello Stephanie!</h1>
        </div>
    )
}

export default State;