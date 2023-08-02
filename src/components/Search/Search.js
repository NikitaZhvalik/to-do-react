import './Search.css';

const Search = (props) => {
    return (
            <input
                value={props.term}
                onChange={(e) => props.changeTerm(e.target.value)}
                type="text"
                placeholder="введите фразу для поиска"
                className="form-control me-2"
            />
    )
}

export default Search;