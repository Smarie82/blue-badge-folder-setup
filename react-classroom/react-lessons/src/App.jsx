import logo from './logo.svg';
import './App.css';
// import Header from "./components/Day1/Header";
// import AboutMe from "./components/Day1/AboutMe";
// import Footer from "./components/Day1/Footer";
// import State from "./components/Day1/State";
// import Effect from "./components/Day1/Effect";
// import Functional from "./components/Day1/Functional";
// import TenLittleMonkeys from "./components/Day1/TenLittleMonkeys";
import Example from "./components/Day3/Example";
import Userinput from "./components/Day3/Userinput";
import Challenge from "./components/Day3/Challenge"

function App() {
  // const name = "Stephanieeeeeee";
  // const age = 300;
  // const rich = "false!";
  // const origins = "Bloomington, Indiana";
  // const placeOne = "Canada";
  // const placeTwo = "California";
  // const placeThree = "Florida";
  //const year = 2021; or use {new Date().getFullYear()}

  return (
    <div className="App">
      <Example/>
      <Userinput/>
      <Challenge/>
    </div>
  );
}

//npm start to run the terminal
export default App;














{/* <h1> Welcome to React, {name}.</h1>
      <h2>We just modified our route App component.</h2>
      <Header name={name} age={age} rich={rich} />
      <AboutMe name={name} origins={origins} placeOne={placeOne} placeTwo={placeTwo} placeThree={placeThree}/>
      <Footer /> */}


  {/* <h3>Create the following</h3>
      <ul >
        <li>New component in the Day1 Challenge folder called AboutMe</li>
        <li>h1 tag with your name</li>
        <li>p tag with I grew up in city/state</li>
        <li>an unordered list with 3 places you have visited</li>
        <li>Use inline styling to make your h1 tag with your name the color red and make the list tags with no bullets and aligned to the left</li>
      </ul>
      <p>Export, import into the App.jsx and mount it</p> */}

{/* <h3>Create the following</h3>
  <ul>
     <li>Make a footer component import and mount it in the App.jsx component</li>
     <li>In the footer component make it have p tag with a Copyright EFA and the current year</li>
     <li>Bonus: Make that year dynamic by using a javascript method getFullYear Hint: Create a variable in the component that will store the getFullYear</li>
  </ul> */}