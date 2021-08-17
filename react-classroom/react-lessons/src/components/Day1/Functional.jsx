import { useState, useEffect } from "react";

const Functional = () => {
    const [number, setNumber] = useState(10);
    console.log(number);

    // const [reset, resetNumber] = useEffect("")
    // console.log(reset);

    const handleNumber = (e) => {
        if(number > 0) {
            setNumber(number -1);

        } else {
            setNumber("All the Monkey's fell off!");
        };
    }

    return ( 
        <div>
            <h1>{number} Little Monkeys jumping on the bed, one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!</h1>
            <button onClick={(handleNumber)}>
            click me!
            </button>

        </div>
    )
    

};

export default Functional;
