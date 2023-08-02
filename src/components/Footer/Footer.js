import {Component} from 'react';

import './Footer.css';

class Footer extends Component {

    state = {
        taskTitle: '',
    }

    onInputChange = (e) => {
        this.setState({
            taskTitle: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // проверка что в поле ввода добавления задачи есть текст
        if (this.state.taskTitle.trim()) {
            this.props.addItem(this.state.taskTitle);
        }
        // очищаем поле ввода после добавления задачи  
        this.setState({
            taskTitle: ''
        })
    }

    render() {
        return (
                <form onSubmit={this.onSubmit} className="footer">
                    <input value={this.state.taskTitle} onChange={this.onInputChange} type="text" placeholder="Что необходимо сделать" className="form-control me-2" />
                    <button type="submit" className="btn btn-primary">Добавить</button>
                </form>
        )
    }
}


export default Footer;