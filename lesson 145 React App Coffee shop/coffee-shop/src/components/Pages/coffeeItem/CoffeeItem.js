import { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navigation from '../../navigation/Navigation';
import Header from '../../header/Header';
import AboutBeans from '../../aboutBeans/AboutBeans';


import '../coffee/coffee.css'

class CoffeeItem extends Component {

    render() {
        const text1 = 'Country: Brasil',
              text2 = 'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              text3 = 'Price:  16.99$'
        return (
            <>
                <Header
                    minHeight='260'
                    title='Our Coffee'
                    mainBg='images/Coffee-bg.jpg' />
                <main>
                    <AboutBeans
                        src='images/Coffee-pack.png'
                        alt='Coffee pack'
                        text1={text1}
                        text2={text2} 
                        text3={text3}
                        titleLogo='About it' />
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

export default CoffeeItem;
