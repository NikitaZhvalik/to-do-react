import React from 'react';

class ListItem extends React.Component {
    state = {
        important: false,
        done: false,
    }

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

        if (this.state.important) {
            classNames += ' important';
        }

        if (this.state.done) {
            classNames += ' done';
        }

		return (
            <li className={classNames}>
                <span onClick={this.onDoneClick} className="todo-item-text" >{this.props.el.title}</span>
                <div className="btn-group">
                    <button onClick={this.onImportantClick} role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                    <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
                </div>
            </li>);
	}
}

export default ListItem;