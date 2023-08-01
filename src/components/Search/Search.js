import './Search.css';

const Search = () => {
    return (
            <div className="search">
                <input
                    type="text"
                    placeholder="введите фразу для поиска"
                    className="form-control me-2"
                />
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary">Все</button>
                    <button type="button" className="btn btn-light">Активные</button>
                    <button type="button" className="btn btn-light">Выполненные</button>
                </div>
            </div>
    )
}

export default Search;