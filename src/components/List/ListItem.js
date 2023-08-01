function ListItem(props) {
    return (
        <li className="todo-item">
            <span className="todo-item-text" >{props.el.title}</span>
            <div className="btn-group">
                <button role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
            </div>
        </li>);
}

export default ListItem;