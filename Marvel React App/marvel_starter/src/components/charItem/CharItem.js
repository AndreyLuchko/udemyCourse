
const CharItem = (props) => {

    const { name, thumbnail } = props;

    return (
        <li className="char__item">
            <img src={thumbnail} alt={name} />
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharItem;