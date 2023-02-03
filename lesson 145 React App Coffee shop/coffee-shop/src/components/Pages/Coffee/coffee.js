import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Navigation from '../../Navigation/navigation';
import Header from '../../Header/header';
import AboutBeans from '../../AboutBeans/aboutBeans';


import './coffee.css'

class Coffee extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: [
    //             { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 1 },
    //             { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99, height: 260, id: 2 },
    //             { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 6.99, height: 260, id: 3 },
    //             { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 4 },
    //             { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 5 },
    //             { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 6 }
    //         ]
    //     }
    // }
    render() {
        // const { data } = this.state;
        return (
            <main>
                  <Header 
                    minHeight='260'
                    title='Our Coffee'
                    mainBg='images/Coffee-bg.jpg'
                    />
                <AboutBeans />
                <hr style={{width: 240, margin: '40px auto', borderTop: '2px solid #000000'}} />
                
                <footer>
                    <Navigation color='text-reset' src='images/logo-black.svg' />
                    <Image
                        className='d-block mx-auto mt-2 mb-3'
                        src="images/Beans-logo-black.svg"
                        alt="Beans logo"
                        width="230"
                        height="40" />
                </footer>
            </main>
        );
    }
}

export default Coffee;
