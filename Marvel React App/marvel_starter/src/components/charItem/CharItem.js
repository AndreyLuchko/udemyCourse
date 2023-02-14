
const CharItem = (props) => {

    const { name, thumbnail, onCharSelected } = props;

    const path = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    const style = thumbnail === path ? { objectFit: 'unset' } : null;

    return (
        <li className="char__item" onClick={onCharSelected}>
            <img src={thumbnail} alt={name} style={style} />
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharItem;