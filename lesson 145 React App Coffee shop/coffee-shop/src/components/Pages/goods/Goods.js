import { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navigation from '../../navigation/Navigation';
import Header from '../../header/Header';
import AboutBeans from '../../aboutBeans/AboutBeans';
import CoffeeList from '../../coffeeList/coffeeList';

import '../coffee/coffee.css'

class Goods extends Component {
    constructor(props) {
        super(props)
        this.text1 = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
        this.text2 = 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.'
        this.state = {
            data: [
                { img: 'images/Presto.png', title: 'Presto Coffee Beans 1 kg', name: 'Brazil', price: 15.99, height: 260, id: 1 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99, height: 260, id: 2 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 6.99, height: 260, id: 3 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 4 },
                { img: 'images/Solimo.png', title: 'Solimo Coffee Beans 2 kg', name: 'Brazil', price: 10.73, height: 260, id: 5 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 6 }
            ]
        }
    }

    render() {
        const { data} = this.state;

        return (
            <>
                <Header
                    minHeight='260'
                    title='For your pleasure'
                    mainBg='images/Goods-bg.jpg' />
                <main>
                    <AboutBeans
                        src='images/Cup-coffee.png'
                        alt='Cup of coffee'
                        titleLogo='About our goods'
                        text1={this.text1}
                        text2={this.text2}
                        className='text-center' />
                    <hr style={{ width: 240, margin: '40px auto', borderTop: '2px solid #000000' }} />
                    <CoffeeList
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

export default Goods;
