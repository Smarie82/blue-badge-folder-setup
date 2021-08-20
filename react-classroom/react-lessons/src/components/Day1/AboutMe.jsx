const AboutMe = (props) => {
    return(
        <div>
            <h1 style={{color: "red"}}>My name is {props.name}.</h1>
            <p> I grew up in {props.origins}.</p>
            <ul style={{listStyleType: "none", textAlign: "left"}}> 
                <li>I've been to {props.placeOne}.</li>
                <li>I've been to {props.placeTwo}.</li>
                <li>I've been to {props.placeThree}.</li>
                </ul>
        </div>
    )    
};

export default AboutMe;