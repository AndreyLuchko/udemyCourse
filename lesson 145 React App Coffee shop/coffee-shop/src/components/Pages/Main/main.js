import { Component } from 'react';
import Image from 'react-bootstrap/Image'

import Header from '../../header/Header'
import Navigation from '../../navigation/Navigation';
import AboutUs from '../../aboutUs/AboutUs';
import OurBest from '../../ourBest/OurBest';
import HeaderBody from '../../headerBody/HeaderBody';

import './main.css';


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { img: 'images/Solimo.png', title: 'Solimo Coffee Beans 2 kg', name: '', price: 10.73, height: 240, id: 1 },
                { img: 'images/Presto.png', title: 'Presto Coffee Beans 1 kg', name: '', price: 15.99, height: 240, id: 2 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: '', price: 6.99, height: 240, id: 3 }
            ]
        }
    }
    render() {
        const { data } = this.state;
        return (
            <>
                <Header
                    minHeight='640'
                    title='Everything You Love About Coffee'
                    mainBg='images/Main-bg.jpg'
                    component={<HeaderBody />} />
                <main>
                    <AboutUs />
                    <OurBest
                        data={data} />
                </main>
                <footer>
                    <Navigation color='text-reset' src='images/logo-black.svg' />
                    <Image
                        className='d-block mx-auto mt-2 mb-3'
                        src="images/Beans-logo-black.svg"
                        alt="Beans logo"
                        width="230"
                        height="40" />
                </footer>
            </>
        );
    }
}
export default Main;
