import React from "react";
import ReactDOM from "react-dom";

// function Header(props) {
//   return <h1>Hello {props.username} </h1>;
// }

// function App() {
//   const people = ["John", "Jane", "Jerm"];

//   return (
//     <ul>
//       {people.map((person, i) => (
//         <Person key={i} person={person} />
//       ))}
//     </ul>
//   );
// }
// function Person(props) {
//   function handleClick(e) {
//     alert(props.person);
//     console.log(e);
//   }
//   return <li onClick={handleClick}>{props.person}</li>;
// }

function App() {
  function handleInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  return (
    <div>
      <input onChange={handleInputChange} />
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
