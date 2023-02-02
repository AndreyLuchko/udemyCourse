import { Component } from 'react';
import Image from 'react-bootstrap/Image'

import Header from '../Header/header';
import Navigation from '../Navigation/navigation';
import About from '../About/about';
import OurBest from '../OurBest/ourBest';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { img: 'images/Solimo.png', title: 'Solimo Coffee Beans 2 kg', name: '', price: 10.73, id: 1 },
        { img: 'images/Presto.png', title: 'Presto Coffee Beans 1 kg', name: '', price: 15.99, id: 2 },
        { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: '', price: 6.99, id: 3 }
      ]
    }
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Header />
        <About />
        <OurBest
          data={data} />





        <div className='footer'>
          <Navigation color='text-reset' src='images/logo-black.svg' />
          <Image
            className='d-block mx-auto mt-2 mb-3'
            src="images/Beans-logo-black.svg"
            alt="Beans logo"
            width="230"
            height="40" />
        </div>

      </div>
    );
  }
}

export default App;


// style={{'margin-top': '80px', 'display': 'inline-block', 'text-align': 'center'}}