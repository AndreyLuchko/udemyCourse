import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField ={
//     width: '300px'
//   }
//   return <input 
//           type="text" 
//           placeholder={holder} 
//           style={styledField}/>
// }

class Field extends React.Component {
  render() {
    const holder = 'Enter here';
      const styledField ={
        width: '300px'
      }
      return <input 
              type="text" 
              placeholder={holder} 
              style={styledField}/>
  }
}

function Btn() {
  // const text = 'Log in'; // можно текст
  
  // можно функцию
  const res = () => {
    return 'Log in'
  }

  // const p = <p>Log in</p> // можно react элемент

  // if(){} - нельзя
  // тернарный оператор можно

  return <button>{res()}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field />
      <Btn/>
    </div>
  );
}

export default App;
export {Header};
