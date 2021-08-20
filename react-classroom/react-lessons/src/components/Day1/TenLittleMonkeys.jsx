import {React, useState} from 'react'

const TenLittleMonkeys = () => {
    const [monkeyCount, setMonkeyCount] =useState(10);

    const totalMonkeys = 
    monkeyCount > 0
    ? `${monkeyCount} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!` : `All the Monkeys fell off the bed!`
    return (
        <div>
            <p>{totalMonkeys}</p>
            <button onClick={() => setMonkeyCount( monkeyCount -1)}>Lose A Monkey!</button>
            {monkeyCount <= 0 ? (
                <button onClick={() => setMonkeyCount(10)}>Reset</button>
            ) : null}
        </div>
    )
}

export default TenLittleMonkeys;
