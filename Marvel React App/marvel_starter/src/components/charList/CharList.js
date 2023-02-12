import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import CharItem from '../charItem/CharItem';

import './charList.scss';


class CharList extends Component {
    state = {
        results: []
    }

    marvelService = new MarvelService();

    componentDidMount = () => {
        this.updateAllChar();
    }

    onCharsLoaded = (results) => {
        this.setState({ results })
    }

    updateAllChar = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
            .catch(this.onError)
    }

    render() {
        const {results} = this.state;
        const elements = results.map(item => {
            const {name, thumbnail} = item;
            return (
                <CharItem
                    key={name}
                    thumbnail={thumbnail}
                    name={name}/>
            )
        })

        return (
            <div className="char__list">
                <ul className="char__grid">
                   {elements}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

export default CharList;