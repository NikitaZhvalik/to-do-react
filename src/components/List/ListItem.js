import React from 'react';

class ListItem extends React.Component {

    onImportantClick = () => {
		this.setState((state) => {
			return {
				important: !state.important,
			}
		})
    }

    onDoneClick = () => {
        this.setState((state) => {
            return {
                done: !state.done,
            }
        })
    }

	render() {
        let classNames = "todo-item";

        if (this.props.task.important) {
            classNames += ' important';
        }

        if (this.props.task.done) {
            classNames += ' done';
        }

		return (
            <li className={classNames}>
                <span onClick={this.onDoneClick} className="todo-item-text" >{this.props.task.title}</span>
                <div className="btn-group">
                    <button onClick={this.onImportantClick} role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                    <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
                </div>
            </li>);
	}
}

export default ListItem;