import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

// const text = 'Hello world!';

// const elem = (
//   <div>
//     <h2 className='text'>Текст: {text}</h2>
//     <input type='text' />
//     <label htmlFor=""></label>
//     <button tabIndex='0'>Click</button>
//   </div>
// ) 

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!');

// this show Babel when compile to js
// const elem = {
//   type: 'h2',
//   props: {
//     className: 'greetings',
//     children: 'Hello world!'
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


