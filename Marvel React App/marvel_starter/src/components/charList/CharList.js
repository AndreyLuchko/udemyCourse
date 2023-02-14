import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import CharItem from '../charItem/CharItem';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount = () => {
        this.updateAllChar();
    }

    updateAllChar = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {

        const elements = arr.map(item => {
            const { id, name, thumbnail } = item;
            return (
                <CharItem
                    key={id}
                    thumbnail={thumbnail}
                    name={name}
                    onCharSelected={() => this.props.onCharSelected(id)} />
            )
        });

        return (
            <ul className="char__grid">
                {elements}
            </ul>
        )
    }

    render() {
        const { charList, loading, error } = this.state;
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;