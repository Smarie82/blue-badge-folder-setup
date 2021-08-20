const Header = (props) => {
    console.log(props);
    return(
        <div>
            <h1>This is the header, {props.name}.</h1>
            <p>I am {props.age}. I have so much money! {props.rich}</p>
            
        </div>
    )
};

export default Header;