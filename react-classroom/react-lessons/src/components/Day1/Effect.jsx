//useEffect()

//Effects are "side effects"
//They wait and listen for the state to change or "update". It will fire off an action once the state has been updated.
import { useState, useEffect } from "react";

const Effect = () => {
    const [color, setColor] = useState("");
    console.log(color, "line 9")

    //useEffect(callback function, [stateVariable])
    //          function that fires an action, array that handles the updating and moutning. 

    useEffect(() => {
        document.body.style.background = color;
    }, [color]);

    const handleColorUpdate = (e) =>{
        if(color === "") {
            setColor("Teal");
        } else if (color === "Teal") {
            setColor("Coral");
        } else if (color === "Coral") {
            setColor("Teal");
        } else {
            setColor("Sorry, no color change for you!")
        }
    };

    return(
        <div>
            <button onClick={handleColorUpdate}>{color !== "" ? color : "No Color"}</button>
        </div>
    )
};

export default Effect;